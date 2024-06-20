
import './App.css'
import HookForm from './components/HookForm'
import RefForm from './components/RefForm'
import ReuseAbleForm from './components/ReuseAbleForm'
import SimpleForm from './components/SimpleForm'
import StatefullForm from './components/StatefullForm'

function App() {
   const handleSignUpSubmit = data=>{
        // e.preventDefault();
        console.log('sign up form', data)
    }
   const handleUpdatProfile= data=>{
    // e.preventDefault()
    console.log('updat form', data)
   }
  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseAbleForm formTitle={'sign up'} handlSubmit={handleSignUpSubmit}>
        <h2>pleace sign up </h2>
        <p>must sign up</p>
      </ReuseAbleForm>
      <ReuseAbleForm formTitle={'Profile update'} submitbtntext='update' handlSubmit={handleUpdatProfile}>
      <h2>pleace update </h2>
      <p>must update</p>
      </ReuseAbleForm>
    </>
  )
}

export default App
