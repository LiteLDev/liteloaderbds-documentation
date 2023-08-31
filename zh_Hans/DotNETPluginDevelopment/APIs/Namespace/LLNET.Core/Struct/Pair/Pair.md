# 🔩 Pair<TKey,TValue> 结构

## 定义

> 定义可设置或检索的键/值对。

C#
```cs
public struct Pair<TKey,TValue>
```
C++
```cs
generic<typename TKey, typename TValue> 
    public value class Pair
```

## 类型参数
  
TKey  
键的类型。

TValue  
值的类型。  

继承 [Object](https://docs.microsoft.com/DotNET/api/system.object) → [ValueType](https://docs.microsoft.com/DotNET/api/system.valuetype) → [Pair<TKey,TValue>](Pair)

## 构造函数
- 
    |||
    |-|-|
    |`Pair(TKey key,TValue value)`|用键、值初始化 `Pair` 结构的新实例。|
