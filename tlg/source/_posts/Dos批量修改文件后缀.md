title: Dos批量修改文件后缀
author: 知识铺
date: 2019-11-27 11:33:22
tags:
---
### Dos批量修改文件后缀
#### 第一种
```
@echo off
for /f "tokens=* delims=" %%i in ('dir /b/s *.txt') do (
rename "%%i" "*.dxh"
)
```


![知识铺-pasted-51.png](https:\/\/blog.zshipu.com/tlg/images/pasted-51.png)


#### 第二种
```
ren *.txt *.dxh
```

