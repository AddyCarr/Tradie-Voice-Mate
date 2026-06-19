import { CSSProperties } from "react";

export interface SMSField {
  label: string;
  value: string;
  /** Bold the value (e.g. the job description). */
  strong?: boolean;
  /** Forest-green value (e.g. urgency flag). */
  accent?: boolean;
}

/**
 * Lead-summary SMS card — the payoff of the hero demo widget.
 * @startingPoint section="Widget" subtitle="Lead-summary SMS notification" viewport="700x360"
 */
export interface SMSNotificationProps {
  /** Business name shown in the notification header. */
  business?: string;
  fields: SMSField[];
  /** Timestamp label, e.g. "now". */
  time?: string;
  style?: CSSProperties;
}

export function SMSNotification(props: SMSNotificationProps): JSX.Element;
