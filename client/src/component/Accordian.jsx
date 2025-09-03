import React from 'react'
import { useRef } from 'react'

const Accordian = () => {

    const contentRef = useRef(null);

  return (
    <>
        <h1>Accordian Component</h1>
    <div className='border p-4 m-4'>
        <div className=' flex justify-between gap-4'>
            <div className='font-bold text-lg'>

            <p>what is this</p>
            </div>
            <div>

                

            <button onClick={() => contentRef.current.classList.toggle('hidden')}>+</button>

            </div>

        </div>
            <div ref={contentRef} className='hidden'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo delectus dolorum saepe debitis nisi ut non aut. Dicta, dignissimos ut. Harum iste commodi nisi repellat quis! Nobis, architecto possimus.</p>
            </div>

    </div>
    </>
  )
}

export default Accordian
