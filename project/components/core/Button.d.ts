import { ReactNode, CSSProperties } from "react";

/**
 * Pill-shaped CTA button in the Tradie Voice Mate brand.
 * @startingPoint section="Core" subtitle="Pill CTAs — primary, ghost, inverted" viewport="700x300"
 */
export interface ButtonProps {
  children: ReactNode;
  /** Visual style. Use `inverted` / `inverted-ghost` on teal sections. */
  variant?: "primary" | "secondary" | "inverted" | "inverted-ghost";
  size?: "sm" | "md" | "lg";
  /** Renders an <a>. Omit for a <button>. */
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  /** Append a "→" — used on "Start your trial →". */
  trailingArrow?: boolean;
  style?: CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
