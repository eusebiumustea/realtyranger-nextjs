import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getAccessToken } from "./auth";
import { getURL } from "./url";
export const request = async <T, D = any>(
  config: AxiosRequestConfig<D>
): Promise<AxiosResponse<T>> => {
  return axios({ ...config, url: getURL(config.url || "") });
};

export const authentificationRequest = async <T, D = any>(
  config: AxiosRequestConfig<D>
): Promise<AxiosResponse<T> | undefined> => {
  try {
    const accessToken = await getAccessToken();

    const response = await axios.request({
      ...config,
      url: getURL(config.url || ""),
      headers: { ...config.headers, Authorization: `Bearer ${accessToken}` },
    });

    return response;
  } catch (error) {
    console.log("errro", JSON.stringify(error));
  }
};

// getAccessToken().then((accessToken) =>
//   fetch(getURL(path || ""), {
//     ...config,
//     headers: { Authorization: `Bearer ${accessToken}` },
//   })
// );
