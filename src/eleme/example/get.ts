import * as querystring from "querystring";
import { Eleme } from "../src";

(async () => {
  // 请先查看 test/bind.ts，接码成功后的 getCookie() 对象，传入此处
  const eleme = new Eleme({
    openid: "openid", // QQ或者WX授权登录饿了么之后，从cookie中可得openid
    sign: "sign", // QQ或者WX授权登录饿了么之后，从cookie中可得eleme_key就是sign
    sid: "sid" // 接码后可得
  });
  const url =
    "https://h5.ele.me/hongbao/#hardware_id=&is_lucky_group=True&lucky_number=8&track_id=&platform=0&sn=10fcda587ea2d807&theme_id=1969&device_id=&refer_user_id=1097914722";
  const query = querystring.parse(url);
  const sn = <string>query.sn;
  const theme_id = <string>query.theme_id;
  if (sn) {
    console.log(sn, theme_id);
    const luckyNumber = await eleme.getLuckyNumber(sn, theme_id);
    if (luckyNumber) {
      console.log(`是拼手气链接，第${luckyNumber}个最大`);
      const res = await eleme.getHongbao(sn);
      console.log("领取结果", res);
      // 可以通过 ret_code 来判断领取情况，请参考 https://github.com/mtdhb/get 对领取结果的处理方式
    } else {
      console.log("不是拼手气链接");
    }
  } else {
    console.log("链接不正确");
  }
})();
