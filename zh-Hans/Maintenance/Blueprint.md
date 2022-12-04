## LiteLoaderBDS 3 蓝图

LiteLoaderBDS将会在一年内迎来完整重构的全新版本：LiteLoaderBDS 3。在这个文件中，你可以找到LiteLoaderBDS 3的所有信息，包括预期功能、设计思想、进度计划等。

## 设计思想

LiteLoaderBDS 3中，各重要组件将会进一步解耦合。这意味着LiteLoaderBDS将会成为一个组件包，其中包括PreLoader、LiteLoader、LiteScriptEngine、LitePyRunner、LitePackageManager等模块。其中，只有LiteLoader是运行时必须的。也就是说，用户应当可以仅运行LiteLoader和原生插件，而不引入脚本插件、.NET插件或Python插件。解耦合不是回归LiteLoaderBDS 1.x时代，而是为了使LiteLoaderBDS成为一个更强大、更多元的平台，以提供高于BDS插件的拓展能力。也就是说，在LiteLoaderBDS 3中，开发者不仅能够编写BDS插件，还能够编写LiteLoaderBDS模块，从而为LiteLoaderBDS添加更多新的功能，譬如管理面板、群组服等。

LiteLoaderBDS 3中，非常重要的一个构想是LitePackageManager（LPM），也就是LiteLoaderBDS的包管理器。我们希望能够建立一个类似Chocolatey的工具，使得开发者可以编写配置文件，并将模块或插件打包，让用户在需要时动态下载、安装、加载、卸载、删除BDS插件、LiteLoaderBDS组件或Minecraft Addons。

## 预期功能



## 进度计划



## 代码结构

### LiteLoaderBDS及相关组件



### 运行时BDS目录结构

除BDS自带文件外，还有以下文件：