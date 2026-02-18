import { Code, Database, Cloud, Wrench } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={32} />,
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'MySQL', 'MongoDB', 'HTML', 'CSS', 'SQL'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Database size={32} />,
      skills: ['React.js', 'React Native', 'Angular', 'Node.js', 'Next.js', 'GraphQL', 'Django', 'Flask', 'FastAPI'],
    },
    {
      title: 'Developer Tools',
      icon: <Cloud size={32} />,
      skills: ['Docker', 'Git', 'JIRA', 'GitHub', 'AWS', 'GCP', 'Kubernetes'],
    },
    {
      title: 'Other',
      icon: <Wrench size={32} />,
      skills: ['Google Analytics', 'Unit Testing', 'Data Structures', 'Jenkins', 'SDLC', 'Agile'],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-cyan-400 mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-slate-700/50 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 rounded-lg text-sm font-medium transition-all duration-300 border border-slate-600/50 hover:border-cyan-500/50 transform hover:scale-105"
                    >
                      {skill}
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
