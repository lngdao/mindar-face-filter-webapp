import { localFilterData } from '../../helpers/const';
import { StoreSlice } from '../store';

export type Filter = {
  id: string;
  src: string;
  thumb: string;
  anchor?: number;
  position?: string;
  rotation?: string;
  scale?: string;
};

export interface FilterSlice {
  filterData: Filter[];
  filterSelected: number | null;
  changeFilter: (index: number) => void;
  clearFilter: () => void;
}

const createFilterSlice: StoreSlice<FilterSlice> = (set) => ({
  filterData: localFilterData,
  filterSelected: null,
  changeFilter: (index) => set({ filterSelected: index }),
  clearFilter: () => set({ filterSelected: null }),
});

export default createFilterSlice;
