# 🔍 如何：定义插件入口

以下示例演示如何定义插件入口。入口函数是每一个插件必不可少的要素，插件需要通过入口函数进行事件监听、初始化对象等操作。

## 定义自定义插件入口

自定义插件入口不必受限制于命名空间与类名，通过继承 [`IPluginInitializer`](../APIs/Namespace/LLNET.Core/Interface/IPluginInitializer/IPluginInitializer) 接口并实现接口属性与方法，即可完成插件入口的定义与插件信息的注册。 
自定义入口需要 [`PluginMainAtribute`](../APIs/Namespace/LLNET.Core/Class/PluginMainAttribute/PluginMainAttribute) 的配合使用。

C#
```cs
using System;
using LiteLoader.NET;

// 自定义命名空间
namespace ExamplePlugin;

// 使用PluginMainAttribute提供插件名称

[PluginMain("ExamplePlugin")]
public sealed class Main : IPluginInitializer
{
    // 提供插件描述
    public string Introduction => "Example plugin for LiteLoader.NET";

    // 提供插件额外信息
    public Dictionary<string, string> MetaData => new()
        {
            { "Something", "..." },
            { "foo", "bar" }
        };

    // 插件入口类初始化完成后会调用的函数
    public void OnInitialize()
    {
        // do something...
        Console.WriteLine("2333");
    }
}
```

## 定义简单插件入口（已过时）

定义简单入口只需要以下几个步骤：定义PluginMain命名空间 → 定义Plugin类 → 实现OnPostInit静态方法。

C#
```cs
using System;

namespace PluginMain;

public static class Plugin
{
    //插件入口函数
    public static void OnPostInit()
    {
        Console.WriteLine("Plugin ExampleSimpleEntry loaded!");
    }
}

```

可使用位于 [LiteLoader.LL] 命名空间中的 [LLAPI] 类的 [RegisterPlugin] 静态方法注册插件信息。

示例：

C#
```cs
using System;
using LiteLoader;

namespace PluginMain;

public static class Plugin
{
    // 插件入口函数
    public static void OnPostInit()
    {
        // 提供插件名、插件描述、插件版本等信息
        LLAPI.RegisterPlugin("ExamplePlugin", "An example Plugin shows Plugin entry.", new(1, 0, 0));
    }
}
```
