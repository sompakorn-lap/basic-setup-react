import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Page,
});
function Page() {
  return (
    <section>
      <h1 className="text-xl text-teal-400">Home</h1>
    </section>
  );
}

export default Page;
