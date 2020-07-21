
title: Flutter 滑块小部件有哪些新增功能
author: 知识铺
date: 2020-06-25 19:17:07
tags:
---
 
<font _mstmutation="1" _msthash="34229" _msttexthash="2001307386">Flutter 允许您创建美观的本机编译应用程序。Fluter之所以能做到这一点，是因为[材料](https://zshipu.com/t?url=https://material.io)是一个设计系统，有助于建立高质量的数字体验。随着 UI 设计的不断发展，材料继续更新其组件、运动和设计系统。</font>

<font _mstmutation="1" _msthash="28405" _msttexthash="1304914624">Flutter 最近更新了 和 小部件到最新的材料指南。新的滑块的设计考虑到了更好的可访问性：轨道更高，拇指有阴影，并且值指示器具有新的形状和改进的文本缩放支持。</font>
```
[Slider](https://zshipu.com/t?url=https://api.flutter.dev/flutter/material/Slider-class.html)
```

```
[RangeSlider](https://zshipu.com/t?url=https://api.flutter.dev/flutter/material/RangeSlider-class.html)
```


<font _mstmutation="1" _msthash="33917" _msttexthash="53819805">本文介绍了 对 和 部件的更改。</font>
```
Slider
```

```
RangeSlider
```


 ![](https://miro.medium.com/max/56/0*neQ_0e28CgjA00W_?q=20)

![](https://miro.medium.com/max/546/0*neQ_0e28CgjA00W_)

<noscript>![](https://miro.medium.com/max/1092/0*neQ_0e28CgjA00W_)</noscript>

# <font _mstmutation="1" _msthash="29198" _msttexthash="27910649">有什么新内容？</font>


```
Slider
```
<font _mstmutation="1" _msthash="33696" _msttexthash="429707499">并更新，让您在使用这些小部件时获得更流畅的体验。此图演示了制作滑块小部件的五个不同的组件。</font>
```
RangeSlider
```


 ![](https://miro.medium.com/max/60/0*elEXE_pM0iEDuv_t?q=20)

![](https://miro.medium.com/max/960/0*elEXE_pM0iEDuv_t)

<noscript>![](https://miro.medium.com/max/1920/0*elEXE_pM0iEDuv_t)</noscript>

<font _mstmutation="1" _msthash="32344" _msttexthash="36459254">和 由五部分组成：</font>
```
Slider
```

```
RangeSlider
```


1.  <font _mstmutation="1" _msthash="27846" _msttexthash="51132783">显示拇指值标签的值指示器</font>
2.  <font _mstmutation="1" _msthash="23101" _msttexthash="29336229">拇指滑过的轨迹</font>
3.  <font _mstmutation="1" _msthash="34671" _msttexthash="28862158">指示值位置的拇指</font>
4.  <font _mstmutation="1" _msthash="28574" _msttexthash="37808160">按下拇指时显示的叠加</font>
5.  <font _mstmutation="1" _msthash="28275" _msttexthash="58192030">滑块离散时，在轨道上打勾</font>

<font _mstmutation="1" _msthash="22282" _msttexthash="108414111">注意：本文指的是两种不同类型的叠加：</font>

*   <font _mstmutation="1" _msthash="34736" _msttexthash="60345181">该组件表示上图中提到的组件。</font>
```
OverlaySlider
```

*   <font _mstmutation="1" _msthash="28730" _msttexthash="234396942">Flutter 的类用于在以下屏幕上显示的所有其他小部件上"浮动"小部件。</font>
```
Overlay
```


# <font _mstmutation="1" _msthash="28431" _msttexthash="41961400">新的默认值指示器形状</font>

<font _mstmutation="1" _msthash="28106" _msttexthash="1673371609">旧滑块和新滑块小部件之间最大的视觉差异是默认值指示器：和 。这些指示器反映了材料的最新设计变化。旧的指示器形状是一个倒置的梨，新的形状更矩形，看起来像一个语音气泡。值指示器已更新为 和。</font>
```
[RectangularSliderValueIndicatorShape](https://zshipu.com/t?url=https://master-api.flutter.dev/flutter/material/RectangularSliderValueIndicatorShape-class.html)
```

```
Slider
```

```
[RectangularRangeSliderValueIndicatorShape](https://zshipu.com/t?url=https://master-api.flutter.dev/flutter/material/RectangularRangeSliderValueIndicatorShape-class.html)
```

```
RangeSlider
```

```
Slider
```

```
RangeSlider
```


 ![](https://miro.medium.com/max/60/0*i3IWhVNFBB5OJEze?q=20)

![](https://miro.medium.com/max/538/0*i3IWhVNFBB5OJEze)

<noscript>![](https://miro.medium.com/max/1076/0*i3IWhVNFBB5OJEze)</noscript>

# <font _mstmutation="1" _msthash="29211" _msttexthash="37307556">叠加上的值指示器绘制</font>

<font _mstmutation="1" _msthash="32760" _msttexthash="4619124172">更新的值指示器现在绘制在叠加上。这意味着指标不再局限于滑块的范围，可以在其他小部件上显示。这是预料之中的，因为指标仅在处理手势检测器时激活，这意味着它仅在用户与滑块交互时显示。通过将 与 、和 widgets 集成，值指示器可以显示在其他小部件上。要了解有关此机制的更多信息，请参阅[如何在（可能转换的）UI 小部件上浮动叠加小部件](https://zshipu.com/t?url=/flutter/how-to-float-an-overlay-widget-over-a-possibly-transformed-ui-widget-1d15ca7667b6)。</font>
```
MediaQuery
```

```
[Overlay](https://zshipu.com/t?url=https://api.flutter.dev/flutter/widgets/Overlay-class.html)
```

```
[CompositedTransformTarget](https://zshipu.com/t?url=https://api.flutter.dev/flutter/widgets/CompositedTransformTarget-class.html)
```

```
[CompositedTransformFollower](https://zshipu.com/t?url=https://api.flutter.dev/flutter/widgets/CompositedTransformFollower-class.html)
```

```
[Layerlink](https://zshipu.com/t?url=https://api.flutter.dev/flutter/rendering/LayerLink-class.html)
```


<font _mstmutation="1" _msthash="28691" _msttexthash="78461617">下图显示了 和 小部件的制作方式：</font>
```
Slider
```

```
RangeSlider
```


 ![](https://miro.medium.com/max/60/0*DEYZqsMMIdQWZ8mF?q=20)

![](https://miro.medium.com/max/960/0*DEYZqsMMIdQWZ8mF)

<noscript>![](https://miro.medium.com/max/1920/0*DEYZqsMMIdQWZ8mF)</noscript>

<font _mstmutation="1" _msthash="40443" _msttexthash="654960618">您可能会注意到，我们使用单独的来绘制叠加上的指示器。这是因为我们需要在类和屏幕上绘制，你不能从同一个小部件执行。</font>
```
LeafRenderObjectWidget
```

```
Overlay
```

```
LeafRenderObjectWidget
```


<font _mstmutation="1" _msthash="33813" _msttexthash="702360386">由于我们现在正在叠加上绘制值指示器，因此不再局限于包含滑块的范围。指标不再剪切到该框，这意味着整个值指示器始终显示。</font>
```
MediaQuery
```


 ![](https://miro.medium.com/max/60/0*HviG9DqaeW84PJi5?q=20)

![](https://miro.medium.com/max/512/0*HviG9DqaeW84PJi5)

<noscript>![](https://miro.medium.com/max/1024/0*HviG9DqaeW84PJi5)</noscript>

<font _mstmutation="1" _msthash="32526" _msttexthash="148044234">注意：此示例使用设置为 4 进行，以便更好地演示。</font>
```
textScaleFactor
```


<font _mstmutation="1" _msthash="39390" _msttexthash="2184905710">值指示器矩形被移动，以便指标的一部分不会消失在屏幕上。此改进允许您增加指标中的位数，并增加应用程序的文本比例因子，而不必担心文本是否超过屏幕大小。在下图中，值指示器文本刻度为 4，包含 3 位值，但滑块处理时没有问题。</font>

double getHorizontalShift({ RenderBox parentBox, Offset center, TextPainter labelPainter, double textScaleFactor, Size sizeWithOverflow, double scale,}) { assert(!sizeWithOverflow.isEmpty); const double edgePadding = 8.0; final double rectangleWidth = _upperRectangleWidth(labelPainter, scale, textScaleFactor); /// Value indicator draws on the overlay, and by using the global Offset, /// we are making sure that we use the bounds of the Overlay instead of the Slider. final Offset globalCenter = parentBox.localToGlobal(center); // The rectangle must be shifted toward the center so that it minimizes the // chance of it rendering outside the bounds of the render box. If the shift // is negative, then the lobe is shifted from right to left. If the shift is // positive, then the lobe is shifted from left to right. final double overflowLeft = math.max(0, rectangleWidth / 2 —     globalCenter.dx + edgePadding); final double overflowRight = math.max(0, rectangleWidth / 2 — (sizeWithOverflow.width — globalCenter.dx — edgePadding)); if (rectangleWidth < sizeWithOverflow.width) { return overflowLeft — overflowRight; } else if (overflowLeft — overflowRight > 0) { return overflowLeft — (edgePadding * textScaleFactor); } else { return -overflowRight + (edgePadding * textScaleFactor); }}

 ![](https://miro.medium.com/max/60/0*f7ar1ek7C7pUx5cF?q=20)

![](https://miro.medium.com/max/1104/0*f7ar1ek7C7pUx5cF)

<noscript>![](https://miro.medium.com/max/2208/0*f7ar1ek7C7pUx5cF)</noscript>

<font _mstmutation="1" _msthash="29263" _msttexthash="148044234">注意：此示例使用设置为 4 进行，以便更好地演示。</font>
```
textScaleFactor
```


# <font _mstmutation="1" _msthash="39117" _msttexthash="31678933">激活的值指示器优先</font>

<font _mstmutation="1" _msthash="23153" _msttexthash="566154147">数值指标也已更新，以便当前活动指标优先于静止指标。这意味着，如果指标重叠，则活动指标"浮动"于另一个指标。</font>
```
RangeSlider
```


 ![](https://miro.medium.com/max/60/0*dUrIA4k2wFu48rDe?q=20)

![](https://miro.medium.com/max/1198/0*dUrIA4k2wFu48rDe)

<noscript>![](https://miro.medium.com/max/2396/0*dUrIA4k2wFu48rDe)</noscript>

<font _mstmutation="1" _msthash="22009" _msttexthash="148044234">注意：此示例使用设置为 4 进行，以便更好地演示。</font>
```
textScaleFactor
```


# <font _mstmutation="1" _msthash="22607" _msttexthash="23032880">更新旧值指示器</font>

<font _mstmutation="1" _msthash="33644" _msttexthash="952840200">我们保留了小部件，并更新了它，以具有更好的可扩展性和可访问性。小部件也打印在类似 的 上。在下面的示例中，您可以看到这两个 和 都使用旧值指示器。</font>
```
PaddleValueIndicator
```

```
PaddleValueIndicator
```

```
Overlay
```

```
RectangularSliderValueIndicatorShape
```

```
Slider
```

```
RangeSlider
```


<font _mstmutation="1" _msthash="35113" _msttexthash="689275678">如果要继续使用旧值指示器，只需使用 包装小部件，并将 属性设置为 。过程对于 是相同的。使用 包包小部件，并将 属性设置为 。</font>
```
Slider
```

```
SliderTheme
```

```
valueIndicatorShape
```

```
SliderThemeData
```

```
PaddleSliderValueIndicatorShape
```

```
RangeSlider
```

```
RangeSlider
```

```
SliderTheme
```

```
rangeValueIndicatorShape
```

```
SliderThemeData
```

```
PaddleRangeSliderValueIndicatorShape
```


 ![](https://miro.medium.com/max/60/0*LNKN4lwqpBxQZ60A?q=20)

![](https://miro.medium.com/max/528/0*LNKN4lwqpBxQZ60A)

<noscript>![](https://miro.medium.com/max/1056/0*LNKN4lwqpBxQZ60A)</noscript>

# <font _mstmutation="1" _msthash="23725" _msttexthash="51810135">活动轨道大于非活动轨道</font>

<font _mstmutation="1" _msthash="28743" _msttexthash="3093123553">中的其他组件形状也已更新。轨道形状已更改，以便轨道的活动部分大于轨道的非活动部分。这意味着，如果应用程序使用从左到右的语言，则轨道的左侧部分大于右侧。如果应用程序使用从右到左的语言，则轨道的右侧部分大于左侧。对于 ，活动轨道是两个拇指之间的轨道部分。</font>
```
Slider
```

```
RangeSlider
```


 ![](https://miro.medium.com/max/60/0*q81pqrMZMWkCmRLF?q=20)

![](https://miro.medium.com/max/632/0*q81pqrMZMWkCmRLF)

<noscript>![](https://miro.medium.com/max/1264/0*q81pqrMZMWkCmRLF)</noscript>

 ![](https://miro.medium.com/max/60/0*qIoICKw6wo7NcwOW?q=20)

![](https://miro.medium.com/max/632/0*qIoICKw6wo7NcwOW)

<noscript>![](https://miro.medium.com/max/1264/0*qIoICKw6wo7NcwOW)</noscript>

# <font _mstmutation="1" _msthash="28731" _msttexthash="21701108">标记标记组件</font>

<font _mstmutation="1" _msthash="32955" _msttexthash="1073493512">刻度线大小和定位已更改。刻度线现在是轨道组件的一部分，而不是延伸轨道的末尾。刻度线上也有填充，因此它显示在轨道组件中。刻度线的大小现在具有 1 的半径。</font>

 ![](https://miro.medium.com/max/60/0*PLNNQjK0_zOXok1A?q=20)

![](https://miro.medium.com/max/632/0*PLNNQjK0_zOXok1A)

<noscript>![](https://miro.medium.com/max/1264/0*PLNNQjK0_zOXok1A)</noscript>

# <font _mstmutation="1" _msthash="27339" _msttexthash="29404596">拇指组件具有阴影</font>

<font _mstmutation="1" _msthash="26975" _msttexthash="95320355">激活拇指滑块组件时，现在出现在 上 有 。</font>
```
Shadow
```

```
Overlay
```


 ![](https://miro.medium.com/max/60/0*j7DxUmBmRK7Ztd5A?q=20)

![](https://miro.medium.com/max/94/0*j7DxUmBmRK7Ztd5A)

<noscript>![](https://miro.medium.com/max/188/0*j7DxUmBmRK7Ztd5A)</noscript>

# <font _mstmutation="1" _msthash="28613" _msttexthash="10191480">闭幕词</font>

<font _mstmutation="1" _msthash="34151" _msttexthash="809873103">您可以通过切换到 Flutter 版本 1.18.0_9.0 来尝试这些更改。此版本仅在本文发布期间在主分支上可用。您可以通过运行 然后 切换到主分支。</font>
```
flutter channel master
```

```
flutter upgrade
```


