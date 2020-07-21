title: Spring 5 核心原理 第一章 软件架构设计原则  开闭原则
author: 知识铺
date: 2019-11-03 14:23:40
tags:
---
知识铺： 致力于打造轻知识点，持续更新每次的知识点较少，阅读不累。不占太多时间，不停地来唤醒记忆深处的知识点。
### 开闭原则
 开闭原则 （Open-Closed Principle,OCP) 是指一个软件实体（如类，模块，函数）应该对**扩展**开放，对**修改**关闭。   
 #### 如定义一个课程接口   
`public interface ICourse{
getId();
getName();
getPrice();
}`  
 #### 实现课程接口   
pubic class JavaCourse implements ICourse{   
  pubic getPrice(){   
   return this.price;  
  }  
}
#### 双十一添加优惠H5宣传页面
这个时候如果修改 原来的 JavaCourse 实现类，就违反了开闭原则。可以重新继承JavaCourse类，进行特殊的优惠处理。   
public class JavaDiscountCouse{   
  pubic getOriginPrice(){   
   return this.price;  
  }  
 pubic getPrice(){   
   return this.price*0.8;  
  }  
}