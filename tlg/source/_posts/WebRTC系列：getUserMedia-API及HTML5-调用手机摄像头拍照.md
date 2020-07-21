title: WebRTC系列：getUserMedia API及HTML5 调用手机摄像头拍照
author: 知识铺
date: 2020-03-22 16:45:58
tags:
---
## getUserMedia API简介

HTML5的**getUserMedia API**为用户提供访问硬件设备媒体（摄像头、视频、音频、地理位置等）的接口，基于该接口，开发者可以在不依赖任何浏览器插件的条件下访问硬件媒体设备。
getUserMedia API最初是`navigator.getUserMedia`，目前已被最新Web标准废除，变更为`navigator.mediaDevices.getUserMedia（）`，但浏览器支持情况不如旧版API普及。
`MediaDevices.getUserMedia（）`方法提示用户允许使用一个视频和/或一个音频输入设备，例如相机或屏幕共享和/或麦克风。如果用户给予许可，就返回一个`Promise`对象，`MediaStream`对象作为此`Promise`对象的`Resolved`［成功］状态的回调函数参数，相应的，如果用户拒绝了许可，或者没有媒体可用的情况下`PermissionDeniedError`或者`NotFoundError`作为此`Promise`的`Rejected`［失败］状态的回调函数参数。注意，由于用户不会被要求必须作出允许或者拒绝的选择，所以返回的`Promise`对象可能既不会触发`resolve`也不会触发 `reject`。

## 浏览器兼容性


![知识铺-pasted-82.png](https:\/\/blog.zshipu.com/tlg/images/pasted-82.png)

## 语法

<code>navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) { ... })
.catch(function(error) { ... })</code> 
## 参数

**`containers：`**指定请求的媒体类型，主要包含`video`和`audio`，必须至少一个类型或者两个同时可以被指定。如果浏览器无法找到指定的媒体类型或者无法满足相对应的参数要求，那么返回的`Promise`对象就会处于`rejected`［失败］状态，`NotFoundError`作为`rejected`［失败］回调的参数。

_【例】同时请求不带任何参数的音频和视频：_

 <code>{ audio: true, video: true }</code> 

_【例】使用1280x720的摄像头分辨率：_

<code>{
 audio: true,
 video: { width: 1280, height: 720 }
}</code> 

_【例】要求获取最低为1280x720的分辨率：_

<code>{
 audio: true,
 video: {
 width: { min: 1024, ideal: 1280, max: 1920 },
 height: { min: 776, ideal: 720, max: 1080 }
  }
}</code> 

当请求包含一个**`ideal`**（应用最理想的）值时，这个值有着更高的权重，意味着浏览器会先尝试找到最接近指定的理想值的设定或者摄像头（如果设备拥有不止一个摄像头）。

_【例】优先使用前置摄像头（如果有的话）：_

<code>{ audio: true, video: { facingMode: "user" } }</code> 

_【例】强制使用后置摄像头：_

<code>{ audio: true, video: { facingMode: { exact: "environment" } } }</code> 

* * *

成功回调函数`seccessCallback`的参数**`stream`**：`stream`是`MediaStream`的对象，表示媒体内容的数据流，可以通过`URL.createObjectURL`转换后设置为`Video`或`Audio`元素的`src`属性来使用，部分较新的浏览器也可以直接设置为`srcObject`属性来使用。

* * *

失败回调函数`errorCallback`的参数**`error`**，可能的异常有：

*   `AbortError`：硬件问题
*   `NotAllowedError`：用户拒绝了当前的浏览器实例的访问请求；或者用户拒绝了当前会话的访问；或者用户在全局范围内拒绝了所有媒体访问请求。
*   `NotFoundError`：找不到满足请求参数的媒体类型。
*   `NotReadableError`：操作系统上某个硬件、浏览器或者网页层面发生的错误导致设备无法被访问。
*   `OverConstrainedError`：指定的要求无法被设备满足。
*   `SecurityError`：安全错误，在`getUserMedia()` 被调用的 `Document`
    上面，使用设备媒体被禁止。这个机制是否开启或者关闭取决于单个用户的偏好设置。
*   `TypeError`：类型错误，`constraints`对象未设置［空］，或者都被设置为`false`。

## 示例：HTML 5调用媒体设备摄像头

这个例子中，请求访问用户硬件设备的摄像头，并把视频流通过Video元素显示出来。网页中提供一个"拍照"的按钮，通过Canvas将Video的画面截取并绘制，核心代码如下：

**HTML**
```
<!--video用于显示媒体设备的视频流，自动播放-->
<video id="video" autoplay style="width: 480px;height: 320px"></video>
<!--拍照按钮-->
<div>
<button id="capture">拍照</button>
</div>
<!--描绘video截图-->
<canvas id="canvas" width="480" height="320"></canvas>
```

**JavaScript**

```
  //访问用户媒体设备的兼容方法
function getUserMedia(constrains,success,error){
    if(navigator.mediaDevices.getUserMedia){
        //最新标准API
        navigator.mediaDevices.getUserMedia(constrains).then(success).catch(error);
    } else if (navigator.webkitGetUserMedia){
        //webkit内核浏览器
        navigator.webkitGetUserMedia(constrains).then(success).catch(error);
    } else if (navigator.mozGetUserMedia){
        //Firefox浏览器
        navagator.mozGetUserMedia(constrains).then(success).catch(error);
    } else if (navigator.getUserMedia){
        //旧版API
        navigator.getUserMedia(constrains).then(success).catch(error);
    }
}

var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//成功的回调函数
function success(stream){
    //兼容webkit内核浏览器
    var CompatibleURL = window.URL || window.webkitURL;
    //将视频流设置为video元素的源
    video.src = CompatibleURL.createObjectURL(stream);
    //播放视频
    video.play();
}

//异常的回调函数
function error(error){
    console.log("访问用户媒体设备失败：",error.name,error.message);
}
if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia){
    //调用用户媒体设备，访问摄像头
    getUserMedia({
        video:{width:480,height:320}
    },success,error);
} else {
    alert("你的浏览器不支持访问用户媒体设备");
}

//注册拍照按钮的单击事件
document.getElementById("capture").addEventListener("click",function(){
    //绘制画面
    context.drawImage(video,0,0,480,320);
});
```
## 进阶

对本示例进行功能加强，比如使用CSS 3 的滤镜实现模糊、黑白等效果。
