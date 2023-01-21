# RFC 事件系统

由于目前的事件系统存在局限性，LL3将重写事件系统。

## Overview

整体上使用串行模式（类似Bukkit&PMMP），优先级越低的越先调用。若有多个相同优先级的监听器，先订阅的先调用，保证所有监听器都能收到事件。  
优先级(uint16)预设值分为 LOWEST(10000), LOW(20000), NORMAL(30000), HIGH(40000), HIGHEST(50000), MONITOR(65535) 六个，开发者可自行设为其他值（不推荐）。  

![image](https://user-images.githubusercontent.com/66063199/213874170-07fabeae-eb63-430c-91d1-0bc14bfde088.png)

MONITOR级别监听器**原则上**不应修改事件的值。

## 访问&修改事件内容

由于C++中直接访问字段容易造成兼容性问题，新的事件系统加入getter和setter如`ev.getPlayer()`/`ev.setMessage(str)`并作为LLAPI导出。

## 取消事件

对于继承自CancellableEvent的事件，开发者使用`ev.cancel()`方法取消事件，取消后`ev.isCancel()`方法返回`true` **取消后继续向优先级高的监听器传播**  

## 自定义事件

LL提供一套Event框架，开发者可自行继承&暴露`Event`/`CancellableEvent`模板类，实现自己的事件。  
使用者只需将实现类复制到项目下即可使用。  

LLSE如何实现自定义事件有待商讨

## 事件分类

参见[LiteLDev/LiteLoaderBDS#785](https://github.com/LiteLDev/LiteLoaderBDS/issues/785)

## LLSE事件

原则上由LiteLDev维护的所有LiteLoaderBDS的下游插件加载器（LLSE LL.NET）都应保持事件命名与LL一致，特殊情况另当别论。  
LLSE JS 如 `Event.PlayerUseItemEvent.subscribe((ev) => {})`
