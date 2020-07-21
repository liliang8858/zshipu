title: 不停折腾hexo-admin，直到完全实时自动发布为止
author: 知识铺
date: 2019-11-03 21:34:19
tags:
---
知识铺： 致力于打造轻知识点，持续更新每次的知识点较少，阅读不累。不占太多时间，不停地来唤醒记忆深处的知识点。
### 处理图片问题
在hexo-admin中，截图粘贴图片，一般粘贴的图片，会自动上传到 source/images 。 
##### 问题1 如何把图片自动发布到 public/images
改造开始：  node_modules/hexo-admin/app.js  添加三处代码即可自动发布到 public/images
![知识铺-pasted-43.png](https:\/\/blog.zshipu.com/note/images/pasted-43.png)
##### 问题2 在hexo-admin 如何也能预览图片
结果解决，每次截图复制到 hexo-admin的时候，是相对路径，在预览区是一个裂图。   
改造开始：第一步  _admin-config.yml 添加属性 options.imgRoot

![知识铺-pasted-44.png](https:\/\/blog.zshipu.com/note/images/pasted-44.png)
改造开始：第二步  node_modules/hexo-admin/app.js 添加代码及修改代码

![知识铺-pasted-45.png](https:\/\/blog.zshipu.com/note/images/pasted-45.png)

![知识铺-pasted-46.png](https:\/\/blog.zshipu.com/note/images/pasted-46.png)
##### 问题3 如何实时发布文章
改造开始：添加pm2 脚本 gen_run.js

const { exec } = require('child_process')   
exec(' hexo g -w  & ',(error, stdout, stderr) => {   
    if(error){  
        console.log('exec error: ${error}')  
        return   
    }   
    console.log('stdout: ${stdout}');  
    console.log('stderr: ${stderr}');  
})  

使用pm2 启动   
> pm2 start gen_run.js

注意脚本中 hexo g -w 这里的 -w 监视文件变化，有变化自动发布。


