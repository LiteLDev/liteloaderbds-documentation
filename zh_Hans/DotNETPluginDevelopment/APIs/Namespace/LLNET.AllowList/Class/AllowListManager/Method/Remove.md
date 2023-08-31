# 💡 AllowListManager.Remove 方法

## 定义

### 将玩家从当前白名单中移除。

## 重载
- 
    |||
    |-|-|
    |`Remove(String)`|根据玩家名称将玩家从白名单中移除。|
    |`Remove(String, String)`|根据玩家名称与XUID将玩家从白名单中移除。|

## Add(String)

C#
```cs
public AllowListManager Remove(string name)
```
C++
```cpp
public:
    AllowListManager^ Remove(System::String^ name)
```

- 参数
  - `name` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要移除的玩家名称。

- 返回
  - [AllowListManager](../AllowListManager)  
    当前 `AllowListManager` 对象
  

## Remove(String, String)

C#
```cs
public AllowListManager Remove(string name, string xuid)
```
C++
```cpp
public:
    AllowListManager^ Remove(System::String^ name, System::String^ xuid)
```

- 参数
  - `name` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要移除的玩家名称
  - `xuid` : [String](https://docs.microsoft.com/DotNET/api/system.string)  
    要移除的玩家XUID

- 返回
  - [AllowListManager](../AllowListManager)  
    当前 `AllowListManager` 对象
  
