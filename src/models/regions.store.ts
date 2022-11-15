import { ICommonStore } from './common.store';

export interface IRegionsStore extends ICommonStore {
  token?: string;
  getRegions(): Promise<void>;
}

export interface IRegions {
  id: string;
  code: string;
  name: string;
}

export interface IRegionModules {
  name: string;
  users?: object;
  count: number;
}
export interface IOpopModules {
  count: number;
  name: string;
}

export interface IRegionOpops {
  count: number;
  id: string;
  name:string;
  moduleCount: number;
  modules: IOpopModules[]
}

export interface IRegion {
  regionId: string;
  regionName: string;
  opopCount: number;
  moduleCount: number;
  modules: IRegionModules[]
  opops: IRegionOpops[]
}

export interface ITableData {
  comp: number;
  downloadsCount: number;
  gia: number;
  key: string;
  learn: number;
  method: number;
  nameOPOP: string;
  opop:number
}

export interface IGraphicData {
  name: string;
  uv: number;
}
