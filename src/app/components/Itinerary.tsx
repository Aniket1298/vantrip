import React from "react";

export default function Itinerary({ days }: { days: Array<{ day: number; title: string; points: string[] }> }) {
  return (
    <div className="rounded-lg border p-4 bg-white/60 dark:bg-[#071018]/60">
      <h4 className="text-lg font-semibold mb-2">Itinerary</h4>
      <div className="space-y-3">
        {days.map((d) => (
          <div key={d.day} className="">
            <div className="font-medium">Day {d.day}: {d.title}</div>
            <ul className="list-disc ml-5 text-sm text-neutral-600 dark:text-neutral-300">
              {d.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
