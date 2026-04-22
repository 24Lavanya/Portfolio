export default function About() {
  return (
    <div className="about mt-10 px-[3vw] z-20 flex items-start flex-col w-full min-h-screen" id="about-page">
      <div className="heading">
        <h1 className="md:text-[3.7vw] text-4xl font-bold tracking-tight leading-none">About</h1>
        <h1 className="md:text-[3.5vw] text-3xl font-bold tracking-tight leading-none">me.</h1>
      </div>

      <div className="adiv w-full h-[100vh] flex relative">
        <div className="aleft w-full md:px-0 px-1 absolute md:static md:w-1/2 h-full z-10 bg-[#fff]">
          <div className="aleftele flex flex-col justify-center h-full">
            <h1 className="md:text-[2vw] text-2xl md:leading-none leading-[30px] text-center md:text-left">
              Hello! I am Lavanya,
            </h1>
            <h1 className="md:text-[2.7vw] text-3xl md:leading-none leading-[30px] text-center md:text-left mt-4 mb-4">
              a Software Engineer specializing in React.js and modern front-end development.
            </h1>
            <h1 className="md:text-[1.7vw] text-xl md:leading-none leading-[30px] text-center md:text-left">
              I build scalable, responsive, and maintainable web applications with a focus on clean user experiences.
            </h1>
          </div>

          <div className="aleftele flex flex-col justify-center h-full">
            <h1 className="md:text-[2vw] text-2xl md:leading-none leading-[30px] text-center md:text-left">
              I have worked on production-grade React and Next.js applications, including fintech systems.
            </h1>
            <h1 className="md:text-[2.7vw] text-3xl md:leading-none leading-[30px] text-center md:text-left mt-4 mb-4">
              I care about performance, reusable component architecture, and predictable state management.
            </h1>
          </div>

          <div id="last" className="aleftele flex flex-col justify-center h-full">
            <h1 className="md:text-[2vw] text-2xl md:leading-none leading-[30px] text-center md:text-left">
              My experience spans Redux Toolkit, React Query, MUI, shadcn/ui, Framer Motion, Node.js, Express.js, and MongoDB.
            </h1>
            <h1 className="md:text-[2.7vw] text-3xl md:leading-none leading-[30px] text-center md:text-left mt-4 mb-4">
              I enjoy turning business requirements into practical, polished, and user-focused products.
            </h1>
          </div>
        </div>

        <div className="aright sticky -top-5 z-5 w-1/2 h-full">
          <div className="aright-img" />
        </div>
      </div>
    </div>
  );
}
