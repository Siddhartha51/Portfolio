import {
  FaReact,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaTools,
  FaCode,
} from "react-icons/fa";

function Skills() {
  const skillsCategory = [
    {
      logo: FaReact,
      name: "Frontend Development",
      details:
        "Building responsive and interactive user interfaces with modern frameworks.",
      techs: ["Html", "Css", "JavaScript", "React", "NextJs", "Tailwindcss"],
    },
    {
      logo: FaServer,
      name: "Backend Development",
      details: "Creating robust server-side applications and RESTful APIs.",
      techs: ["Node.js", "Express"],
    },
    {
      logo: FaDatabase,
      name: "Database Management",
      details:
        "Designing and optimizing databases for performance and scalability.",
      techs: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      logo: FaMobileAlt,
      name: "Mobile Development",
      details: "Building cross-platform mobile applications with modern tools.",
      techs: ["React Native", "Flutter"],
    },
    {
      logo: FaCloud,
      name: "Cloud & DevOps",
      details: "Deploying and managing applications in cloud environments.",
      techs: ["AWS", "Docker"],
    },
    {
      logo: FaTools,
      name: "Tools & Technologies",
      details:
        "Essential tools and technologies I use in my development workflow.",
      techs: ["Git & GitHub", "Webpack", "Figma", "Jest"],
    },
    {
      logo: FaCode,
      name: "Programming Languages",
      details:
        "I know these programming languages which helps me to make perfect software.",
      techs: ["JavaScript", "Java", "Python"],
    },
  ];
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center font-bold text-6xl gap-3">
          My <span className="text-purple-600">Skills</span>
        </h1>
        <p className="text-center mt-4 text-xl">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
          {skillsCategory.map((category) => (
            <div
              key={category.name}
              className="bg-gray-900 rounded-3xl p-6 flex flex-col justify-between space-x-2 border border-gray-800 hover:border-purple-600/50"
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <category.logo
                    className="text-purple-600 shrink-0"
                    size={32}
                  />
                  <h2 className="font-bold text-xl">{category.name}</h2>
                </div>

                <p className="text-gray-400 mb-6">{category.details}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {category.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-700 text-gray-300 px-3 py-1.5 rounded-full border border-gray-800 hover:border-purple-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
