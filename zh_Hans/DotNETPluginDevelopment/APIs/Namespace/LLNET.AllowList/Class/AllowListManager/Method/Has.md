# 💡 AllowListManager.Has 方法

## 定义

> 返回一个值，该指指示指定的玩家是否存在于白名单中。

## 重载
- 
    |||
    |-|-|
    |`Has(String)`|根据玩家名称查明玩家是否存在。|
    |`Has(String, String)`|根据玩家名称、XUID查明玩家是否存在。|
    |`Has(String, String, Int32)`|根据玩家名称、XUID查明玩家是否存在。|

## Has(String)

C#
```cs
public bool Has(string name)
```
C++
```cpp
public:
    bool Has(System::String^ name)
```

- 参数
  - `name` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要查找的玩家名称。

- 返回
  - [Boolean](https://docs.microsoft.com/DotNET/api/system.boolean)  
    如果 `name` 参数所指向的玩家在此白名单中出现，则为，则为 `true`；否则为 `false`。


## Has(String, String)

C#
```cs
public bool Has(string name, string xuid)
```
C++
```cpp
public:
    bool Has(System::String^ name, System::String^ xuid)
```

- 参数
  - `name` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要查找的玩家名称
  - `xuid` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要查找的玩家XUID

- 返回
  - [Boolean](https://docs.microsoft.com/DotNET/api/system.boolean)  
    如果 `name` 参数与 `xuid` 参数所指向的玩家在此白名单中出现，则为 `true`；否则为 `false`。


## Has(String, String, Int32)

C#
```cs
public bool Has(string name, string xuid, out int index)
```
C++
```cpp
public:
    bool Has(System::String^ name, System::String^ xuid, [Out]int% index)
```

- 参数
  - `name` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要查找的玩家名称
  - `xuid` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要查找的玩家XUID
  - `index` : [Int32](https://docs.microsoft.com/DotNET/api/system.int32)  
    如果索引存在，则将此值设置为数组索引(?)

- 返回
  - [Boolean](https://docs.microsoft.com/DotNET/api/system.boolean)  
    如果 `name` 参数与 `xuid` 参数所指向的玩家在此白名单中出现，则为 `true`；否则为 `false`。
  
