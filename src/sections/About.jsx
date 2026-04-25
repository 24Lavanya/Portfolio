export default function About() {
  return (
    <div
      className="about mt-10 px-[3vw] z-20 flex items-start flex-col w-full min-h-screen"
      id="about-page"
    >
      <div className="heading py-5">
        <h1 className="md:text-[3.7vw] text-4xl font-bold tracking-tight leading-none">
          About
        </h1>
        <h1 className="md:text-[3.5vw] text-3xl font-bold tracking-tight leading-none">
          me.
        </h1>
      </div>

      <div className="adiv w-full h-[100vh] flex relative">
        <div className="aleft w-full md:px-0 px-1 absolute md:static md:w-1/2 h-full z-10 bg-[#fff]">
          <div className="aleftele flex flex-col justify-center h-full">
            <h1 className="md:text-[2.7vw] text-3xl md:leading-none leading-[30px] text-center md:text-left mt-4 mb-4">
              I like creating web experiences that feel smooth and intuitive to
              use.
            </h1>
            <h1 className="md:text-[1.7vw] text-xl md:leading-none leading-[30px] text-center md:text-left">
              I mainly work with React and modern tools to bring ideas to life.
            </h1>
          </div>

          <div className="aleftele flex flex-col justify-center h-full">
            <h1 className="md:text-[2vw] text-2xl md:leading-none leading-[30px] text-center md:text-left">
              I’ve worked on real-world applications where performance and reliability matter.
            </h1>
            <h1 className="md:text-[2.7vw] text-3xl md:leading-none leading-[30px] text-center md:text-left mt-4 mb-4">
              I focus on making the experience feel steady and predictable.
            </h1>
          </div>

          <div
            id="last"
            className="aleftele flex flex-col justify-center h-full"
          >
            <h1 className="md:text-[2vw] text-2xl md:leading-none leading-[30px] text-center md:text-left">
              I like writing clean, reusable code that scales well over time.
            </h1>
            <h1 className="md:text-[2.7vw] text-3xl md:leading-none leading-[30px] text-center md:text-left mt-4 mb-4">
              I'm always exploring better ways to improve both the product and
              the way I build it.
            </h1>
          </div>
        </div>

        <div className="aright sticky -top-5 z-[5] w-1/2 h-full">
          <div className="aright-img" />
        </div>
      </div>
    </div>
  );
}
