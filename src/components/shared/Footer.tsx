

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white uppercase">Otlob</h2>
          <p className="mt-2 text-sm">
            Your one-stop shop for the best products at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/returns" className="hover:text-white transition">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-white transition">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Payment */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <Link to="#" className="hover:text-blue-500 transition">
              <FaFacebook />
            </Link>
            <Link to="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </Link>
            <Link to="#" className="hover:text-blue-400 transition">
              <FaTwitter />
            </Link>
          </div>

          <h3 className="text-lg font-semibold text-white mt-5 mb-3">
            Payment Methods
          </h3>
          <div className="flex space-x-4 text-3xl">
            <FaCcVisa className="" />
            <FaCcMastercard className="" />
            <FaCcPaypal className="" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Otlob. All rights reserved.
      </div>
    </footer>
  );
}
