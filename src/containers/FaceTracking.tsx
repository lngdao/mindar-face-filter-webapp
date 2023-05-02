import React, { useState } from 'react';
import { Scene as AScene } from 'aframe';
import {
  Camera,
  Sphere,
  Entity,
  Assets,
  GLTFModel,
  Item as AItem,
} from 'aframe-react-component';
import useARManager from '../hooks/useARManager';
import Scene from '../components/Scene';

import 'mind-ar-ts/dist/mindar-face.prod.js';
import 'mind-ar-ts/dist/mindar-face-aframe.prod.js';
import Faces from '../components/Faces';

const FaceTracking = () => {
  const [enable, setEnable] = useState<boolean>(false);
  const sceneRef = React.useRef<AScene>();

  const { startAR, stopAR } = useARManager(sceneRef);

  return (
    <React.Fragment>
      <button
        onClick={() => {
          if (enable) {
            stopAR();
          } else {
            startAR();
          }

          setEnable((prev) => !prev);
        }}
      >
        {enable ? 'Stop' : 'Start'}
      </button>
      <Scene
        mindARFace={{
          autoStart: false,
        }}
        colorSpace="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        orientationUI={false}
        vrModeUI={false}
        stats={enable}
        ref={sceneRef}
      >
        <Camera
          position={{ x: 0, y: 0, z: 0 }}
          look-controls={false}
          active={false}
        />
        <Assets>
          <AItem
            id="glasses"
            src="https://raw.githubusercontent.com/hiukim/mind-ar-js/master/examples/face-tracking/assets/glasses/scene.gltf"
          />
        </Assets>
        <Entity visible={enable}>
          <Faces anchorIndex={168}>
            <GLTFModel src="#glasses" scale={'0.01 0.01 0.01'} />
          </Faces>
        </Entity>
      </Scene>
    </React.Fragment>
  );
};

export default FaceTracking;
