import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";

// Import required modules

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Sara Wilson",
    position: "Lead Developer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Sara Wilson",
    position: "Lead Developer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 5,
    name: "Sara Wilson",
    position: "Lead Developer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 6,
    name: "Sara Wilson",
    position: "Lead Developer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 7,
    name: "Sara Wilson",
    position: "Lead Developer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 8,
    name: "Sara Wilson",
    position: "Lead Developer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  // Add more team members here
];

const TeamSection = () => {
  return (
    <section className="bg-[#bac1f3] dark:bg-gray-950 dark:text-white py-10">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl pe-4">Meet Our Team</h1>
      <section className="container mx-auto px-4 ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          direction="horizontal"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation, Pagination, Autoplay, ]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, // Delay in ms
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          
          className="mySwiper py-8" // Add a class for styling
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-gray-600">{member.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default TeamSection;
