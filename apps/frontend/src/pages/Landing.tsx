import { A } from "@solidjs/router";
import { MainLayout } from "@/layouts/main-layout";

export function Landing() {
  return (
    <>
      <MainLayout>
        <div class="container py-6 flex flex-col items-center justify-center gap-4 px-4 sm:gap-10 md:gap-16 md:px-6 lg:gap-20">
          <div class="space-y-2 text-center">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              r3-vmp stack
            </h1>
            <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The fastest way to build modern web applications.
            </p>
          </div>
          <div class="flex gap-4">
            <A
              class="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/signin"
            >
              Sign In
            </A>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
