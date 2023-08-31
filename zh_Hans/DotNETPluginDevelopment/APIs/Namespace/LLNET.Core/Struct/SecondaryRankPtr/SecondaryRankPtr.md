# 🔩 SecondaryRankPtr 结构

## 定义

> 用于表示二级指针的结构。

C#
```cs
public struct SecondaryRankPtr
```
C++
```cpp
public value class SecondaryRankPtr
``` 

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [ValueType](https://docs.microsoft.com/DotNET/api/system.valuetype) → [SecondaryRankPtr](SecondaryRankPtr)

## 构造函数
- 
    |||
    |-|-|
    |`SecondaryRankPtr(void**)`|用二级 [void](https://docs.microsoft.com/DotNET/api/system.void) 指针 初始化 `SecondaryRankPtr` 结构的新实例。|
    |`SecondaryRankPtr(IntPtr)`|用 [System.IntPtr](https://docs.microsoft.com/DotNET/api/system.intptr) 作为二级指针 初始化 `SecondaryRankPtr` 结构的新实例。|

## 方法
- 
    |||
    |-|-|
    |[ToSecPointer()]|返回当前二级指针。|
    |[ToPointer()]|返回解引用后的一级指针。|
    |[ToIntPtr()]|返回解引用后的一级指针的IntPtr形式。|
