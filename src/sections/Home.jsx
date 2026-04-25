import Button from "../components/Button";

export default function Home() {
  return (
    <div className="landing flex w-full h-screen text-black" id="home">
      <div className="leftdiv w-full absolute md:static md:w-1/2 flex flex-col justify-center md:items-start items-center text-center md:text-left px-8 md:px-12 lg:px-20">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 md:text-sm text-xs font-medium tracking-[0.24em] text-black/60 backdrop-blur">
            SOFTWARE ENGINEER
          </p>
          <h1 className="text-4xl md:text-[5.5vw] lg:text-[4.8vw] font-semibold leading-[0.95] tracking-[-0.05em] text-zinc-950">
            Hi, I&apos;m Lavanya.
          </h1>
          <p className="md:block hidden mt-6 max-w-md text-lg md:text-xl leading-relaxed text-zinc-600">
            I build clean, responsive web experiences with thoughtful details
            and practical engineering.
          </p>
        </div>

        <div className="icons md:mt-8 mt-4 flex items-center gap-3">
          <a
            href="http://linkedin.com/in/lavanya-laxmi"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/80 text-zinc-800 shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-zinc-950 hover:text-white"
          >
            <i className="ri-linkedin-box-fill text-2xl" />
          </a>
          <a
            href="https://github.com/24Lavanya"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/80 text-zinc-800 shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-zinc-950 hover:text-white"
          >
            <i className="ri-github-fill text-2xl" />
          </a>
          <a
            href="#contact"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/80 text-zinc-800 shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-zinc-950 hover:text-white"
          >
            <i className="ri-mail-fill text-2xl" />
          </a>
        </div>
        {/* <Button
          className="text-white md:mt-8 mt-5 bg-[#385A64] hover:bg-[#416e7b] md:text-[2vw] lg:text-[1.5vw] text-xl p-2 rounded-lg"
          href="https://drive.google.com/file/d/1lB_Grj4igIoySiq5GNvMzzqsgAGHCOse/view?usp=sharing"
        >
          Resume
        </Button> */}
      </div>
      <div className="rightdiv w-full md:w-[50vw]">
        <img src="/Images/hero.jpg" alt="" />
      </div>
    </div>
  );
}
