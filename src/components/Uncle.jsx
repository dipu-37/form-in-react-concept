import Cousin from "./Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>uncle</h2>
            <section className="flex">
            <Cousin name={'dipu'}></Cousin>
            <Cousin name={'rakin'}></Cousin>
            </section>
           

        </div>
    );
};

export default Uncle;