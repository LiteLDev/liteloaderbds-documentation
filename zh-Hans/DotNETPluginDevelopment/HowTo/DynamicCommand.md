# 🔍 如何：使用动态指令

>动态指令提供了注册自定义命令的接口。通过对接 BDS 内置的命令系统，注册的命令可以由玩家、控制台、命令方块、NPC 等各种游戏中可以执行命令的对象所使用，在 Addon 中，也可以使用这里所注册的命令。

<br>

>此功能仅为LiteLoaderBDS中DynamicCommand的.NET覆盖层，其具体行为由BDS及LiteLoaderBDS所决定。

<br>

## 注册一条顶层命令

>通过调用DynamicCommand类的CreateCommand静态方法可以创建新的动态指令实例。

`DynamicCommand.CreateCommand(name,description[,permission,flag1,flag2,handle]);`

- 参数：

  - name : `string`  
    待注册的命令

  - description : `string`  
    命令描述文本  

  - permission : `CommandPermissionLevel`  
    （可选参数）指令执行所需权限  

    | 执行权限                              | 含义                             |
    | ------------------------------------ | -------------------------------- |
    | `CommandPermissionLevel.Any`         | 任何人都可以执行这条指令         |
    | `CommandPermissionLevel.GameMasters` | 只有OP可以执行这条指令（默认值） |
    | `CommandPermissionLevel.Admin`       |                               |
    | `CommandPermissionLevel.HostPlayer`  |                               |
    | `CommandPermissionLevel.Console`     | 只有控制台可以执行这条指令      |
    | `CommandPermissionLevel.Internal`    |                               |

  - flag1 : `Integer`  
    （可选参数）默认值 `0x80`   
    目前直接按此输入即可，后续会进行相关修改
    
  - flag2 : `Integer`  
    （可选参数）默认值 `0`   
    目前直接按此输入即可，后续会进行相关修改

  - handle :  
    （可选参数）默认值 `nullptr`

<br>

- 返回值：指令实例

- 返回值类型：`DynamicCommandInstance`

> [!TIP]
>
> 顶层命令，也就是类似 `list` `gamerule` 这种，在 / 之后第一个输入的部分  
>
> 注册完顶层命令后，此方法会返回一个指令实例。接下来，对于这个命令的功能扩展都需要在这个实例中进行

<br>

## 使用动态指令实例对象

>创建指令后，可继续操作获取到的指令对象。对于一个动态指令对象，有以下方法可供调用：

<br>

### 设置指令别名

`DynamicCommandInstance.SetAlias(alias)`
- 参数： 
  - alias : `string`  
    指令别名  
- 返回值：是否成功设置  
- 返回值类型：`bool`  

### 新增指令枚举

`DynamicCommandInstance.SetEnum(description,values)`  
- 参数： 
  - alias : `string`  
    指令别名  
- 返回值：是否成功设置  
- 返回值类型：`bool`  

### 新增必选参数

`DynamicCommandInstance.Mandatory` 方法

### 新增可选参数

`DynamicCommandInstance.Optional` 方法

## 新增指令重载

`DynamicCommandInstance.Overload` 方法

## 设置指令回调

`DynamicCommandInstance.SetCallback` 方法

<br>

<br>

## 安装指令

>在对命令的所有配置完成之后，使用此方法将命令注册到 BDS 的命令系统当中

`DynamicCommand.Setup` 方法

<br>

<br>

## 示例

以下示例演示如何使用动态指令：

<br>

C#
```cs
using System;
using LiteLoader.DynamicCommand;

namespace PluginMain
{
    class Plugin
    {
        public static void OnPostInit()
        {

            //创建新动态指令实例
            var cmd = DynamicCommand.CreateCommand("testcmd", "dynamic command", CommandPermissionLevel.Any);

            //设置指令别名
            cmd.SetAlias("testcmdalias");

            //新增指令枚举
            var optionsAdd = cmd.SetEnum("TestOperation1", new() {"add", "remove"});

            var optionsList = cmd.SetEnum("TestOperation2", new(){"list"});

            //设置指令参数
            cmd.Mandatory("testEnum", ParamType.Enum, optionsAdd, CommandParameterOption.EnumAutocompleteExpansion);
            
            cmd.Mandatory("testEnum", ParamType.Enum, optionsList, CommandParameterOption.EnumAutocompleteExpansion);
            
            cmd.Mandatory("testString", ParamType.String);


            //设置指令重载
            cmd.AddOverload(new(){optionsAdd, "testString"});
            
            cmd.AddOverload(new(){"TestOperation2"});


            //设置指令回调
            cmd.SetCallBack((command,origin,output,results) => {
                switch(results["testEnum"].AsString())
                {
                    case "add":
                    {
                        output.Success($"Add - { results["testString"].AsString() }");
                    }
                    break;
                    case "remove":
                    {
                        output.Success($"Remove - { results["testString"].AsString() }");
                    }
                    break;
                    case "list":
                    {
                        output.Success("List");
                    }
                    break;
                    default:
                    break;
                }
            });

            //安装指令
            DynamicCommand.Setup(cmd);
        }
    }
}
```



