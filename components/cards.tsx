import React from 'react'

const Cards = () => {
  return (
    <div className='w-full px-10 py-20 bg-zinc-100 '>
        <h1 className='w-full pb-10 mb-10 text-black text-5xl font-["NeueMontreal"] border-b-[1px] border-zinc-900'>
        Clients' reviews
      </h1>
        <div className='flex items-center justify-center gap-5'>
        <div className="relative h-[60vh] w-[55%] bg-[rgba(0,77,67)] rounded-2xl flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute bottom-6 left-8 font-["NeueMontreal"] border-[0.1px] border-[#6d7c38] text-[rgba(205,234,104)] py-1 px-3 rounded-full text-xs'>&copy;2019-2022</button>
        </div>
        <div className="relative h-[60vh] w-[30%] bg-zinc-800 rounded-2xl flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute bottom-6 left-8 font-["NeueMontreal"] border-[0.1px] py-1 px-3 rounded-full text-xs uppercase'>rating 5.0 on clutch</button>
        </div>
        <div className="relative h-[60vh] w-[35%] bg-[rgb(33,33,35)] rounded-2xl flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='h-16 w-16' />
        <button className='absolute bottom-6 left-8 font-["NeueMontreal"] border-[0.1px] py-1 px-3 rounded-full text-xs uppercase'>business bootcamp alumni</button>
        </div>
        </div>
      
    </div>
  )
}

export default Cards
