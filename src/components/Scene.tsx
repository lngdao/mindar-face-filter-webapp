import React, { useEffect, useRef } from 'react';
import { Scene as AScene, SystemDefinition } from 'aframe';
import { Scene as SceneComponent } from 'aframe-react-component';
import { getAframeProps } from 'aframe-react-component/dist/utils/common';
import { IMindARFaceSystem } from 'mind-ar-ts/types/face-target/aframe';
import { mergeRefs } from '../helpers/common';
import { Scene as SceneProps } from '../helpers/interfaces';
import { generateFaceProps } from '../helpers/defaultprops';

const Scene = React.forwardRef<AScene | undefined, SceneProps>(
  ({ children, ...props }, ref) => {
    const sceneRef = React.useRef<AScene>(null);
    const arSystem = useRef<SystemDefinition<IMindARFaceSystem>>();
    const {
      mindARFace,
      'gesture-detector': gestureDetector,
      'mouse-detector': mouseDetector,
      ...rest
    } = props;

    const stopAR = React.useCallback(() => {
      if (!arSystem.current) return;

      arSystem.current.stop();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arSystem.current]);

    useEffect(() => {
      if (!sceneRef.current) return;

      arSystem.current = sceneRef.current.systems[
        'mindar-face-system'
      ] as SystemDefinition<IMindARFaceSystem>;

      return () => {
        stopAR();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <SceneComponent
        {...rest}
        gesture-detector={gestureDetector}
        mouse-detector={mouseDetector}
        {...(mindARFace && {
          'mindar-face': getAframeProps(generateFaceProps(mindARFace)),
        })}
        ref={mergeRefs(sceneRef, ref)}
      >
        {children}
      </SceneComponent>
    );
  }
);

Scene.displayName = 'ARScene';

export default Scene;
