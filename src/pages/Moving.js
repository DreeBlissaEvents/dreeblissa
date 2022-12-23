import React, { useState } from 'react'
import MovingText from 'react-moving-text'
import { setCounter, selectedItems } from 'react'

 
const AnimationsForChaining = [ "fadeOutToBottom", "jelly"]
 
const Moving = () => {
 
  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])
 
  const handleChainAnimation = () => {
    setCounter(animationIndex+1)
    setAnimationType(selectedItems[animationIndex+1])
  }
 
  return (
    <MovingText
      onAnimationEnd={handleChainAnimation}
      type={animationType}
      duration="1000ms"
      timing="linear"
      iteration="infinite">
        <p><h3><em>DREEEBLISSA </em>   WE OFFER SERVICES AS PER YOUR REQUIREMENTS</h3> </p>

    </MovingText>
  )
}


export default Moving;