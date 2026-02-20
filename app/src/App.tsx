import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Skills } from '@/sections/Skills';
import { Languages } from '@/sections/Languages';
import { Methodologies } from '@/sections/Methodologies';
import { Interests } from '@/sections/Interests';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Languages />
        <Methodologies />
        <Interests />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
