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
      company: 'Walgreens',
      location: 'San Francisco, CA',
      period: 'September 2024 - Present',
      highlights: [
        'Engineered and maintained scalable backend microservices using Java and Spring Boot, and Python (Flask) supporting 1M+ daily transactions across retail and pharmacy workflows with consistent low-latency performance',
        'Designed and deployed cloud-native applications on AWS (EC2, RDS, S3, CloudWatch), achieving 99.9% uptime through auto-scaling, monitoring, and high-availability configurations',
        'Implemented responsive React.js components integrating REST APIs to streamline pharmacy workflows, reducing page load latency by 20% through lazy loading, code splitting, and refined API request handling',
        'Built and automated CI/CD pipelines using Jenkins / GitHub Actions, reducing deployment time by 45% and cutting manual release errors by 30%',
        'Containerized services using Docker and orchestrated deployments via Kubernetes/EKS, improving deployment consistency and environment stability across development, QA, and production environments',
        'Optimized API performance and database interactions using JPA/Hibernate and SQL, ensuring secure, reliable integrations across internal Walgreens systems and external partners',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Dev Launchers',
      location: 'Austin, TX',
      period: 'June 2024 - August 2024',
      highlights: [
        'Designed 3 REST APIs with Python, Flask, and PostgreSQL for data collection and analysis',
        'Implemented 6 reusable components with React.js, Next.js, and React Hooks for state management',
        'Deployed website on Google App Engine, scaling to handle 40% traffic increase',
        'Engineered end-to-end CI/CD pipelines utilizing GitHub Actions and automated testing leading to a 40% reduction in deployment times and increased release velocity',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Rakuten',
      location: 'Indore, India',
      period: 'November 2020 - June 2022',
      highlights: [
        'Developed Rakuten Drive Transfer, high-performance file-sharing platform with Java, Spring Boot, and MySQL supporting 50GB uploads via parallel streaming',
        'Implemented 5+ REST APIs for secure file upload/download, maintaining <2s latency and 99.98% uptime per SLA',
        'Integrated CI/CD pipelines across 3+ Microservices using Jenkins, Docker, Kubernetes and Rakuten Cloud, reducing deployment time by 35%',
        'Collaborated in Agile environment with cross-functional teams to develop 10+ features across 2 core projects',
        'Developed Unit and Integration tests using JUnit, maintaining over 90% code coverage across 3+ services',
        'Led team of 5 developers for Rakuten Link application using React.js, React Native, ES6 JavaScript and Redux',
        'Streamlined real-time communication and cut integration efforts by 40% through TypeScript SDK leveraging WebRTC and REST API signaling',
        'Automated 50+ Unit Tests using Jasmine and Karma, increasing test coverage by 42%',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Magna Infotech',
      location: 'Bangalore, India',
      period: 'June 2019 - August 2020',
      highlights: [
        'Enhanced and updated React + TypeScript components using Tailwind CSS, improving dashboard responsiveness by 10% and reducing layout shift issues by 15% during UI updates',
        'Debugged and refactored targeted sections of Go, Node.js services and FastAPI endpoints, helping reduce slow database query times by 8-12% across commonly used internal workflows',
        'Built AWS Lambda functions integrated with DynamoDB Streams and SQS, validating 100-200 events/day in lower environments and improving workflow traceability by 20% through Step Functions enhancements',
        'Contributed to REST and GraphQL API documentation, configured GitHub Actions CI workflows, and Engineered FastAPI, Python based microservices to support scalable backend integrations',
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
