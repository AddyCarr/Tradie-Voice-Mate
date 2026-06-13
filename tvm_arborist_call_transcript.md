# Timestamped Call Transcript

## Digital Voice Receptionist — Arborist Full Example

**File:** `Digital Voice Receptionist - Arborist Full Example.mp3` **Duration:** 1:09.88 **Transcription method:** Automated (PocketSphinx) \+ silence detection, reconstructed against known agent script **Last verified:** June 2026

---

## Transcript

| Timestamp | Speaker | Line |
| :---- | :---- | :---- |
| `0:01` | **AGENT** | "Hi, you've reached Tall Timber Tree Services on a recorded line. I'm their digital receptionist — the team's busy now but I'll take your details to pass on. Can I grab your first name to start?" |
| `0:11` | **CALLER** | "Yeah, my name’s john, I’m just calling because I've got a red gum that’s leaning over the house and I need it taken down ASAP." |
| `0:17` | **AGENT** | "Thanks John. So that’s a red gum leaning over the house, and you need it removed ASAP. What's the postcode for the job?" |
| `0:24` | **CALLER** | "`Yeah, 3144`" |
| `0:25` | **AGENT** | "Great, that's 3144 — is that right?" |
| `0:27` | **CALLER** | "Yeah." |
| `0:29` | **AGENT** | "Is the number you're calling on the best one to reach you on?" |
| `0:32` | **CALLER** | "Nah actually, give me a buzz back on 0437 414 424 ." |
| `0:38` | **AGENT** | "Perfect, I've got 0437 414 424 — is that correct?" |
| `0:42` | **CALLER** | "Yep." |
| `0:44` | **AGENT** | "Thanks John. Is there a preferred time for the team to give you a call back?" |
| `0:48` | **CALLER** | "`Give me a buzz back next thursday after about 5 pm would be fantastic.`" |
| `0:52` | **AGENT** | "No worries — I've got you down for a `removal of a red gum` leaning near the house in 3144, and we’ll call you next thursday around 5pm on 0437 414 424 — sound good?" |
| `1:03` | **CALLER** | "Yeah perfect." |
| `1:05` | **AGENT** | "Beauty — the team will be in touch `nextThursday` around `5pm`. Have a good one." |
| `1:09` | — | *Call ends* |

---

## What was captured (for SMS summary widget)

These are the data fields the agent extracted during the call. Fill in verified values and use these verbatim in the SMS notification that appears at the end of the hero widget animation.

📋  New lead — \[BUSINESS NAME\]

Name:       John \[VERIFY surname if given\]

Job:        \[VERIFY: e.g. "Large red gum removal — leaning near house"\]

Urgency:    ASAP

Postcode:   \[VERIFY: 4xxx\]

Callback:   \[VERIFY: Next Thursday \~5pm\]

Phone:      \[VERIFY: 0437 xxx xxx\]

---

## Widget sync guide

This table maps audio timestamps to widget animation phases for the developer building the hero section.

| Time range | Widget phase | What to show |
| :---- | :---- | :---- |
| `0:00 – 0:01` | Idle → connecting | Waveform pulses, call connecting indicator activates |
| `0:01 – 0:10` | Phase 1 — Agent greeting | Waveform animates to voice; agent greeting transcript line appears |
| `0:11 – 0:16` | Phase 2 — Caller intro | Caller bubble appears: name \+ job volunteered |
| `0:17 – 0:27` | Phase 2 — Agent acknowledges | Agent confirms job type; asks postcode; caller responds; agent confirms postcode |
| `0:29 – 0:43` | Phase 3 — Data capture | Callback number field populates as caller provides number; agent reads it back |
| `0:44 – 0:51` | Phase 3 — Callback time | Callback availability field populates as caller responds |
| `0:52 – 1:04` | Phase 4 — Summary | Agent delivers summary; "Sound good?" pause |
| `1:05 – 1:09` | Phase 4 — Call ends | Waveform drops; call timer stops; "Call ended" state |
| `1:09 + 0.8s` | Phase 4 — SMS arrives | Phone notification slides in with lead summary; CRM record optionally populates |

---

## Urgency flag

The caller explicitly said "ASAP" at approximately `0:11`. The agent's urgency field should be set to **urgent** in the captured data display.

---

*Transcript prepared for Tradie Voice Mate hero widget development.* *Verify `[VERIFY]` sections against source audio before dev build begins.*  
