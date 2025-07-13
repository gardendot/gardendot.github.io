// src/pages/About.jsx
import InfoPage from './InfoPage';

const content = [
  "Garden dot is a small home-grown plant store rooted in love for cyanery and nature.",
  "What started as a balcony garden bloomed into a community-driven plant shop to bring life to your homes.",
  "We curate and hand-pick each plant, ensuring they’re healthy, beautiful, and ready to thrive in your care.",
  "Our mission is to make plant parenting easy and joyful — whether you're a seasoned gardener or a curious beginner.",
  "Thank you for growing with us!"
];

export default function About() {
  return <InfoPage title="About Us" content={content} />;
}
