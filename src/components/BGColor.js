import { useState } from "react";
import '../App.css';
function BGColor() {
    const [color, setColor] = useState("aqua");
    return (
        <div className="w-full h-screen duration-200"
            style={{ backgroundColor: color }}>
            <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 ">
                <div className="flex flex-wrap justify-center gap-3 bg-white px-10 py-3 rounded-3xl  ">
                    <button className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
                    <button className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: "Green" }} onClick={() => setColor("Green")}>Green</button>
                    <button className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: "Yellow", color: "black" }} onClick={() => setColor("Yellow")}>Yellow</button>
                    <button className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
                    <button className="px-4 py-1 rounded-full text-white" style={{ backgroundColor: "hotpink" }} onClick={() => setColor("hotpink")}>Pink</button>
                </div>
            </div>

        </div>
    )
}
export default BGColor;