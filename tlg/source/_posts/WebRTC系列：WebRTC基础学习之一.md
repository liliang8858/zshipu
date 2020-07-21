title: WebRTC系列：WebRTC基础学习之一
author: 知识铺
date: 2020-03-22 16:11:45
tags:
---
**1无插件的实时通讯**

想象一下，如果你的手机、电视、电脑都可以通过一个平台进行通信，想象一下，你可以在Web应用中轻松地加入视频聊天和p2p数据分享，这就是WebRTC的愿景。

想试一试吗？WebRTC现在已经被集成到Chrome、Opera和Firefox，在apprtc.appspot.com有个简单的视频聊天应用可供测试。

1.在Chrome、Opera或Firefox中打开apprtc.appspot.com。

2.点击允许按钮允许应用启用你的摄像头。

3.在新的选项卡中打开页面底部显示的URL，当然能在另外一台电脑上打开该URL会更好。

关于这个应用的具体教程详见“一个简单的视频聊天客户端”章节。

**2快速开始**

如果你没有时间阅读这篇文章，想直接编码，你可以这样：

1.看一看Gooogle关于WebRTC的幻灯片（here)。

2.你果你没有用过getUserMedia，要先学习一下它，教程：HTML5 Rocks article，例子：simpl.info/gum。

3.掌握RTCPeerConnection API，教程：本文的代码段，例子：simpl.info/pc，这个例子在一个单独的网页中实现了WebRTC。

4.了解一下WebRTC信令服务、防火墙和NAT转发，教程：apprtc.appspot.com。

5.实在等不及了，可以通过这20+ demos练习WebRTC的Java API。

6.如果有什么问题，可以试试问题帮助页面test.webrtc.org。

或者你可以直接跳到这一步：在WebRTC codelab上一步一步的学习如何构建一个完整的视频聊天应用程序，包括一个简单的信令服务器。

**3关于WebRTC的小故事无插件的实时通讯**

其实一个Web开发的终极挑战就是通过音频和视频进行实时通信，视频通信应该像文本通信一样自然，如果没有它，我们在用户交互方面的创新能力会受到限制。

在过去，实时通信都比较复杂，需要非常丰富的音频和视频技术才能进行开发。 完整的实现实时通信需要整合大量的数据和服务，在Web上实现尤其困难。

2008年，Gmail视频聊天火了。2011年谷歌发布了Hangouts，收购了GIPS，GIPS为RTC开发了许多组件，比如编码和回声消除技术。谷歌开源了GIPS的相关技术，并且与IETF和W3C等标准化组织达成了行业共识。2011年5月爱立信构建了第一个WebRTC应用。

WebRTC目前实现了实时、无插件的音频、视频和数据通信，我们迫切需要它，因为：

1.许多web service在使用RTC，但是需要下载原生app或者插件，比如Skype、Facebook和谷歌Hangouts。

2.下载、安装和升级插件非常繁琐，而且容易出错。

3.插件不容易发现问题，测试很困难，大部分都需要授权，开发成本太高。

WebRTC项目的宗旨是：API是开源、免费的、标准的、可内建于浏览器且比其他现存的技术更加高效。

**4WebRTC使用现状**

目前WhatsAPP、Facebook Messenger等应用都使用了WebRTC，不仅如此WebRTC还出现在其他平台中，比如TokBox。WebRTC可以被整合到WebKitGTK+或者Qt原生应用中。

WebRTC实现了下列三个API：

1.MediaStream (别名getUserMedia)

2.RTCPeerConnection

3.RTCDataChannel

getUserMedia可用于Chrome、Opera、Firefox和Edge。你可以看看这个跨浏览器的demo和Chris Wilson的amazing examples，这些例子使用getUserMedia作为音频的输入。

RTCPeerConnection可用于Chrome、Opera和Firefox。经过几次迭代之后

RTCPeerConnection被Chrome和Opera实现为webkitRTCPeerConnection，被Firefox实现为mozRTCPeerConnection。其他的实现已经被废弃。当标准化进程稳定之后，这两个实现名字的前缀会被移除。Chromium的一个超级简单的RTCPeerConnection实现在GitHub上，大量的视频聊天应用在apprtc.appspot.com。

RTCDataChannel可用于Chrome、Opera和Firefox。在GitHub上有关于数据通道的例子，可以去实践一下。

