# 安装和使用

## 🍳 我能使用吗？

如果你认为你自己具备基本的计算机使用能力、互联网使用能力和简单的日常英语水平，我们非常欢迎且推荐你使用LiteLoaderBDS。

如果你在使用中遇到任何问题，请仔细阅读本文档和C++插件开发文档。你遇到的大部分问题应该都可以在文档中找到。

如果出现任何报错，请仔细阅读报错信息，并尝试移除插件直到所有插件都被移除。如果问题依然存在，请在GitHub提出issue或帮我们修复问题并发起pull request。

LiteLoaderBDS开发团队大多为学生，不是专职维护者，也不是客服，有较大的学业压力，因此，请不要以除issue外的方式向我们报告任何问题。此外，请不要催促我们做任何事情。

如果你认为你能够接受以上说明，欢迎你加入LiteLoaderBDS的圈子，让我们携手壮大LiteLoaderBDS生态吧！

## 💻 安装LiteLoaderBDS

### 在Windows上安装

我们推荐在以下平台安装：

* Windows Server 2019或更新版本
* Windows 11
* Windows 10 21H2或更新版本

请跟随以下步骤安装:

1. 从[Minecraft官网](https://www.minecraft.net/en-us/download/server/bedrock)下载Bedrock Server并解压。
2. 从[GitHub releases](https://github.com/LiteLDev/LiteLoader/releases)下载对应版本的LiteLoaderBDS。
3. 解压缩你在步骤2中下载的实现文件，把所有的文件放在BDS的目录中。如果发生冲突，请覆盖这些文件。
4. 检查`bedrock_server.pdb`文件是否存在。如果没有，请重新下载Bedrock Server。
5. 在BDS的目录中，运行`LLPeEditor.exe`，等待程序提示关闭。
6. 在BDS的目录中，运行`bedrock_server_mod.exe`来启动服务器。请注意，你应该始终运行`bedrock_server_mod.exe`来启动服务器。否则，不仅LiteLoaderBDS提供的功能不可用。

### 安装在Linux发行版上

### 通过脚本（在Ubuntu上可用）

在要放置服务器的目录中，运行：

```sh
wget https://raw.githubusercontent.com/LiteLDev/LiteLoaderBDS/develop/scripts/install.sh
chmod +x install.sh
./install.sh
```

### 通过Docker

你应该安装了最新版本的Docker。然后运行：

```sh
docker pull shrbox/liteloaderbds
docker create --name <容器名称> -v <安装目录>:/root/bedrock-server -p <端口>:19132/udp -it shrbox/liteloaderbds
```

你应该根据你的环境调整`<安装目录>`和`<端口>`。

* `<容器名称>`是容器的名称。你可以选择任何你喜欢的符合Docker要求的名字。如果你彳亍不定，`llbds`如何？
* `<安装目录>`是放置BDS服务器和数据的目录。
* `<port>`是玩家连接到服务器时填写的端口。

第一次下载BDS和LiteLoaderBDS时，启动需要更多时间。请耐心等待。

一些常见的命令显示如下：

* 启动服务器：`docker start <容器名称>`
* 关闭服务器：`docker stop <容器名称>`
* 连接到控制台：`docker attach <容器名称>`
* 脱离控制台：按`Ctrl`+`P`+`Q`。你不应该按`Ctrl`+`C`，否则服务器将立即终止。

现在你已经安装了LiteLoaderBDS，那么添加一些插件如何？

## 🎯 添加插件

有2种类型的插件：原生插件和脚本插件<!--和.NET插件-->。

原生插件是经过编译的本地插件，用C++、Go或Rust等语言编写，具有更好的性能，但目前在服务器启动后不能被加载、卸载或重新加载。

脚本插件由JavaScript、Python或Lua编写，可以灵活地管理，具有更好的安全性，但性能较差。

<!--.NET插件是运行在.NET平台（CLR）下，由CLS兼容的语言（如C#、Visual Basic.NET和F#等）编写的插件。-->

> [!WARNING]
> 为了保证大部分插件能够正常运行，请在 `server.properties` 中将 `online-mode` 设为 `true` ，并将 `server-authoritative-movement` 设为 `server-auth` 或 `server-auth-with-rewind` 。

### 寻找您喜爱的插件

你可以在这些网站上寻找插件：

* [LiteLoaderBDS Forum](https://forum.litebds.com/)
* [MineBBS (原生插件)](https://www.minebbs.net/resources/?prefix_id=59)
* [MineBBS (脚本插件)](https://www.minebbs.net/resources/?prefix_id=67)

### 安装插件

1. 如果你有一个压缩文件，请解压缩。
2. 检查插件的内容。LiteLoaderBDS插件的文件名通常以`.dll`、`.js`、`.lua`或`.llplugin`结尾。
3. 将文件放在`plugins`目录中。一些插件可能与其他文件一起分发，你应该同时把它们放在`plugins`目录中。

## 🔌 管理插件

你可以用下面列出的命令来管理这些插件：

* `ll list`：列出插件
* `ll load plugins/xxx.js`：加载一个脚本插件
* `ll unload plugin/xxx.js`：卸载一个脚本插件
* `ll reload plugin/xxx.js`：重新加载一个脚本插件
* `ll reload`：重新加载所有脚本插件
* `ll version`：打印LiteLoaderBDS版本
* `ll upgrade`：检查LiteLoaderBDS的更新

### 注意事项

* 卸载一个插件后，它所注册的命令不会被完全删除，这可能会导致玩家在试图使用该命令时提示该命令不存在。
* 如果卸载的插件导出的接口被其他插件使用，其他插件将无法使用。
* 当服务器尚未启动或有玩家在服务器中时，不要卸载或重新加载插件，否则服务器将面临崩溃的风险。
* 在加载一个插件时，`onServerStarted`事件和所有玩家的`onPlayerJoin`事件将在该插件中被触发。

> [!WARNING]
> 不要在生产环境下加载、卸载或重新加载任何插件。

## 🎨 管理附加包

将文件名以`.mcpack`、`.mcaddon`或`.zip`结尾的附加包复制到`plugins/AddonsHelper/`并重新启动服务器。然后，这些附加包将被自动添加到世界中。

你可以在控制台使用 `addons` 命令来管理它们。

## 📡 调试插件

你可以输入这些命令来进入相应的调试模式：

* `jsdebug`: JavaScript调试模式
* `luadebug`: Lua调试模式

在调试模式下，你输入的所有文本将被解析为脚本并实时执行，就像浏览器的开发工具的控制台那样。如果发生任何错误，你会看到一个错误报告。

你可以输入`jsdebug`/`luadebug`并回车以退出调试模式。

## 🚅 更新LiteLoaderBDS

当新的LiteLoaderBDS或Minecraft基岩版发布时，你需要更新以使得服务端适配最新的客户端。

> [!WARNING]
> 请注意，部分插件、地图等对更新操作有额外要求，若按照以下步骤操作，可能导致数据损坏。请做好数据备份工作。

### 更新安装于Windows上的服务端

更新时，请按照以下步骤操作：

1. 将服务端所在目录内，除 `allowlist.json` 、 `permissions.json` 、 `server.properties` 、 `plugins` 、 `worlds` 外所有文件删除。
2. 将新版LiteLoaderBDS适配的适用于 Minecraft 的 Bedrock 版专属服务端软件（BDS）压缩包中，除 `allowlist.json` 、 `permissions.json` 、 `server.properties` 外所有内容解压到服务端所在目录。此步骤不应出现覆盖提示。
3. 将新版LiteLoaderBDS压缩包中所有内容解压到服务端所在目录并覆盖旧文件。
4. 运行 `LLPeEditor.exe` ，按提示等待操作即可。

### 更新安装与Linux发行版上的服务端

更新时，请按照以下步骤操作：

1. 备份服务端所在目录内的 `allowlist.json` 、 `permissions.json` 、 `server.properties` 、 `plugins` 、 `worlds` 。
2. 删除服务端。
3. 按照安装指南安装新版LiteLoaderBDS。
4. 将备份的文件放回到服务端所在目录，并覆盖同名文件。