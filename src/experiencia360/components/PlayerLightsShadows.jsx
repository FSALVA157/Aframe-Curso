import React, { useEffect, useState } from "react";
import floor from "../../assets/lights_shadows/floor-1024.jpg";
import firefox from "../../assets/lights_shadows/firefox-quantum-1024.png";

export const PlayerLightsShadows = () => {
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
        <img id="floor" src={floor} />
        <img id="firefox" src={firefox} />
        <a-asset-item
          id="room"
          src="/assets/room-lights-shadows/room.gltf"          
        ></a-asset-item>
      </a-assets>

      {/* <a-entity
        light="type: ambient;
        color: #BBB;
        "
      ></a-entity> */}
      {/* <a-entity
        light="type: directional;
        color: #FFF;
        intensity: 0.6;
        castShadow: true;
        shadowMapHeight: 1024;
        shadowMapWidth: 1024;
        shadowCameraFar: 50;
        shadowCameraTop: 10;
        shadowCameraBottom: -10;
        shadowCameraLeft: -10;
        shadowCameraRight: 10;
        "
        position="-0.5 1 1"
      ></a-entity> */}

      <a-sky color="#212121"></a-sky>

      <a-plane
        src="#floor"
        rotation="-90 0 0"
        scale="10000 10000 1"
        repeat="1000 1000"
        shadow="receive: true"
      ></a-plane>

      <a-entity position="0 0 5">
        <a-camera></a-camera>
      </a-entity>

      {/* <a-entity camera position="0 1.6 31" rotation="90 0 0" wasd-controls look-controls></a-entity> */}

      {assetsLoaded && (
        <>
          <a-entity gltf-model="#room" shadow="receive: true"></a-entity>

          <a-image src="#firefox" scale="2 2 1" position="-2 3 -2.49"></a-image>
          <a-box color="#E0E0E0" scale="5 0.1 1" position="0 4 0" shadow="cast: true"></a-box>

          <a-box
            color="#FFEB3B"
            position="-1 1 0"
            scale="0.5 0.5 0.5"
            animation="property: rotation; to: 0 360 0; dur: 5000; easing: linear; loop: true;"
            shadow="cast: true"
          ></a-box>

          <a-box
            id="orange-box"
            color="#FF5722"
            position="1 1 3"
            scale="0.5 0.5 0.5"
            animation__rotation="property: rotation; to: 0 360 0; dur: 5000; easing: linear; loop: true;"
            animation="property: position; to: 1 1 -2; dur: 5000; direction: alternate; loop: true;"
            shadow="cast: true"
          ></a-box>
          <a-entity
        light="type: ambient;
                intensity: 0.02;
                "
      ></a-entity>
      <a-entity
        light="type: point;
                intensity: 0.8;
                distance: 10;
                castShadow: true;
                "
        position="0 2 1.5"
      ></a-entity>

      <a-entity
        light="type: spot;
                target: #orange-box;
                color: #C40070;
                angle: 30;
                penumbra:0.1
                castShadow: true;
                "
        position="0 3 1"        
        animation="property: light.intensity;from: 0.5; to: 0.9; dur: 5000; easing: linear; loop: true;"
      ></a-entity>
        </>
      )}
      
    </a-scene>
  );
};
