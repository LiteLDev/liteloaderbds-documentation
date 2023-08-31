# 🔖 RemoteCallImportFunctionException 类

## 定义

> 表示在**执行动态远程调用的导出函数中**的过程中发生的一个或多个错误。

C#
```cs
public class RemoteCallImportFunctionException
    :LiteLoaderDotNETException
```
C++
```cpp
public ref class RemoteCallImportFunctionException
    :public LiteLoaderDotNETException
```

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [Exception](https://docs.microsoft.com/DotNET/api/system.exception) → [LiteLoaderDotNETException](../LiteLoaderDotNETException/LiteLoaderDotNETException) → 
[RemoteCallImportFunctionException](RemoteCallImportFunctionException)

## 构造函数
- 
    |||
    |-|-|
    |`RemoteCallImportFunctionException()`|初始化 `RemoteCallImportFunctionException` 类的新实例。|
    |`RemoteCallImportFunctionException(String)`|用指定的错误消息初始化 `RemoteCallImportFunctionException` 类的新实例。|

##  属性
- 
    |||
    |-|-|
    |`Key`|获取或设置当前实例的键。|
    |`Value`|获取或设置当前实例的值。|
