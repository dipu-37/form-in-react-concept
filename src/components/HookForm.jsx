import useInputState from "./useinputState";


const HookForm = () => {
    // const [name, handleNameChange]=useInputState('rojoni sojoni')
    const emailState = useInputState('rojoni@sojoni')
    const handleSubmit= e =>{
        e.preventDefault();
        // console.log('form data',name )
        console.log('form data', emailState.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;