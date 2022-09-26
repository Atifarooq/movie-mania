import React from 'react'
import IntractiveCard from '../../../components/IntractiveCard';

const Items = ({ data }: any) => {
  return (
    <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-1">
      {data && data.map((itm: any, idx: number) => <IntractiveCard key={`movie-${itm.id}`} {...itm} />)}
    </div>
  )
}

export default Items;
