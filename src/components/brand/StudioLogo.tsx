import React from "react";
import Image from "next/image";
import Link from "next/link";

interface StudioLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withLink?: boolean;
}

export function StudioLogo({ className = "", size = "md", withLink = true }: StudioLogoProps) {
  // Dimensions based on size
  const circleSizes = {
    sm: "w-7 h-7 text-[11px]",
    md: "w-9 h-9 text-[13px]",
    lg: "w-12 h-12 text-[17px]",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const content = (
    <div className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Signature warm apricot-orange disc */}
      <div 
        className={`${circleSizes[size]} rounded-full bg-[#F59247] text-black font-black flex items-center justify-center tracking-tighter shrink-0 shadow-[0_0_16px_rgba(245,146,71,0.35)] group-hover:shadow-[0_0_24px_rgba(245,146,71,0.6)] group-hover:scale-105 transition-all duration-300`}
        style={{
          background: "linear-gradient(135deg, #FF9F59 0%, #F59247 60%, #E07829 100%)",
        }}
      >
        <span className="translate-y-[-0.5px]">36T</span>
      </div>

      {/* Studio Wordmark */}
      <span className={`${textSizes[size]} font-bold tracking-tight text-white group-hover:text-white/95 transition-colors`}>
        Studio<span className="text-[#F59247]">s</span>
      </span>
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" aria-label="36T Studios Home">
        {content}
      </Link>
    );
  }

  return content;
}
