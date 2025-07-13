// src/pages/Shipping.jsx
import InfoPage from './InfoPage';

const content = [
  "At Garden dot, we aim to ship your cyan friends with love and care.",
  "Orders are processed within 2–3 business days. Delivery timelines may vary based on your location and weather conditions.",
  "Shipping is available across India. For remote areas, delivery may take longer or incur additional charges.",
  "We take great care in packaging plants securely, but if your order arrives damaged, please contact us within 48 hours with photos.",
  "Note: Live plant deliveries are non-returnable unless damaged on arrival."
];

export default function Shipping() {
  return <InfoPage title="Shipping Policy" content={content} />;
}
