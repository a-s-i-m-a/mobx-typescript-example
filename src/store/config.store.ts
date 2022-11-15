import { EnvKeys, IConfigStore } from '../models/config.models';


export class ConfigStore implements IConfigStore {

  public backendServise: string;
  public localToken?: string;


  constructor() {
    this.backendServise = this.getRequired(EnvKeys.REACT_APP_BACKEND_SERVISE);
    this.localToken = this.getValue(EnvKeys.REACT_APP_LOCAL_TOKEN);
  }

  private getValue(key: EnvKeys): string | undefined {
    const value = process.env[key];
    return value;
  }

  private getRequired(key: EnvKeys): string {
    const value = this.getValue(key);
    if (typeof value !== 'string' || value.length === 0) {
      throw new Error(`Cannot find "${key}" parameter from environment`);
    }
    return value;
  }

}
