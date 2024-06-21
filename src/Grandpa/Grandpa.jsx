import { createContext, useState } from "react";
import Aunty from "../components/Aunty";
import Dad from "../components/Dad";
import Uncle from "../components/Uncle";
import './Grandpa.css';

export const AssetContext = createContext('gold');
export const MonyContext = createContext(3000);
const Grandpa = () => {
    const [money, setmoney]=useState(3000)
    const asset= "diamond"
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net money: {money}</p>
           <MonyContext.Provider value={[money, setmoney]}>
           <AssetContext.Provider value="gold">
           <section className="flex">
                <Uncle></Uncle>
                <Aunty></Aunty>
                <Dad asset={asset}></Dad>
            </section>
           </AssetContext.Provider>
           </MonyContext.Provider>
        </div>
    );
};

export default Grandpa;