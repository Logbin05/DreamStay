import type { AuthPopUp } from "@type/ui/auth";
import { BiX } from "react-icons/bi";

export function LogInPopUp({ onAction, onRegister }: AuthPopUp) {
  return (
    <div
      className="
        fixed inset-0 z-50 top-[50vh]
        flex items-center justify-center
      "
    >
      <div
        className="
          glass
          relative w-[420px] max-w-[90%]
          rounded-3xl
          shadow-2xl
          px-8 py-6
        "
      >
        <div className="relative mb-8 flex items-center justify-center">
          <h2 className="text-2xl font-medium text-white">
            Вход
          </h2>

          <button
            onClick={onAction}
            className="
              absolute right-0
              text-white/70 text-3xl
              transition hover:text-white hover:scale-110
            "
          >
            <BiX />
          </button>
        </div>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-white/80 text-sm">
              Логин или почта
            </label>
            <input
              placeholder="Почта / логин"
              className="
                glass-ui
                w-full px-4 py-3
                rounded-xl
                text-white
                placeholder:text-white/50
                outline-none
                focus:ring-2 focus:ring-white/30
              "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-white/80 text-sm">
              Пароль
            </label>
            <input
              type="password"
              placeholder="Пароль"
              className="
                glass-ui
                w-full px-4 py-3
                rounded-xl
                text-white
                placeholder:text-white/50
                outline-none
                focus:ring-2 focus:ring-white/30
              "
            />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <button
              className="
                glass-ui
                py-3 rounded-xl
                text-white font-medium
                transition
                hover:bg-white/20
                active:scale-[0.98]
              "
            >
              Войти
            </button>

            <button
              onClick={onRegister}
              className="
                text-sm text-white/70
                transition hover:text-white
              "
            >
              Создать аккаунт
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
