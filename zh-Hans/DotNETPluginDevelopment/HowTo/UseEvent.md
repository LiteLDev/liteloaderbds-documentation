# 🔍 如何：使用事件

>以下示例演示如何使用事件。通过订阅事件，可以快捷地获取到所需的对象与信息。

<br>

- 此示例具有 `5` 个部分

<br>

1. 订阅事件
2. 以引用的方式订阅事件
3. 取消订阅事件
4. 以.NET事件的形式订阅或取消订阅事件
5. 拦截事件

<br>

## 订阅事件

<br>

>订阅一个事件的方式如下（以 `LiteLoader.Event.PlayerUseItemOnEvent` 为例）：

<br>

C#
```cs
using System;
using LiteLoader.Event;

namespace PluginMain;

internal static class Plugin
{
    public static void OnPostInit()
    {
        PlayerUseItemOnEvent.Subscribe(e => 
        {
            Console.WriteLine($"Player: {e.Player.Name} use item on block: {e.BlockInstance.Position}");

            //参见Tip
            e.Dispose();

            return true;
        });
    }
}
```

>[!TIP]
>
>及时调用Dispose可以小幅度地提升效率，减少CLR启用新线程析构对象带来的开销。

<br>

<br>

## 以引用的方式订阅事件

<br>

>以引用的方式订阅一个事件的方式如下（以 `LiteLoader.Event.PlayerChatEvent` 为例）：

<br>

C#
```cs
using System;
using LiteLoader.Event;

namespace PluginMain;

internal static class Plugin
{
    public static void OnPostInit()
    {
        PlayerChatEvent.Subscribe_Ref(e => 
        {

            e.Message = "你猜猜我说了什么？";

            e.Dispose();

            return true;
        });


        //下一个事件
        PlayerChatEvent.Subscribe_Ref(e => 
        {

            //此时Message已经被修改了
            Console.WriteLine(e.Message);

            e.Dispose();

            return true;
        });
    }
}
```

<br>

<br>

## 取消订阅事件

<br>

>取消订阅十分简单，只需要保存订阅事件时返回的事件监听器实例，并在需要的时机取消订阅即可。

<br>

C#
```cs
using System;
using LiteLoader.Event;

namespace PluginMain;

internal static class Plugin
{
    public static void OnPostInit()
    {
        PlayerUseItemOnEvent.EventListener listener = PlayerUseItemOnEvent.Subscribe(e => 
        {
            e.Dispose();
            return true;
        });

        PlayerUseItemOnEvent.Unsubscribe(listener);

        //或者直接使用listener.Remove(),效果相同。
    }
}
```

<br>

<br>

## 以.NET事件的形式订阅或取消订阅事件

<br>

>事件类提供了.NET风格事件，使用起来更加简单，本质上与Subscribe/Unsubscribe并无区别。

<br>

C#
```cs
using System;
using LiteLoader.Event;

namespace PluginMain;

internal static class Plugin
{
    public static void OnPostInit()
    {

        Action<PlayerJoinEvent> func = e => Console.WriteLine(e.Player.Name);

        //订阅事件
        PlayerJoinEvent += func;
        //取消订阅事件
        PlayerJoinEvent -= func;

    }
}
```

<br>

<br>

## 拦截事件

<br>

>拦截事件同样简单，只需在回调函数中返回false即可。

<br>

>[!TIP]
>
>某些事件并不能被拦截，某些事件被拦截后可能有意想不到的效果，具体事件的行为由 BDS 本身决定。

C#
```cs
using System;
using LiteLoader.Event;

namespace PluginMain;

internal static class Plugin
{
    public static void OnPostInit()
    {

        PlayerEatEvent += e =>
        {
            e.Player.SendText("不让你吃！");
            return false;
        }

    }
}
```

