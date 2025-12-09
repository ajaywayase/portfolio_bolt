import { Award, ExternalLink, GitBranch } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'CareerLLM',
      period: 'December 2023 - March 2024',
      award: '3rd Prize at Hackathon (USA & China region)',
      description: 'AI-powered career guidance platform leveraging LLaMA LLM model for personalized recommendations',
      highlights: [
        'Lowered processing time by 40% using FastAPI asynchronous capabilities',
        'Accelerated feature implementation by 20% utilizing React.js reusable components',
        'Integrated advanced NLP techniques for career path analysis',
      ],
      tech: ['React.js', 'FastAPI', 'LLaMA LLM', 'Python'],
    },
    {
      title: 'KubeWarm: Optimizing Container Startup',
      period: 'November 2023 - March 2024',
      description: 'Kubernetes optimization tool that dramatically reduces cold start times using predictive scheduling',
      highlights: [
        'Optimized Kubernetes and Knative pod startup time by 400%',
        'Decreased cold start times by 4x using CronJob scheduling and image caching',
        'Implemented SARIMA forecasting for predictive resource allocation',
      ],
      tech: ['Kubernetes', 'Knative', 'Google Cloud Platform', 'Python', 'SARIMA'],
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <GitBranch className="text-cyan-400 mr-3" size={28} />
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <ExternalLink className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer" size={20} />
                </div>

                {project.award && (
                  <div className="flex items-center mb-4 px-3 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg w-fit">
                    <Award className="text-yellow-400 mr-2" size={18} />
                    <span className="text-yellow-400 text-sm font-semibold">{project.award}</span>
                  </div>
                )}

                <p className="text-gray-400 text-sm mb-4">{project.period}</p>
                <p className="text-gray-300 mb-6">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">▹</span>
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
