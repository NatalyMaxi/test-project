import { Button } from '@/components';
import { GENERAL_PAGE_ERROR } from '@/utils/api/constants';

interface IErrorPageProps {
  errorMessage?: string;
  onRetry: () => void;
}

export const ErrorPage = ({ errorMessage, onRetry }: IErrorPageProps) => {
  return (
    <main className="h-full flex flex-col">
      <div className="flex flex-col gap-6 text-center text-lg my-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-red-600">Произошла ошибка!</h2>
        <p className="text-base sm:text-lg">{errorMessage ?? GENERAL_PAGE_ERROR}</p>
        <Button
          onClick={onRetry}
          aria-label="Повторить попытку загрузки страницы"
          className="mx-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 py-2 px-4"
        >
          Повторить попытку
        </Button>
      </div>
    </main>
  );
};
