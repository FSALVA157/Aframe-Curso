import React, { useEffect, useState } from "react";
import floorNormal  from "../../assets/floor-1024-NRM.jpg";
import floor from "../../assets/floor-1024.jpg";
import jardin from "../../assets/jardin360.jpg";



export const PlayerComponent = () => {

  const [assetsLoaded, setAssetsLoaded] = useState(false)


  useEffect(() => {
    const handleAssetsLoaded = () => {
      setAssetsLoaded(true);
    }

    const assetsElement = document.querySelector('a-assets');
    if (assetsElement) {
      assetsElement.addEventListener('loaded', handleAssetsLoaded);
    }
    return () => {
      if (assetsElement) {
        assetsElement.removeEventListener('loaded', handleAssetsLoaded);
      }
    };
  
  }, [])
  
  return (
    <a-scene>
      <a-assets>
        <img id="floor-NRM" src={floorNormal} />
        <img id="floor" src={floor} />    
        <img id="jardin" src={jardin} />    
      </a-assets>

      {
      assetsLoaded && (
        <a-sky src="#jardin"></a-sky>
      )
      //   assetsLoaded && (
      //     <a-plane material="
      //   color: #FFFFFF;
      //   src: #floor;
      //   repeat: 5 5;
      //   normalMap: #floor-NRM;
      //   normalTextureRepeat: 5 5;
      //   "
      //   rotation="-90 0 0"
      //   scale="10 10 1"

      // >

      // </a-plane>
      //   )
      }

      
      


    </a-scene>
  );
};
