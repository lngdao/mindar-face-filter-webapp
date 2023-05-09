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
    id: 'female-hair-model',
    src: 'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/female_hair.glb',
    thumb:
      'https://raw.githubusercontent.com/lngdao/mindar-face-filter-webapp/3D-models/female_hair_thumb.png',
    anchor: 152,
    position: '0 -1 0',
    scale: '0.1 0.1 0.1',
  },
];
