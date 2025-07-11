'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navigationLinks } from '@/utils/constants/navigationLinks';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex space-x-4">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:underline ${pathname === link.href ? 'font-extrabold underline' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
