import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
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

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'ajaywayase98@gmail.com',
      link: 'mailto:ajaywayase98@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '951-222-9043',
      link: 'tel:+19512229043',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Bellevue, WA',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      link: 'https://github.com/ajaywayase98',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/ajay-wayase',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8"></div>

          <p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out!
          </p>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      className="flex flex-col items-center group"
                    >
                      <div className="text-cyan-400 mb-3 p-4 bg-slate-700/50 rounded-full group-hover:bg-cyan-500/20 transition-all duration-300">
                        {info.icon}
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      <p className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="text-cyan-400 mb-3 p-4 bg-slate-700/50 rounded-full">
                        {info.icon}
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-slate-700/50 pt-8">
              <p className="text-center text-gray-400 mb-6">Connect with me</p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-700/50 hover:bg-cyan-500/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 group"
                  >
                    <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>Built with React.js, TypeScript, and Tailwind CSS</p>
            <p className="mt-2">© 2024 Ajay Ramesh Wayase. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
