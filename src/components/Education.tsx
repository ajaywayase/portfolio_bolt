import { GraduationCap, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Education() {
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

  const education = [
    {
      degree: 'Master of Science (MS)',
      field: 'Computer Science',
      university: 'University of California Riverside',
      location: 'Riverside, CA',
      period: 'September 2022 - March 2024',
      gpa: '3.9/4.0',
    },
    {
      degree: 'Bachelor of Science (BS)',
      field: 'Computer Science',
      university: 'University of Pune (SPPU)',
      location: 'Pune, India',
      period: 'August 2016 - April 2020',
      gpa: '3.92/4.0',
    },
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start mb-4">
                  <GraduationCap className="text-cyan-400 mr-4 mt-1" size={32} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-xl text-cyan-400 mb-2">{edu.field}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-2">{edu.university}</p>

                <div className="flex items-center text-gray-400 mb-3">
                  <MapPin size={16} className="mr-2" />
                  <span>{edu.location}</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                  <span className="text-gray-400">{edu.period}</span>
                  <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
