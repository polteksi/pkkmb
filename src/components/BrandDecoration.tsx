import React from 'react';

export type DecorationType =
  | 'sparkle'
  | 'starburst'
  | 'arc'
  | 'semicircle'
  | 'circle-dot'
  | 'badge-star'
  | 'cross'
  | 'square'
  | 'diamond'
  | 'squiggle';

interface BrandDecorationProps {
  type: DecorationType;
  className?: string;
  size?: number | string;
  color?: string;
  secondaryColor?: string;
}

export const BrandDecoration: React.FC<BrandDecorationProps> = ({
  type,
  className = '',
  size = 24,
  color = '#5B2BBE',
  secondaryColor = '#F2B632',
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  switch (type) {
    case 'sparkle':
      // 4-point editorial sparkle / twinkle star (small, clean geometric accent)
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 ${className}`}
          aria-hidden="true"
        >
          <path
            d="M16 2 C16 9.73 22.27 16 30 16 C22.27 16 16 22.27 16 30 C16 22.27 9.73 16 2 16 C9.73 16 16 9.73 16 2 Z"
            fill={color}
          />
        </svg>
      );

    case 'starburst':
      // 8-point retro orientation starburst
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 ${className}`}
          aria-hidden="true"
        >
          <path
            d="M18 0L22.5 13.5L36 18L22.5 22.5L18 36L13.5 22.5L0 18L13.5 13.5L18 0Z"
            fill={color}
          />
          <circle cx="18" cy="18" r="4" fill={secondaryColor} />
        </svg>
      );

    case 'square':
      // Minimal geometric square / badge
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 ${className}`}
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="4" fill={color} />
          <rect x="7" y="7" width="10" height="10" rx="2" fill={secondaryColor} />
        </svg>
      );

    case 'diamond':
      // Geometric rotated square / diamond accent
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 ${className}`}
          aria-hidden="true"
        >
          <rect x="12" y="2" width="14" height="14" rx="2.5" transform="rotate(45 12 2)" fill={color} />
        </svg>
      );

    case 'arc':
      // Playful geometric arc
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 40 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 ${className}`}
          aria-hidden="true"
        >
          <path
            d="M4 4 C12 22 28 22 36 4"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'semicircle':
      // Playful semicircle badge
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 ${className}`}
          aria-hidden="true"
        >
          <path d="M0 16 A16 16 0 0 1 32 16 Z" fill={color} />
        </svg>
      );

    case 'circle-dot':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 ${className}`}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2.5" strokeDasharray="3 3" />
          <circle cx="12" cy="12" r="3.5" fill={secondaryColor} />
        </svg>
      );

    case 'badge-star':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 ${className}`}
          aria-hidden="true"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill={color}
          />
        </svg>
      );

    case 'cross':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 ${className}`}
          aria-hidden="true"
        >
          <rect x="8" y="0" width="4" height="20" rx="1.5" fill={color} />
          <rect x="0" y="8" width="20" height="4" rx="1.5" fill={color} />
        </svg>
      );

    case 'squiggle':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 40 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 ${className}`}
          aria-hidden="true"
        >
          <path
            d="M2 7 Q 7 0, 12 7 T 22 7 T 32 7 T 38 7"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );

    default:
      return null;
  }
};
