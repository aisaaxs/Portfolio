import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faMoon, faSun, faHouse, faUser, faBriefcase, faLaptop, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navbar = ({ useDarkMode, setUseDarkMode }) => {
    const tooltipClass = useDarkMode ? 'tooltip-dark' : 'tooltip-light';

    const [currentPage, setCurrentPage] = useState("Home Page");

    const [showMenuItems, setShowMenuItems] = useState(null);
    const [containerGridCols, setContainerGridCols] = useState(null);
    const [navbarFontSize, setNavbarFontSize] = useState(null);
    const [navbarHeight, setNavbarHeight] = useState(null);
    const [navbarIconSize, setNavbarIconSize] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1050) {
                setShowMenuItems(true);
                setContainerGridCols("grid-cols-[60%_auto_5%]");
            } else {
                setShowMenuItems(false);
                setContainerGridCols("grid-cols-[85%_auto_auto]");
            }

            if (window.innerWidth > 780) {
                setNavbarFontSize("text-[15px]");
                setNavbarHeight("h-[70px]");
                setNavbarIconSize("text-[22px]");
            }
            if (window.innerWidth < 780) {
                setNavbarFontSize("text-[12px]");
                setNavbarHeight("h-[60px]");
                setNavbarIconSize("text-[20px]");
            }
            if (window.innerWidth < 640) {
                setNavbarFontSize("text-[10px]");
                setNavbarHeight("h-[50px]");
                setNavbarIconSize("text-[18px]");
            }
            if (window.innerWidth < 550) {
                setNavbarFontSize("text-[8px]");
                setNavbarHeight("h-[40px]");
                setNavbarIconSize("text-[16px]");
            }
        }
        
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={`w-full ${navbarHeight} grid ${containerGridCols} ${useDarkMode ? 'bg-black border-[#f5f5f5]' : 'bg-white border-[#15191F]'} fixed top-0 left-0 z-[90]`}>
            <div className="flex justify-start items-center">
                <code className={`press-start-2p-regular ${navbarFontSize} uppercase m-0 p-0 leading-tight text-black`}>
                    <span className="bg-gray-300 py-[10px] px-[10px]">~/W/V/</span>
                    
                    <span className="bg-[#fdd615] py-[10px] px-[10px]">Anitej Isaac Sharma</span>

                    <span className="py-[10px] px-[10px] bg-orange-500">
                        <FontAwesomeIcon icon={faGithubAlt} className={`${navbarIconSize}`} />

                        <FontAwesomeIcon icon={faCodeBranch} className={`${navbarIconSize} ml-[10px]`} />

                        <span className="lowercase ml-[10px]">{currentPage}</span>
                    </span>
                </code>
            </div>

            {showMenuItems ? (<div className={`flex justify-evenly items-center press-start-2p-regular ${useDarkMode ? 'text-white' : 'text-black'} flex-row flex-wrap`}>
                <div className={`tooltip ${tooltipClass}`}>
                    <FontAwesomeIcon icon={faHouse} className="text-[25px] cursor-pointer" onClick={() => setCurrentPage("Home Page")} />
                    
                    <hr className={`w-full h-[4px] bg-orange-500 mt-[4px] border-none ${currentPage === "Home Page" ? 'visible' : 'hidden'}`} />
                    
                    <span className="tooltiptext">Home Page</span>
                </div>
                
                <div className={`tooltip ${tooltipClass}`}>
                    <FontAwesomeIcon icon={faUser} className="text-[25px] cursor-pointer" onClick={() => setCurrentPage("About Me")} />
                    
                    <hr className={`w-full h-[4px] bg-orange-500 mt-[4px] border-none ${currentPage === "About Me" ? 'visible' : 'hidden'}`} />
                    
                    <span className="tooltiptext">About Me</span>
                </div>
                
                <div className={`tooltip ${tooltipClass}`}>
                    <FontAwesomeIcon icon={faBriefcase} className="text-[25px] cursor-pointer" onClick={() => setCurrentPage("Professional Experience")} />
                    
                    <hr className={`w-full h-[4px] bg-orange-500 mt-[4px] border-none ${currentPage === "Professional Experience" ? 'visible' : 'hidden'}`} />
                    
                    <span className="tooltiptext">Professional Experience</span>
                </div>
                
                <div className={`tooltip ${tooltipClass}`}>
                    <FontAwesomeIcon icon={faLaptop} className="text-[25px] cursor-pointer" onClick={() => setCurrentPage("View Projects")} />
                    
                    <hr className={`w-full h-[4px] bg-orange-500 mt-[4px] border-none ${currentPage === "View Projects" ? 'visible' : 'hidden'}`} />
                    
                    <span className="tooltiptext">View Projects</span>
                </div>
                
                <div className={`tooltip ${tooltipClass}`}>
                    <FontAwesomeIcon icon={faEnvelope} className="text-[25px] cursor-pointer" onClick={() => setCurrentPage("Contact Me")} />
                    
                    <hr className={`w-full h-[4px] bg-orange-500 mt-[4px] border-none ${currentPage === "Contact Me" ? 'visible' : 'hidden'}`} />
                    
                    <span className="tooltiptext">Contact Me</span>
                </div>
            </div>) : (
                <div className={` ${useDarkMode ? 'bg-white' : 'bg-black'} flex justify-center items-center cursor-pointer`}>                
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className={`${useDarkMode ? 'text-black' : 'text-white'} text-[25px]`} 
                    />
                </div>
            )}

            <div className={`border-l-[2px] ${useDarkMode ? 'border-black bg-white' : 'border-white bg-black'} flex justify-center items-center cursor-pointer`} onClick={() => setUseDarkMode(prev => !prev)}>                
                <FontAwesomeIcon 
                    icon={useDarkMode ? faSun : faMoon} 
                    className={`${useDarkMode ? 'text-black' : 'text-white'} text-[25px]`} 
                />
            </div>
        </div>
    );
}

export default Navbar;