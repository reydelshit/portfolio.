import { useState } from 'react';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Skills from './pages/Skills';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');

    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };
  return (
    <main
      className={`h-fit w-full flex justify-center p-4 md:pt-8 font-family-main relative ${
        theme === 'dark' ? 'text-white' : 'text-main '
      } `}
    >
      <div className="fixed top-4 right-4 z-50">
        {theme === 'light' ? (
          <button className="cursor-pointer" onClick={toggleDarkMode} type="button">
            <span className="group inline-flex shrink-0 justify-center items-center size-9">
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </span>
          </button>
        ) : (
          <button className="cursor-pointer" type="button" onClick={toggleDarkMode}>
            <span className="group inline-flex shrink-0 justify-center items-center size-9">
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </span>
          </button>
        )}
      </div>

      {theme === 'light' ? (
        <div className="fixed top-0 -z-10 h-full w-full bg-white">
          <div className="fixed bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>
      ) : (
        <div className="fixed top-0 -z-10 h-full w-full bg-neutral-900">
          <div className="fixed bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.6)] opacity-60 blur-[80px]"></div>
        </div>
      )}
      <div className="max-w-[672px] mx-auto relative z-10">
        <Hero theme={theme} />
        <About />
        <Experience />
        <Education />
        <Skills theme={theme} />
        <Footer />
      </div>
    </main>
  );
}

export default App;
