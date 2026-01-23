import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl mb-8">Restaurant Landing Pages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        <Link
          href="/penny-crown"
          className="no-underline text-inherit bg-white/10 p-8 rounded-lg transition-transform hover:-translate-y-1"
        >
          <h2 className="text-2xl mb-2">Penny Crown</h2>
          <p>Classic Tavern Style</p>
        </Link>
        <Link
          href="/brioche-avitus"
          className="no-underline text-inherit bg-white/10 p-8 rounded-lg transition-transform hover:-translate-y-1"
        >
          <h2 className="text-2xl mb-2">Brioche by Avitus</h2>
          <p>French Card Layout</p>
        </Link>
        <Link
          href="/chefs-farmers"
          className="no-underline text-inherit bg-white/10 p-8 rounded-lg transition-transform hover:-translate-y-1"
        >
          <h2 className="text-2xl mb-2">Chefs & Farmers</h2>
          <p>Modern Grid Layout</p>
        </Link>
        <Link
          href="/lazy-s"
          className="no-underline text-inherit bg-white/10 p-8 rounded-lg transition-transform hover:-translate-y-1"
        >
          <h2 className="text-2xl mb-2">The Lazy S</h2>
          <p>Premium Minimal</p>
        </Link>
        <Link
          href="/order-store"
          className="no-underline text-inherit bg-white/10 p-8 rounded-lg transition-transform hover:-translate-y-1"
        >
          <h2 className="text-2xl mb-2">Fresh Eats</h2>
          <p>Interactive Cards</p>
        </Link>
        <Link
          href="/ember"
          className="no-underline text-inherit bg-white/10 p-8 rounded-lg transition-transform hover:-translate-y-1"
        >
          <h2 className="text-2xl mb-2">Émber</h2>
          <p>Fine Dining Elegance</p>
        </Link>
      </div>
    </div>
  );
}
