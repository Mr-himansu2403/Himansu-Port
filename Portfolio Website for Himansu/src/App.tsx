import { Navigation } from './components/portfolio/Navigation';
import { Hero } from './components/portfolio/Hero';
import { About } from './components/portfolio/About';
import { Skills } from './components/portfolio/Skills';
import { Experience } from './components/portfolio/Experience';
import { Projects } from './components/portfolio/Projects';
import { Certificates } from './components/portfolio/Certificates';
import { Contact } from './components/portfolio/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2025 Himansu Nayak. All rights reserved.
            </p>
            <p className="text-gray-400">
              Designed & Developed by Himansu
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
