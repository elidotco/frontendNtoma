import Image from "next/image";
import Nav from "./components/Nav";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-0">
      <Nav />
      <ProductCard />
    </main>
  );
}
