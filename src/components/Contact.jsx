import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'; 
import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sleep = waitTime => new Promise(resolve => setTimeout(resolve, waitTime));

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSending(true);
      // Simulate sending process
      await axios.post(`${process.env.REACT_APP_API_URL}/contact`, {
        name: name,
        email: email,
        message: message,
      })

      console.log("Message sent successfully");
      // After sending, mark email as sent
      setEmailSent(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
    }
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div name='contact' className='w-full md:h-screen bg-[#fbc1d4] text-[#000]'>
      <div className='max-w-[1000px] mx-auto p-4'>
        {/* Title */}
        <div className='text-center'>
          <p className='text-5xl inline border-b border-[#000000]'>Contact</p>
          <p className='py-6'></p>
        </div>
        {emailSent ? (
          <div className='text-center'>
            <p className='text-2xl'>Your message has been sent!</p>
            <button
              className='text-black group border-black border-2 hover:text-[#fbc1d4] hover:bg-black hover:border-black px-4 py-3 mx-auto mt-4 flex items-center'
              style={{
                borderRadius: '4px'
              }}
              onClick={() => {
                setEmail('');
                setMessage('');
                setEmailSent(false);
              }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
            <Stack sx={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}
            component="form"
            spacing={2}
            onSubmit={handleSubmit}
            >
          <TextField
            required
            fullWidth
            label='Name'
            name='name'
            variant='filled'
            color="black"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            required
            fullWidth
            label='Email'
            name='email'
            variant='filled'
            color="black"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            required
            fullWidth
            label='Message'
            name='message'
            variant='filled'
            color="black"
            value={message}
            onChange={handleMessageChange}
            multiline
            rows={4}
          />
          <button
            type='submit'
            className='text-black border-black border-2 hover:text-[#fbc1d4] hover:bg-black hover:border-black px-4 py-3 mx-auto flex items-center'
                disabled={isSending}
                style={{
                  borderRadius: '4px',
                  width: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',   
                }}
          >
            {isSending ? <CircularProgress size={16} sx={{ color: 'white' }}/> : 'Send'}
          </button>
        </Stack>
        )}
      </div>
    </div>
  );
};

export default Contact;
