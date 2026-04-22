export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen relative z-100 bg-zinc-100 py-[2vw] px-[1vw] flex flex-col justify-center items-center"
    >
      <div className="hello text-2xl md:text-[2.5vw] text-center">
        <h2>Say Hi!</h2>
        <br />
        <p>If you have any feedback or questions please feel free to contact me.</p>
      </div>
      <form action="https://api.web3forms.com/submit" method="post" className="flex flex-col mt-5 px-3 py-5 w-full md:w-1/2">
        <input type="hidden" name="access_key" value="573c5c80-b4dd-4401-ad06-dc3a568aa02e" />
        <input type="text" name="name" className="border-2 border-zinc-400 mt-2 px-3 py-3" placeholder="Enter your name" />
        <input type="email" name="email" className="border-2 border-zinc-400 mt-2 px-3 py-3" placeholder="Enter your email" />
        <textarea
          name="message"
          className="border-2 border-zinc-400 mt-2 px-3 py-3"
          cols="30"
          rows="10"
          placeholder="Your message"
        />
        <button type="submit" className="border-2 w-1/2 m-auto rounded-full text-white mt-2 px-3 py-3 bg-[#F04651] hover:bg-[#FF4F5A]">
          Submit
        </button>
      </form>
    </section>
  );
}
