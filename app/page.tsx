import { Hero } from "./componenets/Hero";
import { About } from "./componenets/About";
import { Projects } from "./componenets/Projects";
import { Contact } from "./componenets/Contact";



export default function Home() {
  return (
    <main>
      <Hero/>
      <About />
      <Projects />

      <Contact />
    </main>
  )
}