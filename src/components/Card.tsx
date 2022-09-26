import React from 'react'
import { CardProps } from '../types/card.types';
import Thumbnail from './Thumbnail';

const Card = ({ title, description, src }: CardProps) => {
  return (
    <figure className="bg-white p-1 rounded drop-shadow-sm">
      <Thumbnail src={`https://random.imagecdn.app/300/300?id=${Math.random()}`} />
      <figcaption className="px-3 py-4">
        <h3 className="text-2xl mb-2 text-slate-600">{title}</h3>
        <p className="text-sm font-light text-slate-500">{description}</p>
      </figcaption>
    </figure>
  )
}

export default Card;
