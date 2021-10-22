import { useState } from "react";
import Cardlist from "../child/cardlist/cardList"

export default function Homepage(props) {
    const { menu_data, logo } = props;
    const [menu_visible, setMenuVisible] = useState(false);
    
    const memunculkanMenu = () => setMenuVisible(!menu_visible);

    return(
        <>
            <div className = "dark:bg-gray-900 mt-20 bg-white flex flex-col justify-center items-center w-50 h-50">
                <img
                src={logo}
                alt="Depot Es Krim Sahara"
                className="rounded-md h-32 sm:h-48 object-cover"
                />
                <button onClick = {memunculkanMenu} className = " mt-8 py-4 px-10 bg-green-500 rounded-full font-bold text-white text-xl hover:bg-green-300 transition duration-300 ease-in-out flex items-center animate-bounce">
                    Lihat Menu
                </button>
                {menu_visible && <Cardlist menu_data = {menu_data}/>}
            </div>
        </>
    )
}
