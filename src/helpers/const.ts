import { Filter } from '../store/filter/FilterSlice';

export const localFilterData: Filter[] = [
  {
    id: 'poop-model',
    src: 'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/poop.glb',
    thumb:
      'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/poop_thumb.png',
    anchor: 10,
    position: '0 0 0',
    scale: '0.05 0.05 0.05',
  },
  {
    id: 'bloody-eye-model',
    src: 'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/bloody_eyes.glb',
    thumb:
      'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/bloody_eye-thumb.png',
    anchor: 152,
    position: '0 0 0',
    scale: '6 6 6',
  },
  {
    id: 'heart_glasses-model',
    src: 'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/heart_glasses.glb',
    thumb:
      'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/heart_glasses_thumb.png',
    anchor: 168,
    position: '0 0 0',
    scale: '0.07 0.07 0.07',
  },
  {
    id: 'rabbit_ear-model',
    src: 'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/rabbit_ear.glb',
    thumb:
      'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/rabbit_ear_thumb.png',
    anchor: 152,
    position: '0 -3 0',
    scale: '4.5 4.5 4.5',
  },
  {
    id: 'beard-model',
    src: 'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/beard.glb',
    thumb:
      'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/beard_thumb.png',
    anchor: 152,
    position: '0 0.2 -0.5',
    scale: '0.06 0.06 0.06',
    rotation: '-90 -1 180',
  },
];
