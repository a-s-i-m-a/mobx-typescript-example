import { makeAutoObservable, runInAction } from 'mobx';
import { graphicLabel } from '../constants/permanent.data';
import { IGraphicData, IRegion, IRegionModules, IRegions, IRegionsStore, ITableData } from '../models/regions.store';
import { IRootStore } from '../models/root.store';

export class RegionsStore implements IRegionsStore {

  public readonly rootStore: IRootStore;

  public regionValues?: IRegions[];
  public region?: IRegion[];
  public currentRegion?: string;
  public graphicData?: IGraphicData[];
  public opops?: ITableData[];
  public loading: boolean = true;
  public error?: string = undefined;


  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      rootStore: false,
    });
  }


  public async getRegions(): Promise<void> {
    try {
      runInAction(() => {
        this.regionValues = undefined;
        this.loading = true;
        this.error = undefined;
      });

      const response = await this.rootStore.requests.json<IRegions[]>({
        method: 'GET',
        baseURL: this.rootStore.config.backendServise,
        route: '/stat/resource/regions',
        token: this.rootStore.config.localToken,
      });

      runInAction(() => {
        this.regionValues = response;
        this.loading = false;
      });
    }
    catch (error) {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  public async getRegionById(id: string): Promise<void> {
    try {
      runInAction(() => {
        this.region = [];
        this.opops = [];
        this.graphicData = [];
        this.currentRegion = '';
        this.loading = true;
        this.error = undefined;
      });

      const response = await this.rootStore.requests.json<IRegion[]>({
        method: 'GET',
        baseURL: this.rootStore.config.backendServise,
        route: `/stat/by-regions?regionId=${id}`,
        token: this.rootStore.config.localToken,
      });

      runInAction(() => {
        this.currentRegion = this.getCurrentRegionName(id);
        this.graphicData = this.createGraphicData(response[0].modules);
        this.region = response;
        // @ts-ignore
        this.opops = this.dataFormatter(response);
        this.loading = false;
      });
    }
    catch (error) {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  private dataFormatter(data: IRegion[]): ITableData[] {
    const resData: ITableData[] = [];
    data.map((item: IRegion) => {
      item?.opops.map((opops) => {
        const dataItem = {
          key: opops.id,
          nameOPOP: opops.name,
          downloadsCount: opops.count,
        };
        opops.modules.map((module) => {
          // @ts-ignore
          dataItem[module.name] = module.count;
        });
        // @ts-ignore
        resData.push(dataItem);
      });
    });


    return resData;
  }

  public getCurrentRegionName(id: string): string | undefined {
    return this.regionValues?.filter((item) => item.id === id)[0].name;
  }

  public createGraphicData(modules: IRegionModules[]): IGraphicData[] | undefined {
    return graphicLabel.map((el, index) => ({
      name: el,
      uv: modules[index].count,
    }));
  }

}
