import { Container } from "./container";
import { Footer } from "./footer";
import { Header } from "./header";

export function MainLayout() {
  return (
    <section className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Container />
      <Footer />
    </section>
  );
}
