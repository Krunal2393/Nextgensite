import ContactForm from "../components/ContactForm"


function Contact() {
  return (
    <>
     <section className="w-full  min-h-screen bg-gradient-noise text-white flex flex-col justify-center">
    <div className="max-w-7xl mx-4 sm:mx-8 z-20 lg:mx-40 px-6 pt-7 text-center flex flex-col md:flex-row gap-8 md:gap-20 md:text-left">
        <div className="font-semibold text-2xl md:text-[50px] w-full md:w-[50%] leading-tight md:leading-[100%] tracking-normal">
            Get Free
            Consultation Today.
            Give us a Call!
        </div>
        <div className="bg-white rounded-xl w-full md:w-[50%] px-2 py-2 flex items-center justify-center mt-6 md:mt-0">
            <img src="src/assets/contact.png" className="w-32 md:w-2xs" alt="contact" />
        </div>
    </div>
    
    </section>
    <ContactForm />
    </>
  )
}

export default Contact
