title: WebRTC系列：WebRTC介绍
author: 知识铺
date: 2020-03-22 16:54:06
tags:
---
 

## 一、 WebRTC是什么

> WebRTC，名称源自**网页即时通信**（英语：Web Real-Time Communication）的缩写，是一个支持网页浏览器进行实时语音对话或视频对话的API。它于2011年6月1日开源并在Google、Mozilla、Opera支持下被纳入万维网联盟的W3C推荐标准。

简单说就是一个**音视频处理+及时通讯的开源库**。



![知识铺-pasted-83.png](https:\/\/blog.zshipu.com/tlg/images/pasted-83.png)

## 二、WebRTC 有哪些优点

*   Google开源的框架（背景强大）
*   跨平台（适合当下软件开发的趋势）
*   用于浏览器
*   实时传输
*   音视频引擎（迎合当下的发展趋势）

## 三、WebRTC应用场景

1.  音视频会议
2.  在线教育
3.  照相机
4.  音乐播放器
5.  共享远程桌面
6.  录制
7.  即时通讯工具
8.  P2P网络加速
9.  文件传输工具
10.  游戏
11.  实时人脸识别

由上方列出的条目可以看出，WebRTC的应用场景十分广泛，尤其是在网路越来越发达的当下，**音视频会议、在线教育、即时通讯工具、游戏、人脸识别一定是当下和未来的发展方向，跟上时代的步伐才不至于死在沙滩上**。

## 四、 WebRTC的愿景

| 网络传输 | 音视频引擎 |
| --- | --- |
| 内网链接 | 音频引擎 |
| P2P传输 | 视频引擎 |
| TURN中转 |   |

## 五、 WebRTC运行机制


![知识铺-pasted-84.png](https:\/\/blog.zshipu.com/tlg/images/pasted-84.png)

### 轨与流

*   Track（一路音频/视频就是一路轨）
*   MediaStream （媒体流包含很多轨）

### WebRTC的重要类

*   MediaStream
*   RTCPeerConnection（该类很重要，提供了应用层的调用接口）
*   RTCDataChannel （非音视频数据通过它传输）

## 六、 WebRTC目前支持的浏览器

*   Chrome（谷歌）
*   Safari（苹果）
*   Firefox
*   Edge （微软）

## 七、学习WebRTC的难点

*   WebRTC庞大、烦杂门槛高，全是英文文档，对学习者是一个挑战
*   客户端与服务器分离，增加学习难度
*   网络屏蔽/系统的学习资料少（这个是因为一些大家都懂的原因，对学习者是一个障碍，**需要翻墙**）
*   网上虽然有demo，但是网上demo错误多，难以调试通

