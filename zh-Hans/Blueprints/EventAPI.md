# RFC#1 事件系统

由于目前的事件系统存在局限性，LL3将重写事件系统。

## Overview

1. 如[LiteLDev/LiteLoaderBDS#785](https://github.com/LiteLDev/LiteLoaderBDS/issues/785)，对事件进行分类。
2. 对所有事件成员增加getter和setter，如`ev.getPlayer()`/`ev.setMessage(str)`。
3. 增加`onCancelled`方法，在该事件被取消时回调。
4. 增加`onExecuted`方法，在该事件正常执行时回调，并传入执行事件时所使用的参数。
5. 允许插件自定义事件、注册`ListenerData`。
6. 事件回调返回值改为`void`，取消事件应调用`ev.cancel()`。
7. 事件监听权重（有待商讨）。
8. LLSE事件与LL事件命名保持统一，如`Event.PlayerUseItemEvent.subscribe((ev) => {})`。
9. 写一个小工具自动生成事件内容。
10. 新增<内部>级别权重，永远最先回调（有待商讨）。

<!--

## Details

### template class `Event<EventType>`

- path: `llapi/Event.hpp`
- static methods:
  - `Listener subscribe(const std::function<void(const EventType&)> callback)` 订阅事件
  - `void onCancelled(const std::function<void()> callback)` 取消回调
  - `void onExecuted(const std::function<void(const EventType&)> callback)` 执行回调
  
### template struct `EventCallback<EventType>`

- private fields:
  - `void* mEventCallback` 事件回调(用`void*`可以兼容`void(*)(EventType&)`和`void(*)(const EventType&)`)  
  - `void* mCancelledCallback`
  - `void* `
- friend class `Event<EventType>`

### struct `ListenerData<EventType>`

- fields:
  - `mCallbacks`: Event callbacks

-->
