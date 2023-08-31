# LiteLoader.DynamicCommand 命名空间

包含用于定义、注册、管理动态命令的类、特性、结构、接口。

## 类

|||
|-|-|
|[CommandAliasAttribute](Class/CommandAliasAttribute/CommandAliasAttribute)|用于指定命令别名的特性。|
|[CommandAttribute](Class/CommandAttribute/CommandAttribute)|用于指定命令主体类的特性。|
|[CommandEmptyOverloadAttribute](Class/CommandEmptyOverloadAttribute/CommandEmptyOverloadAttribute)|用于指定命令具有空重载的特性。|
|[CommandEnumAttribute](Class/CommandEnumAttribute/CommandEnumAttribute)|用于指定命令枚举参数的特性。|
|[CommandParameterAttribute](Class/CommandParameterAttribute/CommandParameterAttribute)|用于指定命令参数的特性。|
|[CommandParameterOverloadAttribute]|用于指定命令参数重载规则的特性。|
|[DynamicCommand]|用于定义、注册、管理动态命令的类。|
|[DynamicCommandInstance]|动态命令实例类。|

## 接口

|||
|-|-|
|[ICommand]|提供用于定义命令逻辑主体方法的接口。|
|[ICommandData]|提供访问命令注册前后完整命令信息的接口。|
|[ICommandEvent]|提供访问命令注册前后动态命令实例的接口。|
