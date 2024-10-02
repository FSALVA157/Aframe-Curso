import React from "react";
import ladrilloTexture from "../../assets/textura-ladrillo.jpg";
import texturaDecorada from "../../assets/textura-decorada.jpg";
import flatImage from "../../assets/L09-img-1024x768-flat.jpg";
import curvedImage from "../../assets/L09-img-1024x768-curved.jpg";
import curvedImageRight from "../../assets/L09-img-1024x768-curved-layout-R.jpg";
import curvedImageCenter from "../../assets/L09-img-1024x768-curved-layout-C.jpg";
import curvedImageLeft from "../../assets/L09-img-1024x768-curved-layout-L.jpg";

export const PlayerComponent = () => {
  return (
    <a-scene>
      <a-assets>
        <img
          id="wallpaper"
          src="https://res.cloudinary.com/xxavierargentino/image/upload/v1724809412/fotos-360/textures_experience_um4ywy.jpg"
        />
        <img id="L09-img-01" src={flatImage} />
        <img id="L09-img-02" src={curvedImage} />
        <img
          id="L09-img-03"
          src={curvedImageRight}
        />
        <img
          id="L09-img-04"
          src={curvedImageCenter}
        />
        <img
          id="L09-img-05"
          src={curvedImageLeft}
        />
      </a-assets>
      {/* <a-sky src="#wallpaper"></a-sky> */}

       {/* Image Primitive | IMG size 1024x768px */}
         {/* IMG width (px) = 1 m  */}
         {/* ? IMG height (m) = width (m)/IMG width (px) * IMG height (px)  */}
      <a-image
        color="#ffffff"
        src="#L09-img-01"
        position="0 1.5 -3"
        width="1.024"
        height="0.768"
        scale="3 3 1"
      ></a-image>

 
     {/* Curved Image Primitive | SINGLE IMG | IMG size 1024x768 px  */}
     {/* ? Radius of Arc  */}
     {/* Width of Arc = 1 m  */}
     {/* Length of Arc = 1.111 m  */}
     {/* Angle Subtended by Arc = 90 deg  */}
     {/* ? IMG height (m) = width (m)/IMG width (px) * IMG height (px)  */}
      <a-curvedimage
        src="#L09-img-02"
        theta-length="90"
        theta-start="135"
        radius="0.707"
        height="0.833"
        position="0 1.5 0"
        scale="3 3 3"
      ></a-curvedimage>

      {/* <a-box
        color="#AA0000"
        opacity="0.5"
        width="3"
        height="0.1"
        depth="3"
        position="0 1.5 -1.5"
      ></a-box> */}

         {/* Curved Image Primitive | 3-IMG LAYOUT | IMG size 1024x768 px  */}
         {/* ? Radius of Arc  */}
         {/* Width of Arc DIAMETER = 1 m  */}
         {/* Length of Each IMG = 0.436 m  */}
         {/* Angle Subtended by Arc = 180 deg  */}
         {/* Angle Subtended by Each IMG = 50 deg  */}
         {/* ? IMG height (m) = width (m)/IMG width (px) * IMG height (px)  */}
         {/* RIGHT IMG  */}
         <a-curvedimage src="#L09-img-03"
                       theta-length="50"
                       theta-start="90"
                       radius="0.5"
                       height="0.327"
                       position="0 1.5 0"
                       scale="3 3 3">
        </a-curvedimage>
         {/* CENTER IMG */}
        <a-curvedimage src="#L09-img-04"
                       theta-length="50"
                       theta-start="155"
                       radius="0.5"
                       height="0.327"
                       position="0 1.5 0"
                       scale="3 3 3">
        </a-curvedimage>
         {/* LEFT IMG  */}
        <a-curvedimage src="#L09-img-05"
                       theta-length="50"
                       theta-start="220"
                       radius="0.5"
                       height="0.327"
                       position="0 1.5 0"
                       scale="3 3 3">
        </a-curvedimage>



    </a-scene>
  );
};
