"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface AudioContextType {
  isPlaying: boolean;
  toggleAudio: () => void;
  playBlip: (freq?: number, type?: OscillatorType) => void;
}

const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  toggleAudio: () => {},
  playBlip: () => {},
});

export const useAudioAmbiance = () => useContext(AudioContext);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const oscSubRef = useRef<OscillatorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const initDrone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Master gain node
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainRef.current = masterGain;

      // Lowpass filter for deep cinematic warmth
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(140, ctx.currentTime);
      filter.Q.setValueAtTime(3.5, ctx.currentTime);
      filter.connect(masterGain);
      filterRef.current = filter;

      // Primary oscillator (54Hz deep sub-bass)
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(54, ctx.currentTime);
      osc1.connect(filter);
      osc1.start();
      oscRef.current = osc1;

      // Secondary oscillator (108Hz octave warmth with slow beating)
      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(108.4, ctx.currentTime);
      const osc2Gain = ctx.createGain();
      osc2Gain.gain.setValueAtTime(0.02, ctx.currentTime);
      osc2.connect(osc2Gain);
      osc2Gain.connect(filter);
      osc2.start();
      oscSubRef.current = osc2;

      setIsPlaying(true);
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  const stopDrone = () => {
    if (gainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainRef.current.gain.setValueAtTime(gainRef.current.gain.value, ctx.currentTime);
      gainRef.current.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.8);
      setTimeout(() => {
        try {
          oscRef.current?.stop();
          oscRef.current?.disconnect();
          oscSubRef.current?.stop();
          oscSubRef.current?.disconnect();
          oscRef.current = null;
          oscSubRef.current = null;
        } catch {
          // ignore
        }
        setIsPlaying(false);
      }, 900);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopDrone();
    } else {
      initDrone();
    }
  };

  const playBlip = (freq = 880, type: OscillatorType = "sine") => {
    if (!isPlaying || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const blipOsc = ctx.createOscillator();
      const blipGain = ctx.createGain();
      blipOsc.type = type;
      blipOsc.frequency.setValueAtTime(freq, ctx.currentTime);
      blipGain.gain.setValueAtTime(0.025, ctx.currentTime);
      blipGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
      blipOsc.connect(blipGain);
      blipGain.connect(ctx.destination);
      blipOsc.start();
      blipOsc.stop(ctx.currentTime + 0.13);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    return () => {
      try {
        oscRef.current?.stop();
        oscSubRef.current?.stop();
        audioCtxRef.current?.close();
      } catch {
        // ignore
      }
    };
  }, []);

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio, playBlip }}>
      {children}
    </AudioContext.Provider>
  );
}

export function AudioAmbianceButton() {
  const { isPlaying, toggleAudio } = useAudioAmbiance();

  return (
    <button
      onClick={toggleAudio}
      title={isPlaying ? "Mute Studio Acoustics" : "Enable Studio Acoustics (Sub-Drone)"}
      className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-white/[0.08] hover:border-[#00E5FF]/40 bg-[#0E1015]/80 hover:bg-[#151821] text-xs font-mono text-zinc-400 hover:text-white transition-all group"
    >
      {isPlaying ? (
        <>
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-[#00E5FF] animate-pulse h-3" />
            <span className="w-0.5 bg-[#00E5FF] animate-pulse h-1.5" style={{ animationDelay: "150ms" }} />
            <span className="w-0.5 bg-[#00E5FF] animate-pulse h-2.5" style={{ animationDelay: "300ms" }} />
          </div>
          <span className="text-[10px] text-[#00E5FF] tracking-widest hidden sm:inline">ACOUSTIC LIVE</span>
          <Volume2 className="w-3.5 h-3.5 text-[#00E5FF]" />
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
          <span className="text-[10px] tracking-widest text-zinc-500 group-hover:text-zinc-300 hidden sm:inline">AUDIO OFF</span>
        </>
      )}
    </button>
  );
}
