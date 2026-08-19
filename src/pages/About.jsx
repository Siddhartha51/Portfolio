import { FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";

function About() {
  const aboutMe = [
    {
      icon: FaLightbulb,
      name: "Innovative",
      details:
        "I love generating unique solutions to complex problems with cutting-edge technology.",
    },
    {
      icon: FaPaintBrush,
      name: "Design Oriented",
      details:
        "Beautiful design and user experience are at the heart of everything I create.",
    },
    {
      icon: FaCode,
      name: "Clean Code",
      details:
        "I write maintainable and efficient code following best practices and modern patterns.",
    },
  ];
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-6xl">
          About <strong className="text-purple-600">Me</strong>
        </h1>
        <p className="mt-2 text-xl">
          Get to know more about my background and passion.
        </p>
      </div>
      <div className="flex flex-col pt-10 max-w-xl space-y-5">
        <h1 className="font-bold text-2xl">My Journey</h1>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optiofacilis
          dolore voluptate minus itaque. Libero architecto cum laborum quis nisi
          quisquam, harum distinctio reiciendis eaque assumenda enim aperiam
          nobis rerum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quas corrupti laborum porro libero nam sequi excepturi, ducimus a
          repellat deserunt rem illum dicta sit optio esse ipsa architecto
          aliquid!
        </p>
      </div>
      <div className="pt-10 flex space-x-3">
        {aboutMe.map((details) => (
          <div
            key={details.name}
            className="h-40 w-50 bg-gray-800 rounded-3xl p-3 border border-gray-800 hover:border-purple-600/50"
          >
            <details.icon className="text-purple-600" size={20} />
            <p className="font-bold">{details.name}</p>
            <p className="text-gray-400">{details.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
