# 📋 脚本引擎 - 特定脚本语言开发须知

## 🌏 开发语言支持情况

通过 [ScriptX](https://github.com/Tencent/ScriptX) 项目的支持，脚本引擎使用同一套源代码，对多种开发语言进行了适配。    
同时，由于API保持一致，使各种语言得以共享一份开发文档，大大降低了维护难度。

目前，脚本引擎支持使用如下语言编写插件：

| 语言后端           | 备注                                             |
| ------------------ | ---------------------------------------------- |
| `JavaScript`       | 使用 QuickJS 引擎运行插件，支持 ES Module 机制      |
| `Lua`              | 使用 CLua 引擎运行插件                            |
| `Node.js`          | 改造 Node.js 使其适合嵌入工作，支持 npm 包管理       |
| `Python`   | 使用 CPython 引擎运行插件，支持 pip 包管理          |

> [!INFO]
>
> 如果需要使用 C++、Go、.NET 等编译式语言编写插件，请移步 [主页](zh_CN/) 查看其他语言文档

## JavaScript 语言支持说明

- 使用 QuickJS 引擎对简单的 JavaScript 插件提供支持，轻量级引擎资源占用较少
- QuickJS 当前版本支持到 ES2020 语言特性，同时原生支持 ESModule 模块机制，可以方便开发者进行项目管理
- 暂不支持包管理机制，如果需要请使用 Node.js 进行插件开发，使用 npm 包管理

## Lua 语言支持说明

- 使用 CLua 引擎，支持使用 require 进行简单的项目管理
- 由于 Rocks 包管理机制需要引入编译器，因此暂不提供相关实现。如果需要依赖扩展可以手动编译后引入项目进行使用（如 SQLite 等常用库）

## Node.js 支持说明

- 脚本引擎 通过自行实现 Node.js 启动代码，使其可以在嵌入式模式下工作，并实现了不同插件的执行环境隔离
- 自行编写接口实现了对 npm 的 programmic 支持。支持通过 package.json 安装第三方扩展依赖包

##### ⭐ **Node.js 插件打包 & 部署方法**

- 在插件编写完成之后，请将 `package.json` 以及所有插件源码打包为一个zip压缩包，并**将文件名后缀修改为 .llplugin**
- `node_modules` 目录请勿打包在压缩包之中
- 将 **.llplugin** 文件作为插件分发，安装插件时直接将此文件放置到 plugins 目录即可
- 在开服时，脚本引擎会自动识别 **.llplugin** 文件，将其解压到`plugins/nodejs/插件名`目录，并在目录中自动执行 `npm install`安装依赖包，整个过程无需人工干预

## Python 语言支持说明

- 使用 CPython 引擎，Python版本为3.10.9。支持使用 pip 包管理机制为插件安装第三方扩展依赖包，支持多文件插件开发和 import，支持现代项目管理机制

⭐ **Python 插件开发方法**

- 首先，**插件使用`__init__.py`文件作为入口点**。加载插件时，Python解释器会读取并执行这个文件。

- 其次，LLSE 要求使用 PEP-621 标准规定的 `pyproject.toml` 项目文件进行元数据储存（类似Node.Js的`package.json`），关于版本号、插件名、描述等信息都储存于其中。因此，你需要使用一个支持 `pyproject.toml`的包管理器，来方便你进行项目管理。

- 推荐使用 PDM 包管理器（[pdm-project/pdm: A modern Python package and dependency manager supporting the latest PEP standards (github.com)](https://github.com/pdm-project/pdm)，他的作用类似Node.Js中的npm。

  使用方法：

  - 首先，使用`pip install --user pdm`命令安装 pdm
  - 安装完成之后，在你想要创建 Python 项目的目录打开命令行，执行`pdm init`命令，根据其提示创建新项目，填写项目的相关信息。
  - 如果需要安装依赖包，在项目目录执行`pdm add <依赖包名>`即可。（比如`pdm add requests`）
  - 所有的项目元数据和依赖数据都会被自动储存在`pyproject.toml` 中，无需手动编写。你也可以打开此文件修改版本号、描述等元数据信息

- （不推荐）如果你确实不方便使用PDM，需要手动编写 `pyproject.toml`，下面给出一个`pyproject.toml`的文件样例，你可以按照此样例进行编写：

  ```toml
  [project]
  name = "Your-Plugin-Name"
  version = "0.0.1"
  description = "Description of your plugin here."
  authors = [
      {name = "YourName", email = "xxxxx@xxxx.com"},
  ]
  dependencies = [
      "requests>=2.28.2",
  ]
  license = {text = "GPLv3"}
  ```

- （不推荐）你也可以直接把依赖写在`requirements.txt`当中。在安装插件时，`pyproject.toml`和`requirements.txt`中写的依赖都将被处理并自动安装。

##### ⭐ **Python 插件打包 & 部署方法**

- 在插件编写完成之后，请将 `pyproject.toml`以及所有插件源码打包为一个zip压缩包，并**将文件名后缀修改为 .llplugin**
- `__pycache__` 和`__pypackages__` 等目录请勿打包在压缩包之中
- 将 **.llplugin** 文件作为插件分发，安装插件时直接将此文件放置到 plugins 目录即可
- 在开服时，脚本引擎会自动识别 **.llplugin** 文件，将其解压到`plugins/python/插件名`目录，并在目录中自动执行 `pip install`安装依赖包，整个过程无需人工干预
