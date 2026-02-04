export function Header() {
  return (
    <header className="z-10 bg-gray-700/30 w-screen h-[120px] flex flex-row gap-5 justify-around items-center">
      <div className="">
        <span className="text-white text-4xl">DreamStay</span>
      </div>
      <ul className="flex flex-row gap-10">
        <li>
          <button className="backdrop-blur-2xl text-lg px-5 py-2 border-gray-800/30 border-2 text-white rounded-2xl transition-all active:scale-120">
            Войти
          </button>
        </li>
        <li>
          <button className="backdrop-blur-2xl text-lg px-5 py-2 border-gray-800/30 border-2 text-white rounded-2xl transition-all active:scale-120">
            Зарегистрироваться
          </button>
        </li>
      </ul>
    </header>
  );
}
