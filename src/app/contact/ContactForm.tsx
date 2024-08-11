"use client";
import { SubmitButton } from "@/components/ui/SubmitButton";
import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      setLoading(true);
      emailjs.sendForm(
        "service_iocf6th",
        "template_klfj2h9",
        formRef.current,
        "7kHywKl8cYP1dq5C5"
      );
      // .then(
      //   () => {
      //     toast.success("Your message has been sent!");
      //     formRef.current?.reset();
      //     setLoading(false);
      //   },
      //   (error) => {
      //     toast.error("Oops! Something went wrong!");
      //     console.error("FAILED...", error.text);
      //     setLoading(false);
      //   }
      // );
    }
  };
  return (
    <div className='w-full'>
      <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>
        <div>
          <label htmlFor='name' className='block font-bold text-slate-300'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='mt-1 block w-full text-slate-950 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Your name'
            required
          />
        </div>

        <div>
          <label htmlFor='email' className='block font-bold text-slate-300'>
            Email
          </label>
          <input
            type='email'
            id='sender_email'
            name='sender_email'
            className='mt-1 block w-full px-3 py-2 text-slate-950 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='you@example.com'
            required
          />
        </div>

        <div>
          <label htmlFor='message' className='block font-bold text-slate-300'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={4}
            className='mt-1 block w-full px-3 py-2 border text-slate-950 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Your message'
            required
          />
        </div>

        <div className='text-center'>
          <SubmitButton loading={loading} />
        </div>
      </form>
    </div>
  );
}
