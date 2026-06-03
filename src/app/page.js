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
         Aspiring Full Stack Web Developer
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-gray-700">
          M.Sc. Physics graduate passionate about building
          modern web applications using React.js, Node.js,
          Express.js and MongoDB.
          </p>
          <p className="mt-4 text-gray-600">
  Currently seeking Web Development Internship Opportunities.
</p>
        
        <div className="flex justify-center gap-4 mt-6">
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
</div>
<a
  href="/resume.pdf"
  target="_blank"
  className="inline-block mt-4 bg-green-600 text-white px-5 py-2 rounded-lg"
>
  Resume
</a>
      </section>
   <section id="skills" className="max-w-4xl mx-auto py-4">
        <h2 className="text-3xl font-bold mb-4">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
        <span className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
            HTML
          </span>
         <span className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
            CSS
          </span>
         <span className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
            JavaScript
          </span>
         <span className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
            React.js
          </span>
         <span className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
            Node.js
          </span>
          <span className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
            MongoDB
          </span>
          <span className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
            GitHub
          </span>
         <span className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
  Next.js
</span>

<span className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
  Express.js
</span>

<span className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
  Tailwind CSS
</span>
        </div>
      </section>

     <section id="projects" className="max-w-4xl mx-auto py-10">
  <h2 className="text-3xl font-bold mb-4">
    Projects
  </h2>

  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
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
      Full stack Airbnb inspired web application
      with authentication, listings and wishlist
      functionality.
    </p>

    <a
      href="https://majour-project-by-shipra.onrender.com/"
      target="_blank"
      className="inline-block mt-4 bg-black text-white px-5 py-2 rounded-lg"
    >
      Live Demo
    </a>
  </div>
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition mt-6">

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
    Interactive Spotify-inspired music player built using HTML, CSS and JavaScript.
    Features include play/pause, next/previous song, progress bar and playlist system.
  </p>

  <a
    href="https://spotify-clone-bq5sy5f7p-shipra830s-projects.vercel.app"
    target="_blank"
    className="inline-block mt-4 bg-black text-white px-5 py-2 rounded-lg"
  >
    Live Demo
  </a>

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
</div>
      </section>
    </main>
  );
}