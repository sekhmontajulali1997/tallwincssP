import about from '../../assets/5.jpg';

const AboutSection = () => {
  return (
    <section className="bg-[#c2d4ea] dark:bg-black dark:text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">About Us</h1>

        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="leftDiv">
            <div className="imgContentDiv flex flex-col md:flex-row gap-6">
              <div className="imgDiv flex-shrink-0">
                <img className="w-32 md:w-40  xxxsm:w-full" src={about} alt="About" />
              </div>
              <div className="contentDiv">
                <ul className="list-disc pl-5">
                  <li>Name: Montaj</li>
                  <li>Profile: Full Stack Developer</li>
                  <li>Email: sk@gmail.com</li>
                  <li>Phone: 848-180-3467</li>
                </ul>
              </div>
            </div>
            <div className="leftContent mt-4">
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero laborum modi magnam consequatur, rem mollitia quasi eos impedit. Quo iusto itaque consequatur, quidem aspernatur nulla atque velit doloremque inventore.
              </p>
            </div>
          </div>
          <div className="RightDiv">
            <h2 className="text-xl md:text-2xl font-semibold">About Me</h2>
            <p className="text-sm md:text-base mt-3">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
            </p>
            <p className="text-sm md:text-base my-2">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
            </p>
            <strong className="text-sm md:text-base">
              Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
