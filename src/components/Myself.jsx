import Special from "./Special";

const Myself = ({asset}) => {
    return (
        <div className="grandpa">
            <h2>Myself</h2>
            <Special asset={asset}></Special>
        </div>
    );
};

export default Myself;