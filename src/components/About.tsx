import { Code2, Rocket, Trophy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: '4+ Years Experience',
      description: 'Building scalable applications across full-stack development',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Performance Driven',
      description: 'Optimized systems handling 500+ req/s with 200ms P95 latency',
    },
    {
      icon: <Trophy size={32} />,
      title: 'Award Winner',
      description: '3rd Prize at USA & China Hackathon for CareerLLM',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-12"></div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-slate-700/50">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a software engineer who consistently builds reliable, scalable systems that perform well under real production constraints. I have delivered backend platforms with high uptime, low latency, and strong security, combining cloud infrastructure, clean API design, and data driven performance tuning. My experience spans large scale consumer systems as well as early stage products, which allows me to move fast without sacrificing engineering rigor.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I bring strong fundamentals in distributed systems, data modeling, and algorithms, backed by hands on work in Java, Python, and modern cloud environments. I take ownership of problems end to end, from designing pipelines to optimizing databases and reducing infrastructure costs through thoughtful architecture decisions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I work comfortably across frontend, backend, and DevOps, and collaborate closely with cross functional teams. Above all, I focus on learning quickly, applying feedback, and turning complex problems into simple, maintainable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-cyan-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
