import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
     <nav className="bg-white shadow-md sticky top-0 z-50 rounded-xl">
  <div className="max-w-5xl mx-auto flex justify-center gap-8 py-4">
    <a href="#" className="font-medium hover:text-blue-600 transition">Home</a>
    <a href="#skills" className="font-medium hover:text-blue-600 transition">Skills</a>
    <a href="#projects" className="font-medium hover:text-blue-600 transition">Projects</a>
    <a href="#education" className="font-medium hover:text-blue-600 transition">Education</a>
    <a href="#contact" className="font-medium hover:text-blue-600 transition">Contact</a>
  </div>
</nav>
    <section className="text-center py-8">
        <h1 className="text-6xl font-extrabold">
          Shipra Pareek
        </h1>

       <p className="text-xl mt-4 text-gray-600">
Full Stack Developer focused on building scalable web applications using React, Node.js and MongoDB
</p>

<p className="mt-4 text-gray-600">
I build production-ready projects with authentication, APIs and deployment. Currently seeking Remote Internship Opportunities.
</p>

        <p className="mt-6 max-w-2xl mx-auto text-gray-700">
          M.Sc. Physics graduate passionate about building
          modern web applications using React.js, Node.js,
          Express.js and MongoDB.
          </p>
          <p className="mt-4 text-gray-600">
  Currently seeking Web Development Internship Opportunities.
</p>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
  <a
    href="https://github.com/shipra830"
    target="_blank"
    className="bg-black text-white px-5 py-2 rounded-lg"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/shipra-pareek-a45950213"
    target="_blank"
    className="bg-blue-600 text-white px-5 py-2 rounded-lg"
  >
    LinkedIn
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    className="bg-green-600 text-white px-5 py-2 rounded-lg"
  >
    Resume
  </a>

  <a
    href="mailto:your-email@gmail.com"
    className="bg-red-500 text-white px-5 py-2 rounded-lg"
  >
    Email
  </a>
</div>
<p className="mt-4 text-green-700 font-medium">
✔ Open to Remote Internship Opportunities
</p>
<p className="mt-6 text-sm text-gray-500">
Based in India | Open to Remote Internships | Full Stack Developer
</p>
      </section>
   <section id="skills" className="max-w-4xl mx-auto py-4">
        <h2 className="text-3xl font-bold mb-4">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
  <span className="bg-white px-4 py-2 rounded-full shadow-md">React.js</span>
  <span className="bg-white px-4 py-2 rounded-full shadow-md">Next.js</span>
  <span className="bg-white px-4 py-2 rounded-full shadow-md">JavaScript</span>
  <span className="bg-white px-4 py-2 rounded-full shadow-md">Tailwind CSS</span>

  <span className="bg-white px-4 py-2 rounded-full shadow-md">Node.js</span>
  <span className="bg-white px-4 py-2 rounded-full shadow-md">Express.js</span>

  <span className="bg-white px-4 py-2 rounded-full shadow-md">MongoDB</span>

  <span className="bg-white px-4 py-2 rounded-full shadow-md">Git & GitHub</span>
</div>
      </section>
<section id="projects" className="max-w-5xl mx-auto py-10">
  <div className="grid md:grid-cols-2 gap-6"></div>
  <h2 className="text-3xl font-bold mb-2">
  Projects
</h2>

<p className="text-gray-600 mb-6">
  Selected work showcasing full stack development skills
</p>
 <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition duration-300">
    <Image
      src="/airbnb.png"
      alt="Airbnb Clone"
      width={800}
      height={400}
      className="rounded-lg mb-4"
    />

    <h3 className="text-2xl font-semibold">
      Airbnb Clone
    </h3>

   <p className="mt-3 text-gray-700">
Full-stack Airbnb clone with authentication, property listings, wishlist system and responsive UI. Built with focus on real-world booking flow simulation.
</p>
   <div className="flex gap-4 mt-4">
  <a
    href="https://majour-project-by-shipra.onrender.com/"
    target="_blank"
    className="bg-black text-white px-5 py-2 rounded-lg"
  >
    Live Demo
  </a>

  <a
    href="https://github.com/shipra830/Majour-Project-By-Shipra.git"
    target="_blank"
    className="bg-black text-white px-5 py-2 rounded-lg"
  >
    GitHub
  </a>
</div>
  </div>
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition duration-300">

  <Image
    src="/spotify.png"
    alt="Spotify Clone"
    width={800}
    height={400}
    className="rounded-lg mb-4"
  />

  <h3 className="text-2xl font-semibold">
    Spotify Clone
  </h3>

  <p className="mt-3 text-gray-700">
Interactive music player inspired by Spotify with play/pause controls, playlist system, progress bar and dynamic song switching.
</p>

  <div className="flex gap-4 mt-4">
  <a
    href="https://spotify-clone-bq5sy5f7p-shipra830s-projects.vercel.app"
    target="_blank"
    className="bg-black text-white px-5 py-2 rounded-lg"
  >
    Live Demo
  </a>

  <a
    href="https://github.com/shipra830/spotify-clone.git"
    target="_blank"
   className="bg-black text-white px-5 py-2 rounded-lg"
  >
    GitHub
  </a>
</div>

</div>
</section>
 

      <section id="education" className="max-w-4xl mx-auto py-10">
  <h2 className="text-3xl font-bold mb-4">
    Education
  </h2>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-xl font-semibold">
      Master of Science (Physics)
    </h3>

    <p className="mt-2 text-gray-700">
      Strong analytical and problem-solving skills
      developed through advanced studies in Physics.
    </p>
  </div>
  <section className="max-w-4xl mx-auto py-10">
  <h2 className="text-3xl font-bold mb-4">
    Remote Readiness
  </h2>

  <div className="bg-white p-6 rounded-xl shadow">
    <ul className="list-disc ml-5 text-gray-700 space-y-2">
      <li>Built and deployed full-stack applications independently</li>
      <li>Comfortable working with Git & GitHub version control</li>
      <li>Experience with REST APIs and backend integration</li>
      <li>Strong self-learning and problem-solving ability</li>
      <li>Able to work independently in remote environments</li>
    </ul>
  </div>
</section>
</section>

     <section id="contact" className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-bold mb-4">
          Contact
        </h2>

        <div className="flex gap-4 mt-4">
  <a
    href="https://github.com/shipra830"
    target="_blank"
    className="bg-black text-white px-5 py-2 rounded-lg"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/shipra-pareek-a45950213"
    target="_blank"
    className="bg-blue-600 text-white px-5 py-2 rounded-lg"
  >
    LinkedIn
  </a>
  <a
  href="shiprapareek.dev@gmail.com"
  className="bg-red-500 text-white px-5 py-2 rounded-lg"
>
  Email 
</a>
</div>
      </section>
    </main>
  );
}