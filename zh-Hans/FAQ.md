# 常见问题

## 本项目的1.0版本基于什么？

bdsx/bdsx。

## 为什么我用Linux发行版开服内存占用这么高？

这可能是Wine自身缺陷引发的的内存泄漏导致的，因此我们无法提供解决方案。如果你在使用我们提供的Docker镜像，可以通过限制容器内存大小来防止波及服务器上运行的其它服务。

## LiteLoaderBDS是否支持Minecraft不同版本？

LiteLoaderBDS支持协议号相同的所有版本。

LiteLoaderBDS会在开服时输出服务器版本及支持的协议版本，你也可以通过`/version`指令查询

## C++（原生）插件是否支持Minecraft不同版本？

C++插件版本支持情况和LiteLoaderBDS本身相同，但可能可以在不同版本的Minecraft上不稳定地运行。

## 非原生（JavaScript、Lua、Python、Rust、.NET）插件是否支持Minecraft不同版本？

一般来说支持，除非LiteLoader Script Engine发生重大API改动。

## 插件加载中出现了XXX错误码，怎么办哇？

- `126`：依赖库缺失，请检查插件安装是否完整

- `127`：插件与当前版本的LiteLoaderBDS不适配

## 没法在Linux发行版上启动服务器怎么办呢？

尝试删除`/plugins/LiteLoader/LLAutoUpdate.dll`

如果你的服务器的可用内存少于1.2GB，请尝试释放内存，因为在低内存环境中LiteLoaderBDS可能无法正常启动

## 如果崩溃日志出现奇怪的符号怎么办？

从[Release](https://github.com/LiteLDev/LiteLoaderBDS/releases)下载对应版本的`PDB.zip`，将其解压至以下任一文件夹内:
- `/`
- `/plugins/`
- `/plugins/lib/`

## 为什么会报这样的错：“There is already a command named xxx”？

命令被重复注册了，请参考以下方式排除问题：

* 可能是不同插件注册了同一个命令，请删除部分冲突插件；
* 可能是一个插件内进行了多次命令注册，请找插件开发者修复问题。

## 服务端崩溃了，怎么办？

请打开`/logs/Crash/`下的崩溃日志文件，查看错误原因。

* 如果你看到了类似`STL Exception`或`NTDLL`字样，那么大概率是某个插件出现错误，请将所有插件移除，然后逐个添加同时测试，以排除插件问题；
* 如果所有插件移除后，依然有相同错误，请在GitHub Issues、Telegram群组、Discord群组或QQ群中向我们提问。