**5我的第一个WebRTC应用**

开发WebRTC应用需要做好下列准备：

1.获取音视频流或者其他数据

2.得到网络信息，如IP地址和端口，通过网络和其它WebRTC客户端交换数据，解决NATs/防火墙穿透问题。

3.协调信令通信来报告错误、启动或关闭会话。

4.交换媒体和客户端信息，比如分辨率和编解码参数。

5.传输音视频流或者其他数据。

为了实现数据流通信，WebRTC实现了下列API：

1.MediaStream：从设备获取数据流，比如说摄像头和麦克风。

2.RTCPeerConnection：音视频通话，包括设备加密和带宽管理。

3.RTCDataChannel：p2p通信。

**6MediaStream (别名getUserMedia)**

MediaStream API代表媒体流的同步。比如，从摄像头和麦克风获取的媒体流具有同步视频和音频轨道。不要将这里的MediaStream轨道和<track>元素混淆，它们是完全不同的概念。

理解MediaStream最简单的方法如下：

1.在Chrome或Opera中打开例子

https://webrtc.github.io/samples/src/content/getusermedia/gum

2.打开控制台

3.检查stream变量，该变量是全局的。

每个MediaStream都有输入，即navigator.getUserMedia()；也有输出，被传递到video元素或RTCPeerConnection

getUserMedia()方法有三个参数：

1.一个约束对象。

2.一个成功的回调，如果成功会回传一个MediaStream。

3.一个失败的回调，如果失败会回传一个error对象。

每个MediaStream都有一个label，比如

'Xk7EuLhsuHKbnjLWkW4yYGNJJ8ONsgwHBvLQ',getAudioTradks()和

getAudioTracks()方法会回传一个MediaStreamTracks对象的数组。

在例子

https://webrtc.github.io/samples/src/content/getusermedia/gum   中,stream.getAudioTracks()回传了一个空数组（因为没有音频），假设摄像头正常工作并连接，stream.getVideoTracks()回传一个MediaStreamTracks对象的数组。数组中的每个MediaStreamTracks对象包含一种媒体（‘video’或‘audio’）和一个label（比如'FaceTime HD Camera (Built-in)'），而且还代表了一个或多个音视频的数据通道。在这个例子中，只有一个视频轨道，没有音频。当然，很容易就能扩展到其他情况。

在Chrome或Opera中, URL.createObjectURL()方法将MediaStream转换成Blob URL，该Blob URL可以设置为video元素的输入（在Firefox和Opera中，视频源可以通过数据流本身设置）。版本M25开始，基于Chromium的浏览器（Chrome和Opera）允许来自getUserMedia的音频数据传递到aduio或video元素。

getUserMedia还可用作Web Audio API的输入节点。


![知识铺-pasted-54.png](https:\/\/blog.zshipu.com/tlg/images/pasted-54.png)

在manifest中添加audioCapture和videoCapture权限可以在加载的时候得到（仅一次）授权，毕竟加载之后用户不会再有对摄像头或麦克风的访问请求。

最终的目的是使MediaStream适用于任何数据源，不仅限于摄像头和麦克风，还包括来自磁盘或者传感器等输入设备二进制数据。

需要注意的是getUserMedia()必须在服务器上使用，而不是本地文件中，否则的话将会抛出权限的错误PERMISSION_DENIED。

getUserMedia()通常和其他的Java API及库一起使用:

Webcam Toy是一个photobooth应用，它使用WebGL来添加一些特效，让用户可以共享照片或是保存到本地。

FaceKat是一个人脸追踪的游戏，使用headtrackr.js。

ASCII Camera使用Canvas API来生成ASCII码的图片。

**7约束**

Constraints已经在Chrome、FireFox和Opera中实现了。通过约束可以设置getUserMedia()和RTCPeerConnection的addStream()获取视频的分辨率，约束的实现是为了通过applyConstraints()方法控制视频高度和宽度的比例、帧率、和正反摄像头模式等等……

这里有一个例子：

https://webrtc.github.io/samples/src/content/getusermedia/resolution/。

一个陷阱：getUserMedia约束设置在浏览器的一个标签中，会约束之后打开的所有标签。设置一个非法的值会提示以下错误：


![知识铺-pasted-55.png](https:\/\/blog.zshipu.com/tlg/images/pasted-55.png)
**8屏幕和标签捕获**

