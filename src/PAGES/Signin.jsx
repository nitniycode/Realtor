import React from 'react'

export default function signin() {
  return (
    <section>
      <h1 className='text-3xl font-bold text-center py-6'>Sign In</h1>
      <div className='max-w-6xl mx-auto my-5 flex flex-wrap items-center'>
        <div className='lg:w-[50%] md:w-[67%] mx-4 md:m-auto'>
          <img 
          src='./key.png' 
          className='w-full rounded-2xl'
          />

        </div>
        <div className='mx-auto md:mt-6 lg:w-[40%] lg:ml-20 md:w-[67%]'>
          <form>
            <input
              className='w-full rounded-md h-8  my-11'
              placeholder='Email Address '
            />
            <input 
            className='w-full rounded-md h-8'
            placeholder='Password '
            />

          </form>
       </div>
      </div>
    </section>
  )
}
