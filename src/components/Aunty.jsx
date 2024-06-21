import {  useContext } from "react";
import Cousin from "./Cousin";
import { MonyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [money, setmoney]=useContext(MonyContext);
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
                <Cousin name={'Mamshad'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
          
            </section>
            <p>Money: {money}</p>
            <button onClick={()=>setmoney(money+1000)}>add 1000 tk</button>
        </div>
    );
};

export default Aunty;