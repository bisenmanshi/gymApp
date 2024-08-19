// import React from "react";
// import bg1 from "../img/hero-bg.jpg";
// import service from "../img/services/service-pic.jpg";
// import service1 from "../img/services/service-icon-1.png";
// import service2 from "../img/services/service-icon-2.png";
// import service3 from "../img/services/service-icon-3.png";
// import service4 from "../img/services/service-icon-4.png";
// import Footer from "../controllers/Footer"
// import MainComponent from "../controllers/MainComponent";
// const Home = () => {
//   return (
//     <div className="bg-gray-900 ">
//        <div className="relative">
//       <img src={bg1} alt="Sample" className="object-cover w-full h-auto" />
//       <div className="absolute -top-5 -left-60 w-full h-full flex flex-col items-center justify-center text-center text-white p-5 md:p-5 lg:p-60 ">
//         <div className="mx-auto">
//         <h1 className="text-4xl font-bold italic">
//           INCREASE YOUR<br />MUSCLE POWER
//         </h1>
//         <p className="text-lg text-slate-300 mt-3">
//           The small river named Duden flows by their place and supplies it with<br/>
//           the necessary regalia.
//         </p>
//           <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-3 mt-6 px-4 rounded">
//             KNOW MORE
//           </button>
       
//         </div>
//        </div>
//        </div>
//       <div className="text-center">
//         <h1 className="text-6xl font-bold text-white mt-10 mb-10">UNLIMITED CLASSES</h1>
//       </div>
//         <div className="flex">
//         <img src={service} alt="Services" className="h-[610px] w-[800px] "/>
//         <div className="bg-black">
//             <div className="grid grid-cols-2 gap-4 p-20 text-white">
//                 <div>
//                 <img src={service1} className="mb-6" />
//                 <h1 className="text-xl font-bold">Strategies</h1>
//                 <p>A gym strategy involves setting clear goals, balancing cardio and strength training, varying routines for muscle confusion, maintaining proper
//                      form, and prioritizing rest and nutrition for optimal results.</p>
//                 </div>
//                 <div>
//                 <img src={service2} className="mb-6"/> 
//                 <h1 className="text-xl font-bold">Yoga</h1>
//                 <p>Explore yoga sessions at our gym, combining fitness and mindfulness. Enhance flexibility, strength, and inner peace with expert guidance and a supportive community.
//                      Join us for a transformative yoga experience today.</p>
//                 </div>
//                 <div>
//                 <img src={service3} className="mb-6"/>
//                 <h1 className="text-xl font-bold">Workout</h1>
//                 <p>Each workout should take 45 minutes to an hour and you should always leave 48 hours between workouts to rest and recover properly. 
//                     A Monday-Wednesday-Friday routine works well for most people.</p>
//                  </div>
//                  <div >
//                  <img src={service4} className="mb-6"/>
//                  <h1 className="text-xl font-bold">Weight Loss</h1>
//                  <p> Achieve weight loss in the gym through a combination of regular cardio exercises, strength training, and a balanced diet. 
//                     Consistency and dedication are key to seeing significant, sustainable results.</p>
//                 </div>
//                </div>
//              </div>
//            </div>
//               <div className="container mx-auto p-4">
//                 <h1 className="text-white font-bold text-6xl text-center mt-10 mb-10">MEMBERSHIP PLANS</h1>
//               <MainComponent/> 
//               </div>
             
          
//            <Footer />
//       </div>
   
   
       
    
    
//   );
// };

// export default Home;
// Import necessary dependencies and assets
import React from "react";
import bg1 from "../img/hero-bg.jpg";
import service from "../img/services/service-pic.jpg";
import service1 from "../img/services/service-icon-1.png";
import service2 from "../img/services/service-icon-2.png";
import service3 from "../img/services/service-icon-3.png";
import service4 from "../img/services/service-icon-4.png";
import Footer from "../controllers/Footer";


const membershipPlans = [
  {
    title: "Basic Plan",
    price: "$29.99/month",
    features: ["Access to gym facilities", "Limited classes"],
    icon: service1,
  },
  {
    title: "Standard Plan",
    price: "$49.99/month",
    features: ["Full access to gym and classes", "Personal trainer sessions"],
    icon: service2,
  },
  {
    title: "Premium Plan",
    price: "$79.99/month",
    features: ["VIP access", "Unlimited classes", "Exclusive events"],
    icon: service3,
  },
];

const Home = () => {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative">
        <img src={bg1} alt="Sample" className="object-cover w-full h-auto" />
        <div className="absolute -top-5 -left-60 w-full h-full flex flex-col items-center justify-center text-center text-white p-5 md:p-5 lg:p-60">
          <div className="mx-auto">
            <h1 className="text-4xl font-bold italic">
              INCREASE YOUR<br />MUSCLE POWER
            </h1>
            <p className="text-lg text-slate-300 mt-3">
              The small river named Duden flows by their place and supplies it with<br/>
              the necessary regalia.
            </p>
            <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-3 mt-6 px-4 rounded">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
      
      {/* Unlimited Classes Section */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mt-10 mb-10">UNLIMITED CLASSES</h1>
      </div>
      
      {/* Services Section */}
      <div className="flex justify-center">
        <img src={service} alt="Services" className="h-[610px] w-[800px]"/>
        <div className="bg-black p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <div className="flex flex-col justify-center items-center">
              <img src={service1} className="mb-6" />
              <h1 className="text-xl font-bold">Strategies</h1>
              <p>A gym strategy involves setting clear goals, balancing cardio and strength training, varying routines for muscle confusion, maintaining proper form, and prioritizing rest and nutrition for optimal results.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={service2} className="mb-6"/> 
              <h1 className="text-xl font-bold">Yoga</h1>
              <p>Explore yoga sessions at our gym, combining fitness and mindfulness. Enhance flexibility, strength, and inner peace with expert guidance and a supportive community. Join us for a transformative yoga experience today.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={service3} className="mb-6"/>
              <h1 className="text-xl font-bold">Workout</h1>
              <p>Each workout should take 45 minutes to an hour and you should always leave 48 hours between workouts to rest and recover properly. A Monday-Wednesday-Friday routine works well for most people.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={service4} className="mb-6"/>
              <h1 className="text-xl font-bold">Weight Loss</h1>
              <p>Achieve weight loss in the gym through a combination of regular cardio exercises, strength training, and a balanced diet. Consistency and dedication are key to seeing significant, sustainable results.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Membership Plans Section */}
      <div className="container mx-auto p-4">
        <h1 className="text-white font-bold text-6xl text-center mt-10 mb-10">MEMBERSHIP PLANS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipPlans.map((plan, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 text-white hover:bg-gray-700 transition duration-300 ease-in cursor-pointer">
              <img src={plan.icon} alt={plan.title} className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
              <p className="mb-4">{plan.price}</p>
              <ul className="list-disc list-inside">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
