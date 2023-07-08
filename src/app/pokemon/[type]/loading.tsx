import { Fragment } from "react";

export default async function loading() {
  const arr = [...Array(25)];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2 className="text-slate-200 text-xl">Loading</h2>
      <div className="grid grid-cols-3 gap-24">
        {arr.map((_, index) => (
          <Fragment key={index}>
            <div className="border-2 rounded w-80 h-80 animate-pulse">...</div>
          </Fragment>
        ))}
      </div>
    </main>
  );
}
