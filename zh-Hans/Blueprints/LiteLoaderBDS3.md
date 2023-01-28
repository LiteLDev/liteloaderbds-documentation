# 蓝图：LiteLoaderBDS 3
LiteLoaderBDS将会在一年内迎来完整重构的全新版本：LiteLoaderBDS 3。在这个文件中，你可以找到LiteLoaderBDS 3的所有信息，包括预期功能、设计思想、进度计划等。

## 设计思想和预期功能

### 解耦合

LiteLoaderBDS 3中，各重要组件将会进一步解耦合。这意味着LiteLoaderBDS将会成为一套工具链，包括多个不同的模块。一些可能的模块如下：

- Core
- PreLoader
- ScriptEngine
- PyRunner
- PackageManager

在上述模块中，Core时运行时必须的，PreLoader是安装时必须的，而其它模块都不是必须的。也就是说，用户应当可以仅运行Core，而不引入脚本插件引擎、.NET插件引擎或Python插件引擎。解耦合是为了使LiteLoaderBDS成为一个更强大、更多元的平台，以提供高于BDS插件的拓展能力。也就是说，在LiteLoaderBDS 3中，开发者不仅能够编写适用于游戏的插件，还能够编写适用于LiteLoaderBDS本身的其它模块，从而为LiteLoaderBDS添加更多新的功能，譬如管理面板、群组服等。

#### Core

Core是LiteLoaderBDS的核心组件，负责BDS的运行，以及为其它模块和原生插件提供底层API。

#### PreLoader

PreLoader负责在安装LiteLoaderBDS工具链时，从BDS中提取必要的符号信息，并进行注入，以实现LiteLoaderBDS的功能。

#### ScriptEngine

ScriptEngine通过ScriptX与Lua、JavaScript等脚本语言的引擎交互，从而使得开发者用Lua、JavaScript等脚本语言开发插件成为可能。

#### PyRunner

PyRunner用于与Python脚本引擎交互，使得开发者用Python语言开发插件成为可能。

#### PackageManager

PackageManager是LiteLoaderBDS的包管理器。这是LiteLoaderBDS 3的最重要的构想。我们希望能够建立一个类似Chocolatey的工具，使得开发者可以编写配置文件，并将模块或插件打包，让用户在需要时动态下载、安装、加载、卸载、删除BDS插件、LiteLoaderBDS组件或Minecraft Addons。

### Mod

在Minecraft Java版中，为游戏赋予无上生命力的关键正是其众多的Mod。与之相比，基岩版却缺乏与Mod同生态位的玩法增强方式。目前，除了LiteLoaderBDS的插件外，基岩版本身也提供了Addon，允许开发者自定义新的物品、实体等。但是，LiteLoaderBDS插件与Addon还没有能够高效互联互通的方式，也没有单独提供物品注册、实体注册等功能的接口。

在LiteLoaderBDS 3中，我们将会寻找更好的耦合LiteLoaderBDS插件和基岩版Addon的方法，使得开发者能够制作类似Java版的Mod。

### 依赖项和插件包

有一些插件依赖其它插件。在目前版本的LiteLoaderBDS中，往往需要玩家自行安装所有前置插件，费时费力。在LiteLoaderBDS 3中，我们将会引入插件元信息（metadata）的概念，只需要开发者在`metadata.json`中编写插件依赖信息，玩家就可以根据提示下载对应的插件，或通过LitePackageManager自动安装所有前置插件。

有一些插件是相互补足、相互增强的，它们往往被玩家同时加载。在LiteLoaderBDS 3中，我们将会引入插件包的概念，开发者只需要在一个空插件的`metadata.json`中编写插件依赖信息，就可以实现插件包的功能。

### 规范化插件文件和数据

目前并没有为插件开发者提供统一的数据存储接口，也没有约定文件存储路径，这导致玩家在使用时，难以进行正确的配置。同时，在迁移服务器时，也会带来比较大的麻烦。

在LiteLoaderBDS 3中，我们将会提供以下数据存储接口：

- 存档内非易失KV数据库接口
- 存档内非易失SQLite数据库接口
- 全局非易失KV数据库接口
- 全局非易失SQLite数据库接口
- 全局易失KV数据库接口

所有接口都应当做到不同插件间的隔离。

同时，我们会规范每个插件应当访问的文件路径，并提供一个接口供插件读取。开发者应当仅使用该接口提供的路径进行文件读写。

对于日志数据，我们会额外提供一个接口用于写入。

## 待办事项和进度计划

暂无

## 代码管理和文件结构

### LiteLoaderBDS及相关模块

暂无

### 运行时BDS目录结构

暂无
