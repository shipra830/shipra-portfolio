import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 rounded-b-2xl border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-center gap-8 py-4">
          <a href="#" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          <a href="#skills" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#education" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors">Education</a>
          <a href="#contact" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <p className="text-blue-600 font-bold tracking-widest uppercase mb-3 text-sm md:text-base">👋 Hello, World! I am</p>
<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Shipra Pareek</span>
</h1>

        <p className="text-2xl mt-4 text-gray-800 font-medium">
          Full Stack MERN Developer
        </p>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          I build scalable, production-ready web applications with secure authentication, robust APIs, and real-time features. Currently seeking Remote Software Engineering Internships.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <a
            href="https://github.com/shipra830"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 hover:-translate-y-1 transition-all shadow-lg"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shipra-pareek-a45950213"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-lg"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 hover:-translate-y-1 transition-all shadow-lg"
          >
            Resume
          </a>
        </div>

        <div className="mt-10 inline-block bg-green-50 border border-green-200 rounded-full px-4 py-2">
          <p className="text-green-700 font-semibold text-sm flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Open to Remote Internship Opportunities
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Socket.IO', 'JavaScript (ES6+)', 'Git & GitHub'].map((skill) => (
            <span key={skill} className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-blue-300 hover:text-blue-600 transition-all font-medium cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <p className="text-gray-600 mt-2">Selected work showcasing full stack development skills</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Project 1: CollabSphere */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="bg-gray-100 h-60 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
              <Image src="/collabsphere.png" alt="CollabSphere" layout="fill" objectFit="cover" className="rounded-xl group-hover:scale-105 transition-transform duration-500" />
              <span className="text-gray-400 absolute z-[-1]">Image Here</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">CollabSphere</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A real-time collaborative workspace application featuring multi-channel messaging, task management, and Google Gemini AI integration. Built with bidirectional event handling using Socket.IO without page reloads.
            </p>
            
            <div className="flex gap-4 mt-6">
              <a href="https://collabsphere-app.vercel.app" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                Live Demo
              </a>
              <a href="https://github.com/shipra830/CollabSphere" target="_blank" rel="noreferrer" className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition">
                GitHub
              </a>
            </div>
          </div>

          {/* Project 2: Product Browser API */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="bg-gray-100 h-60 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
               <Image src="/product-api.png" alt="Product Browser API" layout="fill" objectFit="cover" className="rounded-xl group-hover:scale-105 transition-transform duration-500" />
               <span className="text-gray-400 absolute z-[-1]">Image Here</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Browser API</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Highly scalable REST APIs built for efficient product browsing. Features include cursor-based pagination, dynamic category filtering, and optimized queries handling over 200,000+ PostgreSQL database records.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="https://product-browser-api.onrender.com" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                Live Demo
              </a>
              <a href="https://github.com/shipra830/product-browser-api.git" target="_blank" rel="noreferrer" className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Education & Remote Readiness Section */}
      <section id="education" className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Education</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition h-full">
            <h3 className="text-xl font-bold text-gray-900">Master of Science (Physics)</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Leveraged advanced studies in Physics to develop strong analytical, research, and complex problem-solving skills, which now seamlessly translate into backend logic and algorithmic thinking.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Remote Readiness</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition h-full">
            <ul className="list-disc ml-5 text-gray-600 space-y-3 font-medium">
              <li>Built and deployed full-stack applications independently</li>
              <li>Comfortable working with Git & GitHub version control</li>
              <li>Experience with REST APIs and cloud deployments</li>
              <li>Strong self-learning and problem-solving ability</li>
              <li>Able to work independently in remote environments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Let's Connect</h2>
        <p className="text-gray-600 mb-8 text-lg">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://github.com/shipra830" target="_blank" rel="noreferrer" className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition shadow-md">
            GitHub
          </a>
          <a href="https://linkedin.com/in/shipra-pareek-a45950213" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-md">
            LinkedIn
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shiprapareek.dev@email.com" target="_blank" rel="noreferrer" className="bg-red-500 text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition shadow-md">
            Send an Email
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-400 text-sm border-t border-gray-200">
        <p>Based in India | Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  );
}