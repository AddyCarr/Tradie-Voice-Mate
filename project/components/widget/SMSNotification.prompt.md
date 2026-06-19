The lead-summary SMS that slides in when the demo call ends — styled like a real phone notification.

```jsx
<SMSNotification
  business="Tall Timber Tree Services"
  fields={[
    { label: "Name", value: "John" },
    { label: "Job", value: "Red gum removal — leaning near house", strong: true },
    { label: "Urgency", value: "ASAP", accent: true },
    { label: "Postcode", value: "3144" },
    { label: "Callback", value: "Next Thursday ~5pm" },
    { label: "Phone", value: "0437 414 424" },
  ]}
/>
```

`strong` bolds a value; `accent` makes it Forest Green (use for the urgency flag).
