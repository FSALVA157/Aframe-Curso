import React, { useEffect, useState } from "react";
import skyImage from "../../assets/clear-sunny-sky.jpg";
import floorTexture from "../../assets/textura-ladrillo.jpg";


export const PlayerAnimateBasicComponent = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const handleAssetsLoaded = () => {
      setAssetsLoaded(true);
    };

    const assetsElement = document.querySelector("a-assets");
    if (assetsElement) {
      assetsElement.addEventListener("loaded", handleAssetsLoaded);
    }
    return () => {
      if (assetsElement) {
        assetsElement.removeEventListener("loaded", handleAssetsLoaded);
      }
    };
  }, []);

  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={skyImage} />
        <img id="floor" src={floorTexture}></img>        
      </a-assets>
      <a-entity position="0 0 7">
        <a-camera></a-camera>
      </a-entity>

      {/* <a-entity camera position="0 1.6 31" rotation="90 0 0" wasd-controls look-controls></a-entity> */}

      {
        assetsLoaded && (
          <>
            {/* <a-sky src="#sky"></a-sky> */}
            <a-plane              
              color="#00FFFF"
              src="#floor"
              scale="10 10 1"              
              rotation="-90 0 0"
            ></a-plane>
            <a-box 
              color="#FF0000"
              position="0 4 0"
              animation="property: rotation; loop:true; dur: 5000; from: 0 0 0; to: 0 360 0; easing: linear"
            > 
            </a-box>
            <a-entity
              position="0 4 0"
              animation="property: rotation; loop:true; dur: 5000; from: 0 0 0; to: 0 -360 0; easing: linear"
            >
              <a-box
                color="#00FF00"
                position="2 0 0"                
                animation="property: rotation; loop:true; dur: 5000; from: 0 0 0; to: 0 -360 0; easing: linear"
              ></a-box>
            </a-entity>
            <a-box 
              color="#FFAA00"              
              animation="property: position; dur: 5000; from: -2 0.5 -2; to: -2 0.5 2; direction: alternate; easing: easeInOutElastic; repeat: indefinite"
            > 
            </a-box>
            <a-box 
              color="#FFAA00"        
              position="2 .5 0"      
              animation="property: scale; dur: 3000;from: 0 0 0; to: 0.2 1 5; direction: alternate; easing: easeInOutElastic; repeat: indefinite; loop: true"
            > 
            </a-box>
            <a-sphere
              color="#0000FF"
              position="0 2.25 0"
              radius="0.5"
              animation="property: material.color; loop:true; dur: 5000; from: #00AAFF; to: #0000FF; easing: linear"
            ></a-sphere>
            <a-cone
              color="#383838"
              position="0 0.5 0"
              animation="property: opacity; loop:true; dur: 1500; from: 1; to: 0 ; easing: linear"
            >

            </a-cone>
            
          </>
        )        
      }
    </a-scene>
  );
};
