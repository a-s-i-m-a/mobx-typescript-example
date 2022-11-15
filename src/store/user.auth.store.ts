import { makeAutoObservable, runInAction } from 'mobx';
import { IRootStore } from '../models/root.store';
import { IUserStore } from '../models/user.store';

export class UserStore implements IUserStore {

  public readonly rootStore: IRootStore;

  public token?: string = undefined;
  public loading: boolean = true;
  public error?: string = undefined;


  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      rootStore: false,
    });
  }


  public async getToken(): Promise<void> {
    try {
      runInAction(() => {
        this.token = undefined;
        this.loading = true;
        this.error = undefined;
      });

      const localToken = this.rootStore.config.localToken;
      if (typeof localToken === 'string' && localToken.length > 0) {
        runInAction(() => {
          this.token = this.rootStore.config.localToken;
          this.loading = false;
        });

        return;
      }

      const unioneToken = //get token from service;
      if (!unioneToken) {
        runInAction(() => {
          this.token = this.rootStore.config.localToken;
          this.loading = false;
        });

        return;
      }

      runInAction(() => {
        this.loading = false;
      });
    }
    catch (error) {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

}
