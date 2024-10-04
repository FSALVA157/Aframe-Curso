import React, { useEffect, useState } from "react";
import skyImage from "../../assets/clear-sunny-sky.jpg";


export const PlayerComponent = () => {
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
        <a-asset-item id="village" src="/assets/scene.gltf"></a-asset-item>
        <a-asset-item id="barril" src="/3dmodels/barril/wooden_stool_02_4k.gltf"></a-asset-item>
      </a-assets>

      <a-entity camera position="0 1.6 31" rotation="90 0 0" wasd-controls look-controls></a-entity>

      {
        assetsLoaded && (
          <>
            <a-sky src="#sky"></a-sky>
            <a-entity 
              gltf-model="#village"
              position="0 0 0"
              rotation="0 0 0"
              scale="50 50 50"
              ></a-entity>
              <a-entity
              gltf-model="#barril"
              position="-3 0 31"
              scale="5 5 5"
              ></a-entity>
          </>

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
