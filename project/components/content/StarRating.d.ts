import { CSSProperties } from "react";

export interface StarRatingProps {
  /** Filled stars (0–5). Default 5. */
  rating?: number;
  /** Pixel size of each star. Default 16. */
  size?: number;
  /** Star colour. Default white (for the teal social-proof strip). */
  color?: string;
  style?: CSSProperties;
}

/** Five-star rating glyph row for testimonials. */
export function StarRating(props: StarRatingProps): JSX.Element;
