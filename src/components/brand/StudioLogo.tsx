import React from "react";
import Image from "next/image";
import Link from "next/link";

interface StudioLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  withLink?: boolean;
}

export function StudioLogo({ className = "", size = "md", withLink = true }: StudioLogoProps) {
  // Dimension ratios based on aspect ratio 412x227 (~1.815)
  const sizeMap = {
    sm: { width: 76, height: 42 },
    md: { width: 96, height: 53 },
    lg: { width: 130, height: 72 },
    xl: { width: 170, height: 94 },
  };

  const dim = sizeMap[size] || sizeMap.md;

  const content = (
    <div className={`inline-flex items-center group select-none ${className}`}>
      <Image
        src="/brand/logo.png"
        alt="36T Studios"
        width={dim.width}
        height={dim.height}
        className="h-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_16px_rgba(245,146,71,0.45)]"
        priority
      />
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