Chrome应用可以通过chrome.tabCapture和chrome.desktopCapture这两个API实时分享浏览器标签或者整个桌面。桌面捕获的例子：WebRTC samples GitHub repository。更多关于屏幕录制、编码的信息和有参考：Screensharing with WebRTC。

在Chrome中，可以将屏幕捕获当做MediaStream的数据源，此时使用的是实验性的chromeMediaSource约束，一个例子：this demo。需要注意的是屏幕捕获功能需要HTTPS支持，并且只用于开发中，通过一个命令行标志来启用。

**9信令：会话控制，网络和媒体信息**

WebRTC使用RTCPeerConnection在浏览器（别名peer）之间互通数据流，但是需要一种机制去协调通信或者发送控制消息，这个过程被称为信令。WebRTC没有指定信令方法和协议，信令不是RTCPeerConnection API的一部分。

因此，WebRTC应用的开发者可用选择其擅长的消息协议，比如SIP或XMPP，或者其他合适的双工通信协议。

apprtc.appspot.com这个例子使用XHR和Channel API作为信令机制。codelab是我们通过Socket.io构建，运行在Node server上的应用。

信令通常用于交互三类信息：

1.会话控制消息；初始化或者关闭通信，报告错误。

2.网络信息：对于外部而言，我的IP地址和端口是什么？

3.媒体信息：什么编码和分辨率浏览器可以处理，我的浏览器要和谁通信。

在p2p的流传输之前，必须通过信令成功的交换信息。

假如Alice想和Bob通信，这里有个简单的例子来自WebRTC W3C Working Draft，展示了实际的信令处理过程。例子中假设存在某种信令机制，该机制通过createSignalingChannel()方法创建。注意在Chrome和Opera中，RTCPeerConnection是带有前缀的。

![知识铺-pasted-56.png](https:\/\/blog.zshipu.com/tlg/images/pasted-56.png)

首先，Alice和Bob交换网络信息，‘finding candidates’表示通过ICE framework查找网络接口和端口。

1.Alice创建一个RTCPeerConnection对象，该对象内置onicecandidate处理器。

2.这个处理器在网络candidate生效时开始运行。

3.Alice通过信令通道发送序列化的数据给Bob，信令通道可以是WebSocket或者其他机制。

4.当Bob收到Alice的candidate消息后，调用addIceCandidate将candidate添加到远端描述。

WebRTC客户端（别名peer，这里指Alice和Bob）需要明确并交换本地和远程音视频媒体信息，比如分辨率和编码格式。交换媒体信息的信令，是通过交换会话描述协议（SDP）来实现的。

1.Alice调用了RTCPeerConnection的createOffer()方法，它的回调参数传入的是RTCSessionDeion（Alice的本地会话描述）。

2.在回调中，Alice调用setLocalDeion()方法设置了本地会话描述，然后将该会话描述通过信令通道发送给Bob。注意，RTCPeerConnection并不会采集candidate直到setLocalDeion()被调用。

3.Bob使用setRemoteDeion()方法将Alice发送给他的会话描述设置为远程会话描述。

4.Bob调用了RTCPeerConnection的createAnswer()方法，并传入它从Alice接收到的远程会话描述，此时一个与Alice兼容的本地会话产生了。createAnswer()的回调参数传入的是RTCSessionDeion（Bob将它设置为本地会话描述并发送给Alice）。

5.当Alice收到Bob的会话描述，她使用setRemoteDeion()方法将其设置为远程会话描述。

6.Ping

RTCSessionDeion对象遵从SDP（Session Deion Protocol），一个SDP对象看起来如下所示：

![知识铺-pasted-57.png](https:\/\/blog.zshipu.com/tlg/images/pasted-57.png)

交换网络和媒体信息可以同时进行，但这两个过程必须在音视频流开始传输之前完成。

上述的offer/answer架构被称为JSEP（Java Session Establishment Protocol），JSEP架构如下所示：


![知识铺-pasted-58.png](https:\/\/blog.zshipu.com/tlg/images/pasted-58.png)

一旦信令过程成功，就可以直接进行Caller和callee之间p2p的数据流传输了。

**10RTCPeerConnection**

RTCPeerConnection是WebRTC的组件，用来稳定高效的处理端对端的数据流通信。

