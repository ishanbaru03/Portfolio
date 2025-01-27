import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Menu, X, Sun, Moon } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const skills = [
    { name: 'Html', level: 100 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Python', level: 85  },
    { name: 'SQL', level: 85 },
  ];

  const qualifications = [
    {
      year: '2023-2025',
      degree: 'Master of Computer Application',
      institution: 'Model Institute of Engineering and Technology'
    },
    {
      year: '2019-2023',
      degree: 'Bachelor of Science',
      institution: 'Indira Gandhi National Open University'
    },
  ];

  const certifications = [
    {
      name: 'IBM AI/ML Minor Degree',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ILL8Z2XFE73F'
    },
    {
      name: 'Google DATA ANALYTICS',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/FS7RIOHTU353'
    },
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web development using modern technologies',
      icon: '🌐'
    },
    {
      title: 'DATA ANALYTICS',
      description: 'Deliver data-driven solutions that improve efficiency and drive growth.',
      icon: '📱'
    },
    {
      title: 'DATA SCIENCE',
      description: 'Providing data-driven solutions to complex business challenges.',
      icon: '📊'
    },
  ];

  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
      github: 'https://github.com/yourusername/ecommerce',
      // live: 'https://ecommerce-demo.com'
    },
    {
      name: 'Task Management App',
      description: 'A real-time task management application using React and Firebase',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80',
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://task-manager-demo.com'
    },
    {
      name: 'Weather Dashboard',
      description: 'A weather dashboard using OpenWeather API and React',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80',
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://weather-dashboard-demo.com'
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold dark:text-white transition-colors duration-300">Portfolio</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Dark mode toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Home</a>
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">About</a>
                <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Services</a>
                <a href="https://github.com/ishanbaru03?tab=repositories" target='_' className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Projects</a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Contact</a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 dark:bg-gray-800 transition-colors duration-300">
              <a href="#home" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Services</a>
              <a href="https://github.com/ishanbaru03?tab=repositories" target='_' className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 animate-fadeIn">
              <h1 className="text-5xl font-bold mb-4 dark:text-white transition-colors duration-300">Ishaan Baru</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
              I’m a full-stack developer with a knack for crafting innovative solutions, blending HTML, CSS, and JavaScript with Python and data analytics to bring bold ideas to life.
              </p>
              <a
                href="/docs/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </div>
            <div className="flex-1 animate-fadeInRight">
              <img
                src="/img/profilepic.jpeg"
                alt="Profile"
                className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white transition-colors duration-300">About Me</h2>
          
          {/* Skills */}
          <div className="mb-16 animate-fadeIn">
            <h3 className="text-2xl font-semibold mb-6 dark:text-white transition-colors duration-300">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium dark:text-white transition-colors duration-300">{skill.name}</span>
                    <span className="dark:text-white transition-colors duration-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 transition-colors duration-300">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 animate-growWidth"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Qualifications */}
          <div className="mb-16 animate-fadeIn">
            <h3 className="text-2xl font-semibold mb-6 dark:text-white transition-colors duration-300">Education</h3>
            <div className="relative border-l-2 border-indigo-200 dark:border-indigo-800 pl-8 ml-4 transition-colors duration-300">
              {qualifications.map((qual, index) => (
                <div key={index} className="mb-8 relative animate-slideInLeft" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <div className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold transition-colors duration-300">{qual.year}</div>
                  <div className="text-xl font-medium dark:text-white transition-colors duration-300">{qual.degree}</div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{qual.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-semibold mb-6 dark:text-white transition-colors duration-300">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-lg font-medium text-indigo-600 dark:text-indigo-400 transition-colors duration-300">{cert.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">View Certificate →</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white transition-colors duration-300">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section
      <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white transition-colors duration-300">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white transition-colors duration-300">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      <Github size={20} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      <span>🔗</span>
                      <span className="ml-1">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white transition-colors duration-300">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 disabled:bg-indigo-400"
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fadeIn">
              <h3 className="text-xl font-semibold mb-4">Ishaan Baru</h3>
              <p className="text-gray-400">Full Stack Developer<br>
              
              </br>Data Scientist
              </p>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors duration-300">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-300">About</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors duration-300">Services</a>
                {/* <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-300">Projects</a> */}
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </div>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '400ms' }}>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Ishaan Baru. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;