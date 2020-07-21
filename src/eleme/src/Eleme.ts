import { AxiosProxyConfig } from "axios";
import { Cookie } from "./Cookie";
import { Request } from "./Request";

export class Eleme {
  private readonly request: Request;
  private readonly cookie: Cookie;
  private mobile: string;
  private validateToken: string;

  /**
   * 将抓包或从浏览器开发者工具中获得的完整cookie 转为 Cookie 对象
   * @param {string} cookie
   * @returns {Cookie}
   */
  static parseCookie(cookie: string): Cookie | null {
    try {
      cookie = this.cleanCookie(cookie)
        .split(/;\s*/)
        .find(item => /^snsInfo\[/.test(item));
      if (cookie) {
        let snsInfoStr = decodeURIComponent(cookie.split("=")[1]);
        if (snsInfoStr[snsInfoStr.length - 1] === '"') {
          snsInfoStr = snsInfoStr.slice(0, -1);
        }
        const snsInfo: { eleme_key: string; openid: string } = JSON.parse(
          snsInfoStr
        );
        if (snsInfo.eleme_key && snsInfo.openid) {
          return <Cookie>{
            openid: String(snsInfo.openid).trim(),
            sign: String(snsInfo.eleme_key).trim(),
            sid: null
          };
        }
      }
    } catch (e) {}
    return null;
  }

  /**
   * 将抓包或从浏览器开发者工具中获得的完整cookie 清理一下
   * @param {string} cookie
   * @returns {string}
   */
  static cleanCookie(cookie: string): string {
    cookie = String(cookie)
      .replace(/\n/g, "")
      .trim();
    if (
      (cookie[0] === '"' && cookie[cookie.length - 1] === '"') ||
      (cookie[0] === "'" && cookie[cookie.length - 1] === "'")
    ) {
      cookie = cookie.slice(1, -1);
    }
    return cookie;
  }

  /**
   * 每一个小号需要实例化一次
   * @param {string} cookie 授权登录饿了么的QQ或者WX号Cookie
   * @param {AxiosProxyConfig} proxy 代理配置
   */
  constructor(cookie: Cookie, proxy?: AxiosProxyConfig) {
    this.cookie = <Cookie>{ ...cookie };
    this.request = new Request(proxy);
  }

  /**
   * 获取绑定好的cookie数据
   * @returns {Cookie}
   */
  getCookie(): Cookie {
    return this.cookie;
  }

  /**
   * 领取红包
   * @param {string} sn 红包链接标识
   * @param {string} headimgurl 领取的头像URL
   * @param {string} nickname 领取的昵称
   * @returns {Promise<object>}
   */
  async getHongbao(
    sn: string,
    headimgurl: string = "",
    nickname: string = ""
  ): Promise<object> {
    const { data } = await this.request.send(
      "post",
      `/restapi/marketing/promotion/weixin/${this.cookie.openid}`,
      {
        device_id: "",
        group_sn: sn,
        hardware_id: "",
        method: "phone",
        phone: "",
        platform: 4,
        sign: this.cookie.sign,
        track_id: "",
        unionid: "fuck",
        weixin_avatar: headimgurl,
        weixin_username: nickname
      },
      {
        headers: {
          "x-shard": Request.createXShared(sn),
          cookie: `SID=${this.cookie.sid}`
        }
      }
    );
    return data;
  }

  /**
   * 根据 sn 获取拼手气大包是第几个
   * @param {string} sn 红包链接标识
   * @param {string} theme_id 红包页面主题标识
   * @returns {Promise<number>}
   */
  async getLuckyNumber(sn: string, theme_id: string = "0"): Promise<number> {
    const {
      data: { lucky_number }
    } = await this.request.send(
      "get",
      `/restapi/marketing/themes/${theme_id}/group_sns/${sn}`
    );
    return lucky_number;
  }

  /**
   * 绑定 sendMobileCode 传入的手机号码，需要先调用 loginByMobile
   * @returns {Promise<boolean>}
   */
  async changeMobile(): Promise<boolean> {
    try {
      await this.request.send(
        "post",
        `/restapi/marketing/hongbao/weixin/${this.cookie.openid}/change`,
        {
          phone: this.mobile,
          sign: this.cookie.sign
        },
        {
          headers: {
            cookie: `SID=${this.cookie.sid}`
          }
        }
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * 使用短信验证码登录，需要先调用 sendMobileCode
   * @param {string} validateCode 短信验证码
   * @returns {Promise<string>}
   */
  async loginByMobile(validateCode: string): Promise<string> {
    const {
      data: { user_id },
      headers
    } = await this.request.send("post", "/restapi/eus/login/login_by_mobile", {
      mobile: this.mobile,
      validate_code: validateCode,
      validate_token: this.validateToken
    });
    const sid = headers["set-cookie"].find(
      (c: string) => c.split("; ")[0].indexOf("SID") === 0
    );
    if (sid) {
      this.cookie.sid = sid.split("; ")[0].split("=")[1];
    }
    return user_id;
  }

  /**
   * 发送短信验证码
   * @param {string} mobile 手机号码
   * @param {string} captcha_hash 图形验证码标识
   * @param {string} captcha_value 图形验证码内容
   * @returns {Promise<string>}
   */
  async sendMobileCode(
    mobile: string,
    captcha_hash: string = "",
    captcha_value: string = ""
  ): Promise<string> {
    const {
      data: { validate_token }
    } = await this.request.send("post", "/restapi/eus/login/mobile_send_code", {
      mobile,
      captcha_hash,
      captcha_value
    });
    this.mobile = mobile;
    this.validateToken = validate_token;
    return validate_token;
  }
}
