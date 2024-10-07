import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc/index';
import { slideIn,textVariant } from '../utils/motion';
import send from '../assets/storage/send.png';
import sendHover from '../assets/storage/sendHover.png';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
   emailjs
      .send(
        'service_cr02qwh', // paste your ServiceID here (you'll get one when your service is created).
        'template_rsc51m1', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'DK', // put your name here.
          from_email: form.email,
          to_email: 'dkganesh2002@gmail.com', //put your email here.
          message: form.message,
        },
        'tWK4mvnhYslgtMkBA' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
        console.log("Message sent to DK!!!")
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div
      className="dk-contact-div flex flex-col-reverse 
      gap-10 overflow-hidden mb-[4em]">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="dkborder flex-[0.75]  p-8 rounded-2xl w-full sm:w-9/12 sm:m-auto shadow-2xl lg:shadow-none md:shadow-none">
        <motion.div variants={textVariant()}>
            <h2 className='dk-sec-header m-2 p-2 pt-0 mt-0  text-center text-2xl font-semibold capitalize'>Contact</h2>
        </motion.div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 ">
          <label className="flex flex-col">
            <span className=" font-semibold mb-4 text-xl">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              required
              onChange={handleChange}
              placeholder="What's your name?"
              className="dkborder py-4 px-6
               rounded-lg outline-none
              border-none font-medium bg-slate-300 transition duration-[0.2s] ease-in-out  hover:bg-white"
            />
          </label>
          <label className="flex flex-col">
            <span className=" font-semibold text-xl mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your email?"
              className="dkborder py-4 px-6
              bg-slate-300
               rounded-lg outline-none
              border-none font-medium transition duration-[0.2s] ease-in-out hover:bg-white text-black"
            />
          </label>
          <label className="flex flex-col">
            <span className=" font-semibold text-xl mb-4 ">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="dkborder py-4 px-6
               rounded-lg outline-none bg-slate-300
              border-none font-semibold  resize-none transition duration-[0.2s] ease-in-out hover:bg-white text-black"
            />
          </label>

          <button
            type="submit"
            className=" flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px]  
            font-bold  items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] 
            dkborder hover:scale-105 bg-slate-300
            transition duration-[0.2s] ease-in-out hover:bg-white text-black"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[35px] sm:h-[35px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
