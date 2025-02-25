import { motion } from "framer-motion";
import { FaGlobe, FaMapMarkerAlt, FaTv, FaTrash, FaHistory, FaSignOutAlt, FaCog } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import Navbar from "../components/Navbar";
import ProfilePic from '../assets/img/woman.png';

const Button = ({ children, className, ...props }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 text-white font-medium transition ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const Profile = () => {
  return (
    <div className="w-full h-screen flex flex-col pb-24"> {/* Add padding-bottom for navbar */}
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-6 bg-gradient-to-r from-green-800 to-green-900 text-white"
      >
        <div className="flex items-center justify-between pb-4">
          <button>&lt;</button>
          <h2 className="text-xl font-bold">My Profile</h2>
          <FaCog className="text-gray-200" />
        </div>
      </motion.div>

      <div className="flex items-center p-6 bg-white shadow-md">
        <motion.img
          src={ProfilePic}
          alt="Profile"
          className="w-24 h-24 border rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        />
        <div className="ml-4">
          <h3 className="text-2xl font-semibold">Andrea Mendoza</h3>
          <p className="text-gray-500 text-base">andrea_mendoza@gmail.com</p>
          <Button className="mt-2 bg-green-700 hover:bg-green-800 rounded-[10px]">
            Edit Profile
          </Button>
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 p-6 bg-white text-gray-900"
      >
        <div className="space-y-4">
          <ProfileOption icon={<FaGlobe />} text="Languages" />
          <ProfileOption icon={<FaMapMarkerAlt />} text="Location" />
          <ProfileOption icon={<MdSubscriptions />} text="Subscription" />
          <ProfileOption icon={<FaTv />} text="Display" />
        </div>

        <div className="mt-6 border-t pt-4 space-y-4">
          <ProfileOption icon={<FaTrash />} text="Clear Cache" />
          <ProfileOption icon={<FaHistory />} text="Clear History" />
          <ProfileOption icon={<FaSignOutAlt />} text="Log Out" />
        </div>
      </motion.div>
    </div>
  );
};

function ProfileOption({ icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between p-4 hover:bg-gray-100 cursor-pointer rounded-lg transition-all duration-200"
    >
      <div className="flex items-center space-x-3">
        <span className="text-xl">{icon}</span>
        <span className="text-gray-700 text-base">{text}</span>
      </div>
      <span className="text-gray-500">{'>'}</span>
    </motion.div>
  );
}

export default Profile;
