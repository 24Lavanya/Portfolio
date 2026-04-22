export default function Funzone() {
  return (
    <div className="funzone w-full h-screen flex relative" id="funzone-page">
      <div className="top w-full h-[50vh] absolute flex justify-center overflow-hidden bg-zinc-100 z-5">
        <div className="top-h uppercase absolute -bottom-[9vw] md:-bottom-[7vw] md:text-[15vw] text-[18vw] leading-none font-bold">
          Funzone
        </div>
      </div>
      <div className="mid w-full flex items-center justify-center games">
        <div className="game-wrap flex justify-center items-center flex-col py-12 leading-[4vw] px-2 text-[#043927]">
          <h1 className="md:text-[2vw] text-2xl text-center mb-12">Let's have some fun with my games</h1>
          <button className="border-solid border-2 border-green-800 mt-2 rounded-full px-2 py-1 bg-green-100 w-full" type="button">
            <span className="game1 md:text-[3vw] text-xl">Guess the number</span>
          </button>
          <button className="border-solid border-2 border-green-800 mt-2 rounded-full px-2 py-1 bg-green-100 w-full" type="button">
            <span className="game2 md:text-[3vw] text-xl">Rock, paper, scissor</span>
          </button>
          <button className="border-solid border-2 border-green-800 mt-2 rounded-full px-2 py-1 bg-green-100 w-full" type="button">
            <a
              href="https://24lavanya.itch.io/duck-hunt?secret=YRqOHS55cJnM4VkU6uHascnCwss"
              className="game3 md:text-[3vw] text-xl"
            >
              Duck game
            </a>
          </button>
        </div>
      </div>
      <div className="bottom w-full h-[50vh] absolute flex justify-center overflow-hidden bg-zinc-100 z-5">
        <div className="bottom-h uppercase absolute -top-[9vw] md:-top-[8vw] md:text-[15vw] text-[18vw] leading-none font-bold">
          Funzone
        </div>
      </div>
    </div>
  );
}
