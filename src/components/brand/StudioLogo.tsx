import React from "react";
import Link from "next/link";

interface StudioLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  withLink?: boolean;
}

export function StudioLogo({ className = "", size = "md", withLink = true }: StudioLogoProps) {
  // Height classes that maintain exact 1:1 circular aspect ratio & responsive scaling
  const sizeClasses = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-11 sm:h-12",
    xl: "h-14 sm:h-16",
  };

  const hClass = sizeClasses[size] || sizeClasses.md;

  const content = (
    <div className={`inline-flex items-center group select-none transition-transform duration-300 group-hover:scale-105 ${className}`}>
      <svg
        viewBox="0 0 240 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${hClass} w-auto max-w-full drop-shadow-[0_0_12px_rgba(245,146,71,0.25)] group-hover:drop-shadow-[0_0_22px_rgba(245,146,71,0.6)] transition-all duration-300`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="studioApricotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA665" />
            <stop offset="60%" stopColor="#F59247" />
            <stop offset="100%" stopColor="#DF731E" />
          </linearGradient>
        </defs>

        {/* 1. Perfect Geometric Circle (Radius 36, Center 38, 38) — never squished */}
        <circle cx="38" cy="38" r="36" fill="url(#studioApricotGrad)" />

        {/* 2. Bold "36T" centered optically inside the circle */}
        <text
          x="38"
          y="40"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#07080A"
          fontWeight="900"
          fontSize="26"
          letterSpacing="-0.04em"
          style={{ fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif" }}
        >
          36T
        </text>

        {/* 3. Wordmark "Studio" in white with signature apricot "s" */}
        <text
          x="88"
          y="40"
          dominantBaseline="central"
          fill="#FFFFFF"
          fontWeight="800"
          fontSize="37"
          letterSpacing="-0.03em"
          style={{ fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif" }}
        >
          Studio<tspan fill="#F59247">s</tspan>
        </text>
      </svg>
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" aria-label="36T Studios Home" className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
