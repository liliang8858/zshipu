import { Eleme } from "../src";

// 以下逻辑可以套在循环里，实现自动接码
(async () => {
  // const eleme = new Eleme({
  //   openid: "openid", // QQ或者WX授权登录饿了么之后，从cookie中可得openid
  //   sign: "sign", // QQ或者WX授权登录饿了么之后，从cookie中可得eleme_key就是sign
  //   sid: "" // 接码时传空
  // });
  // parseCookie 可以得到 openid 和 sign
  const cookie = Eleme.parseCookie(
    "浏览器开发者工具 或 抓包得到的 Cookie 完整内容"
  );
  const eleme = new Eleme(cookie);
  const validateToken = await eleme.sendMobileCode(
    "从接码平台获取一个手机号填到这里"
  );
  if (validateToken) {
    console.log(validateToken);
    const userId = await eleme.loginByMobile(
      "从接码平台获得短信验证码填到这里"
    );
    if (userId) {
      console.log(userId);
      if (await eleme.changeMobile()) {
        // 成功后将 getCookie() 内容存到数据库里，以便以后用于领取
        console.log("接码绑定手机号成功", eleme.getCookie());
      } else {
        console.log("一般不会失败，除非网络或其它原因");
      }
    } else {
      console.log("短信验证码不正确或其它错误，可以跳过，接下一个手机号");
    }
  } else {
    console.log("需要图形验证码，可以跳过，接下一个手机号");
  }
})();
