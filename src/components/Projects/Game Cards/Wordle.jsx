import wordle from "../../../images/wordle.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";

const Wordle = ({ showTheWindow }) => {
    return (
        <div className="group w-[400px] h-[200px] rounded-[10px] grid grid-rows-[0%_0%_100%] hover:grid-rows-[90%_10%_0%] transition-all duration-500 ease-in-out cursor-pointer drop-shadow-[0px_5px_5px_rgba(0,0,0,1)] hover:w-[600px] hover:h-[300px]" onClick={() => showTheWindow()}>
            <div className="bg-black rounded-t-[10px] grid grid-cols-[60%_40%]">
                <div className="grid grid-rows-[35px_2px_auto]">
                    <div className="text-white text-[16px] font-mono font-bold capitalize flex justify-center items-center">
                        about wordle
                    </div>
                    
                    <div className="flex justify-center items-center">
                        <hr className="w-[90%] bg-white h-[1px]" />
                    </div>

                    <div className="text-white text-[12px] font-mono flex flex-col overflow-y-scroll h-[120px] group-hover:h-[230px] px-[20px] py-[10px] custom-scrollbar transition-all duration-500 ease-in-out gap-y-[15px] text-center">
                        <p>Wordle is a popular online word puzzle game where players have six attempts to guess a hidden five-letter word.</p>

                        <p>Each guess provides feedback through color-coded hints: green indicates correct letters in the correct position, yellow shows correct letters in the wrong position, and gray reveals incorrect letters.</p>

                        <p>The goal is to deduce the correct word within the allowed attempts. The game is celebrated for its simple yet engaging gameplay, challenging players to use logic and vocabulary skills to solve the puzzle.</p>
                    </div>
                </div>

                <div className="border-l-[1px] border-white grid grid-rows-[35px_2px_auto]">
                    <div className="text-white text-[16px] font-mono font-bold capitalize flex justify-center items-center">
                        made using
                    </div>
                    
                    <div className="flex justify-center items-center">
                        <hr className="w-[90%] bg-white h-[1px]" />
                    </div>

                    <div className="custom-scrollbar flex flex-row flex-wrap justify-around p-[10px] overflow-y-scroll h-[120px] group-hover:h-[230px] transition-all duration-500 ease-in-out gap-y-[10px]">
                        <FontAwesomeIcon icon={faJs} className="w-[60px] h-[60px] text-yellow-400" />

                        <FontAwesomeIcon icon={faReact} className="w-[60px] h-[60px] text-cyan-400" />
                    </div>
                </div>
            </div>

            <div className="bg-yellow-300 w-full h-full flex justify-center items-center rounded-b-[10px]">
                <p className="text-black group-hover:text-[16px] text-[0px] transition-all duration-500 ease-in-out font-rubik-mono-one capitalize animate-pulse">
                    click to play
                </p>
            </div>

            <div className="w-full h-full flex justify-center items-center">
                <img src={wordle} alt="wordle" className="w-full h-full rounded-[10px] group-hover:rounded-t-none transition-all duration-500 ease-in-out" />

                <h3 className="text-white text-[80px] group-hover:text-[0px] font-bebas-neue absolute transition-all duration-500 ease-in-out drop-shadow-[0px_15px_15px_rgba(0,0,0,1)] group-hover:drop-shadow-[0px_5px_5px_rgba(0,0,0,1)]">
                    wordle
                </h3>
            </div>
        </div>
    )
}

export default Wordle;