
title: golang 正则表达式 过滤手机号带有字符串，特殊符号
author: 知识铺
date: 2020-06-04 12:06:09
tags:
---
 过滤手机号带有字符串，特殊符号问题
```
func findNum(mobile string) string  {
	reg := regexp.MustCompile(`[\d]+`)
	allString := reg.FindAllString(mobile, -1)
	arrString := strings.Join(allString , "")
	return arrString
}
```
