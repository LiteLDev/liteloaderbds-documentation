# 🔍 如何：使用动态命令

动态命令提供了注册自定义命令的接口。通过对接 BDS 内置的命令系统，注册的命令可以由玩家、控制台、命令方块、NPC 等各种游戏中可以执行命令的对象所使用，在 附加包 中，也可以使用这里所注册的命令。

此功能仅为LiteLoaderBDS中DynamicCommand的.NET层，其具体行为由BDS及LiteLoaderBDS所决定。

## 注册一条顶层命令

`DynamicCommand.CreateCommand(name,description[,permission,flag1,flag2,handle]);`

- 参数：

  - name : `string`  
    待注册的命令

  - description : `string`  
    命令描述文本

  - permission : `CommandPermissionLevel`  
    （可选参数）命令执行所需权限

    | 执行权限                              | 含义                             |
    | ------------------------------------ | -------------------------------- |
    | `CommandPermissionLevel.Any`         | 任何人都可以执行这条命令         |
    | `CommandPermissionLevel.GameMasters` | 只有OP可以执行这条命令（默认值） |
    | `CommandPermissionLevel.Admin`       |                               |
    | `CommandPermissionLevel.HostPlayer`  |                               |
    | `CommandPermissionLevel.Console`     | 只有控制台可以执行这条命令      |
    | `CommandPermissionLevel.Internal`    |                               |

  - flag1 : `Integer`  
    （可选参数）默认值 `0x80`   
    目前直接按此输入即可，后续会进行相关修改

  - flag2 : `Integer`  
    （可选参数）默认值 `0`   
    目前直接按此输入即可，后续会进行相关修改

  - handle :  
    （可选参数）默认值 `nullptr`

- 返回值：命令对象

- 返回值类型：`DynamicCommandInstance`

::: tip
顶层命令，也就是类似 `list` `gamerule` 这种，在 / 之后第一个输入的部分

注册完顶层命令后，此方法会返回一个命令对象。接下来，对于这个命令的功能扩展都需要在这个对象中进行
:::

## 使用动态命令实例对象

>创建命令后，可继续操作获取到的命令对象。对于一个动态命令对象，有以下方法可供调用：

### 设置命令别名

`DynamicCommandInstance.SetAlias(alias)`
- 参数： 
  - alias : `string`  
    命令别名
- 返回值：是否成功设置
- 返回值类型：`bool`

### 新增命令枚举

`DynamicCommandInstance.SetEnum(description,values)`
- 参数： 
  - description : `string`  
    枚举名，用于设置参数时区分枚举
  - values : `List<string>`  
    枚举的有效值
- 返回值：新增枚举选项的标识名称
- 返回值类型：`string`

### 新增必选参数

`DynamicCommandInstance.Mandatory(name,type[,description,identifier,parameterOption])`
- 参数：
  - name : `string`  
    参数名，用于执行命令时识别参数
  - type : `DynamicCommand.ParameterType`  
    命令参数类型
  - description : `string`  

  - identifier : `string`  

  - enumOptions : `CommandParameterOption`  
    参数选项  
    
    | 参数选项                              | 含义                             |
    | ------------------------------------ | -------------------------------- |
    | `CommandParameterOption.None`        | （默认值）                        |
    | `CommandParameterOption.EnumAutocompleteExpansion` |在命令提示中展开枚举选项，如 `<action : TagChangeAction>` 会变成 `<add\|remove>`            |
    | `CommandParameterOption.HasSemanticConstraint`       |                               |
    | `CommandParameterOption.EnumAsChainedCommand`  |                               |
- 返回值：
- 返回值类型：`ParameterIndex`

### 新增可选参数

`DynamicCommandInstance.Optional(name,type[,description,identifier,parameterOption])`
- 参数：
  - name : `string`  
    参数名，用于执行命令时识别参数
  - type : `DynamicCommand.ParameterType`  
    命令参数类型
  - description : `string`  

  - identifier : `string`  

  - enumOptions : `CommandParameterOption`  
    参数选项
- 返回值：
- 返回值类型：`ParameterIndex`

#### 有效的命令参数类型及解释

