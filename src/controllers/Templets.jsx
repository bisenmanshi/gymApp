import LoginForm from "../controllers/LoginForm"
import frameImage from "../img/frame.png"
const Templets=({title, image,formtype,setIsLoggedIn})=>{
    return(
        <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
           <div className="w-11/12 max-w-[450px]">
               <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
               {formtype ==="login"&& (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
           </div>
           <div className=" relative w-11/12 max-w-[450px]">
           <img src={frameImage} 
                alt="image" 
                width={440} 
                height={500} 
                loading="lazy"/>

           <img src={image}
                 alt="gym" 
                 width={500} 
                 height={500} 
                 loading="lazy"
                 className="absolute top-10 right-2"/>
           </div>
        </div>
    )
}
export default Templets;