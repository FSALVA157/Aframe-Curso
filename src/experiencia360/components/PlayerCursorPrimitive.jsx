import React, { useEffect, useState } from "react";
import floor from "../../assets/floor-gris-1024.jpg";
import "../../App.css";

export const PlayerCursorPrimitive = () => {
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

  useEffect(() => {
    if (!AFRAME.components["cursor-listener"]) {
      AFRAME.registerComponent("cursor-listener", {
        init: function () {
          var lastIndex = -1;
          var COLORS = ["red", "green", "blue"];
          this.el.addEventListener("click", function (evt) {
            lastIndex = (lastIndex + 1) % COLORS.length;
            this.setAttribute("material", "color", COLORS[lastIndex]);
            console.log("I was clicked at: ", evt.detail.intersection.point);
          });
          this.el.addEventListener("click", function (evt) {
            lastIndex = (lastIndex + 1) % COLORS.length;
            this.setAttribute("material", "color", COLORS[lastIndex]);
            console.log("I was clicked at: ", evt.detail.intersection.point);
          });
        },
      });
    }
  }, []);

  useEffect(() => {
    // Añadir interacciones con los controladores de manos
    const addHandInteraction = (controllerEl) => {
      controllerEl.addEventListener("triggerdown", (evt) => {
        const intersectedEl = evt.detail.intersectedEl; // El elemento intersectado
        if (intersectedEl && intersectedEl.classList.contains("interactable")) {
          // Cambiar el color del cubo interactuado
          const COLORS = ["red", "green", "blue"];
          const currentColor = intersectedEl.getAttribute("material").color;
          const nextColor =
            COLORS[(COLORS.indexOf(currentColor) + 1) % COLORS.length];
          intersectedEl.setAttribute("material", "color", nextColor);
        }
      });
    };

    // Manos/controladores con raycaster
    const leftHand = document.querySelector("[hand-tracking-controls][hand='left']");
    const rightHand = document.querySelector("[hand-tracking-controls][hand='right']");

    if (leftHand) {
      addHandInteraction(leftHand);
    }
    if (rightHand) {
      addHandInteraction(rightHand);
    }
  }, []);

  // useEffect(() => {
  //   const scene = document.querySelector("a-scene");
  //   const camera = document.querySelector("a-camera");

  //   if (scene && camera) {
  //     scene.addEventListener("loaded", () => {
  //       const cursor = camera.querySelector("a-cursor");
  //       cursor.setAttribute(
  //         "raycaster",
  //         "showLine: true; objects: .interactable"
  //       );
  //     });
  //   }
  // }, []);

  const setVrMode = () => {
    const scene = document.querySelector("a-scene");
    if (scene && scene.enterVR) {
      scene.enterVR();
      // cursor.current.setAttribute("cursor", "rayOrigin: controller; fuse: true; fuseTimeout: 100");
      // cursor.current.setAttribute("visible", true);
    }
  };

  return (
    <>
      <a-scene>
        <a-assets>
          {/* <img id="floor" src={floor} />

        <a-asset-item
          id="semaforo"
          src="/3dmodels/semaforo/scene.gltf"          
        ></a-asset-item>
        <a-asset-item
          id="lampara"
          src="/3dmodels/lampara-publica/scene.gltf"
        ></a-asset-item> */}
        </a-assets>

        <a-entity camera look-controls>
          <a-entity
            cursor="fuse: true; fuseTimeout: 500"
            rayOrigin="controller"
            raycaster="objects: .interactable"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: black; shader: flat"
          ></a-entity>
        </a-entity>

        <a-entity hand-tracking-controls="hand: left"></a-entity>
        <a-entity vive-controls="hand: left"></a-entity>

        <a-entity hand-tracking-controls="hand: right"></a-entity>
        <a-entity vive-controls="hand: right"></a-entity>

        <a-entity
          id="box"
          class="interactable"
          cursor-listener
          geometry="primitive: box"
          material="color: blue"
          position="-4 0 -7"
        ></a-entity>
        <a-box class="interactable" cursor-listener position="-2 0 -7"></a-box>
        <a-box class="interactable" cursor-listener position="0 0 -7"></a-box>
        <a-box class="interactable" cursor-listener position="2 0 -7"></a-box>

        {/* <a-sky color="#212121"></a-sky> */}

        {/* {assetsLoaded && (
        <>
          <a-entity gltf-model="#semaforo" position="-3.18 0.25 0" scale="1.5 1.5 1.5"></a-entity>
          <a-entity gltf-model="#lampara" position="4 2.5 0" rotation="0 180 0" scale="2 2 2"></a-entity>
          
        </>
      )} */}
      </a-scene>
      {/* <button 
    onClick={setVrMode}
    style={{ position: "absolute", top: "50%", left: 10, backgroundColor: "rgba(0, 0, 0, 0.3)", color: "white", fontBold: "bold", padding: 2, fontSize: '0.5rem', borderColor: "white", borderStyle: "solid", borderWidth: 1 }}>Enter VR</button> */}
    </>
  );
};
