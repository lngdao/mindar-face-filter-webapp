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
import Spline from '@splinetool/react-spline';
import WebGiViewer from '../components/WebGiViewer';

const FaceTracking = () => {
  // const [enable, setEnable] = useState<boolean>(false);
  const enabled = useStore((state) => state.enabled);
  const mountSceneRef = useStore((state) => state.mountSceneRef);
  const filterSeleted = useStore((state) => state.filterSelected);
  const filterData = useStore((state) => state.filterData);

  const sceneRef = React.useRef<AScene>();

  useEffect(() => {
    if (sceneRef.current) {
      mountSceneRef(sceneRef);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneRef.current]);

  return (
    <div className="absolute h-screen w-screen overflow-hidden scale-x-[-1] z-10 top-0 left-0 right-0 bottom-0">
      {!enabled && <WebGiViewer />}
      <Scene
        mindARFace={{
          autoStart: false,
          faceOccluder: true,
        }}
        colorSpace="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        orientationUI={false}
        vrModeUI={false}
        ref={sceneRef}
      >
        <Camera
          position={{ x: 0, y: 0, z: 0 }}
          look-controls={false}
          active={false}
        />
        <Assets>
          {filterData.map((item) => (
            <AItem id={item.id} src={item.src} />
          ))}
        </Assets>
        {filterData.map((item, index) => (
          <Entity key={index} visible={index == filterSeleted}>
            <Faces anchorIndex={item.anchor}>
              <GLTFModel
                src={'#' + item.id}
                rotation={item.rotation}
                position={item.position}
                scale={item.scale}
              />
            </Faces>
          </Entity>
        ))}
      </Scene>
    </div>
  );
};

export default FaceTracking;