下图是WebRTC的架构图，标明了RTCPeerConnection扮演的角色。你可能注意到了，绿色部分是相当复杂的。


![知识铺-pasted-59.png](https:\/\/blog.zshipu.com/tlg/images/pasted-59.png)

从Java的角度来看，理解这个图最重要的是理解RTCpeerConnection这一部分。WebRTC对编解码器和协议做了大量的工作，使实时通信成为可能，甚至在一些不可靠的网络中：

1.包补偿

2.回声消除

3.自适应带宽

4.视频抖动缓冲

5.自动增益控制

6.噪声抑制

7.图像清除

章节九中的例子从信令的角度进行了讲解，下面我们将学习两个WebRTC应用；一个简单的演示了RTCPeerConnection，另一个是功能齐全的视频聊天客户端。

**11无服务器的RTCPeerConnection**

下面的代码来自

https://webrtc.github.io/samples/src/content/peerconnection/pc1    包含基于网页的本地和远程RTCPeerConnection。这个例子中caller和callee在同一个网页中，能更加清晰的展示RTCPeerConnection API的工作流程，因为RTCPeerConnection对象之间可以直接交换数据和消息，不需要通过中继信道机制。

一个陷阱：RTCPeerConnection()第二个约束类型的参数是可选的，它与getUserMedia()中使用的约束类型不同。

本例中pc1表示本地端（caller），pc2表示远程端（callee）

**caller**

1.创建一个RTCPeerConnection，并通过getUserMedia()添加数据流。


![知识铺-pasted-60.png](https:\/\/blog.zshipu.com/tlg/images/pasted-60.png)

2.创建一个offer，并将它设置为pc1的本地会话描述，设置为pc2的远程会话描述。可以直接在代码中设置，不需要使用信令，因为caller和callee在同一个网页中。


![知识铺-pasted-61.png](https:\/\/blog.zshipu.com/tlg/images/pasted-61.png)

**callee**

1.创建pc2，接收pc1的数据流，并显示到video元素中


![知识铺-pasted-62.png](https:\/\/blog.zshipu.com/tlg/images/pasted-62.png)

**12有服务器的RTCPeerConnection**

实际应用中，WebRTC需要服务器，无论多简单，下面四步是必须的：

1.用户通过交换名字之类的信息发现对方。

2.WebRTC客户端应用交换网络信息。

3.客户端交换媒体信息包括视频格式和分辨率。

4.WebRTC客户端穿透NAT网关和服务器。

换句话说，WebRTC需要四种类型的服务端功能。

1.用户发现和通信

2.信令

3.NAT/防火墙穿透

4.中继服务器，防止端到端的通信失败

以上这些不在本文讨论范围之内。可以说基于STUN和TURN协议的ICE框架，使得RTCPeerConnection处理NAT穿透和其他网络难题成为可能。

ICE框架用于端到端的连接，比如说两个视频聊天客户端。起初，ICE尝试通过UDP直接连接两端，这样可以保证低延迟。在这个过程中，STUN服务器有一个简单的任务：使NAT后边的端能找到它的公网地址和端口（谷歌有多个STUN服务器，其中一个用在了

apprtc.appspot.com例子）。


![知识铺-pasted-63.png](https:\/\/blog.zshipu.com/tlg/images/pasted-63.png)
如果UDP传输失败，ICE会尝试TCP：首先是HTTP，然后才会选择 HTTPS。如果直接连接失败，通常因为企业的NAT穿透和防火墙，此时ICE使用中继（Relay）服务器。换句话说，ICE首先使用STUN和UDP直接连接两端，失败之后返回中继服务器。‘finding cadidates’就是寻找网络接口和端口的过程。



![知识铺-pasted-64.png](https:\/\/blog.zshipu.com/tlg/images/pasted-64.png)
WebRTC工程师Justin Uberti在幻灯片2013 Google I/O WebRTC presentation中提供了许多关于ICE、STUN和TURN的信息。

**13一个简单的视频聊天客户端**

如果你觉得这个例子比较难，你也行会喜欢上我们的WebRTC codelab。那里一步步的介绍了如何建立一个完整的视频聊天应用，包括一个运行于Node server上基于Socket.io的信令服务器。

apprtc.appspot.com是一个测试WebRTC的好地方，里面有视频聊天的例子，它实现了信令和基于STUN服务器的NAT/防火墙穿透。这个例子使用adapter.js处理不同的RTCPeerConnection和getUserMedia()实现。

