"use client";

import Image from "next/image";
import { useState } from "react";
import { IMAGE_ASSETS } from "@/lib/constants";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width: number;
  height: number;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = IMAGE_ASSETS.logo,
  width,
  height,
  className,
  fill,
  sizes,
  priority,
}: ImageWithFallbackProps) {
  const [hasErrored, setHasErrored] = useState(false);

  const currentSrc = hasErrored ? fallbackSrc : src;

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      fill={fill}
      sizes={sizes}
      priority={priority}
      onError={() => {
        if (!hasErrored) {
          setHasErrored(true);
        }
      }}
    />
  );
}
