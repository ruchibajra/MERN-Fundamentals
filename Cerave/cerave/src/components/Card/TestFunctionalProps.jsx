import React from 'react'

const TestFunctionalProps = ({onButtonClick}) => {
  return (
    <>
    <div className='mx-2'>Test Functional Props</div>
    <button onClick={onButtonClick} className='bg-blue-400 text-white mx-2 rounded p-1'>Buy Now OKK!!!</button>
    </>
  )
}

export default TestFunctionalProps
