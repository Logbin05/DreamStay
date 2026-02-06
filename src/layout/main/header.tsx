import { useEffect, useRef, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="z-10 w-screen h-[120px] flex items-center justify-center bg-gray-700/30 backdrop-blur-xl">
      <div className="flex flex-row justify-between w-[95vw]">
        <span
          className="glass flex items-center
                       px-10 py-4 text-4xl text-white
                       rounded-2xl shadow-lg
                       transition hover:bg-white/20"
        >
          DreamStay
        </span>

        <ul className="flex items-center gap-4">
          <li ref={ref} className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="glass flex items-center gap-2
                       px-5 py-2 text-lg text-white
                       rounded-2xl shadow-lg
                       transition hover:bg-white/20"
            >
              Меню
              <svg
                className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`
              glass absolute right-0 mt-3 w-56 rounded-2xl
              shadow-2xl origin-top
              transition-all duration-200 ease-out
              ${
                open
                  ? "opacity-100 scale-100 bg-white/15"
                  : "pointer-events-none opacity-0 scale-95"
              }
            `}
            >
              <ul className="py-2 text-white text-sm">
                <li className="px-4 py-3 hover:bg-white/20 cursor-pointer rounded-xl mx-2">
                  Все отели
                </li>
                <li className="px-4 py-3 hover:bg-white/20 cursor-pointer rounded-xl mx-2">
                  Забронировать
                </li>
                <li className="px-4 py-3 hover:bg-white/20 cursor-pointer rounded-xl mx-2">
                  Отзовы
                </li>
              </ul>
            </div>
          </li>

          <li>
            <button
              className="glass flex items-center gap-2
                       px-5 py-2 text-lg text-white
                       rounded-2xl shadow-lg
                       transition hover:bg-white/20"
            >
              Войти
            </button>
          </li>

          <li>
            <button
              className="glass flex items-center gap-2
                       px-5 py-2 text-lg text-white
                       rounded-2xl shadow-lg
                       transition hover:bg-white/20"
            >
              Зарегистрироваться
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
