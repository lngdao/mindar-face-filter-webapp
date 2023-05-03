import React, { useEffect } from 'react';
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from 'react-icons/bs';
import useStore from '../store/store';

const mocks = Array(10).fill({});

const Controls = () => {
  const sceneRef = useStore((state) => state.sceneRef);
  const enabled = useStore((state) => state.enabled);
  const setEnabled = useStore((state) => state.setEnabled);

  console.log(enabled);

  const startAR = () => {
    if (!sceneRef.current) return;

    sceneRef.current.systems['mindar-face-system'].start();
  };

  const stopAR = () => {
    if (!sceneRef.current) return;

    sceneRef.current.systems['mindar-face-system'].stop();
  };

  const handleOnEnabledChange = () => {
    if (enabled) {
      stopAR();
      setEnabled(false);
    } else {
      startAR();
      setEnabled(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const horizontalFilterContainer =
        document.querySelector('.filter-section');

      const handler = (evt: any) => {
        evt.preventDefault();

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        if (
          horizontalFilterContainer.getBoundingClientRect().width <=
          window.innerWidth / 3
        )
          horizontalFilterContainer.scrollTop += evt.deltaY;
        else horizontalFilterContainer.scrollLeft += evt.deltaY;
      };

      horizontalFilterContainer.addEventListener('wheel', handler);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative h-full w-full md:w-1/3 flex flex-col md:justify-between md:gap-12 z-20">
      <span className="text-3xl md:text-5xl font-black text-orange-500">
        AR FACE FILTER
      </span>

      <div className="filter-section absolute self-center md:static bottom-[65px] w-full md:self-start md:flex-1 overflow-auto scrollbar-hide md:flex-col flex gap-5">
        {mocks.map((item, index) => (
          <div
            key={index}
            className={`w-[70px] md:w-[100px] aspect-square rounded-full md:rounded-xl overflow-hidden shrink-0 grow-0 cursor-pointer`}
          >
            <img
              className="w-full h-full object-cover"
              src="https://img1.cgtrader.com/items/1952475/da6c6cb8bc/large/glasses-3d-model-max-obj-mtl-3ds-fbx-c4d-skp.jpg"
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="self-center md:self-start absolute md:static bottom-0">
        <div
          onClick={handleOnEnabledChange}
          className={`w-[50px] md:w-[60px] aspect-square ${
            enabled ? 'bg-green-400' : 'bg-red-500'
          }  flex items-center justify-center rounded-full cursor-pointer`}
        >
          {enabled ? (
            <BsFillCameraVideoFill size={20} color="#FFF" />
          ) : (
            <BsFillCameraVideoOffFill size={20} color="#FFF" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Controls;
