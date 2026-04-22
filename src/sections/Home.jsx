import Button from "../components/Button";

export default function Home() {
  return (
    <div className="landing flex w-full h-screen text-black" id="home">
      <div className="leftdiv w-full absolute mt-12 md:static md:w-1/2 md:text-[2.5vw] text-xl flex flex-col justify-center md:items-start items-center text-center md:text-left px-12 leading-none">
        <p className="home-text font-medium">
          I am Lavanya
          <br />
          Software Engineer
          <br />
        </p>
        <br />
        <div className="icons">
          <a href="http://linkedin.com/in/lavanya-laxmi" target="_blank" rel="noreferrer">
            <i className="ri-linkedin-box-fill cursor-pointer md:text-[4vw] lg:text-[2.5vw] text-3xl" />
          </a>
          <a href="https://github.com/24Lavanya" target="_blank" rel="noreferrer">
            <i className="ri-github-fill cursor-pointer md:text-[4vw] lg:text-[2.5vw] text-3xl" />
          </a>
          <a href="#contact">
            <i className="ri-mail-fill cursor-pointer md:text-[4vw] lg:text-[2.5vw] text-3xl" />
          </a>
        </div>
        <Button
          className="text-white md:mt-8 mt-5 bg-[#385A64] hover:bg-[#416e7b] md:text-[2vw] lg:text-[1.5vw] text-xl p-2 rounded-lg"
          href="https://drive.google.com/file/d/1lB_Grj4igIoySiq5GNvMzzqsgAGHCOse/view?usp=sharing"
        >
          Resume
        </Button>
      </div>
      <div className="rightdiv w-full md:w-[50vw]">
        <img src="/Images/hero.jpg" alt="" />
      </div>
    </div>
  );
}
