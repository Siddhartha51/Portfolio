import profile from "../assets/myimg.JPG";

function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="text-white space-y-4 max-w-xl">
            <h1 className="text-6xl">
              Hi, I am{" "}
              <strong className="text-purple-600">Siddhartha Thapa</strong>
            </h1>
            <p className="font-bold text-4xl">FullStack Developer</p>
            <p className="text-xl">
              I create stunning websites, apps with modern technologies and
              innovative design.
            </p>

            <div className="pt-2 flex space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-bold cursor-pointer">
                View Work
              </button>
              <button className="bg-transparent border border-gray-600 hover:bg-gray-900 px-6 py-3 rounded-lg font-bold cursor-pointer">
                Contact Me
              </button>
            </div>
          </div>

          <div className="shrink-0">
            <img
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-purple-600/30"
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
