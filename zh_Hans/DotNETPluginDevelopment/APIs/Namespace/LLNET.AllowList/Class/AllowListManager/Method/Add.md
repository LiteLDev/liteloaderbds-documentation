# 💡 AllowListManager.Add 方法

## 定义

> 将玩家添加到当前白名单中。

## 重载
- 
    |||
    |-|-|
    |`Add(String)`|根据玩家名称将玩家添加到白名单中|
    |`Add(String, String)`|根据玩家名称与XUID将玩家添加到白名单中|
    |`Add(String, String, Boolean)`|根据玩家名称与XUID将玩家添加到白名单中|

## Add(String)

C#
```cs
public AllowListManager Add(string name)
```
C++
```cpp
public:
    AllowListManager^ Add(System::String^ name)
```

- 参数
  - `name` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要添加的玩家名称。

- 返回
  - [AllowListManager](../AllowListManager)  
    当前 `AllowListManager` 对象


## Add(String, String)

C#
```cs
public AllowListManager Add(string name, string xuid)
```
C++
```cpp
public:
    AllowListManager^ Add(System::String^ name, System::String^ xuid)
```

- 参数
  - `name` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要添加的玩家名称
  - `xuid` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要添加的玩家XUID

- 返回
  - [AllowListManager](../AllowListManager)  
    当前 `AllowListManager` 对象


## Add(String, String, Boolean)

C#
```cs
public bool Add(string name, string xuid, bool ignore)
```
C++
```cpp
public:
    bool Add(System::String^ name, System::String^ xuid, bool ignore)
```

- 参数
  - `name` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要查找的玩家名称
  - `xuid` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要查找的玩家XUID
  - `ignore` : [Boolean](https://docs.microsoft.com/DotNET/api/system.boolean)  
    是否忽略玩家限制

- 返回
  - [AllowListManager](../AllowListManager)  
    当前 `AllowListManager` 对象
  
