import { ReactNode, CSSProperties } from "react";

/**
 * "Large Number Column" — the Features-section layout.
 * @startingPoint section="Content" subtitle="Oversized numeral feature column" viewport="700x360"
 */
export interface FeatureColumnProps {
  /** Oversized numeral, e.g. "01". */
  number: string;
  /** Feature headline (rendered in Staatliches). */
  title: ReactNode;
  children: ReactNode;
  /** Default true — light text for near-black sections. */
  onDark?: boolean;
  /** Show the left hairline divider. */
  divider?: boolean;
  style?: CSSProperties;
}

export function FeatureColumn(props: FeatureColumnProps): JSX.Element;
