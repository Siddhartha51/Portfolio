import profile from "../assets/myimg.JPG";
import portfolio from "../assets/portfolio.png";

function Projects() {
  const projectDetails = [
    {
      image: profile,
      name: "Portfolio Website",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus, tenetur, nihil provident ad repellat cupiditate quoddebitis sint laudantium molestiae officia voluptatum suscipit ipsam deserunt sit laboriosam quam. Quaerat, accusantium",
      techs: ["html", "CSS"],
      demo: "",
      code: "",
    },
    {
      image: portfolio,
      name: "Portfolio Website",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus, tenetur, nihil provident ad repellat cupiditate quoddebitis sint laudantium molestiae officia voluptatum suscipit ipsam deserunt sit laboriosam quam. Quaerat, accusantium",
      techs: ["html", "CSS", "java", "ggg"],
      demo: "",
      code: "",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center font-bold text-6xl">
          My <span className="text-purple-600">Projects</span>
        </h1>
        <p className="text-center mt-4 text-xl">Projects I've built</p>

        <div className="grid grid-cols-3 pt-5 gap-6">
          {projectDetails.map((projects, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl pb-3 border border-gray-800 hover:border-purple-500/50"
            >
              <div className="h-70 w-full flex items-center justify-center p-2">
                <img src={projects.image} alt="" className="h-full rounded" />
              </div>
              <h2 className="font-bold text-xl pl-3 pt-3">{projects.name}</h2>
              <p className="text-gray-400 pl-3 pr-3">{projects.details}</p>

              <div className="flex flex-wrap gap-2 pl-3">
                {projects.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-500 rounded-full px-3 py-1 mt-3 border border-gray-800 hover:border-purple-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-between p-3 ">
                <span className="bg-gray-700 rounded-full px-3 py-1 border border-gray-800 hover:border-purple-600/50 cursor-pointer">
                  Demo
                </span>
                <span className="bg-gray-700 rounded-full px-3 py-1 border border-gray-800 hover:border-purple-600/50 cursor-pointer">
                  Code
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
