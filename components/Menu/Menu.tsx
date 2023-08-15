'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MenuItem = {
  path: string;
  name: string;
};

const menuItems: MenuItem[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/login',
    name: 'Login',
  },
  {
    path: '/sign-up',
    name: 'Sign-up',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
  },
  {
    path: '/dashboard/setup',
    name: 'Dashboard (First Time Setup)',
  },
  {
    path: '/user-settings',
    name: 'User Settings',
  },
  {
    path: '/connectors',
    name: 'List Connectors',
  },
  {
    path: '/connectors/create',
    name: 'Create Connector',
  },
  {
    path: '/connectors/edit/test-connector',
    name: 'Edit/View Connector',
  },
  {
    path: '/mirrors',
    name: 'List Mirrors',
  },
  {
    path: '/mirrors/create',
    name: 'Create Mirror',
  },
  {
    path: '/mirrors/edit/test-mirror',
    name: 'Edit/View Mirror',
  },
  {
    path: '/cloud-setup',
    name: 'Cloud Setup',
  },
];

export function Menu() {
  const currentPath = usePathname();

  return (
    <nav role='menu'>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} role='menuitem'>
            <Link href={item.path}>
              {currentPath === item.path ? '>' : ''}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
