import React from 'react'

export default function ScoreComponent() {
  return (
    <div className="mt-2 ml-2 outline-[5px] outline outline-black bg-green-500 relative w-[330px] h-[120px] border-[0px] border-blue-700">
        <div className="absolute">
          <div className='w-[20px] h-20 bg-cyan-700'></div>
          <div className='absolute left-[20px] top-0 w-[160px] h-20 bg-green-700 border-black'>
            <p className='flex justify-center items-center h-full font-montserrat font-extrabold text-white text-2xl'>
              JPN
            </p>
          </div>
          <div className='absolute left-[180px] top-0 w-[75px] h-20 bg-purple-700 border-black'>
            <p className='flex justify-center items-center h-full font-montserrat font-extrabold text-white text-2xl'>
              0
            </p>
          </div>
          <div className='absolute left-[255px] top-0 w-[75px] h-20 bg-blue-700 border-black'>
            <p className='flex justify-center items-center h-full font-montserrat font-extrabold text-white text-2xl'>
              17
            </p>
          </div>
          <div className='absolute top-[80px] w-[180px] h-[40px] bg-orange-700 border-black'>
            <p className='flex justify-center items-center h-full font-montserrat font-extrabold text-white text-sm gap-1'>
              <span className='mb-[3px]'>
                <span className='text-2xl'>●</span>
                <span className='text-2xl'>○</span>
              </span>
              <span>
                CHALLENGE
              </span>
            </p>
          </div>
          <div className='absolute top-[80px] left-[180px] w-[150px] h-[40px] bg-lime-700-700 border-black'>
            <p className='flex justify-center items-center h-full font-montserrat font-extrabold text-white text-sm gap-1'>
              <span className='mb-[3px]'>
                <span className='text-2xl'>○</span>
              </span>
              <span>
                TIME OUT
              </span>
            </p>
          </div>
        </div>
      </div>
  )
}
