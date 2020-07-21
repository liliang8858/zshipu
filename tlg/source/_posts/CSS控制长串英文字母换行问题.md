title: CSS控制长串英文字母换行问题
author: 知识铺
date: 2019-11-13 10:26:10
tags:
---
CSS控制长串英文字母换行问题
这段时间在编写网页时，遇到了将一个随机字符码显示的问题。因为字符码全部由字母组成，而且长度比较长，在我布局的容器中居然不换行了。传统的英文语句在单词之间的空格处可以自动换行。但是，因为这里是字母串，中间没有空格，导致了没有自动换行问题……

英文语句的换行
代码如下：
```
<body>
<div style="width: 100px; height: 100px; background-color: cadetblue;">
This blog is only a note of notes.
</div>
</body>
```
效果如下：

![知识铺-pasted-48.png](https:\/\/blog.zshipu.com/tlg/images/pasted-48.png)
可以看出，传统的英文语句在空格的地方自动换行了。

字母串不会换行
代码如下：
```
<body>
<div style="width: 100px; height: 100px; background-color: cadetblue;">
ThisBlogIsOnlyANoteOfNotes.
</div>
</body>
```
效果如下：

![知识铺-pasted-49.png](https:\/\/blog.zshipu.com/tlg/images/pasted-49.png)
解决方法
在需要强制换行的地方加上如下样式：word-break:break-all;即可。修改后：
代码如下：
```
<body>
<div style="width: 100px; height: 100px; background-color: cadetblue; word-break:break-all;">
ThisBlogIsOnlyANoteOfNotes.
</div>
</body>
```
效果如下：

![知识铺-pasted-50.png](https:\/\/blog.zshipu.com/tlg/images/pasted-50.png)