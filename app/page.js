"use client";

import Nav from "./components/Nav";

import {
  AboutSection,
  Footer,
  HeroSection,
  ProductSection,
} from "./components/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-hidden w-full  flex-col items-center bg-white  pt-0 px-0">
      <Nav />
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
