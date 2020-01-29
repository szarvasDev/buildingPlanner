import React, { useState,Component } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Box from './Box'
import update from 'immutability-helper'

const styles = {
  width: "100%",
  height: 500,
  border: '1px solid black',
  position: 'relative',
}
export class Container2 extends Component {
  constructor(){
    super();
    this.state={
      boxes:[
        {id:"a", top: 20, left: 80, title: 'Building 1', isCollided:false,values:[30,40,50],value:0 },
        {id:"b", top: 180, left: 20, title: 'Building 2', isCollided:false,values:[30,40,50],value:0 },
        {id:"c", top: 50, left: 50, title: 'Building 3', isCollided:false,values:[30,40,50],value:0 },
      ]
    }
    const [, drop] = useDrop({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset()
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        var redZone=document.getElementById('redzone');
        var redX={left:redZone.offsetLeft,right:redZone.offsetWidth+redZone.offsetLeft};
        var redY={top:redZone.offsetTop,bottom:redZone.offsetHeight+redZone.offsetTop};
        this.moveBox(item.id, left, top)
        if(top>=redY.top && top<=redY.bottom && left>=redX.left && left<=redX.right){
          console.log('IN DROPZONE',item);
          this.repaintBox(item.id,left,top,true);
        }else{
          this.repaintBox(item.id,left,top,false);
        }
        console.log(left,top,redX,redY);
        return undefined
      },
    })
  }
  
  moveBox = (id, left, top) => {
    var boxes=[...this.state.boxes];
    var box=boxes.filter(x=>x.id===id);
    box.left=left;
    box.top =top;
    this.setState({boxes:boxes});
  }
  repaintBox=(id,isCollided)=>{
    var boxes=[...this.state.boxes];
    var box=boxes.filter(x=>x.id===id);
    box.isCollided=isCollided;
    this.setState({boxes:boxes});
  }
  calculateValue=()=>{
    var totalValue=0;
    this.state.boxes.forEach(box=>{
      if(box.isCollided){
        totalValue+=box.values[box.value]*1;
      }
    })
    return totalValue*1
  }
  changeValue=(e)=>{
    var id=e.target.id;
    var newValue=0;
    console.log(boxes[id].value);
    if(boxes[id].value===boxes[id].values.length-1){
      newValue=0;
    }
    else{
      newValue=++boxes[id].value;
    }
    var boxes=[...this.state.boxes];
    var box=boxes.filter(x=>x.id===id);
    box.value=newValue;
    this.setState({boxes:boxes});
  }
  render() {
    return (
      <>
      <div ref={this.drop} style={styles}>
        <div id="redzone" style={{width:150,height:500,position:'absolute',right:0,backgroundColor:'red'}}> 
        </div>
        {this.state.boxes.map(box => {
          const { left, top, title, isCollided,value,values } = box;
          return (
            <Box
              onClick={this.changeValue}
              key={box.id}
              id={box.id}
              left={left}
              top={top}
              isCollided={isCollided}
              value={value}
              values={values}
            >
              {`${title}, ${values[value]} HUF`}
            </Box>
          )
        })}
      </div>
      <p>{this.calculateValue()}</p>
      </>
    )
  }
}

export default Container2
