import { hotels } from "@mock/data";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export function HomePage() {
  return (
    <section className="relative w-full min-h-screen px-6 py-16">
      <div className="mx-auto max-w-max-width">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold text-white tracking-wide">
            Лучшие отели
          </h1>
          <p className="mt-3 text-white/60 text-lg">
            Подборка самых комфортных и стильных мест для отдыха
          </p>
        </div>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
        >
          {hotels.map((h) => (
            <div
              key={h.id}
              className="
                glass
                group
              bg-black/10
                rounded-3xl
                overflow-hidden
                transition
                hover:scale-[1.02]
                hover:shadow-2xl
              "
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={h.image}
                  alt={h.name}
                  className="
                    w-full h-full object-cover
                    transition duration-500
                    group-hover:scale-110
                  "
                />

                <div className="grid grid-cols-2 gap-40">
                  <button
                    className="
                    absolute top-4 right-4
                  bg-black/40 backdrop-blur-md
                    px-3 py-1 rounded-full
                    text-sm text-white
                  "
                  >
                    <BiDotsHorizontalRounded />
                  </button>
                </div>
              </div>

              <div className="p-6 grid grid-rows-3 gap-3">
                <h3 className="text-xl font-medium text-white">{h.name}</h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {h.description}
                </p>

                <div className="flex flex-col relative">
                  <div
                    className="
                    absolute top-4 right-4
                  bg-black/40 backdrop-blur-md
                    px-3 py-1 rounded-full
                    text-sm text-white
                  "
                  >
                    ⭐ {h.rating}
                  </div>

                  <button
                    className="
                    mt-3
                    glass-ui
                  bg-black/50
                    w-3/4
                    py-2 rounded-xl
                    text-white text-sm font-medium
                    hover:bg-white/20
                    transition
                  "
                  >
                    {h.price}$
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