下面我们详细的过一遍代码。

**如何开始**

这个例子从initialize()函数开始运行。


![知识铺-pasted-65.png](https:\/\/blog.zshipu.com/tlg/images/pasted-65.png)

需要注意的是，变量room和openChannel()参数的值都是由Google App Engine应用自身提供的。查看一下index.html template 就知道该赋什么值了。

这段代码初始化HTML video元素的相关变量，video元素播放来自本地摄像头（localVieo）和远程摄像头（remoteVideo）的视频流。resetStatus()设置了一条状态消息。

openChannel()函数建立了WebRTC客户端间的消息通道。

![知识铺-pasted-66.png](https:\/\/blog.zshipu.com/tlg/images/pasted-66.png)
关于信令，本例使用的是Google App Engine Channel API，这使得JavaScritp客户端无需轮询就能实现消息传输。


![知识铺-pasted-67.png](https:\/\/blog.zshipu.com/tlg/images/pasted-67.png)

使用Channel API建立通道的流程大致如下：

1.客户端A生成一个唯一ID。

2.客户端A向Google App Engine应用请求一个通道标识（即openChannel()的参数），并将它的ID传给Google App Engine应用。

3.Google App Engine应用会调用Channel API为客户端ID分配一个通道和一个通道标识。

4.Google App Engine应用将通道标识发给客户端A。

5.客户端A打开socket并监听服务器上建立的通道。


![知识铺-pasted-68.png](https:\/\/blog.zshipu.com/tlg/images/pasted-68.png)

发送消息的流程大致如下：

1.客户端B给Google App Engine应用发送了一个POST请求，要求升级程序。

2.Google App Engine应用给通道发送一个请求消息。

3.消息经通道传递给客户端A

4.客户端A的onmessage回调函数被调用。


![知识铺-pasted-69.png](https:\/\/blog.zshipu.com/tlg/images/pasted-69.png)

重申一次，信令传输机制是由开发者选择的。WebRTC并没有指定信令机制。本例的Channel API能被其他的方式取代，比如WebSocket。

initialize()调用完openChannel()之后，紧接着调用getUserMedia()，这个函数可以检测出浏览器是否支持getUserMedia API。如果一切顺利，onUserMediaSuccess会被调用。


![知识铺-pasted-70.png](https:\/\/blog.zshipu.com/tlg/images/pasted-70.png)

这样一来，本地摄像头就能显示在localVideo元素中了。

此时，initiator被设置成1（直到caller的会话终止），maybeStart()被调用。


![知识铺-pasted-71.png](https:\/\/blog.zshipu.com/tlg/images/pasted-71.png)
该函数使用了一种巧妙的结构，可以工作于多个异步回调：maybeStart()可能被任何函数调用，但是只有当localStream被定义、channelReady为true且通信还未开始的情况下，maybeStart()才会运行。因此，当连接还未建立，本地流已经可用，且信令通道已经准备好时，连接才会创建并加载本地视频流。接着started被设置为true。所以连接不会被创建多次 。

**RTCPeerConnection: 发起通话**

在

maybeStart()中被调用的createPeerConnection()，才是关键所在。

![知识铺-pasted-72.png](https:\/\/blog.zshipu.com/tlg/images/pasted-72.png)

这段代码的目的是使用STUN服务器建立一个连接，并将onIceCandidate()作为回调函数。然后给RTCPeerConnection每个事件指定处理器（函数）：当会话连接或打开，当远程流被加载或移除。在本例中，这些处理器只是记录了状态消息——除了onRemoteStreamAdded()，它给remoteVideo元素设置了数据源。


![知识铺-pasted-73.png](https:\/\/blog.zshipu.com/tlg/images/pasted-73.png)
一旦createPeerConnection()在maybeStart()中被调用，就会发起通话，创建Offer并发送消息给对端。


![知识铺-pasted-74.png](https:\/\/blog.zshipu.com/tlg/images/pasted-74.png)

这里的offer创建过程类似于上面无信令的例子。但是，除此之外，一条消息被发送到了对端，详见setLocalAndSendMessage()：


![知识铺-pasted-75.png](https:\/\/blog.zshipu.com/tlg/images/pasted-75.png)

**用Channel API传输信令**

