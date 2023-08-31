# 🔖 CommandAliasAttribute 类

## 定义

> 用于指定命令别名的特性。

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

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [Attribute](https://docs.microsoft.com/DotNET/api/system.attribute) → [PluginMainAttribute](CommandAliasAttribute)
 

## 示例

[如何：使用静态命令](../../../../../HowTo/Static_DynamicCommand)

## 构造函数
- 
    |||
    |-|-|
    |`PluginMainAttribute(String)`|用指定的入口名称初始化 `PluginMainAttribute` 类的新实例。|
