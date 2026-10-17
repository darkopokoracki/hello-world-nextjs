const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-24">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0" />
        <div className="blob absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-indigo-600/30 blur-3xl" />
        <div
          className="blob absolute -bottom-40 -right-24 h-[32rem] w-[32rem] rounded-full bg-fuchsia-600/25 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="blob absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      <section className="relative w-full max-w-3xl text-center">
        <span className="rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-widest text-white/70 uppercase backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live on Next.js
        </span>

        <h1
          className="rise mt-8 text-6xl font-semibold tracking-tight sm:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="shimmer-text">Hello, World</span>
          <span className="inline-block origin-[70%_70%] animate-[wave_2.4s_ease-in-out_infinite] pl-3">
            👋
          </span>
        </h1>

        <p
          className="rise mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          Every great website starts with a single page. This one is ours, and
          it&apos;s just getting started.
        </p>

        <div
          className="rise mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left shadow-2xl shadow-black/40 backdrop-blur-xl"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="mb-4 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <pre className="overflow-x-auto font-mono text-sm leading-7 text-white/80">
            <code>
              <span className="text-fuchsia-300">console</span>.
              <span className="text-indigo-300">log</span>(
              <span className="text-amber-200">&quot;Hello, World!&quot;</span>
              );
            </code>
          </pre>
        </div>

        <ul
          className="rise mt-10 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: "0.4s" }}
        >
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
