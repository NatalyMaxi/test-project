'use client';

import { useEffect } from 'react';

import { Button } from '@/components';
import { GENERAL_PAGE_ERROR, GENERAL_ERROR_LOG } from '@/utils/api/constants';

interface IErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: IErrorProps) {
  useEffect(() => {
    console.error(GENERAL_ERROR_LOG, error);
  }, [error]);

  return (
    <main className="max-w-7xl mx-auto p-4 min-h-[calc(100vh-100px)] flex flex-col">
      <div className="flex flex-col gap-6 text-center text-lg my-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-red-600">Произошла ошибка!</h2>
        <p className=" text-base sm:text-lg">{error.message ? error.message : GENERAL_PAGE_ERROR}</p>
        <Button
          onClick={reset}
          aria-label="Повторить попытку загрузки страницы"
          className="mx-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Повторить попытку
        </Button>
      </div>
    </main>
  );
}
