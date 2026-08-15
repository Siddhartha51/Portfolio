import { FaLightbulb } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function About() {
  
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-6xl">About <strong className="text-purple-600">Me</strong></h1>
        <p className="mt-2 text-xl">Get to know more about my background and passion.</p>
      </div>
      <div className="flex flex-col pt-10 max-w-xl space-y-4">
        <h1 className="font-bold text-2xl">My Journey</h1>
        <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio facilis dolore voluptate minus itaque. Libero architecto cum laborum quis nisi quisquam, harum distinctio reiciendis eaque assumenda enim aperiam nobis rerum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quas corrupti laborum porro libero nam sequi excepturi, ducimus a repellat deserunt rem illum dicta sit optio esse ipsa architecto aliquid!</p>
      </div>
      <div className="pt-10 flex space-x-3">
      <div className="h-40 w-50 bg-gray-800 rounded-3xl p-3">
        <FaLightbulb className="text-purple-600 m" size={20}/>
        <p className="font-bold">Innovative</p>
        <p className="text-gray-400">I love generating unique solutions to complex problems with cutting-edge technology.</p>
      </div>
      <div className="h-40 w-50 bg-gray-800 rounded-3xl p-3">
        <FaPaintBrush className="text-purple-600 m" size={20}/>
        <p className="font-bold">Design Oriented</p>
        <p className="text-gray-400">Beautiful design and user experience are at the heart of everything I create.</p>
      </div>
      <div className="h-40 w-50 bg-gray-800 rounded-3xl p-3">
        <FaCode className="text-purple-600 m" size={20}/>
        <p className="font-bold">Clean Code</p>
        <p className="text-gray-400">I write maintainable and efficient code following best practices and modern patterns.</p>
      </div>
      </div>
    </div>
  )
}

export default About