import { Montserrat } from 'next/font/google';

const montserrat_init = Montserrat({
  subsets: ['cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const montserrat = montserrat_init.variable;
