import Image from "next/image";
import Link from "next/link";
import hero from "@/public/hero.svg";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-purple-50 to-purple-100">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            The best{" "}
            <span className="text-purple-600">URL Shortener</span> is here.
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-md">
            Shorten your long links into simple, shareable URLs. Fast, reliable, and completely free.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto">
            <Link
              href="/Shorten"
              className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg text-white font-semibold shadow-md text-center"
            >
              Get Started
            </Link>
            <Link
              href="/github"
              className="bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 transition px-6 py-3 rounded-lg font-semibold shadow-md text-center"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center mt-10 md:mt-0">
          <Image
            className="object-contain drop-shadow-xl w-full max-w-sm sm:max-w-md md:max-w-full"
            src={hero}
            alt="Hero Illustration"
            priority
          />
        </div>
      </section>
    </main>
  );
}
