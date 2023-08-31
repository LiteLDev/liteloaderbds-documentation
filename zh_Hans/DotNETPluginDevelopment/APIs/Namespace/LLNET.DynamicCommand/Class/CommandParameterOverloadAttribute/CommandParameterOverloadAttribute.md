# 🔖 CommandParameterOverloadAttribute 类

## 定义

> 用于指定命令枚举的特性。

C#
```cs
[AttributeUsage(AttributeTargets.Field | AttributeTargets.Property)]
public class CommandParameterOverloadAttribute
    :Attribute
```
C++
```cpp
[AttributeUsage(AttributeTargets::Field | AttributeTargets::Property)]
public ref class CommandParameterOverloadAttribute
    :public System::Attribute
```

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [Attribute](https://docs.microsoft.com/DotNET/api/system.attribute) → [CommandParameterOverloadAttribute](CommandParameterOverloadAttribute)
   

## 示例

[如何：使用静态指令](../../../../../HowTo/Static_DynamicCommand)

## 构造函数
- 
    |||
    |-|-|
    |`CommandParameterOverloadAttribute(Int32)`|使用指定的指令参数标识初始化 `CommandParameterOverloadAttribute` 类的新实例。|

##  字段
- 
    |||
    |-|-|
    |[OverloadId]|指令参数重载标识。|
