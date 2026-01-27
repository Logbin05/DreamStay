export function Header() {
  return (
    <header className="w-screen bg-primary-color h-[120px] flex flex-row gap-5 justify-around items-center shadow-accent-color shadow-2xl">
      <div className="">
        <span className="text-accent-color text-4xl">DreamStay</span>
        <span className="text-text-muted text-2xl font-medium"> − </span>
        <span className="text-accent-active text-xl">
          Место, где отдыхают мечты
        </span>
      </div>
      <ul className="flex flex-row gap-10">
        <li>
          <button className="bg-secondary-color text-lg p-2 text-text-color transition-all rounded-sm active:rounded-xl">
            Войти
          </button>
        </li>
        <li>
          <button className="bg-secondary-color text-lg p-2 text-text-color transition-all rounded-sm active:rounded-xl">
            Зарегистрироваться
          </button>
        </li>
      </ul>
    </header>
  );
}
