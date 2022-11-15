import { IConfigStore } from '../models/config.models';
import { IRequestService } from '../models/request.models';
import { ConfigStore } from './config.store';
import { RegionsStore } from './regions.store';
import { RequestsService } from './requests.service';
import { UserStore } from './user.auth.store';


export class RootStore {

  public readonly config: IConfigStore;
  public readonly requests: IRequestService;
  public readonly regions: RegionsStore;
  public readonly user: UserStore;

  constructor() {
    this.config = new ConfigStore();
    this.requests = new RequestsService();
    this.regions = new RegionsStore(this);
    this.user = new UserStore(this);
  }

}
