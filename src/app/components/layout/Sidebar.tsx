'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DashboardIcon,
  TablesIcon,
  BillingIcon,
  ProfileIcon,
  SignInIcon,
  SignUpIcon,
} from './icons';

type NavLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const mainLinks: NavLink[] = [
  { name: 'Dashboard', href: '/', icon: <DashboardIcon /> },
  { name: 'Tables', href: '/tables', icon: <TablesIcon /> },
  { name: 'Billing', href: '/billing', icon: <BillingIcon /> },
];

const accountLinks: NavLink[] = [
  { name: 'Profile', href: '/profile', icon: <ProfileIcon /> },
  { name: 'Sign In', href: '/sign-in', icon: <SignInIcon /> },
  { name: 'Sign Up', href: '/sign-up', icon: <SignUpIcon /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  const renderLink = (link: NavLink, isAccount = false) => {
    const isActive = pathname === link.href;
    const baseClasses =
      'group flex items-center gap-3 text-sm text-white py-3 px-4 rounded-2xl transition';
    const activeClasses = isActive
      ? 'bg-[#22304a]'
      : 'hover:bg-[#22304a]';

    const iconClasses = `w-8 h-8 flex items-center justify-center rounded-xl ${
      isActive ? 'bg-[#0075ff]' : 'bg-[#1A1F37]'
    } group-hover:bg-[#0075ff]`;

    return (
      <Link key={link.name} href={link.href} className={`${baseClasses} ${activeClasses}`}>
        <span className={iconClasses}>{link.icon}</span>
        <span>{link.name}</span>
      </Link>
    );
  };

  return (
    <aside className="w-64 p-4 rounded-2xl h-screen sticky top-4 hidden lg:block  ">
      <h2 className="text-sm font-bold text-center mb-6 text-white">
        VISION UI FREE
      </h2>

      {/* Main Navigation */}
      <nav className="space-y-1">
        {mainLinks.map((link) => renderLink(link))}
      </nav>

      {/* Account Section */}
      <div className="mt-6">
        <p className="px-4 text-xs font-semibold text-slate-400 uppercase">
          Account Pages
        </p>
        <div className="mt-2 space-y-1">
          {accountLinks.map((link) => renderLink(link, true))}
        </div>
      </div>

      {/* Help Card */}
      <div className="mt-6 relative rounded-2xl overflow-hidden h-60 bg-[#0b162b]">
        <img
          src="/help-bg.png"
          alt="Help"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-5 flex flex-col justify-between h-full">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-blue-600 text-white font-bold">
              ?
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-1">Need help?</h3>
            <p className="text-sm text-white text-opacity-70 mb-4">
              Please check our docs
            </p>
            <Link
              href="/documentation"
              className="block w-full py-2 rounded-xl text-center text-white font-semibold bg-gradient-to-br from-[#060b28]/74 to-[#0a0e23]/71"
            >
              DOCUMENTATION
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>
    </aside>
  );
}
