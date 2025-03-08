
import { useState } from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-5 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl lg:text-4xl uppercase font-bold text-sky-800">
          Otlob
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-sky-800 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-sky-800 transition-colors"
              >
                cart
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-sky-800 transition-colors"
              >
                Products
              </Link>
            </li>
          </ul>
          <Link
            to="/auth/login"
            className="bg-sky-700 hover:bg-sky-800 py-2.5 px-5 rounded-lg text-white font-semibold transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-black"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <ul className="px-5 py-4 space-y-4 text-gray-700 font-medium">
              <li>
                <Link
                  to="/"
                  className="block py-2 hover:text-sky-800"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block py-2 hover:text-sky-800"
                  onClick={toggleMenu}
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 hover:text-sky-800"
                  onClick={toggleMenu}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/auth/login"
                  className="block py-2.5 text-center bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
