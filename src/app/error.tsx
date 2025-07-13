'use client';

import { useEffect } from 'react';

import { ErrorPage } from '@/components';
import { GENERAL_ERROR_LOG } from '@/utils/api/constants';

interface IErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: IErrorProps) {
  useEffect(() => {
    console.error(GENERAL_ERROR_LOG, error);
  }, [error]);

  return <ErrorPage errorMessage={error.message} onRetry={reset} />;
}
