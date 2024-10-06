import "./App.css";

function App() {
  return (
    <>
      <div className="container flex-col h-[640px] w-[360px] bg-[#d1edff] mx-auto mt-3 rounded-xl">
        <div className="flex justify-center w-full">
          <img
            src="/profileLinks/images/niloy.png"
            srcSet=""
            className="h-36 w-36 rounded-full border-[#32acf7] border-4 mt-4"
            alt="profile"
          />
        </div>
        <h1 className="text-2xl font-semibold text-[#2d7bac] text-center mt-4 mb-1">
          Niloy Kumar Mohonta
        </h1>

        <h4 className="text-md font-light text-center text-[#297eb3]">
          Front-End Specialist |{" "}
          <span className="font-medium">React & Next</span>
        </h4>
        <h4 className="text-sm text-center text-[#297eb3] font-medium mb-4">
          Web Developer - <span className="font-semibold">MERN</span>
        </h4>
        <h1 className="facebook w-80 h-16 bg-[#b9dcff] rounded-xl flex mx-auto m-2">
          <a
            href="https://www.facebook.com/niloykumarmohonta000"
            className="flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/profileLinks/images/facebook.svg"
              target="_blank"
              alt=""
              className="h-10 w-auto my-auto ml-10"
            />
            <h4 className=" text-center flex justify-center items-center w-52 text-[#0575E8]">
              niloykumarmohonta000
            </h4>
          </a>
        </h1>
        <h1 className="linkedin w-80 h-16 bg-[#bce5fc] rounded-xl flex mx-auto m-2">
          <a
            href="https://www.linkedin.com/in/niloy-kumar-mohonta-bb3367155/"
            className="flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/profileLinks/images/linkedin.svg"
              target="_blank"
              alt=""
              className="h-10 w-auto my-auto ml-10"
            />
            <h4 className=" text-center flex justify-center items-center w-52 text-[#0288D1]">
              niloykumarmohonta000
            </h4>
          </a>
        </h1>
        <h1 className="gmail w-80 h-16 bg-[#ffddda] rounded-xl flex mx-auto m-2">
          <a
            href="mailto:niloykumarmohonta@gmail.com"
            className="flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/profileLinks/images/gmail.svg"
              target="_blank"
              alt=""
              className="h-10 w-auto my-auto ml-10"
            />
            <h4 className=" text-center flex justify-center items-center w-52 text-[#EA4335]">
              niloykumarmohonta
            </h4>
          </a>
        </h1>
        <h1 className="x w-80 h-16 bg-slate-100 rounded-xl flex mx-auto m-2">
          <a
            href="https://x.com/niloykmohonta"
            className="flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/profileLinks/images/x.svg"
              target="_blank"
              alt=""
              className="h-8 w-auto my-auto ml-20
              "
            />
            <h4 className=" text-center flex justify-center items-center w-32 text-slate-700 ">
              niloykmohonta
            </h4>
          </a>
        </h1>
        <h1 className="github w-80 h-16 bg-slate-200 rounded-xl flex mx-auto m-2">
          <a
            href="https://github.com/niloy1513991"
            className="flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/profileLinks/images/github.png"
              target="_blank"
              alt=""
              className="h-8 w-auto my-auto ml-20
              "
            />
            <h4 className=" text-center flex justify-center items-center w-32 text-slate-700 ">
              niloy1513991
            </h4>
          </a>
        </h1>
      </div>
    </>
  );
}

export default App;
