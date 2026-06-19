import { ReactNode, CSSProperties } from "react";

/**
 * Surface container for content blocks and the pricing card.
 * @startingPoint section="Content" subtitle="Light, dark and pricing surfaces" viewport="700x360"
 */
export interface CardProps {
  children: ReactNode;
  /** `light` (white/mint), `dark` (ink on near-black), `pricing` (teal-bordered). */
  variant?: "light" | "dark" | "pricing";
  /** Add a soft drop shadow (used sparingly — brand is flat). */
  elevated?: boolean;
  style?: CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
