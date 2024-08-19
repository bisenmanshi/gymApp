
import loginImg from "../img/classes/classes-1.jpg"
import Templets from "../controllers/Templets";
const Login=({setIsLoggedIn})=>{
    return(
     <Templets
       title="Admin Login"
       image={loginImg}
       formtype="login"
       setIsLoggedIn={setIsLoggedIn}
     />
    )
}
export default Login;