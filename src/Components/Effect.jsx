// What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. 
// React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing 
// the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other
//  imperative API.

import React, { useEffect, useState } from 'react'

const Effect = () => {
   const[count, setCount] = useState(0);
   const[count1, setCount1] = useState(0);


   useEffect(()=>{
    console.log("sufyan Shaikh");
   },[count1])
   const increment = () =>{
    setCount(count+1)
   }
   const decrement = () =>{
    setCount1(count1 - 1)
   }
  return (
    <>
      <h2>{count}</h2>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>

    </>
  )
}

export default Effect