export interface NavLink {
  label: string;
  href: string;
}

export const navigationLinks: NavLink[] = [
  { label: 'Главная', href: '/' },
  { label: 'О нас', href: '/about' },
];
