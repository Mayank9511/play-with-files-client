import { Menu, X } from "lucide-react";
import { useState } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { name: "About Us", id: "aboutUsSection" },
    { name: "Get Started", id: "getStartedSection" },
    { name: "Features", id: "featuresSection" },
    { name: "Contact Us", id: "contactUsSection" },
  ];

  return (
    <nav className="sticky top-0 z-50 py-3 px-5 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <FileCopyIcon style={{ color: "#f97316", marginRight: "10px" }} />
            <span className="text-xl tracking-tight">Play with files</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {sections.map((section, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => handleScroll(e, section.id)}
                className="capitalize font-light hover:text-white transition-colors"
              >
                {section.name}
              </a>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {sections.map((section, index) => (
                <li key={index} className="py-4">
                  <a href="#" onClick={(e) => handleScroll(e, section.id)}>
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
