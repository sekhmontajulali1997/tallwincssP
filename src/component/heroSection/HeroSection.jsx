import banner from "../../assets/4.jpg";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 grid gap-5 text-center px-4 md:px-8">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
          I am Morgan Freeman
        </h1>
        <p className="text-white text-sm md:text-base lg:text-lg max-w-screen-sm m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          reprehenderit voluptatibus possimus veritatis? Magni sapiente unde
          quasi molestiae quo tenetur.
        </p>
        <button className="bg-[#0086c7] w-40 mx-auto text-white px-4 py-2 rounded-md hover:bg-[#0072b5]">
          Large button
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
