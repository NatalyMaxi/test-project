import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" aria-label="Ссылка на главную страницу">
      <Image src="/ShoppingBag.svg" alt="Логотип Проекта" width={40} height={40} priority />
    </Link>
  );
};
