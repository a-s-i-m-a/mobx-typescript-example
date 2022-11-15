import { ICommonStore } from './common.store';

export interface IUserStore extends ICommonStore {
  token?: string;
  getToken(): Promise<void>;
}
