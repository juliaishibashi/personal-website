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
    const { name, email, subject, message } = formData;

    const params = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      params,
      process.env.REACT_APP_USER_ID
    )
    .then((response) => {
      console.log('Success:', response);
      alert('Email sent successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Sorry, something went wrong.');
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div name='contact' className='w-full md:h-screen bg-[#fbc1d4] text-[#000]'>
      <div className='max-w-[1000px] mx-auto p-4'>
        {/* Title */}
        <div className='text-center'>
          <p className='text-5xl inline border-b border-[#000000]'>Contact</p>
          <p className='py-6'></p>
        </div>
        
        {/* Form */}
        <form className='flex flex-col max-w-[600px] mx-auto' onSubmit={handleSubmit}>
          <input
            className='bg-[#FFFFFF] p-2 rounded-lg mb-4'
            type="text"
            placeholder='Name'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className='bg-[#FFFFFF] p-2 rounded-lg mb-4'
            type="email"
            placeholder='Email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className='bg-[#FFFFFF] p-2 rounded-lg mb-4'
            type="text"
            placeholder='Subject'
            name='subject'
            id='subject'
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            className='bg-[#FFFFFF] p-2 rounded-lg mb-4'
            name="message"
            rows="6"
            placeholder='Message'
            id='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type='submit'
            className='text-black group border-black rounded-full border-2 hover:text-[#fbc1d4] hover:bg-black hover:border-black px-4 py-3 mx-auto flex items-center'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
