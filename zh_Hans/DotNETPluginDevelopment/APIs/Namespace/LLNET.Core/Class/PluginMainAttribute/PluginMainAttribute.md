# 🔖 PluginMainAttribute 类

## 定义

> 提供管理白名单的一系列方法。

C#
```cs
[AttributeUsage(AttributeTargets.Assembly, AllowMultiple = true)]
public class PluginMainAttribute
    :Attribute
```
C++
```cpp
[AttributeUsage(AttributeTargets::Assembly, AllowMultiple = true)]
public ref class PluginMainAttribute
    :public System::Attribute
```

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [Attribute](https://docs.microsoft.com/DotNET/api/system.attribute) → [PluginMainAttribute](PluginMainAttribute)
 

## 示例

[如何：定义插件入口](../../../../../HowTo/PluginEntry)

## 构造函数
- 
    |||
    |-|-|
    |`PluginMainAttribute(String)`|用指定的入口名称初始化 `PluginMainAttribute` 类的新实例。|
