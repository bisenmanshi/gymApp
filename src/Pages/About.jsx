import TrainerList from '../controllers/TrainerList';
import banner from "../img/3209068-uhd_3840_2160_25fps.mp4"
import Footer from "../controllers/Footer"
const About=()=>{
    return(
        <div className="flex flex-col">
           <div>
             <h1 className="font-bold text-5xl mt-28 text-center text-white mb-6">ABOUT <span className="text-cyan-600 font-bold text-5xl text-center mb-6">OUR GYM</span></h1>
             
              <p className="text-slate-300 text-center text-lg italic">A gym is a facility equipped for physical exercise, offering machines, free weights, <br/>and fitness classes. 
                It's designed for improving strength, endurance, and overall health.<br/>
                Gyms often provide personal training services, group workouts, and wellness programs, 
                fostering a community for fitness enthusiasts.</p>
                </div>
          <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={banner} type="video/mp4" />
          </video>
        </div>
           
       
          <div className="container mx-auto p-2">
         <h1 className="text-4xl font-bold text-center text-white mb-6">Meet Our Trainers</h1>
         <TrainerList />
        </div>
        <div className='mt-40'>
          <Footer/>
        </div>
       </div>
        
    )
}
export default About;