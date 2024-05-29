import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send('service_7oogjz8', 'template_67ati0p', params, 'KUB6pAZBF30k3Hm3d')
      .then(() => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('sowwy not working yet :(');
      });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div name='contact' className='w-full md:h-screen bg-[#FDE9EA] flex justify-center items-center p-4'>
      <form className='flex flex-col max-w-[600px] w-full' onSubmit={handleSubmit}>
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 border-[#000000] text-[#869F77]'>Contact</p>
        </div>
        <p className='text-[#588061]'>Please fill out the form below to contact me</p>
        <p className='py-4'></p>
        <input
          className='bg-[#FFFFFF] p-2 rounded-lg'
          type="text"
          placeholder='Name'
          name='name'
          id='name'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className='my-4 p-2 bg-[#FFFFFF] rounded-lg'
          type="email"
          placeholder='Email'
          name='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className='my-4 p-2 bg-[#FFFFFF] rounded-lg'
          type="text"
          placeholder='Subject'
          name='subject'
          id='subject'
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          className='bg-[#FFFFFF] p-2 rounded-lg'
          name="message"
          rows="10"
          placeholder='Message'
          id='message'
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          type='submit'
          className='text-[#588061] group border-[#588061] rounded-full border-2 hover:text-white hover:bg-[#869F77] hover:border-[#869F77] px-4 py-3 my-8 mx-auto flex items-center'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;