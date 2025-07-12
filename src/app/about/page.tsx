export const metadata = {
  title: 'О приложении',
  description: 'Статическая страница с информацией о приложении',
};

export default function About() {
  const buildISO = process.env.BUILD_TIME;
  const buildDate = buildISO ? new Date(buildISO) : null;

  const formattedBuild = buildDate
    ? `${buildDate.toLocaleDateString()} ${buildDate.toLocaleTimeString()}`
    : 'Дата сборки неизвестна';

  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-7xl mx-auto p-4 min-h-[calc(100vh-100px)] flex flex-col">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">О приложении</h1>

      <div className="flex flex-col gap-6 text-lg mb-6">
        <p>
          Это тестовое приложение для демонстрации работы с Next.js, написанное с использованием TypeScript и
          Tailwind CSS.
        </p>

        <p>
          Данные о товарах получены из фейкового API от Platzi —{' '}
          <a
            href="https://fakeapi.platzi.com/en/about/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline"
          >
            Platzi Fake Store API
          </a>
          .
        </p>

        <p>
          Страница сгенерирована: <span className="font-bold text-xl">{formattedBuild}</span>
          {buildISO && <span className="text-lg opacity-75"> ({buildISO})</span>}
        </p>
      </div>

      <div className="mt-auto text-base">&copy; {currentYear} Глызина Наталья</div>
    </div>
  );
}
