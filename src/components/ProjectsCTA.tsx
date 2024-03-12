export function ProjectsCTA() {
  return (
    <div>
      <div className="mx-auto  max-w-7xl py-12 sm:px-6 sm:py-12 lg:px-8">
        <div className="bg-white-100 relative isolate overflow-hidden dark:bg-zinc-900 px-6 py-24 text-center shadow-2xl dark:shadow-black sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl text-zinc-900 font-bold tracking-tight dark:text-white sm:text-4xl">
            View My Recent Projects
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 darl:text-gray-300">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-teal-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white hover:text-teal-500"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <svg
            viewBox="0 0 2024 2024"
            className="absolute left-1/2 top-1/2 -z-10 h-[100rem] w-[100rem] -translate-x-1/2 dark:bg-teal-500 bg-zinc-500 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.2"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#38b2ac" />
                <stop offset={1} stopColor="#38b2ac" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
