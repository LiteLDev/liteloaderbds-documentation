# 🔖 LibPathAttribute 类

## 定义

<br>

> 提供管理白名单的一系列方法。

<br>

C#
```cs
[AttributeUsage(AttributeTargets.Assembly, AllowMultiple = true)]
public class LibPathAttribute
    :Attribute
```
C++
```cpp
[AttributeUsage(AttributeTargets::Assembly, AllowMultiple = true)]
public ref class LibPathAttribute
    :public System::Attribute
```
<br>

继承 [Object](https://docs.microsoft.com/zh-cn/DotNET/api/system.object) → [Attribute](https://docs.microsoft.com/zh-cn/DotNET/api/system.attribute) → [LibPathAttribute](LibPathAttribute)
   
<br>

## 示例

<br>


C#
```cs
using LiteLoader.NET;

//示例路径
[assembly:LibPath("plugins/Lib")]
//其他路径
//[assembly:LibPath(...)]
```

<br>

## 构造函数
- 
    |||
    |-|-|
    |`LibPathAttribute(String)`|用指定的路径初始化 `LibPathAttribute` 类的新实例。|

<br>

##  属性
- 
    |||
    |-|-|
    |[Path](Properties/Path)|获取或设置当前实例路径。|


