import { ReactNode, CSSProperties } from "react";

export interface TickProps {
  children: ReactNode;
  /** Use lighter label colour on dark backgrounds. */
  onDark?: boolean;
  style?: CSSProperties;
}

/** Forest-green check mark + label, for trust rows and pricing inclusions. */
export function Tick(props: TickProps): JSX.Element;
