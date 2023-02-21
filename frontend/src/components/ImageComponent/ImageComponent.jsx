import React from 'react'
import backgorund from "../../assets/backgroundimage.jpg"
import "./ImageComponent.css"
function ImageComponent() {
  return (
    <div> 

        <img src={backgorund} alt="" />
        <div
                style={{
                    background: 'red',
                    height: '1px',
                    margin: '0.2rem 0'
                }}
            />
    </div>
  )
}

export default ImageComponent