| 命令参数类型          | 含义                                                                 |
| --------------------- | -------------------------------------------------------------------- |
| `DynamicCommand.ParameterType.Bool`      | 布尔值参数|
| `DynamicCommand.ParameterType.Int`       | 整数参数                                                             |
| `DynamicCommand.ParameterType.Float`     | 浮点数参数                                                           |
| `DynamicCommand.ParameterType.String`    | 字符串参数                                                           |
| `DynamicCommand.ParameterType.Actor`     | 实体目标选择器参数                                                   |
| `DynamicCommand.ParameterType.Player`    | 玩家目标选择器参数                                                   |
| `DynamicCommand.ParameterType.BlockPos`  | 整数坐标参数                                                         |
| `DynamicCommand.ParameterType.Vec3`      | 浮点数坐标参数                                                       |
| `DynamicCommand.ParameterType.RawText`   | 原始字符串参数(可包含特殊字符，如逗号空格，只能作为最后一个参数使用) |
| `DynamicCommand.ParameterType.Message`   | 消息类型参数(同 `/say` 命令参数，会自动展开目标选择器等)             |
| `DynamicCommand.ParameterType.JsonValue` | JSON字符串参数                                                       |
| `DynamicCommand.ParameterType.Item`      | 物品类型参数                                                         |
| `DynamicCommand.ParameterType.Block`     | 方块类型参数                                                         |
| `DynamicCommand.ParameterType.Effect`    | 效果类型参数                                                         |
| `DynamicCommand.ParameterType.Enum`      | 枚举参数                                                             |
| `DynamicCommand.ParameterType.SoftEnum`  | 可变枚举参数                                                         |
| `DynamicCommand.ParameterType.ActorType` | 实体类型参数                                                         |
| `DynamicCommand.ParameterType.WildcardSelector` ||

## 新增命令重载

要想让命令正常运行，必须至少添加一条重载。所谓重载，本质上相当于参数的组合，譬如重载`['a', 'b', 'c']`相当于命令可以被执行为`/cmd <a> <b> <c>`，而重载`[]`相当于可以被执行为`/cmd`。重载的参数标识符可以是参数名、枚举名、参数标识符，但不能使用无法区分具体参数的标识符，如两个参数都叫 `action` 但枚举选项不同，此时应该使用枚举名而不是参数名。

`DynamicCommandInstance.AddOverload(params)`

- 参数：
  - params : `List<string>`  
    参数标识符，重载所用到的参数列表，可用 参数标识符、枚举名、参数名。  
    注意不能使用无法区分具体参数的标识符，如两个参数都叫 `action` 但枚举选项不同，此时应该使用枚举名而不是参数名
- 返回值：是否成功设置
- 返回值类型：`bool`

::: tip
命令重载是 BDS 区分不同命令形式的方法，每一种不同的命令形式对应着一种命令重载。  
如你所见，命令重载中提供的各项参数名组成了一种新的命令形式
:::

## 设置命令回调

`DynamicCommandInstance.SetCallback(callback)`
- 参数：
  - callback : `DynamicCommand.CallBackFn`  
    注册的这个命令被执行时，接口自动调用的回调函数。

::: tip
命令回调函数的参数相对复杂，在下面将进行详细解释
:::

## 安装命令

>在对命令的所有配置完成之后，使用此方法将命令注册到 BDS 的命令系统当中

`DynamicCommand.Setup(commandInstance)`
- 参数：
  - commandInstance : `DynamicCommandInstance`  
    要安装的命令对象

## 命令回调函数

上文提到的 **命令回调函数** 是一个比较复杂的回调函数，下面对其中的各项参数进行一些解释  
命令回调函数原型： `DynamicCommand.CallBackFn(cmd,origin,output,results)`

#### 参数 `cmd` ： 自身的命令对象

这个参数给出了你注册这个命令时使用的命令对象。

#### 参数 `origin` ：命令的执行者

参数 `origin`的类型为 `CommandOrigin`。此对象表示此次命令的执行者，通过这个对象，可以对执行者进行一些操作  
对于某个特定的 `CommandOrigin` 对象`origin`，有以下这些属性

