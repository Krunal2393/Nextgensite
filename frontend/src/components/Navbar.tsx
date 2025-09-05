"use client";
import React from "react";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "/solution", label: "Solution" },
  { href: "/contact", label: "Contact" },
];

export const ResponsiveNavbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);

    const onTouchOrClick = (e: MouseEvent | TouchEvent) => {
      const menu = document.getElementById("mobile-menu");
      if (open && menu && !menu.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onTouchOrClick);
    document.addEventListener("touchstart", onTouchOrClick);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("mousedown", onTouchOrClick);
      document.removeEventListener("touchstart", onTouchOrClick);
    };
  }, [open]);

  // Prevent body scroll when open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full fixed top-0 bg-transparent backdrop-blur-md z-50">
      <div className="relative max-w-6xl mx-4  sm:mx-8 lg:mx-52 flex items-center justify-between py-4 ">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Next-Gen Logo" className="h-8" />
        </a>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center border-1 rounded-xl p-1 gap-1 text-white bg-[#264C9280]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#more"
              className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm"
            >
              <span>More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </a>
          </nav>

          {/* Desktop CTA */}
          <button className="hidden md:inline-block border-1 bg-[#264C9280] text-white rounded-lg px-5 py-3 text-sm">
            Let&apos;s Transform
          </button>

          {/* Mobile toggle (shown below md) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 text-white bg-[#264C9280] border-1 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger / X */}
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${
                open ? "rotate-90" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <g>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </g>
              ) : (
                <g>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </g>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile panel (only < md) */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 top-full mt-2 px-3 sm:px-8 lg:px-0`}
        >
          <div
            className={`origin-top rounded-xl border-1 bg-[#264C9280] text-white backdrop-blur-md shadow-lg transition-all duration-200 ${
              open
                ? "opacity-100 translate-y-0 scale-100"
                : "pointer-events-none opacity-0 -translate-y-2 scale-95"
            }`}
          >
            <nav className="flex flex-col p-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#more"
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm flex items-center justify-between"
              >
                <span>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                  />
                </svg>
              </a>
            </nav>

            <div className="px-2 pb-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center border-1 bg-[#264C9280] text-white rounded-lg px-5 py-3 text-sm hover:bg-primary-600 transition-colors"
              >
                Let&apos;s Transform
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResponsiveNavbar;
