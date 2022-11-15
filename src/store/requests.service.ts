import axios, { AxiosRequestHeaders } from 'axios';
import { IRequestOptions, IRequestService } from '../models/request.models';


export class RequestsService implements IRequestService {

  public async text(options: IRequestOptions): Promise<string> {
    const { route, token, ...axiosOptions } = options;

    const headers: AxiosRequestHeaders = {
      ...options.headers,
    };
    if (typeof token === 'string') {
      headers.authorization = token;
    }

    const response = await axios({
      ...axiosOptions,
      url: options.route,
      headers,
      responseType: 'text',
      transformResponse: (res) => res,
    });

    if (typeof response.data !== 'string') {
      throw new Error('Invalid response data');
    }

    return response.data;
  }

  public async json<TResponse>(options: IRequestOptions): Promise<TResponse> {
    const response = await this.text(options);
    const data: TResponse = JSON.parse(response);
    return data;
  }

}
