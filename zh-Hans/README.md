# LiteLoaderBDS文档

[![Build](https://img.shields.io/github/workflow/status/LiteLDev/LiteLoader/Build%20LiteLoader?style=for-the-badge)](https://github.com/LiteLDev/LiteLoader/actions)
[![Latest Tag](https://img.shields.io/github/v/tag/LiteLDev/LiteLoader?label=LATEST%20TAG&style=for-the-badge)](https://github.com/LiteLDev/LiteLoader/releases/latest)
[![Downloads@Latest](https://img.shields.io/github/downloads/LiteLDev/LiteLoader/latest/total?style=for-the-badge)](https://github.com/LiteLDev/LiteLoader/releases/latest)

## 🎨 什么是LiteLoaderBDS？

`LiteLoaderBDS`（以下简称**LL**）是一个用于Minecraft基岩版官方服务端`Bedrock Dedicated Server`（以下简称**BDS**）的插件加载器，提供强大的跨语言脚本插件支持能力和稳定的API支持。

👉[点击此处](https://github.com/LiteLDev/LiteLoaderBDS/blob/main/README_zh-cn.md)👈 查看更详细的介绍。

## 🔨 如何安装和使用LiteLoaderBDS？

👉[点击此处](/Usage.md)👈 查看安装和使用指南。

## ❓ 我遇到了问题，怎么办？

👉[点击此处](/FAQ.md)👈 查看常见问题与解决方法。

如果你的问题还没有被解决，请在我们的Discord群组、Telegram群组、QQ群或GitHub Issues提问。

## 🛴 我想动手写一个插件，要怎么做呢？

首先你需要根据自己的需要，选择你想创作的插件类型。请仔细阅读以下优缺点分析。

一般来说，我们建议使用你最熟悉的语言编写插件。如果你对这些语言都比较熟悉，我们建议开发原生插件以获得最新支持。

如果你希望保护自己的源代码，请进行原生插件开发。使用脚本插件代码并混淆，是非常不优雅的，而且实际上也起不到保护源代码的作用。

### ⛳ 我想写原生插件（C++）

优点：
* 直接与**BDS**底层交互，API最多，可以实现任何服务端功能；
* 性能较好；
* 代码容易管理；
* 便于保护私有源代码。

缺点：
* 随着Minecraft更新，可能需要拉取新的SDK重新编译；
* 对编程和调试能力要求较高；
* 可能存在内存泄漏风险和安全隐患。

建议用于需要对游戏基础功能进行修改的插件，以及任何可能超过五千行代码的插件。

准备好了吗？ 👉[点击此处](https://cpp.docs.litebds.com/zh-Hans/)👈 查看C++插件开发文档。

### 🎯 我想写脚本插件（JavsScript或Lua）

优点：
* 无需关注**BDS**底层，容易上手开发；
* 理论上不需要更新，即可支持所有Minecraft版本；
* 非常安全，且随着**LL**更新，漏洞自动修复。

缺点：
* 代码管理难度高，随着代码量增加，维护变得困难；
* API较少，可能无法用于实现偏门的功能；
* 性能较差；
* 无法避免用户分析源代码，难以保证代码私有性。

建议用于不超过五千行代码的玩法类和辅助类插件。

准备好了吗？ 👉[点击此处](/LLSEPluginDevelopment/)👈 查看脚本插件开发文档。

### 🍳 我想写Python插件

由于ScriptX暂不支持Python，所以需要使用[twoone-3/BDSpyrunner](https://github.com/twoone-3/BDSpyrunner)作为Python支持中间件。

优点：
* 无需关注**BDS**底层，容易上手开发；
* 理论上不需要更新，即可支持所有Minecraft版本；
* 非常安全，且随着**LL**更新，漏洞自动修复。

缺点：
* 由第三方开发者维护，可能得不到最新支持；
* 代码管理难度高，随着代码量增加，维护变得困难；
* API较少，可能无法用于实现偏门的功能；
* 性能较差。

建议用于不超过五千行代码的玩法类和辅助类插件。

首先你需要参考[本教程](https://github.com/twoone-3/BDSpyrunner/wiki)安装BDSpyrunner。

准备好了吗？ 👉[点击此处](https://github.com/twoone-3/BDSpyrunner/wiki/Devlopment)👈 查看Python插件开发文档。

### 🪁 我想写.NET插件（C#、F#或Visual Basic）

优点：
* 拓展性强，可以直接使用.NET丰富的类库；
* 性能较好；

缺点：
* 由第三方开发者维护，可能得不到最新支持；
* 处于开发阶段，部分功能不稳定。

建议对.NET平台较为熟悉的开发者使用。

准备好了吗？ 👉[点击此处](/DotNETPluginDevelopment/)👈 查看 .NET插件开发文档。

## 🎬 如何参与LiteLoaderBDS维护和开发？

我们欢迎你为**LL**做贡献！

👉[点击此处](/Maintenance/)👈查看项目维护与支持文档。

我们正在构思LiteLoaderBDS 3，你可以👉[点击此处](/Maintenance/Blueprint.md)👈查看蓝图。