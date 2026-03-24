import { ExternalLink, Github, Mail, Linkedin, MapPin } from "lucide-react";
// import ProfilePhoto from "@assets/profile2.png";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Arvix Corp",
      description:
        "Desarrollo de un CRM para la gestión de clientes y operaciones, una aplicación de administración de finanzas personales y una plataforma de comercio electrónico para ventas online.",
      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "WordPress",
        "MySQL",
        "SQL Server",
      ],
      // githubUrl: "https://github.com/username/ecommerce-dashboard",
      linkUrl: "https://arvixcorp.com",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-bg-400 text-text-900">
        {/* Navigation */}
        <nav className="fixed top-0 w-full backdrop-blur-md border-b border-bg-100 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-semibold text-xl">
                {"<"}Deymer Ospina{" />"}
              </div>
              <div className="hidden md:flex space-x-8">
                <a
                  href="#about"
                  className="text-text-600 hover:text-text-900 transition-colors"
                >
                  Acerca de
                </a>
                <a
                  href="#projects"
                  className="text-text-600 hover:text-text-900 transition-colors"
                >
                  Proyectos
                </a>
                <a
                  href="#contact"
                  className="text-text-600 hover:text-text-900 transition-colors"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main>
          {/* Hero Section */}
          <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-900 mb-6">
                Hola, soy Deymer Ospina
              </h1>
              <p className="text-xl sm:text-2xl text-text-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Un desarrollador web apasionado que crea experiencias digitales
                hermosas, funcionales y centradas en el usuario.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#projects"
                  className="inline-flex items-center px-8 py-3 bg-bg-100 text-white rounded-lg hover:bg-secondary transition-colors font-medium"
                >
                  Ver mi trabajo
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-3 hover:bg-[#ffffff10] border border-text-600 text-text-700 rounded-lg hover:border-text-700 font-medium hover:shadow-md hover:shadow-white/5 transition"
                >
                  Ponte en contacto conmigo
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-100">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-1 gap-12 items-center text-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-text-900 mb-6">
                    Acerca de mí
                  </h2>
                  <div className="space-y-4 text-text-600 leading-relaxed">
                    <p>
                      Desarrollador Full Stack con más de 2 años de experiencia
                      en desarrollo de aplicaciones web empresariales.
                      Especializado en React.js y Node.js, con experiencia en
                      diseño de bases de datos relacionales (MySQL y SQL Server)
                      y construcción de APIs REST. Enfocado en soluciones
                      escalables, optimización de rendimiento y buenas prácticas
                      de desarrollo.
                    </p>
                    <div className="flex items-center text-text-600 mt-6">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Medellin, COL</span>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center">
                  <div className="w-80 h-80 bg-bg-100 rounded-2xl flex items-center justify-center">
                    <img
                      src={ProfilePhoto}
                      alt="Deymer Ospina"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
            <div
              className={
                projects.length == 1
                  ? "max-w-6xl mx-auto flex justify-center items-center flex-col"
                  : "max-w-6xl mx-auto"
              }
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-text-900 mb-4">
                  Proyectos destacados
                </h2>
                <p className="text-xl text-text-600 max-w-2xl mx-auto">
                  Estos son algunos de los proyectos en los que he trabajado
                  recientemente. Cada uno representa un desafío y una
                  experiencia de aprendizaje únicos.
                </p>
              </div>

              <div
                className={
                  projects.length == 1
                    ? "flex justify-center items-center w-1/2"
                    : "grid md:grid-cols-2 gap-8"
                }
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-bg-400 rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:shadow-white/5 transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-text-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-text-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-bg-100 text-text-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {/* <a
                        href={project.githubUrl}
                        className="inline-flex items-center text-text-600 hover:text-text-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a> */}
                      <a
                        href={project.linkUrl}
                        className="inline-flex items-center text-text-600 hover:text-text-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Link de la web
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-100"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-900 mb-6">
                Trabajemos juntos
              </h2>
              <p className="text-xl text-text-600 mb-8 max-w-2xl mx-auto">
                Siempre me interesan nuevas oportunidades y proyectos
                emocionantes. ¡No dudes en contactarme si quieres colaborar o
                simplemente saludar!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:alex.johnson@email.com"
                  className="inline-flex items-center px-6 py-3 bg-bg-400 text-white rounded-lg hover:bg-secondary transition-colors font-medium"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contácteme por correo
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/deymer-alexander-ospina-cárdenas-2b3a8b200"
                    className="inline-flex items-center px-4 py-3 hover:bg-[#ffffff10] border border-text-600 text-text-700 rounded-lg hover:border-text-700 hover:shadow-md hover:shadow-white/5 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/DeyOsp"
                    className="inline-flex items-center px-4 py-3 hover:bg-[#ffffff10] border border-text-600 text-text-700 rounded-lg hover:border-text-700 hover:shadow-md  hover:shadow-white/5 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-bg-100">
          <div className="max-w-6xl mx-auto text-center text-text-600">
            <p>
              &copy; 2025 Deymer Ospina. Desarrollado con React y Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
