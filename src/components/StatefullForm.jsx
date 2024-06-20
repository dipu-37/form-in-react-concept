import { useState } from "react";


const StatefullForm = () => {

    const [name, setName]=useState( 'sajoni rajoni');
    const [email, setEmail]= useState(null);
    const [password, setPassword]=useState(null);
    const [error, seterror]=useState();

    const handlesubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            seterror('password must be 6 character')
        }else{
            seterror('');
            console.log(name, email,password);

        }
        
    }
    const handleNameChange = e =>{
        // console.log(e.target.value);
        setName(e.target.value);

    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e=>{
        setPassword(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handlesubmit}>
                <input value={name} onChange={handleNameChange} type="text"  name="name"  />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password"  />
                <br />
                <input type="phone" name="phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefullForm;