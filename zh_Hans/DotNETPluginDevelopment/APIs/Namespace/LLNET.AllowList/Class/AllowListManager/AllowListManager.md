# 🔖 AllowListManager 类

## 定义

> 提供管理白名单的一系列方法。

C#
```cs
public class AllowListManager
```
C++
```cpp
public ref class AllowListManager
```

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [AllowListManager](AllowListManager)
   

## 示例

C#
```cs
using System;
using LLNET.AllowList;

namespace PluginMain
{
    class Plugin
    {
        public static void OnPostInit()
        {
            AllowListManager manager = new();

            var hasPlayer = manager.Has("steve", "114514");

            Console.WriteLine(hasPlayer);

            manager.Add("alex", "11451419", true);

            manager.Remove("mojang", "233333");

            /* 如果你在使用add/remove成员之后不调用reload函数,
            这些更改将只会写入文件而不会在游戏中生效
            这意味着你添加到白名单的玩家将不能加入游戏, 直到重载白名单*/

            manager.Reload();
        }
    }
}
```

## 构造函数
- 
    |||
    |-|-|
    |`AllowListManager()`|初始化 `AllowListManager` 类的新实例。|

##  属性
- 
    |||
    |-|-|
    |[Size](Properties/Size)|获取 `AllowList` 大小。|
    |[AllowList](Properties/AllowList)|获取或设置序列化为JSON字符串的 `AllowList`。|

##  方法
- 
    |||
    |-|-|
    |[Has(String)](Method/Has)|根据玩家名称查明玩家是否存在。|
    |[Has(String, String)](Method/Has)|根据玩家名称、XUID查明玩家是否存在。|
    |[Has(String, String, Int32)](Method/Has)|根据玩家名称、XUID查明玩家是否存在。|
    |[Add(String)](Method/Add)|根据玩家名称将玩家添加到白名单中|
    |[Add(String, String)](Method/Add)|根据玩家名称与XUID将玩家添加到白名单中|
    |[Add(String, String, Boolean)](Method/Add)|根据玩家名称与XUID将玩家添加到白名单中|
    |[Remove(String)](Method/Remove)|根据玩家名称将玩家从白名单中移除。|
    |[Remove(String, String)](Method/Remove)|根据玩家名称与XUID将玩家从白名单中移除。|
    |[Reload()](Method/Reload)|重载白名单。|
