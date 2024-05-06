import React from 'react'
import Card from './RCard'
import CRItems from './CRItems'

const RecomendP = () => {
  return ( 
    <>
    <div className='recomend'>
     {
   CRItems.map((val, ind) =>{
    return <Card key={ind}
     imgsrc={val.imgsrc}
     text={val.text}
     price={val.price}
    link={val.link}
    />
   })
 }
    </div>
    </>
  )
}

export default RecomendP
