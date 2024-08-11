import React from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export default function Contact() {
  return (
    <div className='h-screen max-w-[1300px] mx-auto mt-20 md:px-20 overflow-hidden'>
      <div className=' text-center md:text-left'>
        <h1 className='text-5xl mb-5'>Get in touch</h1>
        <p className='mb-5'>Fill out the form to contact us</p>
      </div>
      <div className='grid md:grid-cols-2 justify-center md:justify-between items-center gap-20'>
        <ContactForm />

        <ContactDetails />
      </div>
    </div>
  );
}
