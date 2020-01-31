import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Box from './Box'
import update from 'immutability-helper'
import map from './map.png'
import generateHtml from './htmlgenerator';

import imgCB1 from './Buildings/CB1.png'
import imgCB2 from './Buildings/CB2.png'
import imgCD1 from './Buildings/CD1.png'
import imgCD2 from './Buildings/CD2.png'
import imgCD3 from './Buildings/CD3.png'
import imgCH from './Buildings/CH.png'
import imgCU from './Buildings/CU.png'
import imgKD from './Buildings/KD.png'
import imgMS from './Buildings/MS.png'
import imgNCA1 from './Buildings/NCA1.png'
import imgNRE from './Buildings/NRE.png'
import imgNSA from './Buildings/NSA.png'
import imgOC from './Buildings/OC.png'

import imgW6 from './Buildings/W6.png';
import imgW5 from './Buildings/W5.png';
import imgW4 from './Buildings/W4.png';
import imgW3 from './Buildings/W3.png';
import imgW2 from './Buildings/W2.png';
import imgW1 from './Buildings/W1.png';
import imgSY from './Buildings/SY.png';
import imgST2 from './Buildings/ST2.png';
import imgST1 from './Buildings/ST1.png';
import imgSH from './Buildings/SH.png';
import imgSA from './Buildings/SA.png';
import imgRE from './Buildings/RE.png';
import imgPO from './Buildings/PO.png';
import imgNSA2 from './Buildings/NSA2.png';
import imgMF from './Buildings/MF.png'

