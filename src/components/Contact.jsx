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
      if (error.response) {
        // when server res
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        // req sent but no res
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } finally {
      setIsSending(false);
    }
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div name='contact' className='w-full min-h-screen bg-white text-gray-800 py-16 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient circles */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#ffb7ec]/30 to-[#ff76bd]/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#ff76bd]/30 to-[#ff8580]/30 rounded-full blur-3xl"></div>
        
        {/* Medium gradient circles */}
        <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] bg-gradient-to-bl from-[#ff8580]/20 to-[#ffb7ec]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-gradient-to-tr from-[#ffb7ec]/20 to-[#ff76bd]/20 rounded-full blur-3xl"></div>
        
        {/* Small gradient circles */}
        <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] bg-gradient-to-br from-[#ff76bd]/20 to-[#ff8580]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[150px] h-[150px] bg-gradient-to-bl from-[#ff8580]/20 to-[#ffb7ec]/20 rounded-full blur-3xl"></div>
      </div>

      <div className='max-w-[800px] mx-auto p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 relative'>
        {/* Title */}
        <div className='text-center mb-12'>
          <h2 className='text-7xl font-serif mb-4 bg-gradient-to-r from-[#ffb7ec] via-[#ff76bd] to-[#ff8580] text-transparent bg-clip-text'>Get in Touch</h2>
          <p className='text-gray-600 text-lg'>Say hi, ask a question, or just send anything!</p>
        </div>

        {emailSent ? (
          <div className='text-center bg-white/90 p-8 rounded-2xl shadow-lg border border-gray-100'>
            <div className='text-5xl mb-4 animate-bounce'>✨</div>
            <p className='text-2xl font-medium mb-6 text-[#ff76bd]'>Your message has been sent!</p>
            <button
              className='bg-gradient-to-r from-[#ffb7ec] via-[#ff76bd] to-[#ff8580] text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105'
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
          <Stack 
            sx={{ 
              width: "100%", 
              justifyContent: 'center', 
              alignItems: 'center',
              '& .MuiTextField-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                '& .MuiFilledInput-root': {
                  borderRadius: '16px',
                  color: '#4B5563',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#6B7280',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#ff76bd',
                },
              },
            }}
            component="form"
            spacing={4}
            onSubmit={handleSubmit}
          >
            <TextField
              required
              fullWidth
              label='Name'
              name='name'
              variant='filled'
              value={name}
              onChange={handleNameChange}
              InputProps={{
                disableUnderline: true,
                className: 'text-gray-800',
              }}
            />
            <TextField
              required
              fullWidth
              label='Email'
              name='email'
              variant='filled'
              value={email}
              onChange={handleEmailChange}
              InputProps={{
                disableUnderline: true,
                className: 'text-gray-800',
              }}
            />
            <TextField
              required
              fullWidth
              label='Message'
              name='message'
              variant='filled'
              value={message}
              onChange={handleMessageChange}
              multiline
              rows={4}
              InputProps={{
                disableUnderline: true,
                className: 'text-gray-800',
              }}
            />
            <button
              type='submit'
              className='bg-gradient-to-r from-[#ffb7ec] via-[#ff76bd] to-[#ff8580] text-white px-12 py-4 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group'
              disabled={isSending}
              style={{
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff8580] via-[#ff76bd] to-[#ffb7ec] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {isSending ? (
                <span className="relative flex items-center gap-2">
                  <CircularProgress size={20} sx={{ color: 'white' }}/>
                  <span>Sending...</span>
                </span>
              ) : (
                <span className="relative flex items-center gap-2">
                  <span>Send Message</span>
                  <span className="text-xl transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              )}
            </button>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default Contact;