import React from 'react';
import Watermark from 'react-awesome-watermark';
import styled from 'styled-components';
import "./index.css";
// import {PDFtoIMG} from 'react-pdf-to-image';



const StyledWatermark = styled(Watermark)`
  margin: 0 auto;

  .inner-watermark {
    width:300;
    height: 300;
   
    font-size: 20px;
    text-align: center;
    line-height: 2;
  }

 
`;


const defaultWatermarkPosition = {
  x: 150,
  y: 150
};

export default function App() {
  return (
    <div>

    
     <div className="avatar">
     <StyledWatermark
        text="Watermark Rendering"
          style={{
            width: 300,
            height: 300
          }}
        //  multiple
        position={defaultWatermarkPosition}
         className="Watermark-WatermarkPosition"
        >
          <div className="inner-watermark" />
        </StyledWatermark>
          </div>
      {/* <StyledWatermark
        text="Watermark Rendering"
        style={{
          width: 500,
          height: 500
        }}
        multiple
      >
      
      </StyledWatermark> */}
     
      
    </div>
  );
}
