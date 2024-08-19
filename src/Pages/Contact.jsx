import Footer from "../controllers/Footer"
import ContactDetails from "../controllers/ContactDetails";
import ContactForm from "../controllers/ContactForm";
const Contact=()=>{
    return(
        <div>
          <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
            <div className="lg:w-[40%]">
               <ContactDetails />
            </div>
            <div>
                <ContactForm/>
            </div>
          </div>
          <div className="mt-5">
          <Footer />
          </div>
          
        </div>
       
    )
}
export default Contact;