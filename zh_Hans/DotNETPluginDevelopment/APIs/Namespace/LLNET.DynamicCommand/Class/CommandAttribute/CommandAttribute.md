# 🔖 CommandAttribute 类

## 定义

> 用于指定命令主体的特性。

C#
```cs
[AttributeUsage(AttributeTargets.Class)]
public class CommandAttribute
    :Attribute
```
C++
```cpp
[AttributeUsage(AttributeTargets::Class)]
public ref class CommandAttribute
    :public System::Attribute
```

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [Attribute](https://docs.microsoft.com/DotNET/api/system.attribute) → [CommandAttribute](CommandAttribute)
 

## 示例

[如何：使用静态命令](../../../../../HowTo/Static_DynamicCommand)

## 构造函数
- 
    |||
    |-|-|
    |`CommandAttribute(String)`|用指定的命令名称初始化 `CommandAttribute` 类的新实例。|

##  字段
- 
    |||
    |-|-|
    |[Name]|命令名称。(只能小写)|
    |[Description]|命令描述。|
    |[Permission]|命令权限。|
    |Alia|命令别名。|
    |AutoReset|指示是否自动重置。|
    |Flag1||
    |Flag2||
