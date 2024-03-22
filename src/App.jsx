
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import TwitterHome from "./pages/TwitterHome"
import Login from "./component/login/Login"
import SignUp from "./component/signup/SignUp"



function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<TwitterHome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>} />

      </Routes>
    </Router>

      
    </>
  )
}

export default App
