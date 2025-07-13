// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-cyan-800 text-white px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Name */}
        <div>
          <h2 className="text-2xl font-bold mb-2">🌱 Garden dot</h2>
          <p className="text-sm text-cyan-100">Your friendly neighborhood nursery!</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/about" className="hover:text-cyan-300">About Us</Link></li>
            <li><Link to="/shipping" className="hover:text-cyan-300">Shipping Policy</Link></li>
            <li><Link to="/terms" className="hover:text-cyan-300">Terms & Conditions</Link></li>
            <li><Link to="/game" className="hover:text-cyan-300">Game 🌿</Link></li>
            
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-transform transform hover:scale-110"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-transform transform hover:scale-110"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-transform transform hover:scale-110"><FaTwitter /></a>
          </div>
        </div>

        {/* Google Map */}
        <div>
          <h3 className="font-semibold mb-2 flex items-center gap-2"><FaMapMarkerAlt /> Nursery Location</h3>
          <iframe
            title="Nursery Location"
            className="w-full h-32 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.008792823289!2d88.3639!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277af9e711b33%3A0xf87e2b9e43d2369b!2sKolkata%20Botanical%20Garden!5e0!3m2!1sen!2sin!4v1700000000000"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p className="text-center text-sm mt-8 text-cyan-200">© {new Date().getFullYear()} Garden dot. All rights reserved.</p>
    </footer>
  );
}
