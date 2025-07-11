import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/ShoppingBag.svg" alt="Логотип Моего Проекта" width={40} height={40} priority />
    </Link>
  );
};
