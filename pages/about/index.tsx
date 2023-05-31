import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";

export default function About() {
  return (
    <>
      <section className="card">
        <h1 className="title">About Page</h1>
        <p className={"description"}>
          Get started by editing{" "}
          <code className={"code"}>pages/about/index.jsx</code>
        </p>
      </section>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
