import React, { useEffect, useRef } from 'react';
import animated_me from "../../images/animated-me.png";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CLOUDS from "vanta/src/vanta.net";

const HomePage = ({ useDarkMode }) => {
    const vantaRef = useRef(null);
    const vantaInstance = useRef(null);

    useEffect(() => {
        if (vantaRef.current) {
            vantaInstance.current = CLOUDS({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: useDarkMode ? 0xffffff : 0x0,
                backgroundColor: useDarkMode ? 0x0 : 0xffffff,
                spacing: 16.00
            });
        }

        return () => {
            if (vantaInstance.current) {
                vantaInstance.current.destroy();
                vantaInstance.current = null;
            }
        };
    }, [useDarkMode]);

    return (
        <div className={`w-screen h-screen flex justify-center items-end ${useDarkMode ? 'bg-black' : 'bg-white'}`} ref={vantaRef}>
            <img src={animated_me} alt="animated me" className="w-[785px] absolute left-[290px]" />

            <h1 className={`cedarville-cursive-regular text-[120px] max-w-[300px] absolute top-[90px] left-[50px] ${useDarkMode ? 'text-yellow-400' : 'text-red-500'} z-50`}>
                great things take time
            </h1>

            <section className="teko-font text-[70px] absolute top-[150px] right-[50px] uppercase flex max-w-[700px] flex-col">
                <h2 className={`${useDarkMode ? 'text-cyan-400' : 'text-blue-600'} self-end`}>
                    Computer <span className={`kaushan-script-regular text-[30px] ${useDarkMode ? 'text-white' : 'text-black'}`}>Science</span>
                </h2>

                <div className={`${useDarkMode ? 'text-cyan-400' : 'text-blue-600'} grid grid-cols-[30%_auto] self-end`}>
                    <h2 className={`kaushan-script-regular text-[20px] max-w-[170px] self-center ${useDarkMode ? 'text-white' : 'text-black'}`}>nature & architecture</h2>
                    <h2>Photography</h2>
                </div>

                <h2 className={`${useDarkMode ? 'text-cyan-400' : 'text-blue-600'} self-end`}>
                    Data <span className={`kaushan-script-regular text-[30px] ${useDarkMode ? 'text-white' : 'text-black'}`}>Science</span>
                </h2>
            </section>

            <h2 className={`text-[40px] capitalize absolute bottom-[40px] right-[40px] flex items-center ${useDarkMode ? 'bg-white text-black drop-shadow-[2px_4px_4px_rgba(255,255,255,0.5)]' : 'bg-black text-white drop-shadow-[2px_4px_4px_rgba(0,0,0,0.5)]'} rounded-[10px] px-[10px] py-[5px] kaushan-script-regular cursor-pointer`}>
                Let's Explore <FontAwesomeIcon icon={faArrowRight} className="ml-[20px]" />
            </h2>
        </div>
    )
}

export default HomePage;