import React, { useEffect, useState } from "react";
import floor from "../../assets/floor-gris-1024.jpg";


export const PlayerAframeInspector = () => {
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
    <a-scene >
      <a-assets>
        <img id="floor" src={floor} />

        <a-asset-item
          id="semaforo"
          src="/3dmodels/semaforo/scene.gltf"          
        ></a-asset-item>
        <a-asset-item
          id="lampara"
          src="/3dmodels/lampara-publica/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <a-entity light="type: ambient; intensity: 0.2"></a-entity>
      <a-entity light="type: directional; intensity: 0.2"
                position="-0.5 1 1"
      ></a-entity>

      <a-sky color="#212121"></a-sky>

      <a-plane src="#floor" rotation="-90 0 0" scale="20 20 1" repeat="2 2" shadow="receive: true"></a-plane>
      

      <a-entity position="0 0 9">
        <a-camera></a-camera>
      </a-entity>

      
      <a-entity light="color: #CC0000; distance: 0.4; intensity: 5.07; type: point" position="-2.38817 3.69118 0.41829" id="red-light"></a-entity>
      <a-entity light="color: #FFCC00; decay: 0.99; distance: 4; intensity: 2; type: point" position="1.86658 4.18525 -0.01082" id="bulb-light" rotation="44.8540009918165 47.60076066167367 20.529077799537397"></a-entity>
      <a-entity light="angle: 45; color: #FFCC00; penumbra: 0.3; type: spot" position="1.91678 4.53962 0.01134" id="bulb-cone" rotation="-90 47.60076066167367 20.529077799537397"></a-entity>
      


      {/* <a-entity camera position="0 1.6 31" rotation="90 0 0" wasd-controls look-controls></a-entity> */}

      {assetsLoaded && (
        <>
          <a-entity gltf-model="#semaforo" position="-3.18 0.25 0" scale="1.5 1.5 1.5"></a-entity>
          <a-entity gltf-model="#lampara" position="4 2.5 0" rotation="0 180 0" scale="2 2 2"></a-entity>
          
        </>
      )}
      
    </a-scene>
  );
};
