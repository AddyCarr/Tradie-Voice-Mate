import { ReactNode, CSSProperties } from "react";

export interface TagProps {
  children: ReactNode;
  /** `data` = demo-widget captured field, `solid` = teal, `outline` = hairline, `urgent` = violet. */
  variant?: "data" | "solid" | "outline" | "urgent";
  /** Optional leading icon node. */
  icon?: ReactNode;
  style?: CSSProperties;
}

/** Small pill — captured-data chips, category tags, urgency flags. */
export function Tag(props: TagProps): JSX.Element;
