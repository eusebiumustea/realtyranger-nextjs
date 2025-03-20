import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getAccessToken } from "./auth";
import { getURL } from "./url";
export const request = <T, D = any>(
  config: AxiosRequestConfig<D>
): Promise<AxiosResponse<T>> => {
  return axios({ ...config, url: getURL(config.url || "") });
};
export const authentificationRequest = async <T, D = any>(
  config: AxiosRequestConfig<D>
): Promise<AxiosResponse<T>> => {
  return getAccessToken().then((accessToken) => {
    return axios({
      ...config,
      url: getURL(config.url || ""),
      headers: { ...config.headers, Authorization: `Bearer ${accessToken}` },
    });
  });
};