| 属性         | 含义                   | 类型         |
| ------------ | ---------------------- | ------------ |
| origin.IsValid     | （可空）       | `bool` |
| origin.OriginType     | 命令执行主体类型（可空）    | `CommandOriginType`     |
| origin.SourceSubId      | （可空）  | `byte`   |
| origin.IsSelectorExpansionAllowed | （可空）  | `bool`     |
| origin.CanUseCommandsWithoutCheatsEnabled   | （可空）  | `bool`     |
| origin.IsWorldBuilder   |（可空）  | `bool`     |
| origin.HasTellPerms |（可空）  | `bool`     |
| origin.HasChatPerms   |（可空）  | `bool`     |
| origin.PermissionsLevel   | （可空） | `CommandPermissionLevel`     |
| origin.UUID | （可空） | `MC.Mce.UUID`     |
| origin.SourceId   |（可空）  | `NetworkIdentifier`     |
| origin.Identity   | （可空） | `CommandOriginIdentity`     |
| origin.OutputReceiver | （可空） | `CommandOrigin`     |
| origin.CursorHitPos   | （可空） | `Vec3`     |
| origin.CursorHitBlockPos   |（可空）  | `BlockPos`     |
| origin.Entity   | 执行命令的实体（可空）| `Actor`     |
| origin.Dimension | 命令执行主体的维度（可空） | `Dimension`     |
| origin.Level   | （可空） | `Level`     |
| origin.Rotation   | 执行命令的实体的旋转角度（可空） | `Vec2`     |
| origin.WorldPosition | 命令执行主体的坐标（可空） | `Vec3`     |
| origin.BlockPosition   | 命令执行主体的方块坐标（可空） | `BlockPos`     |
| origin.Name   | 命令执行主体的名称（可空） | `string`     |
| origin.RequestId |（可空）  | `string`     |
| origin.Player   | 执行命令的玩家（可空） | `ServerPlayer`     |

#### 参数 `output` ：向命令执行者输出命令的执行结果

参数`output`的类型为`CommandOutput` 对象。通过这个对象，可以向命令执行者输出命令的执行结果。  
对于某个特定的 `CommandOutput` 对象`output`，有以下这些属性

| 属性         | 含义                   | 类型         |
| ------------ | ---------------------- | ------------ |
| output.OutPutType     | （可空） | `int` |
| output.IsEmpty     | （可空）   | `bool`     |
| output.SuccessCount      | （可空）  | `int`   |
| output.Messages | （可空） | `List<CommandOutputMessage>`     |
| output.Data   | （可空） | `CommandPropertyBag`     |

对于某个特定的 `CommandOutput` 对象`output`，有以下这些成员方法

##### 输出一条成功信息

`output.Success([str[, coplist]])`

- 参数：
  - str : `string`  
    要输出的信息
  - coplist : `List<CommandOutputParameter>`
    要替换的参数
    
##### 输出一条错误信息

`output.Error(str[, coplist])`

- 参数：
  - str : `string`  
    要输出的信息
  - coplist : `List<CommandOutputParameter>`
    要替换的参数

##### 输出一条普通信息

`output.AddMessage(str)`

- 参数：
  - str : `string`  
    要输出的信息

## 示例

以下示例演示如何使用动态命令：

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

            //创建新动态命令实例
            var cmd = DynamicCommand.CreateCommand("testcmd", "This is the command description", CommandPermissionLevel.Any);

            //设置命令别名
            cmd.SetAlias("testcmdalias");

            //新增命令枚举
            cmd.SetEnum("optionsadd", new() {"add", "remove"});

            cmd.SetEnum("optionslist", new(){"list"});

            //设置命令参数
            cmd.Mandatory("testenum", DynamicCommand.ParameterType.Enum, "optionsadd", "param id", CommandParameterOption.EnumAutocompleteExpansion);
            
            cmd.Mandatory("testenum", DynamicCommand.ParameterType.Enum, "optionslist", "param id", CommandParameterOption.EnumAutocompleteExpansion);
            
            cmd.Mandatory("teststring", DynamicCommand.ParameterType.String);

            //设置命令重载
            cmd.AddOverload(new List<string> () {"optionsadd", "teststring"});
            
            cmd.AddOverload(new List<string> () {"optionslist"});

            //设置命令回调
            cmd.SetCallback((command,origin,output,results) => {
                switch(results["testenum"].AsString())
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

            //安装命令
            DynamicCommand.Setup(cmd);
        }
    }
}
```
