import React from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'
const style = {
  position: 'absolute',
  //border: '1px dashed gray',
  //backgroundColor: 'white',
  padding: '0.5rem 0.5rem',
  transform: 'scale(1.25)',
  cursor: 'move',
}
const Box = ({ id, left, top, children, isCollided, value, values,onClick,image}) => {
  const [{isDragging}, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.BOX,isCollided },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const getColor=()=>{
    switch(value){
      case 0:{
        return "image-overlay-0"
      }
      case 1:{
        return "image-overlay-1"
      }
      case 2:{
        return "image-overlay-2"
      }
    }
  }
  if (isDragging) {
    // console.log(posX);
    return <div ref={drag} />
  }
  return (
    <div id={id} ref={drag} onClick={onClick} style={{ ...style, left, top,}}>
      <div id={id} className={getColor()}>
        <img  id={id} src={image}></img>
      </div>
      
    </div>
  )
}
export default Box
