# 🔖 CustomFormElement 类

## 定义

>表示自定义表单控件的基类。

C#
```cs
public abstract class CustomFormElement
```
C++
```cpp
public ref class CustomFormElement abstract
```

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [CustomFormElement](CustomFormElement)

## 枚举

- 
    |||
    |-|-|
    |[Type]|表示自定义表单控件类型的枚举。|


## 属性

- 
    |||
    |-|-|
    |`Name`|获取或设置控件名称。|
    |`Value`|获取或设置控件值。|
    |`ElementType`|获取或设置控件类型。|

## 方法

- 
    |||
    |-|-|
    |`SetName(String)`|设置控件名称。|
    |`GetElementType()`|获取控件类型。|
    |`GetString()`|获取由字符串形式表示的控件值。|
    |`GetNumber()`|获取由数字形式表示的控件值。|
    |`GetBool()`|获取由布尔值形式表示的控件值。|