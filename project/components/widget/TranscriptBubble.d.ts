import { ReactNode, CSSProperties } from "react";

export interface TranscriptBubbleProps {
  /** `caller` = left dark bubble, `agent` = right teal bubble. */
  speaker?: "caller" | "agent";
  children: ReactNode;
  style?: CSSProperties;
}

/** One line of the live-call transcript inside the demo widget. */
export function TranscriptBubble(props: TranscriptBubbleProps): JSX.Element;
