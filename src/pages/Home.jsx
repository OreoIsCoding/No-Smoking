import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Logo from "../assets/Logo/Pass-logo.jpg";
import Img1 from "../assets/img/img1.jpg";
import Card from "../components/Card";
import Quit from "../assets/img/quit.jpg";
import bg from "../assets/img/bg.png";
import Benefits from "../assets/img/benefits.jpg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen pb-20 font-sans bg-[#F7FFF6]">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#134611] p-8 text-white w-full flex flex-col justify-center items-center rounded-b-lg shadow-sm mb-8"
      >
        <motion.img
          src={Logo}
          className="w-48 h-20 sm:h-24 mb-4"
          alt="Pass"
        />
        <div className="relative w-full max-w-md mt-4">
          <motion.input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full bg-[#F7FFF6] text-gray-700 border-2 border-[#ddd] rounded-lg px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3DA35D] transition duration-300 ease-in-out"
            whileFocus={{ scale: 1.05 }}
          />
        </div>
      </motion.div>

      {/* Articles Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full p-4 flex justify-center items-center mb-8"
      >
        <h2 className="text-[#3DA35D] text-lg sm:text-xl font-medium pl-4 hover:underline cursor-pointer">
          View Articles
        </h2>
      </motion.div>

      {/* Card Section with scroll animation */}
      <motion.div
        whileInView="visible"
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 justify-center mb-12"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileInView="visible"
        >
          <Card
            image={Img1}
            title="Top 10 reasons to quit smoking"
            description="Here are the top 10 reasons why you should stop smoking."
            link="https://tobaccofree.org/quit-smoking-for-better-health-the-top-10-reasons-to-quit/?gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTZOe5bnoErN3PiFwfy_2o722v5F1CO8eb-pDE8p8xst1dLX6VmTvswaAnmCEALw_wcB"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileInView="visible"
        >
          <Card
            image={Quit}
            title="How to quit smoking"
            description="Learn effective strategies to quit smoking for good."
            link="https://www.cancer.org/healthy/stay-away-from-tobacco/guide-quitting-smoking.html"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileInView="visible"
        >
          <Card
            image={Benefits}
            title="Benefits of quitting smoking"
            description="Discover the numerous benefits of quitting smoking."
            link="https://www.health.gov.au/resources/publications/stop-smoking-start-repairing-health-benefits-for-men?language=en"
          />
        </motion.div>
      </motion.div>
{/* About Us Section */}
<motion.div
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="w-full  mt-12 flex flex-col items-center justify-center text-center bg-[#134611]"
>
  <motion.h2 className="text-3xl sm:text-4xl font-medium mt-10 text-[#E1EFE6] ">
    About Us
  </motion.h2>
  <p className="text-md p-10 sm:text-xl text-[#FFFFFF] max-w-xl mx-auto text-left leading-relaxed mb-8">
    Project PASS (Portable Anti-Smoking Service) is a software application
    or a system that helps in monitoring compliance with non-smoking
    regulations within the community. It keeps track of those who violate
    regulations regarding smoking and applies corresponding penalties.
    This system aims to promote healthier environments and ensure
    adherence to anti-smoking policies effectively and transparently.
  </p>

  {/* Full-width image at the end, spanning the full page width */}
  <motion.img 
    src={bg} 
    alt="grass"
    className="w-screen mt-8 object-fill" 
  />
</motion.div>


      {/* Footer Section */}
      <div className="w-full p-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left bg-[#012b08] text-[#FFFFFF] ">
        <motion.footer
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col sm:flex-row items-center justify-between"
        >
          <motion.img
            src={Logo}
            className="w-24 h-12 sm:h-16 mb-4 sm:mb-0"
            alt="Pass Logo"
          />

          <div className="mb-6 sm:mb-0 flex flex-col justify-center items-center sm:items-start">
            <p className="text-xl sm:text-2xl font-semibold text-[#FFFFFF] ">Project PASS</p>
            <p className="text-sm sm:text-base mt-2 opacity-80">Promoting healthier environments</p>
          </div>

          <div className="space-y-2 sm:space-y-0 sm:text-right flex flex-col items-center sm:items-end">
            <p className="text-sm sm:text-base">
              Website:
              <a
                href="https://pristinecare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-[#3DA35D] transition duration-300"
              >
                www.pristinecare.com
              </a>
            </p>
            <p className="text-sm sm:text-base">
              Contact:
              <a
                href="mailto:info@projectpass.com"
                className="hover:underline hover:text-[#3DA35D] transition duration-300"
              >
                info@projectpass.com
              </a>
            </p>
          </div>
        </motion.footer>
        <div className="w-full text-[#FFFFFF]  text-center py-4 mt-4 opacity-70">
          <p className="text-xs sm:text-sm">&copy; 2025 Project PASS. All Rights Reserved.</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <Navbar />
    </div>
  );
};

export default Home;
