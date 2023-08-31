# 🔖 NativePluginException 类

## 定义

> 检测到 [BDS](https://www.minecraft.net/download/server/bedrock) 发生的错误而引发的异常基类。

C#
```cs
public class NativePluginException
    :LiteLoaderDotNETException
```
C++
```cpp
public ref class NativePluginException
    :public LiteLoaderDotNETException
```

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [Exception](https://docs.microsoft.com/DotNET/api/system.exception) → [LiteLoaderDotNETException](../LiteLoaderDotNETException/LiteLoaderDotNETException) → 
[NativePluginException](NativePluginException)

## 示例

C#
```cs
using System;
using LiteLoader;
using LiteLoader.NET;

namespace PluginMain
{
    class Plugin
    {
        public static void OnPostInit()
        {
            var plugin = LLAPI.GetPlugin("LLMoney");
            try
            {
                //将会得到一个NativePluginException
                //因为LLMoney是一个c++插件
                var asm = plugin.GetPluginAssembly();
            }
            catch(NativePluginException ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}

```

## 构造函数
- 
    |||
    |-|-|
    |`NativePluginException()`|初始化 `NativePluginException` 类的新实例。|
