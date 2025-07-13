// src/pages/Terms.jsx
import InfoPage from './InfoPage';

const content = [
  "Welcome to Garden dot. By accessing and using our website, you agree to comply with the following terms and conditions.",
  "All product listings, descriptions, and prices are subject to change without notice. We reserve the right to refuse service to anyone for any reason at any time.",
  "You may not use our products for any illegal or unauthorized purpose. Unauthorized reproduction of content is strictly prohibited.",
  "We make every effort to display our products as accurately as possible. However, colors and appearances may vary depending on your screen.",
  "Garden dot shall not be liable for any indirect, incidental, or consequential damages that result from the use of our site or products."
];

export default function Terms() {
  return <InfoPage title="Terms & Conditions" content={content} />;
}
