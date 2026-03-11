import profileImg from './assets/profile.png';
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Globe, 
  Server, 
  User, 
  Briefcase, 
  GraduationCap, 
  Send,
  Download,
  Menu,
  X,
  ChevronRight,
  Cpu,
  Zap
} from 'lucide-react';

// Centralized Dynamic Data
const userData = {
  name: "Chhavi",
  title: "Full Stack (MERN) Developer",
  email: "chhavirathi246@gmail.com",
  github: "https://github.com/chhavi167",
  linkedin: "https://linkedin.com/in/chhavichaudhary13",
  resumeUrl: "https://drive.google.com/file/d/1dAyLkVFlGg6mVWrmwh3Ad5PaWqAorATd/view?usp=sharing", 
  profileImg: profileImg,
  about: "I am a recent Computer Science Engineering graduate with a solid foundation in software development. My journey started with Java in college, but I fell in love with the flexibility of JavaScript and the power of the MERN stack.",
  skills: [
    { name: 'React.js', icon: <Globe className="text-cyan-400" />, level: 'Advanced' },
    { name: 'Node.js', icon: <Server className="text-green-400" />, level: 'Intermediate' },
    { name: 'MongoDB', icon: <Database className="text-emerald-400" />, level: 'Intermediate' },
    { name: 'Express', icon: <Code2 className="text-slate-300" />, level: 'Intermediate' },
    { name: 'Tailwind CSS', icon: <Globe className="text-sky-400" />, level: 'Advanced' },
    { name: 'JavaScript', icon: <Code2 className="text-yellow-400" />, level: 'Advanced' },
    { name: 'Git & GitHub', icon: <Github className="text-white" />, level: 'Intermediate' },
    { name: 'Socket.io', icon: <Zap className="text-orange-400" />, level: 'Intermediate' },
  ],
  projects: [
    {
      title: "DevJunction",
      duration: "Jan 2026 - Present",
      description: "A developer collaboration platform enabling users to discover and connect. Features real-time one-to-one chat with message persistence and specialized backend APIs.",
      tags: ["MERN Stack", "Socket.io", "WebSockets", "REST API"],
      icon: <Zap size={32} />,
      github: "#",
      live: "#"
    },
    {
      title: "SmartResQ",
      duration: "Sep 2025 - Dec 2025",
      description: "An IoT + Web-based system designed to improve ambulance response times through smart lane clearance. Focused on real-world problem solving and system design.",
      tags: ["IoT", "System Design", "JavaScript", "Social Impact"],
      icon: <Cpu size={32} />,
      github: "#",
      live: "#"
    },
    {
      title: "Imagify",
      duration: "May 2025 - June 2025",
      description: "A full-stack AI SaaS generating images from text prompts. Includes a credit-based system, ClipDrop API integration, and secure payment gateway.",
      tags: ["MERN Stack", "ClipDrop API", "Payments", "SaaS"],
      icon: <Code2 size={32} />,
      github: "#",
      live: "#"
    }
  ]
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer" 
            onClick={() => scrollTo('home')}
          >
            {userData.name}Portfolio
          </div>

          <div className="hidden md:flex space-x-10 items-center">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
            <a 
              href={userData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
            >
              Resume
            </a>
          </div>

          <button className="md:hidden p-2 text-slate-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 p-6 space-y-4 shadow-xl z-50">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left py-2 text-slate-300 font-medium"
              >
                {item}
              </button>
            ))}
            <a href={userData.resumeUrl} className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold">Resume</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.08),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(79,70,229,0.08),transparent_50%)]"></div>
        
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16 py-12">
          <div className="flex-[1.2] text-center md:text-left order-2 md:order-1">
            <div className="inline-block px-4 py-1.5 mb-8 text-sm font-semibold text-blue-400 bg-blue-900/30 rounded-full border border-blue-800/50">
              {userData.title}
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
              I'm <span className="text-blue-400">{userData.name}</span> <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Full Stack Developer</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {userData.about}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <button onClick={() => scrollTo('projects')} className="bg-white text-slate-950 px-10 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all text-lg shadow-xl shadow-white/5">
                View My Work
              </button>
              <a href={userData.resumeUrl} download className="flex items-center justify-center gap-3 border border-slate-700 bg-slate-900/50 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all text-lg shadow-lg">
                <Download size={20} /> Download CV
              </a>
            </div>
            <div className="mt-12 flex justify-center md:justify-start gap-8 text-slate-500">
              <a href={userData.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all hover:scale-110"><Github size={28} /></a>
              <a href={userData.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all hover:scale-110"><Linkedin size={28} /></a>
              <a href={`mailto:${userData.email}`} className="hover:text-blue-400 transition-all hover:scale-110"><Mail size={28} /></a>
            </div>
          </div>
          <div className="flex-1 relative order-1 md:order-2">
            <div className="w-64 h-64 sm:w-64 sm:h-64 md:w-[430px] md:h-[430px] bg-blue-500/20 rounded-[40px] rotate-6 absolute top-0 left-0 -z-10 blur-3xl"></div>
            <div className="w-64 h-64 sm:w-64 sm:h-64 md:w-[430px] md:h-[430px] bg-slate-800 rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative border-[6px] border-slate-800/50 mx-auto md:mx-0 group">
               <img src={userData.profileImg} alt={userData.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold flex items-center gap-4 text-white">
                <div className="w-12 h-1 h-px bg-blue-400"></div>
                About Me
              </h2>
              <p className="text-slate-400 leading-relaxed text-xl">
                {userData.about}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-7 bg-slate-800/40 rounded-3xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                  <GraduationCap className="text-blue-400 mb-3" size={32} />
                  <h4 className="font-bold text-slate-100 text-lg">Education</h4>
                  <p className="text-slate-400">B.Tech in CSE (2022-2026)</p>
                </div>
                <div className="p-7 bg-slate-800/40 rounded-3xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                  <Briefcase className="text-blue-400 mb-3" size={32} />
                  <h4 className="font-bold text-slate-100 text-lg">Current Status</h4>
                  <p className="text-slate-400">Actively Developing & Seeking Opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 bg-slate-800/20 p-8 md:p-12 rounded-[2rem] border border-slate-700/30">
              <h3 className="text-2xl font-bold text-slate-200 mb-6">Expertise Highlights</h3>
              <ul className="space-y-5">
                {[
                  "Real-time Collaboration Platforms",
                  "AI SaaS Product Development",
                  "IoT & Social-Impact Solutions",
                  "Full-stack MERN Architecting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300">
                    <div className="p-1.5 bg-blue-500/20 rounded-lg text-blue-400 shrink-0">
                      <ChevronRight size={18} strokeWidth={3} />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Featured Work</h2>
              <p className="text-slate-400 text-lg">Showcasing real-world solutions and full-stack innovation.</p>
            </div>
            <a href={userData.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-400 hover:text-blue-300 font-bold text-lg group bg-blue-400/5 px-6 py-3 rounded-xl border border-blue-400/20 transition-all">
              View Github <Github size={20} /> <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {userData.projects.map((project, i) => (
              <div key={i} className="group bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-slate-600 transition-all flex flex-col h-full shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[60px] -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-blue-400/10 rounded-2xl text-blue-400">
                    {project.icon}
                  </div>
                  <div className="flex gap-5">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all hover:scale-125"><Github size={24} /></a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all hover:scale-125"><ExternalLink size={24} /></a>
                  </div>
                </div>
                <div className="mb-2 text-xs font-bold text-blue-500 uppercase tracking-widest">{project.duration}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 text-base mb-8 flex-grow leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-bold uppercase tracking-widest bg-slate-800 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 text-white">Technical Stack</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Focused on modern, scalable technologies.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {userData.skills.map((skill, index) => (
              <div key={index} className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/30 transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all mx-auto shadow-lg text-blue-400">
                  {React.cloneElement(skill.icon, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">{skill.name}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col lg:flex-row border border-slate-800">
          <div className="flex-1 p-10 md:p-16 bg-gradient-to-br from-blue-700 to-indigo-900 text-white relative overflow-hidden">
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-blue-100 mb-12 text-lg">Open for collaboration on MERN projects, IoT innovations, and AI SaaS applications.</p>
            <div className="space-y-8">
              <a href={`mailto:${userData.email}`} className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors"><Mail size={24} /></div>
                <div><p className="text-xs text-blue-200 font-bold uppercase tracking-widest mb-1">Email</p><p className="text-xl">{userData.email}</p></div>
              </a>
              <a href={userData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors"><Linkedin size={24} /></div>
                <div><p className="text-xs text-blue-200 font-bold uppercase tracking-widest mb-1">LinkedIn</p><p className="text-xl">Chhavi Profile</p></div>
              </a>
            </div>
          </div>
          <div className="flex-[1.5] p-10 md:p-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" className="w-full px-5 py-4 bg-slate-800 border border-slate-700 rounded-2xl text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Name" />
                <input type="email" className="w-full px-5 py-4 bg-slate-800 border border-slate-700 rounded-2xl text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Email" />
              </div>
              <textarea rows="5" className="w-full px-5 py-4 bg-slate-800 border border-slate-700 rounded-2xl text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="How can I help you?"></textarea>
              <button className="w-full bg-white text-slate-950 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3">Send Message <Send size={24} /></button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-6 text-slate-500">
          <p className="mb-4">Designed and Developed by <span className="text-white font-bold">{userData.name}</span></p>
          <p className="text-sm">© 2026 Portfolio • Focused on Innovation & Impact</p>
        </div>
      </footer>
    </div>
  );
};

export default App;