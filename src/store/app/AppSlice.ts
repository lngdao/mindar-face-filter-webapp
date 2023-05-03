import { StoreSlice } from '../store';

export interface AppSlice {
  enabled: boolean;
  sceneRef: any;
  setEnabled: (value: boolean) => void;
  mountSceneRef: (ref: any) => void;
}

const createAppSlice: StoreSlice<AppSlice> = (set) => ({
  enabled: false,
  sceneRef: null,
  setEnabled: (value: boolean) => set({ enabled: value }),
  mountSceneRef: (value: any) => set({ sceneRef: value }),
});

export default createAppSlice;
