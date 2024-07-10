//rafce

import React from 'react'

const CardComponent = () => {
  const style = {
    wrapper: {
      color: "blue",
      fontWeight: "bold"
    }
  }

  return (
    <section>
      {/* <div style={{color: 'red'}}>Hello this is RUCHI</div> */}
      <div style={style.wrapper}>Hello this is RUCHI</div>

    </section>

   
  )
}

export default CardComponent

