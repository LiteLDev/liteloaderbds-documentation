# 🔗 IPluginInitializer 接口

## 定义

> 作为自定义插件入口的基础接口。

C#
```cs
public interface IPluginInitializer
```
C++
```cpp
public interface class IPluginInitializer
```

## 示例

[如何：定义插件入口](../../../../../HowTo/PluginEntry)

## 方法

- 
    |||
    |-|-|
    |`OnInitialize`|作为自定义入口插件的入口。|

## 属性

- 
    |||
    |-|-|
    |`Version`|插件版本信息。|
    |`Introduction`|插件介绍、描述。|
    |`MetaData`|插件额外信息。|