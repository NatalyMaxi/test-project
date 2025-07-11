import { Logo, Navigation } from '@/components';

export const Header = () => {
  return (
    <header className="bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
