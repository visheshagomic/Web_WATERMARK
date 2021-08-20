import React,{useEffect,useState} from "react";
// import axios from "axios";
// var watermark = require('dynamic-watermark');
import Watermark from "awesome-watermark/react";
import "./index.css";

export default function App() {


  return (
   <>
   <div className="avatar">
              <Watermark
                  text="bowen"
        //angle ={60}
        row= {1}
        col = {5}
                  textStyle={{ color: "#ffffff", fontSize: 50}}
              />
          </div>
   </>
  );
}
