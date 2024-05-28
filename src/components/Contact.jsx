import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#FDE9EA] flex justify-center items-center p-4'>

      <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#588061] text-[#869F77]'>Contact</p>
        </div>
        <p className='text-[#588061]'>Please fill out the form below to contact me</p>
        <p className='py-4'></p>
        <input className='bg-[#FFFFFF] p-2 rounded-md' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#FFFFFF] rounded-lg' type="email" placeholder='Email' name='email' />

        <textarea className='bg-[#FFFFFF] p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>


        <button className='text-[#588061] group border-[#588061] rounded-full border-2 hover:text-white hover:bg-[#869F77] hover:border-[#869F77] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
      </form>
    </div>
  )
}

export default Contact