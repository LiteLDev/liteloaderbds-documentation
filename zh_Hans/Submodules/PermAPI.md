# 权限API

## 模块路径

`plugins/LiteLoader/PermissionAPI.dll`

## 仓库地址

https://github.com/LiteLDev/PermissionAPI

## 数据文件路径

`plugins/PermissionAPI/data.json`
数据文件示例:
```json
{
    "permissions": {
        "PermissionAPI:cmd_control": {
            "desc": "Access to /perm commands"
        }
    },
    "roles": {
        "admin": {
            "displayName": "§cadmin",
            "members": [],
            "permissions": {},
            "priority": 2147483647
        },
        "everyone": {
            "displayName": "§7everyone",
            "permissions": {},
            "priority": 0
        }
    }
}
```

## 命令列表

在游戏或控制台输入`/help perm`以获得命令使用方法
```
perm:
Permission role system
Usage:
- /perm
- /perm add member <name1: string> <name2: string>
- /perm add perm <name1: string> <name2: string> [enabled: Boolean] [extraJson: text]
- /perm create perm <name1: string> [description: string]
- /perm create role <name1: string> [display name: string] [priority: int]
- /perm delete perm <name1: string>
- /perm delete role <name1: string>
- /perm list perm
- /perm list role
- /perm rm member <name1: string> <name2: string>
- /perm rm perm <name1: string> <name2: string>
- /perm role <name1: string>
- /perm role <name1: string> add member <name2: string>
- /perm role <name1: string> add perm <name2: string>
- /perm role <name1: string> add perm <name2: string> [enabled: Boolean] [extraJson: text]
- /perm role <name1: string> rm member <name2: string>
- /perm role <name1: string> set perm <name2: string> [enabled: Boolean] [extraJson: text]
- /perm role <name1: string> set priority [priority: int]
- /perm set perm <name1: string> <name2: string> [enabled: Boolean] [extraJson: text]
- /perm set priority <name1: string> [priority: int]
- /perm update player <name1: string> add role <name2: string>
- /perm update player <name1: string> rm role <name2: string>
- /perm update role <name1: string> add member <name2: string>
- /perm update role <name1: string> add perm <name2: string> [enabled: Boolean] [extraJson: text]
- /perm update role <name1: string> rm member <name2: string>
- /perm update role <name1: string> rm perm <name2: string>
- /perm update role <name1: string> set display_name [display name: string]
- /perm update role <name1: string> set perm <name2: string> [enabled: Boolean] [extraJson: text]
- /perm update role <name1: string> set priority [priority: int]
- /perm view perm <name1: string>
- /perm view player <name1: string>
- /perm view role <name1: string>
```
