import React, { useEffect, useState } from 'react';
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
import useStore from '../store/store';

const FaceTracking = () => {
  // const [enable, setEnable] = useState<boolean>(false);
  const enabled = useStore((state) => state.enabled);
  const mountSceneRef = useStore((state) => state.mountSceneRef);

  const sceneRef = React.useRef<AScene>();

  useEffect(() => {
    if (sceneRef.current) {
      console.log('here');
      mountSceneRef(sceneRef);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneRef.current]);

  return (
    <div className="absolute h-screen w-screen overflow-hidden scale-x-[-1] z-10 top-0 left-0 right-0 bottom-0">
      <Scene
        mindARFace={{
          autoStart: false,
        }}
        colorSpace="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        orientationUI={false}
        vrModeUI={false}
        // stats
        ref={sceneRef}
      >
        <Camera
          position={{ x: 0, y: 0, z: 0 }}
          look-controls={false}
          active={false}
        />
        <Assets>
          <AItem id="glasses" src={''} />
        </Assets>
        <Entity visible={enabled}>
          <Faces anchorIndex={168}>
            <GLTFModel src="#glasses" scale={'0.01 0.01 0.01'} />
          </Faces>
        </Entity>
      </Scene>
    </div>
  );
};

export default FaceTracking;
