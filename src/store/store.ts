import { create, StoreApi } from 'zustand';
import createAppSlice, { AppSlice } from './app/AppSlice';
import createFilterSlice, { FilterSlice } from './filter/FilterSlice';
// import { createJSONStorage } from 'zustand/middleware';

export type StoreState = AppSlice & FilterSlice;
export type StoreSlice<T> = (
  set: StoreApi<StoreState>['setState'],
  get: StoreApi<StoreState>['getState']
) => T;

const useStore = create<StoreState>()((set, get) => ({
  ...createAppSlice(set, get),
  ...createFilterSlice(set, get),
}));

export default useStore;
