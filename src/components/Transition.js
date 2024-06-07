import React from "react"
import styled from "styled-components"

const TransitionStyles = styled.div`
    height: 100vh;
    background-color: #111;
    z-index: 10;

    @keyframes shutter{

    
    }
`

export default function Transition () {
  return (
    <>
      <TransitionStyles>
        <h1>Extracting the color ...</h1>
      </TransitionStyles>
    </>
  )
};

