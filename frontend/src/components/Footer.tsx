import React from "react";
import { Link } from "react-router-dom"; // ✅ React Router instead of Next.js
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

type SocialIconProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialIcon({ href, label, children }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/20 transition hover:bg-white/10"
    >
      <span className="text-slate-100 transition group-hover:text-white">
        {children}
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#05325F] text-slate-100">
      {/* Top CTA block */}
      <div className="mx-auto max-w-5xl px-6 pt-14 pb-10 text-center">
        <p className="text-xs tracking-[0.2em] text-slate-300/90 uppercase">
          {"Business isn't complicated. Log banate hai."}
        </p>
        <h2 className="mt-3 text-pretty text-3xl md:text-4xl font-semibold text-white">
          We just un-complicate it.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-slate-300">
          Aapke paas vision hai, hum handle karenge chaos. Let&apos;s get to
          work together.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            to="/contact"
            className="btn-gradient px-6 py-2.5 text-sm font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-white/15" />
      </div>

      {/* Middle: logo, nav, socials */}
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo area */}
          <div className="flex items-center gap-3">
            <img
              src="src/assets/logo.png"
              alt="Next-Gen logo"
              width={100}
              height={100}
              className="rounded-full ring-1 ring-white/20"
            />
          </div>

          {/* Primary nav */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-5 text-sm text-slate-200">
              <li>
                <Link to="/about" className="hover:text-white/90">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/solution" className="hover:text-white/90">
                  Solution
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white/90">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white/90">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <SocialIcon href="#" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="Facebook">
              <Facebook className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="YouTube">
              <Youtube className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6 pb-1">
        <div className="border-t border-white/15" />
      </div>
      {/* Lower meta + disclaimers */}
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <p className="text-xs text-slate-300/90">
            © {new Date().getFullYear()} By Next-Gen Business Consultancy PVT.
            LTD.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300/90">
            <li>
              <Link to="/privacy" className="hover:text-white/90">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white/90">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="hover:text-white/90">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-5 text-[11px] leading-relaxed text-slate-300/80">
          Important Notice: All payments for our services must be made
          exclusively to Next-Gen Business Consultancy Pvt. Ltd. through our
          current account via NEFT, IMPS, or approved digital payment platforms.
          We do not accept payments through personal accounts or any other
          means.
        </p>
        <p className="mt-3 text-[11px] leading-relaxed text-slate-300/80">
          Disclaimer: Next-Gen Business Consultancy Pvt. Ltd. is a private
          consultancy firm providing professional guidance tailored to the needs
          of emerging enterprises. We operate independently and are not
          affiliated with or endorsed by any government, non-governmental
          agency, institution, organization, or department.
        </p>
      </div>

      {/* Bottom highlight strip */}
      <div className="bg-blue-800/70">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-center gap-6 py-3 text-xs md:text-sm text-slate-100">
            <span className="opacity-90">• Founder–First Approach</span>
            <span className="opacity-90">• Speed + Simplicity</span>
            <span className="opacity-90">• Expert-Led Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
