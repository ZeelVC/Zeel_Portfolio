"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select,  
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 926 572 7707",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "zeelvc7@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "A-103, Mahek Residency, Opp. Haridarshan Society, Singanpore - Causeway Road, Katargam, Surat - 395004, Gujarat, India",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = "Someone Reach Out through Portfolio";
    const body = `
      Name: ${formData.firstname} ${formData.lastname}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Service: ${formData.service}
      Message: ${formData.message}
    `;

    const mailtoLink = `mailto:zeelvc7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;

    // Optional: Reset form after submission
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I am passionate about my work. Let's collaborate and achieve new level in the work and make the commendable progress.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} required/>
                <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} required/>
                <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required/>
                <Input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} required/>
              </div>
              {/* select */}
              <Select name="service" onValueChange={(value) => handleChange({ target: { name: 'service', value } })} value={formData.service} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Software Development">Software Development</SelectItem>
                    <SelectItem value="Electronics-Hardware">Electronics-Hardware</SelectItem>
                    <SelectItem value="Financial Advice">Financial Advice</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea 
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                    bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Contact
