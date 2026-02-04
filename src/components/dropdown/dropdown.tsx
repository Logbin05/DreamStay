import { useEffect, useRef, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface GlassDropdownProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
}

export function GlassDropdown({
  options,
  value,
  onChange,
}: GlassDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

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
    <div ref={ref} className="relative inline-block w-56 text-left">
      <button
        onClick={() => setOpen((v) => !v)}
        className="glass flex w-full items-center justify-between
                   rounded-xl px-4 py-2
                   text-sm text-white shadow-lg
                   transition hover:bg-white/20"
      >
        {selected?.label ?? "Select option"}
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
          glass absolute z-50 mt-2 w-full rounded-xl shadow-2xl
          origin-top transition-all duration-200 ease-out
          ${
            open
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }
        `}
      >
        <ul className="py-2 text-sm text-white">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange?.(opt.value);
                setOpen(false);
              }}
              className="mx-1 cursor-pointer rounded-lg px-4 py-2
                         hover:bg-white/20 transition"
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
