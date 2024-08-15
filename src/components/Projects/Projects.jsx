import "./Projects.css";
import Wordle from "./Game Cards/Wordle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import WordleGame from "./Games/Wordle";

const Projects = () => {
    const [showWindow, setShowWindow] = useState(true);

    return (
        <div className="w-screen h-screen bg-white">
           {showWindow && <div className="absolute w-screen h-screen bg-transparent flex items-center justify-center drop-shadow-[0px_5px_5px_rgba(0,0,0,1)]z-50">
                <div className="w-[80%] h-[80%] z-50 rounded-[20px] flex justify-center items-center">
                    <WordleGame />
                </div>

                <div className="absolute w-[40px] h-[40px] bg-red-600 top-[10%] z-50 right-[10%] cursor-pointer flex justify-center items-center" onClick={() => {setShowWindow(false)}}>
                    <FontAwesomeIcon icon={faX} className="text-white text-[20px]" />
                </div>
            </div>}

            <section className="w-full h-auto border-[1px] border-red-500 p-[20px] flex flex-col">
                <div className="w-full h-auto border-[1px] border-red-500 flex justify-center items-center">
                    <h1 className="text-black text-[80px] font-rubik-mono-one uppercase">
                        Games
                    </h1>
                </div>

                <div className="flex flex-row justify-evenly flex-wrap border-[1px] border-red-500 p-[20px] gap-y-[30px]">
                    {<Wordle showTheWindow={() => setShowWindow(true)} />}
                </div>
            </section>
        </div>
    )
}

export default Projects;