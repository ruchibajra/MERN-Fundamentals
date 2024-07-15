import React, {useState} from 'react'
import BComponent from './BComponent';

const AComponent = () => {
    const [message, setMessage] = useState('hello this is prop drilling');

  return (
   <BComponent message = {message}/>
  )
};

export default AComponent
