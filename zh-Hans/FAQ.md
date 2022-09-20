# 常见问题

## 本项目的1.0版本基于什么？

Sysca11/BedrockX

## 为什么我用Linux发行版开服内存占用这么高？

这可能是Wine自身缺陷引发的的内存泄漏导致的，因此我们无法提供解决方案。如果你在使用我们提供的Docker镜像，可以通过限制容器内存大小来防止波及服务器上运行的其它服务。

## LiteLoaderBDS是否支持Minecraft不同版本？

LiteLoaderBDS支持协议号相同的所有版本。

LiteLoaderBDS会在开服时输出服务器版本及当前协议版本，你也可以通过`/version`指令查询

## C++（原生）插件是否支持Minecraft不同版本？

C++插件版本支持情况和LiteLoaderBDS本身相同，但可能可以在不同版本的Minecraft上不稳定地运行。

## 非原生（JavaScript、Lua、Python、Rust、.NET）插件是否支持Minecraft不同版本？

一般来说支持，除非LiteLoader Script Engine发生重大API改动。

## 插件加载中出现了XXX错误码，怎么办哇？

- `126`：依赖库缺失，请检查插件安装是否完整

- `127`：插件与当前版本的LiteLoaderBDS或依赖库不适配

## 崩溃日志中LiteLoader.dll或LiteLoader.Lua/Js/NodeJs.dll条目无法正常显示怎么办？

从[Release](https://github.com/LiteLDev/LiteLoaderBDS/releases)下载对应版本的`PDB.zip`，将其解压至以下任一文件夹内:
- `/`
- `/plugins/`
- `/plugins/lib/`

## 为什么会报这样的错：“There is already a command named xxx”？

命令被重复注册了，请参考以下方式排除问题：

* 可能是不同插件注册了同一个命令，请删除部分冲突插件；
* 可能是一个插件内进行了多次命令注册，请找插件开发者修复问题；
* 可能是某个插件使用了旧的假指令API，且同时使用了`mc.regPlayerCmd`和`mc.regConsoleCmd`，这导致插件会向BDS注册两次相同的命令，但由于假指令API是基于监听`onPlayerCmd`和`onConsoleCmd`事件实现的，并非使用BDS提供的Overload，所以重复注册两次不会导致BDS出现异常，所以并不会影响使用。

## 服务端崩溃了，怎么办？

请打开`/logs/Crash/`下的崩溃日志文件，查看错误原因。

* 如果日志的前几条都是`bedrock_server_mod.exe`的错误，十有八九就是BDS自身的问题
* 如果遇到日志中存在LiteLoader.dll或LiteLoader.Lua/Js/NodeJs.dll，请参考[这里](#崩溃日志中liteloaderdll或liteloaderluajsnodejsdll条目无法正常显示怎么办？)