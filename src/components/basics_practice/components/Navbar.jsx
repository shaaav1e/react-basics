import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Books", "UserProfile", "Key Info"];

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="navbar-container flex justify-between items-center p-4 color-3 relative">
      {/* Logo */}
      <h1 className="font-bold text-2xl">REACT.</h1>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-1 justify-center items-center gap-10">
        <ul className="flex gap-10 font-bold">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Login Button */}
      <button className="hidden lg:block rounded-md text-zinc-700 bg-white font-bold px-6 py-2 border">
        Login
      </button>

      {/* Mobile Menu Button */}
      <div className="lg:hidden z-50">
        <button
          className="text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <i className="ri-close-large-line"></i>
          ) : (
            <i className="ri-menu-4-fill"></i>
          )}
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Dropdown Menu */}
      <ul
        className={`fixed top-1/2 left-1/2 w-64 h-72 bg-white shadow-lg flex flex-col items-center gap-6  pt-10 font-bold transition-transform duration-300 z-50 rounded-lg ${
          isOpen
            ? "translate-x-[-50%] translate-y-[-50%] opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