当RTCPeerConnection在createPeerConnection()中成功创建的时候，onIceCandidate()回调函数会触发，并发送关于candidate的信息。

![知识铺-pasted-76.png](https:\/\/blog.zshipu.com/tlg/images/pasted-76.png)
从客户端到服务器的消息外传，是通过sendMessage()方法内的XHR请求实现的。


![知识铺-pasted-77.png](https:\/\/blog.zshipu.com/tlg/images/pasted-77.png)

XHR多用于从客户端发送信令消息到服务端，但是某些机制需要用来实现服务端到客户端的消息传输：本例用的是Google App Engine Channel API。来自此API的消息会传递到

processSignalingMessage()：


![知识铺-pasted-78.png](https:\/\/blog.zshipu.com/tlg/images/pasted-78.png)

如果消息是来自对端的answer（offer的回应），RTCPeerConnection设置远程会话描述，通信开始。如果消息是offer（来自callee），RTCPeerConnection设置远程会话描述，发送answer给callee，然后调用RTCPeerConnection的startIce()方法发起连接。


![知识铺-pasted-79.png](https:\/\/blog.zshipu.com/tlg/images/pasted-79.png)

于是乎，caller和callee都发现了对方并交换相关信息，会话被初始化，实时数据通信可以开始了。

**网络技术**

WebRTC目前只实现了一对一的通信，但是可用于更复杂的网络环境：比如，多个peer各自直接通信，即p2p；或者通过MCU（Multipoint Control Unit）服务器来实现流的转发、合成或音视频的录制。

![知识铺-pasted-80.png](https:\/\/blog.zshipu.com/tlg/images/pasted-80.png)

许多WebRTC应用只演示了浏览器间的通信，但是通过网关服务器可以实现WebRTC与telephones（别名PSTN）和VOIP系统直接的通信。2012年5月，Doubango Telecom开源了sipml5 SIP client，该客户端基于WebRTC和WebSocket，能实现浏览器和IOS或Android应用之间的视频通话。

**14RTCDataChannel**

除了音频和视频，WebRTC支持其他类型数据的实时通信。

TCDataChannel API支持p2p低延迟和高吞吐量的二进制数据流交换，这里有个例子：http://webrtc.github.io/samples/src/content/datachannel/datatransfer

很多领域都潜在地使用到了这个API，比如：

1.游戏

2.远程桌面应用

3.实时文字聊天

4.文件传输

5.分散网络

充分利用了RTCPeerConnection的多个特性，能实现强大而灵活的p2p通信。

1.利用RTCPeerConnection进行会话设置。

2.通过优先级设置多个同步的channel。

3.可靠和非可靠的语义传递。

4.内建立安全的DTLS和拥塞控制。

5.能用于音视频或其他方面

TCDataChannel API语法与WebSocket类似，包括send()方法和message事件。

![知识铺-pasted-81.png](https:\/\/blog.zshipu.com/tlg/images/pasted-81.png)
因为是浏览器间的直接通信，所以RTCDataChannel要比WebSocket快得多，即使通信用到了中继服务器。

RTCDataChannel可用于Chrome、Opera和Firefox。出色的Cube Slam游戏使用TCDataChannel API来交换游戏状态：是敌还是友！Sharefest演示了通过RTCDataChannel分享文件，peerCDN提供了WebRTC如何实现p2p内容分发的一种思路。

更多关于RTCDataChannel的信息，可以参考IETF的draft protocol spec。

**15安全**

实时通信应用或插件会在许多方面忽视了安全性：

1.浏览器之间、浏览器与服务器之间的音视频或其他数据没有加密。

2.应用在用户没有察觉的情况下录制和分发音视频。

3.恶意软件或病毒可能入侵了正常的插件或应用。

WebRTC的许多特性可以避免这些问题：

1.WebRTC采用类似DTLS和SRTP的安全协议。

2.所有的WebRTC组件强制加密，包括信令机制。

3.WebRTC不是插件：它的组件运行于浏览器沙盒，不是独立的一个进程，这些组件不需要单独安装，且随着浏览器更新。

4.摄像头和麦克风的访问必须经过明确准许，当摄像头和麦克风运行时，界面上会清楚的显示出来。

关于流媒体安全的讨论超出了本文的范畴。更多信息可参考IETF的WebRTC Security Architecture。