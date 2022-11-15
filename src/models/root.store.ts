import { IConfigStore } from './config.models';
import { IRequestService } from './request.models';


export interface IRootStore {
  config: IConfigStore;
  requests: IRequestService;
}
