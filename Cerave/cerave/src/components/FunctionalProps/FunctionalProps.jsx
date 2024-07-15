import React from 'react'
import ShopComponent from '../Shop/ShopComponent'
import TestFunctionalProps from '../Card/TestFunctionalProps'

const FunctionalProps = () => {

    const handleClick=()=>{
        alert("Function is passed as props!!!")
    }
  return (
    <>
    <div>Functional Props</div>
    <TestFunctionalProps onButtonClick={handleClick}/>
    </>
  )
}

export default FunctionalProps
