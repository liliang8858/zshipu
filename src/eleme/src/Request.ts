import * as querystring from "querystring";
import * as hex2dec from "hex2dec";
import axios, {
  AxiosInstance,
  AxiosProxyConfig,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";

export class Request {
  private readonly client: AxiosInstance;

  constructor(proxy?: AxiosProxyConfig) {
    this.client = axios.create({
      proxy,
      baseURL: "https://h5.ele.me",
      method: "POST",
      headers: {
        referer: "https://h5.ele.me/hongbao/",
        origin: "https://h5.ele.me",
        "x-shard": Request.createXShared(),
        "user-agent":
          "Mozilla/5.0 (Linux; Android 7.0; MIX Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044004 Mobile Safari/537.36 V1_AND_SQ_7.5.0_794_YYB_D QQ/7.5.0.3430 NetType/WIFI WebP/0.3.0 Pixel/1080"
      }
    });
  }

  /**
   * 底层请求，可以做一些统一的请求前后处理
   * @param {string} method 请求方式
   * @param {string} url 请求地址
   * @param {*} data 请求数据
   * @param {AxiosRequestConfig} config 其它配置
   * @returns {Promise<AxiosResponse>}
   * @private
   */
  async send(
    method: string,
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    try {
      return await this.client[method](
        url,
        querystring.stringify(data),
        config
      );
    } catch (e) {
      return e.response;
    }
  }

  /**
   * 生成请求必备的 eosid，领取红包时传入，其他时候可以不传，使用默认提供的
   * @param {string} sn 红包链接标识
   * @returns {string}
   */
  static createXShared(sn: string = "29e47b57971c1c9d"): string {
    return `eosid=${hex2dec.hexToDec(sn)}`;
  }
}
