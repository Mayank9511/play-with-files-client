const HeroSection = () => {
  const handleScroll = () => {
    event.preventDefault();
    const section = document.getElementById("getStartedSection");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="aboutUsSection"
      className="flex h-[75vh] flex-col items-center pt-6 lg:pt-20"
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Play with
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          files
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        "Play with Files" is an innovative app designed to help users interact
        with a wide range of file types, from documents and images to audio and
        code. Whether you need to extract key information, generate summaries,
        analyze data, or get creative content, this platform makes it easy to
        upload a file and ask any question related to it, delivering smart,
        tailored responses in real-time.
      </p>
      <div className="flex justify-center my-10">
        <button
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          onClick={handleScroll}
        >
          Start for free
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
