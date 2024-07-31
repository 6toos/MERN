import React from 'react'

export default function Header() {
    return (
        <header className='bg-slate-300 shadow-md'>
            <div className='flex justify-between'>
                <h1 className='text-bld text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Sahana</span>
                <span className='text-slate-800'>Estate</span>
                </h1>
                <form>
                    <input type='text' placeholder='Search'/>
                </form>
            </div>
        </header>
  )
}
