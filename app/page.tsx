import Hero from "./Hero";
import { Poppins } from 'next/font/google'


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})
export default function Home() {
  return (
    <main className={`${"w-full min-h-screen flex flex-col items-center"} ${poppins.className}`}>
      <Hero />
    </main>
  );
}
