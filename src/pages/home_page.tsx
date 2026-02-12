import { hotels } from "@mock/data";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export function HomePage() {
  return (
    <section className="relative w-full min-h-screen px-6 py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Лучшие отели
          </h1>
          <p className="mt-4 text-white/60 text-lg">
            Подборка самых комфортных и стильных мест для отдыха
          </p>
        </div>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
        "
        >
          {hotels.map((h) => (
            <div
              key={h.id}
              className="
                group
                relative
                rounded-3xl
                overflow-hidden
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]
              "
            >
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={h.image}
                  alt={h.name}
                  className="
                    w-full h-full object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                  absolute inset-0
                  bg-linear-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                "
                />

                <div
                  className="
                  absolute top-4 left-4
                  bg-white/15 backdrop-blur-md
                  px-3 py-1 rounded-full
                  text-sm text-white
                  border border-white/20
                "
                >
                  ⭐ {h.rating}
                </div>

                <button
                  className="
                    absolute top-4 right-4
                    bg-white/15 backdrop-blur-md
                    p-2 rounded-full
                    text-white
                    border border-white/20
                    hover:bg-white/25
                    transition
                  "
                >
                  <BiDotsHorizontalRounded size={18} />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{h.name}</h3>

                  <p
                    className="
                    mt-2 text-sm text-white/60
                    line-clamp-2
                  "
                  >
                    {h.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col">
                    <span className="text-white text-lg font-semibold">
                      ${h.price}
                    </span>
                    <span className="text-white/50 text-xs">за ночь</span>
                  </div>

                  <button
                    className="
                      px-4 py-2 rounded-xl
                      bg-white/15
                      text-white text-sm
                      border border-white/20
                      backdrop-blur-md
                      hover:bg-white/25
                      transition
                    "
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
