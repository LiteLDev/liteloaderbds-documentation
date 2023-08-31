# 🔖 CommandParameterAttribute 类

## 定义

> 用于指定命令枚举的特性。

C#
```cs
[AttributeUsage(AttributeTargets.Field | AttributeTargets.Property)]
public class CommandParameterAttribute
    :Attribute
```
C++
```cpp
[AttributeUsage(AttributeTargets::Field | AttributeTargets::Property)]
public ref class CommandParameterAttribute
    :public System::Attribute
```

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [Attribute](https://docs.microsoft.com/DotNET/api/system.attribute) → [CommandParameterAttribute](CommandParameterAttribute)
   

## 示例

[如何：使用静态指令](../../../../../HowTo/Static_DynamicCommand)

## 构造函数
- 
    |||
    |-|-|
    |`CommandParameterAttribute()`|初始化 `CommandParameterAttribute` 类的新实例。|

##  属性
- 
    |||
    |-|-|
    |[OverloadId]|获取或设置当前指令参数的重载标识。|

##  字段
- 
    |||
    |-|-|
    |[Type]|指令参数类型。|
    |[IsMandatory]|指示指令参数是否为可选参数。|
    |[Permission]|指令权限。|
    |[Identifier]|指令参数标识。|
    |[Option]|指令参数选项。|
