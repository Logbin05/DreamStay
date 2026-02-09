import type { RegisterPopUpProps } from "@type/ui/auth";
import { BiX } from "react-icons/bi";

export function RegisterPopUp({ onClose, onSubmit }: RegisterPopUpProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="
          glass relative w-[460px] max-w-[92%]
          rounded-3xl px-8 py-6 shadow-2xl
        "
      >

        <div className="relative mb-6 flex items-center justify-center">
          <h2 className="text-2xl font-medium text-white">
            Регистрация
          </h2>

          <button
            onClick={onClose}
            className="
              absolute right-0 text-3xl text-white/70
              transition hover:text-white hover:scale-110
            "
          >
            <BiX />
          </button>
        </div>


        <form
          className="flex flex-col gap-5"
          onSubmit={e => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);

            onSubmit?.({
              fullName: form.get("fullName") as string,
              email: (form.get("email") as string) || undefined,
              phone: (form.get("phone") as string) || undefined,
              login: form.get("login") as string,
              password: form.get("password") as string,
              confirmPassword: form.get("confirmPassword") as string,
            });
          }}
        >

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">
              ФИО
            </label>
            <input
              name="fullName"
              placeholder="Иванов Иван Иванович"
              required
              className="
                glass-ui px-4 py-3 rounded-xl
                text-white placeholder:text-white/50
                outline-none
                focus:ring-2 focus:ring-white/30
              "
            />
          </div>


          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">
              Почта
            </label>
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              className="
                glass-ui px-4 py-3 rounded-xl
                text-white placeholder:text-white/50
                outline-none
                focus:ring-2 focus:ring-white/30
              "
            />
          </div>


          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">
              Телефон
            </label>
            <input
              name="phone"
              placeholder="+7 (999) 123-45-67"
              className="
                glass-ui px-4 py-3 rounded-xl
                text-white placeholder:text-white/50
                outline-none
                focus:ring-2 focus:ring-white/30
              "
            />
          </div>


          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">
              Логин
            </label>
            <input
              name="login"
              placeholder="username"
              required
              className="
                glass-ui px-4 py-3 rounded-xl
                text-white placeholder:text-white/50
                outline-none
                focus:ring-2 focus:ring-white/30
              "
            />
          </div>


          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">
              Пароль
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="
                glass-ui px-4 py-3 rounded-xl
                text-white placeholder:text-white/50
                outline-none
                focus:ring-2 focus:ring-white/30
              "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">
              Повторите пароль
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              required
              className="
                glass-ui px-4 py-3 rounded-xl
                text-white placeholder:text-white/50
                outline-none
                focus:ring-2 focus:ring-white/30
              "
            />
          </div>

          <button
            type="submit"
            className="
              glass-ui mt-4 py-3 rounded-xl
              text-white font-medium
              transition hover:bg-white/20
              active:scale-[0.98]
            "
          >
            Создать аккаунт
          </button>
        </form>
      </div>
    </div>
  );
}