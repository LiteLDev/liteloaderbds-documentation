# 📋 LLSE - Multi development Language Support

## 🌏 Current Status

With the support of the [ScriptX](https://github.com/Tencent/ScriptX) project, LLSE adapts to multiple development languages using the same set of source code.    
At the same time, the API remains consistent, allowing various languages to share the same development document. It greatly reducing maintenance difficulties.

Currently, LLSE supports writing plugins in the following languages：

| Language backend | Remarks                                                      |
| ---------------- | ------------------------------------------------------------ |
| `JavaScript`     | Using QuickJS engine, with support for ES Modules            |
| `Lua`            | Using CLua engine                                            |
| `Node.js`         | Modify Node.js to work with embedding, with support for npm package management |
| `Python`  | Using CPython engine, with support for pip package management |

> [!INFO]
>
> If you need to write plugins in compiled languages such as C++, Go, .NET, etc., please go to [Home](../zh-Hans) for other language documentation

## JavaScript language support description

- Support for simple JavaScript plugins using the QuickJS engine, a lightweight engine with a low resource footprint
- The current version of QuickJS supports up to ES2020, and natively supports ES Modules which allows developers to easily manage projects.
- Package management is not yet supported. If needed, you can use Node.js for plugin development and use npm for package management

## Lua language support description

- Use the CLua engine, support require
- Since the Rocks package management mechanism requires the introduction of a compiler, the implementation is not available at this time. If you need to depend on extensions, you can compile them manually and introduce them into your project (e.g. SQLite)

## Node.js support description

- LLSE makes it possible to work in embedded mode by implementing the Node.js starter code itself, and isolates the execution environment for different plugins
- Created interface to implement programmic support for npm. Support installing third-party extension dependencies via package.json

##### ⭐ **Node.js Plugin Packaging & Deployment**

- After the plugin is written, please package `package.json` and all the plugin source code into a zip archive and **change the file name suffix to .llplugin**
- The `node_modules` directory should not be packed in the archive
- Distribute the **.llplugin** file as a plugin. When installing the plugin, just place this file directly into the plugins directory
- LLSE will automatically recognize the **.llplugin** file when BDS launch, extract it to the `plugins/nodejs/<PluginName>` directory, and automatically execute `npm install` in the directory to install the dependency packages. No manual intervention is needed for the whole process

## Python language support description

- Use CPython engine, Python version 3.10.9. Support for installing third-party extension dependencies for plugins using pip package management. Support for multi-file plugin development and import. Support for modern project management.

⭐ **Python plugin development method**

- First, **Plugins use the `__init__.py` file as the entry point**. When loading the plugin, the Python interpreter reads and executes this file.

- Second, LLSE requires the use of the `pyproject.toml` project file specified by the PEP-621 standard for metadata storage (similar to `package.json` in Node.Js). This file stores information like version numbers, plugin names, descriptions, etc. Therefore, you need to use a package manager that supports `pyproject.toml` to facilitate your project management.

- We recommend using the PDM package manager ([pdm-project/pdm: A modern Python package and dependency manager supporting the latest PEP standards (github.com)](https://github. com/pdm-project/pdm), which works like npm in Node.Js.

  Usage:

  - First, install pdm using the `pip install --user pdm` command. 
  - After installation, open the command line in the directory where you want to create your Python project, then execute `pdm init`. Follow the prompts to create a new project, and fill in the information about the project.
  - If you need to install a dependency package, run `pdm add <dependency package name>` in the project directory. (For example, `pdm add requests`)
  - All project metadata and dependencies are automatically stored in `pyproject.toml`, so there is no need to write them manually. You can also open this file to modify metadata information such as version number, description, etc.

- (Not recommended) If you really don't feel comfortable using PDM and need to write ``pyproject.toml`` manually, a sample ``pyproject.toml`` file is given below, which you can follow.

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

- (Not recommended) You can also write the dependencies directly in `requirements.txt`. When installing the plugin, the dependencies written in `pyproject.toml` and `requirements.txt` will be processed and installed automatically.

##### ⭐ **Python Plugin Packaging & Deployment Method**

- After the plugin is written, package `pyproject.toml` and all plugin source code into a zip archive and **change the filename suffix to .llplugin**
- Do not include the `__pycache__` and `__pypackages__` directories in the zip archive
- Distribute the **.llplugin** file as a plugin. When installing the plugin, place it directly into the `plugins` directory.
- The scripting engine will automatically recognize the **.llplugin** file and unzip it to the `plugins/python/plugin name` directory, and automatically execute `pip install` to install the dependencies. No manual intervention is needed for the whole process.
