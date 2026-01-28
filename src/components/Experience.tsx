import { Briefcase, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Experience() {
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

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Eyes On Pages Inc.',
      location: 'Seattle, WA',
      period: 'September 2024 - Present',
      highlights: [
        'Fine-tuned T5-Base transformer on 60,000+ text pairs, leveraging NotebookLM and OpenAI APIs',
        'Built React/Next.js portal scaling to 3000 client requests per month',
        'Designed secure RESTful APIs with JWT auth, sustaining 500req/s with P95 latency under 200ms',
        'Provisioned Proxmox cluster with 4 Dockerized VMs, cutting hosting cost by 65%',
        'Optimized 250GB MongoDB dataset, reducing query time from 5s to 1.2s',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Dev Launchers',
      location: 'Austin, TX',
      period: 'June 2024 - August 2024',
      highlights: [
        'Designed 3 REST APIs with Python, Flask, and PostgreSQL',
        'Implemented 6 reusable React.js components with Next.js and React Hooks',
        'Deployed on Google App Engine, scaling to handle 40% traffic increase',
        'Automated CI/CD pipelines using GitHub Actions, reducing deployment time by 50%',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Rakuten',
      location: 'Indore, India',
      period: 'November 2020 - June 2022',
      highlights: [
        'Developed Rakuten Drive Transfer supporting 50GB file uploads via parallel streaming',
        'Implemented 5+ REST APIs maintaining 99.98% uptime and <2s latency',
        'Integrated CI/CD pipelines reducing deployment time by 35%',
        'Led team of 5 developers for Rakuten Link application using React.js and React Native',
        'Developed TypeScript SDK leveraging WebRTC, cutting integration efforts by 40%',
        'Automated 50+ Unit Tests with Jasmine and Karma, increasing coverage by 42%',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Magna Infotech',
      location: 'Bangalore, India',
      period: 'June 2019 - August 2020',
      highlights: [
        'Developed and updated React + TypeScript components using Tailwind CSS, improving dashboard responsiveness by 10%',
        'Debugged and refactored Go/Node.js services and FastAPI endpoints, reducing slow database query times by 8-12%',
        'Built and tested AWS Lambda functions integrated with DynamoDB Streams and SQS',
        'Improved workflow traceability by 20% through Step Functions enhancements',
        'Managed feature branches and improved REST/GraphQL SDK documentation for team onboarding',
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-16"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <Briefcase className="text-cyan-400 mr-3" size={24} />
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    </div>
                    <p className="text-xl text-cyan-400 mb-1">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <div className="flex items-center text-gray-400 mt-4 md:mt-0">
                    <Calendar size={18} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">▹</span>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
