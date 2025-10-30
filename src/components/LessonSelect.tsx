"use client";

import { useRouter, useSearchParams } from "next/navigation";

const lessons = [
  { id: "restoration", label: "Restauración" },
  { id: "plan-of-salvation", label: "Plan de Salvación" },
  { id: "gospel-of-jesus-christ", label: "Evangelio de Jesucristo" },
  { id: "commandments", label: "Mandamientos" },
  { id: "laws-and-ordinances", label: "Leyes y Ordenanzas" },
];

export default function LessonSelect() {
  const router = useRouter();
  const params = useSearchParams();
  const lang = params.get("lang") || "es";

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    router.push(`/l/${id}?lang=${lang}`);
  };

  return (
    <select
      aria-label="Ir a lección"
      className="rounded-lg border border-black/10 bg-white/80 px-2 py-1 text-xs shadow-soft"
      onChange={onChange}
      defaultValue=""
    >
      <option value="" disabled>
        Ir a lección…
      </option>
      {lessons.map((l) => (
        <option key={l.id} value={l.id}>
          {l.label}
        </option>
      ))}
    </select>
  );
}


