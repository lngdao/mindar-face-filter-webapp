import React from 'react';
import { Scene as AScene, SystemDefinition } from 'aframe';
import { IMindARFaceSystem } from 'mind-ar-ts/types/face-target/aframe';

const useARManager = (sceneRef: React.MutableRefObject<AScene | undefined>) => {
  const arSystem = React.useRef<SystemDefinition<IMindARFaceSystem>>();

  const startAR = React.useCallback(() => {
    if (!arSystem.current) return;

    return arSystem.current.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arSystem.current]);

  const stopAR = React.useCallback(() => {
    if (!arSystem.current) return;

    arSystem.current.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arSystem.current]);

  React.useEffect(() => {
    if (!sceneRef.current) return;

    sceneRef.current.addEventListener('loaded', () => {
      console.log(sceneRef.current?.systems);
      if (!sceneRef.current) return;

      // let arSystems = AR_COMPONENT_NAME.IMAGE.IMAGE_SYSTEM;
      // const systemKeys = Object.keys(sceneRef.current.systems);

      // for (const key of systemKeys) {
      //   switch (key) {
      //     case AR_COMPONENT_NAME.FACE.FACE_SYSTEM:
      //       arSystems = AR_COMPONENT_NAME.FACE.FACE_SYSTEM;
      //       break;
      //     case AR_COMPONENT_NAME.IMAGE.IMAGE_SYSTEM:
      //       arSystems = AR_COMPONENT_NAME.IMAGE.IMAGE_SYSTEM;
      //       break;
      //   }
      // }

      arSystem.current = sceneRef.current.systems[
        'mindar-face-system'
      ] as SystemDefinition<IMindARFaceSystem>;
    });

    return () => {
      stopAR();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { startAR, stopAR, arSystem: arSystem.current };
};

export default useARManager;
