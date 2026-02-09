import type { AuthPopUp } from "@type/ui/auth";
import { BiX } from "react-icons/bi";

export function LogInPopUp({ onAction }: AuthPopUp) {
  return (
    <div className="glass-ui w-2/5 h-[400px] bg-black/30 fixed rounded-2xl z-10 backdrop-blur-xl">
      <div className="flex justify-center my-3 items-center">
        <span className="text-white text-center text-2xl">Вход</span>
        <button className="absolute left-5/6 text-white text-3xl"
          onClick={onAction}>
          <BiX />
        </button>
      </div>
      <div className="flex flex-col gap-5 m-10 justify-center items-center">
        <div className="w-2/4">
          <label className="text-white mx-2">
            Логин/Почта
          </label>
          <input className="glass-ui bg-white/10 px-5 py-3 rounded-lg
              placeholder:text-white/50 outline-0" placeholder="Почта/Логин" />
        </div>

        <div className="w-2/4">
          <label className="text-white mx-2">
            Пароль
          </label>
          <input className="glass-ui bg-white/10 px-5 py-3 rounded-lg
              placeholder:text-white/50 outline-0" placeholder="Пароль" />
        </div>

        <div className="w-2/4 flex flex-col gap-5">
          <button className="glass-ui bg-white p-2 rounded-xl">Войти</button>
          <button className="glass-ui bg-white p-2 rounded-xl">Создать аккаунт</button>
        </div>
      </div>
    </div>
  );
}