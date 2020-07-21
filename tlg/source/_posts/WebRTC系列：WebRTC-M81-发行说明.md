title: WebRTC系列：WebRTC M81 发行说明
author: 知识铺
date: 2020-03-22 22:12:10
tags:
---

总结

WebRTC M81 目前在 Chrome 的测试版版版版中提供，它包含 3 个新功能和 20 多个错误修复、增强功能以及稳定性/性能改进。与以前的版本一样，我们鼓励所有开发人员在金丝雀、开发人员和 Beta 频道上频繁运行 Chrome 版本，并快速报告发现的任何问题。请查看此页面，了解有关如何提交良好 Bug 报告的一些提示。我们得到的帮助是无价的！


Chrome 发布时间表可在此处找到。

PSA

如果未授予使用设备的权限，则枚举设备不会公开设备指示

在 Chrome M81 之前，枚举设备 Web API 返回的结果包含系统中所有设备的设备 ID，即使未授予权限也是如此。从 Chrome M81 开始，如果未授予使用设备的权限，则枚举设备现在最多包含每种设备类型的一个条目，并且设备 Id 字段将为空。此更改可能会影响某些现有应用程序，但只需对应用程序的最小更改即可轻松适应它。此更改的目的是提高用户隐私，并与最新版本的规范保持一致。更多细节https://crbug.com/1019176 。

弃用

![知识铺-pasted-85.png](https:\/\/blog.zshipu.com/tlg/images/pasted-85.png)

功能和错误修复

![知识铺-pasted-86.png](https:\/\/blog.zshipu.com/tlg/images/pasted-86.png)

![知识铺-pasted-87.png](https:\/\/blog.zshipu.com/tlg/images/pasted-87.png)


https://e7d0e4c4.wiz03.com/wapp/pages/view/share/s/3DQej43hAN7x2EyM0z1ZXVvc1jLRTz1_ZQDR2bGIxa1hZ2NA   
