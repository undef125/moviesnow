import React from 'react';
import "./custoncss.css"

interface Props{
    image: string;
}

export const MovDetImage = ({image}: Props) => {
  return (
    <div className="idImageHolder">
        <img src={image} alt="" />
    </div>
  )
}