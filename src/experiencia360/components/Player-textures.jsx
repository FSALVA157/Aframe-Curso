
import React from 'react'
import ladrilloTexture from '../../assets/textura-ladrillo.jpg'
import texturaDecorada from '../../assets/textura-decorada.jpg'


export const PlayerComponent= () => {
  return (
    
    <a-scene>
      <a-assets>
        <img id="wallpaper" src="https://res.cloudinary.com/xxavierargentino/image/upload/v1724809412/fotos-360/textures_experience_um4ywy.jpg" /> 
        {/* <img id="wallpaper" src={iglesia360} />  */}
        </a-assets>      
       <a-assets>
        <img id="ladrillo-texture" src={ladrilloTexture} />
        <img id="decorada-texture" src={texturaDecorada} />
        <img id="decorada-norm" src={texturaDecorada} />
       </a-assets>
      <a-sky src="#wallpaper">
      </a-sky>
      
      
       <a-box
        color="#ffffff"
        src={ladrilloTexture}
        normal-map="#ladrillo-texture"
        repeat="1 1"
        normal-texture-repeat="1 1"
        normal-scale="1 -1"
        roughness="0.5"
        width="4"
        height="4"
        depth="4"
        position="-2 1.5 -9"        
        scale="-1 1 1"
      ></a-box> 
      <a-box
        color="#ffffff"
        width="4"
        height="4"
        depth="4"
        position="2 1.5 -9"        
        material="
          src: #decorada-texture;
          repeat: 1 1;
          normal-map: #decorada-norm;
          normal-texture-repeat: 1 1;
          normal-scale: 1 -1;          
        "
        scale="-1 1 1"
      ></a-box> 
    </a-scene>
    
  )
}
