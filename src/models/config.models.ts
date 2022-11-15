export enum EnvKeys {
  REACT_APP_BACKEND_SERVISE = 'REACT_APP_BACKEND_SERVISE',
  REACT_APP_LOCAL_TOKEN = 'REACT_APP_LOCAL_TOKEN',
}

export interface IConfigStore {
  backendServise: string;
  localToken?: string;
}
