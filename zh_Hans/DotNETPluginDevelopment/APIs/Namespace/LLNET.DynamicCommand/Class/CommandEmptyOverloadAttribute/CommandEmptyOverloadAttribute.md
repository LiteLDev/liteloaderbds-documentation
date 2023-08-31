# 🔖 CommandEmptyOverloadAttribute 类

## 定义

> 用于指定命令具有空重载的特性。

C#
```cs
[AttributeUsage(AttributeTargets.Class)]
public class CommandEmptyOverloadAttribute
    :Attribute
```
C++
```cpp
[AttributeUsage(AttributeTargets::Class)]
public ref class CommandEmptyOverloadAttribute
    :public System::Attribute
```

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [Attribute](https://docs.microsoft.com/DotNET/api/system.attribute) → [CommandEmptyOverloadAttribute](CommandEmptyOverloadAttribute)
 

## 示例

[如何：使用静态命令](../../../../../HowTo/Static_DynamicCommand)

## 构造函数
- 
    |||
    |-|-|
    |`CommandEmptyOverloadAttribute()`|初始化 `CommandEmptyOverloadAttribute` 类的新实例。|
