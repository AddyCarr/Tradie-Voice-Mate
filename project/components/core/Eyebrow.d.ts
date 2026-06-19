import { ReactNode, CSSProperties } from "react";

export interface EyebrowProps {
  children: ReactNode;
  /** Hint for dark sections (kept Forest Green by default). */
  onDark?: boolean;
  /** Override colour — e.g. white at 70% on the violet section. */
  color?: string;
  style?: CSSProperties;
}

/** Uppercase wide-tracked eyebrow label above a headline. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
