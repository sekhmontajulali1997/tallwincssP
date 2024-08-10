/* eslint-disable react/prop-types */
import AboutSection from "../../component/aboutSection/AboutSection";
import ContactSection from "../../component/contactSection/ContactSection";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import HeroSection from "../../component/heroSection/HeroSection";
import TeamSection from "../../component/teamSection/TeamSection";


const HomeOne = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <div >
        <Header  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection/>
      <TeamSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
     
      </div>
    </>
  );
};

export default HomeOne;