const styles = {
  width: "90%",
  height: 900,
  flex: 5,
  boxShadow:"1px 1px 5px #999999",
  borderRadius:10,
  position: 'relative',
  background: `url(${map})`,
  backgroundColor:"white",
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}
const Container = ({ }) => {

  const [boxes, setBoxes] = useState({
    "CB1": { top: 0, left: 0, title: 'CB1', isCollided: false, values: [30, 40, 50], value: 0, image: imgCB1 },
    "CB2": { top: 0, left: 50, title: 'CB2', isCollided: false, values: [30, 40, 50], value: 0, image: imgCB2 },
    "CD1": { top: 50, left: 0, title: 'CD1', isCollided: false, values: [30, 40, 50], value: 0, image: imgCD1 },
    "CD2": { top: 100, left: 50, title: 'CD2', isCollided: false, values: [30, 40, 50], value: 0, image: imgCD2 },
    "CD3": { top: 150, left: 0, title: 'CD3', isCollided: false, values: [30, 40, 50], value: 0, image: imgCD3 },
    "CH": { top: 150, left: 80, title: 'CH', isCollided: false, values: [30, 40, 50], value: 0, image: imgCH },
    "CU": { top: 200, left: 0, title: 'CU', isCollided: false, values: [30, 40, 50], value: 0, image: imgCU },
    "KD": { top: 280, left: 0, title: 'KD', isCollided: false, values: [30, 40, 50], value: 0, image: imgKD },
    "MS": { top: 280, left: 100, title: 'MS', isCollided: false, values: [30, 40, 50], value: 0, image: imgMS },
    "NCA1": { top: 360, left: 0, title: 'NCA1', isCollided: false, values: [30, 40, 50], value: 0, image: imgNCA1 },
    "NRE": { top: 360, left: 90, title: 'NRE', isCollided: false, values: [30, 40, 50], value: 0, image: imgNRE },
    "NSA": { top: 440, left: 0, title: 'NSA', isCollided: false, values: [30, 40, 50], value: 0, image: imgNSA },
    "OC": { top: 440, left: 70, title: 'OC', isCollided: false, values: [30, 40, 50], value: 0, image: imgOC },
    "W6": { top: 500, left: 0, title: 'W6', isCollided: false, values: [30, 40, 50], value: 0, image: imgW6 },
    "W5": { top: 500, left: 50, title: 'W5', isCollided: false, values: [30, 40, 50], value: 0, image: imgW5 },
    "W4": { top: 550, left: 0, title: 'W4', isCollided: false, values: [30, 40, 50], value: 0, image: imgW4 },
    "W3": { top: 550, left: 50, title: 'W3', isCollided: false, values: [30, 40, 50], value: 0, image: imgW3 },
    "W2": { top: 600, left: 0, title: 'W2', isCollided: false, values: [30, 40, 50], value: 0, image: imgW2 },
    "W1": { top: 600, left: 50, title: 'W1', isCollided: false, values: [30, 40, 50], value: 0, image: imgW1 },
    "SY": { top: 500, left: 100, title: 'SY', isCollided: false, values: [30, 40, 50], value: 0, image: imgSY },
    "ST2": { top: 650, left: 0, title: 'ST2', isCollided: false, values: [30, 40, 50], value: 0, image: imgST2 },
    "ST1": { top: 650, left: 100, title: 'ST1', isCollided: false, values: [30, 40, 50], value: 0, image: imgST1 },
    "SH": { top: 700, left: 0, title: 'SH', isCollided: false, values: [30, 40, 50], value: 0, image: imgSH },
    "SA": { top: 700, left: 80, title: 'SA', isCollided: false, values: [30, 40, 50], value: 0, image: imgSA },
    "RE": { top: 750, left: 0, title: 'RE', isCollided: false, values: [30, 40, 50], value: 0, image: imgRE },
    "PO": { top: 750, left: 80, title: 'PO', isCollided: false, values: [30, 40, 50], value: 0, image: imgPO },
    "NSA2": { top: 800, left: 0, title: 'NSA2', isCollided: false, values: [30, 40, 50], value: 0, image: imgNSA2 },
    "MF": { top: 810, left: 80, title: 'MF', isCollided: false, values: [30, 40, 50], value: 0, image: imgMF },


  })
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)

      var redZone = document.getElementById('redzone');
      var redX = { left: redZone.offsetLeft, right: redZone.offsetWidth + redZone.offsetLeft };
      var redY = { top: redZone.offsetTop, bottom: redZone.offsetHeight + redZone.offsetTop };
      moveBox(item.id, left, top)
      if (top >= redY.top && top <= redY.bottom && left >= redX.right) {
        console.log(left, redX.left, left, redX.right)
        collide(item.id, left, top, true);
      } else {
        console.log(left, redX.left, left, redX.right)
        collide(item.id, left, top, false);
      }
      return undefined
    },
  })
  const moveBox = (id, left, top) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }
  const collide = (id, left, top, isCollided) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top, isCollided: isCollided },
        },
      }),
    )
  }
  const calculateValue = () => {
    var totalValue = 0;
    Object.keys(boxes).forEach(key => {
      if (boxes[key].isCollided) {
        totalValue += boxes[key].values[boxes[key].value] * 1;
      }
    })
    return totalValue * 1
  }
  const changeValue = (e) => {
    var id = e.target.id;
    var newValue = 0;
    console.log(e.target);
    if (boxes[id].value === boxes[id].values.length - 1) {
      newValue = 0;
    }
    else {
      newValue = boxes[id].value + 1;
    }
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { value: newValue }
        }
      })
    )
  }
  const convertHtmlToPdf=(e)=> {
    var html=generateHtml(boxes);
    fetch('https://v2018.api2pdf.com/chrome/html', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'b4c69cf3-a76f-4831-bbdb-7beccedf1176' //Get your API key from https://portal.api2pdf.com
      },
      body: JSON.stringify({html: html, inlinePdf: true, fileName: 'renovation.pdf' })
    }).then(res=>res.json())
      .then(res => window.open(res.pdf,'_blank'));
  }
  return (
    <div style={{paddingLeft:20,overflowX:"hidden"}}>
      <h1 style={{marginBottom:20}}>Szarvas Renovation Planner</h1>
    <div style={{ minHeight: '100vh', width: '100vw', display: 'flex' }}>
      <div ref={drop} style={styles}>
        <div id="redzone" style={{ width: 200, height: '100%', position: 'absolute', left: 0, backgroundColor: '#64BAA7', opacity: 0.8 }}>
        </div>
        {Object.keys(boxes).map(key => {
          const { left, top, title, isCollided, value, values, image } = boxes[key]
          return (
            <Box
              onClick={changeValue}
              key={key}
              id={key}
              left={left}
              top={top}
              isCollided={isCollided}
              value={value}
              values={values}
              image={image}
            >
              {`${title}`}
              {/* ${values[value]} mill. HUF */}
            </Box>
          )
        })}
      </div>
      <div style={{ height: '100%', width: '100%', marginTop: 30, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 20,marginTop:20 }}>
          <div style={{ backgroundColor: "rgba(173, 36, 36, 0.5)", height: 20, width: 20, marginRight: 10 }}></div>
          <p>Basic renovation</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 20,marginTop:20 }}>
          <div style={{ backgroundColor: "rgba(174, 0, 255, 0.705)", height: 20, width: 20, marginRight: 10 }}></div>
          <p>Mid. renovation</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 20,marginTop:20 }}>
          <div style={{ backgroundColor: "rgba(0, 219, 73, 0.5)", height: 20, width: 20, marginRight: 10 }}></div>
          <p>Advanced renovation</p>
        </div>
        <div onClick={()=>{convertHtmlToPdf()}} style={{cursor:"pointer",backgroundColor:"#393939",color:"white",borderRadius:10,padding:"10px 20px",display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 20,marginTop:20 }}>
          <p>CONVERT TO PDF</p>
        </div>
        <p style={{marginTop:50}}>{calculateValue()} mill. HUF</p>
      </div>

    </div>
    </div>
  )
}
export default Container
