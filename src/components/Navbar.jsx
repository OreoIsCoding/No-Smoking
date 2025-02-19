import { NavLink } from "react-router-dom";
import { User2Icon,LucideHome, MapPin, Mail, Settings } from "lucide-react";
import { GiPayMoney } from "react-icons/gi";

const Navbar = () => {
    return (
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600/40 backdrop-blur-lg shadow-lg rounded-full flex justify-around items-center px-6 py-3 w-[90%] max-w-md border border-green-500/50">
            {navLinks.map(({ to, Icon, size }, index) => (
                <NavLink
                    key={index}
                    to={to}
                    className={({ isActive }) =>
                        `relative text-green-200 transition-all duration-300 ${
                            isActive ? "text-white scale-125" : "hover:text-green-100 hover:scale-110"
                        }`
                    }
                >
                    <Icon size={size} />
                </NavLink>
            ))}
        </nav>
    );
};

const navLinks = [
    { to: "/", Icon: LucideHome, size: 24 },
    { to: "/profile", Icon: User2Icon, size: 22 },
    { to: "/map", Icon: MapPin, size: 26 },
    { to: "/wallet", Icon: GiPayMoney, size: 24 },
 ];

export default Navbar;
