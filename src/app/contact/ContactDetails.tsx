import { Mail, Phone, Pin } from "lucide-react";
import React from "react";

export default function ContactDetails() {
  return (
    <div className='w-full grid grid-cols-2 gap-10'>
      <div className=''>
        <Mail />
        <h3>Email</h3>
        <p>cloudpuff@gmail.com</p>
      </div>
      <div>
        <Phone />
        <h3>Phone</h3>
        <p>+63982763618</p>
      </div>
      <div>
        <Pin />
        <h3>Office</h3>
        <p>Dimasarsarakan Street.</p>
      </div>
    </div>
  );
}
