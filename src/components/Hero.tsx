import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>

      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-75"></div>
            <img
              src="/screenshot_2025-09-03_at_2.59.28_pm.png"
              alt="Ajay Ramesh Wayase"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-slate-900 shadow-2xl"
            />
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Ajay Ramesh Wayase
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>

        <p className="text-xl sm:text-2xl text-gray-300 mb-4">Software Engineer</p>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Full-stack developer specializing in scalable applications, ML/AI integration, and cloud infrastructure.
          Passionate about building high-performance solutions that make an impact.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/ajaywayase"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-cyan-500 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-wayase/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-blue-500 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ajaywayase98@gmail.com"
            className="p-3 bg-slate-800 hover:bg-purple-500 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <Mail size={24} />
          </a>
        </div>

        <a
          href="#about"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </a>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-cyan-400" size={32} />
      </a>
    </section>
  );
}
