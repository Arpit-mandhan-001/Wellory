import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { name: 'Shop', href: '#shop' },
  { name: 'Our Story', href: '#story' },
  { name: 'Flavors', href: '#flavors' },
  { name: 'Ingredients', href: '#ingredients' },
  { name: 'Contact', href: '#contact' },
];

const TAGLINE = ['Natural', 'Clean', 'Active', 'ENARJ'];

// Outline icons (24x24, stroke based) since lucide-react no longer ships brand icons
const SOCIALS = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-12 space-y-8">
        {/* Top row: logo, navigation, social icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="#" aria-label="ENARJ home" className="block shrink-0">
            <Image
              src={"/image/glossylogo.png"}
              alt="ENARJ"
              width={"100"}
              height={"100"}
              className="w-32 sm:w-36 h-auto  select-none"
            />
          </Link>
{/* 
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/85 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav> */}

          <div className="flex items-center gap-5">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-white/90 hover:text-white hover:scale-110 transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row: copyright, divider line, tagline */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-[11px] text-zinc-400">
          <span className="shrink-0">© 2026 WELLORY. All rights reserved.</span>
          <span aria-hidden="true" className="hidden md:block flex-1 h-px bg-white/15" />
          <ul className="flex items-center gap-3 font-semibold tracking-[0.15em] uppercase text-zinc-300 shrink-0">
            {TAGLINE.map((word, idx) => (
              <li key={word} className="flex items-center gap-3">
                {idx > 0 && <span aria-hidden="true" className="text-zinc-500">/</span>}
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
