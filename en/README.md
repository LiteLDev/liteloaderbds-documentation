# LiteLoaderBDS Documentation

[![Build](https://img.shields.io/github/actions/workflow/status/LiteLDev/LiteLoaderBDS/cmake_repo.yml?style=for-the-badge)](https://github.com/LiteLDev/LiteLoader/actions)
[![Latest Tag](https://img.shields.io/github/v/tag/LiteLDev/LiteLoaderBDS?label=LATEST%20TAG&style=for-the-badge)](https://github.com/LiteLDev/LiteLoaderBDS/releases/latest)
[![Downloads@Latest](https://img.shields.io/github/downloads/LiteLDev/LiteLoaderbds/latest/total?style=for-the-badge)](https://github.com/LiteLDev/LiteLoaderBDS/releases/latest)

## 🎨 What is LiteLoaderBDS?

**LiteLoaderBDS** is a plugin loader for the **Bedrock Edition exclusive server software** (hereafter referred to as **BDS**) for Minecraft, providing powerful cross-language scripting plugin support capabilities and stable API support.

👉[click here](https://github.com/LiteLDev/LiteLoaderBDS/blob/main/README_zh-cn.md)👈 for a more detailed description.

## 🔨 How do I install and use LiteLoaderBDS?

👉[click here](/Usage.md)👈 View installation and usage instructions.

## ❓ I have a problem, what do I do?

👉[click here](/FAQ.md)👈 View frequently asked questions and solutions.

## 🎬 How can I get involved in LiteLoaderBDS maintenance and development?

We welcome your contribution to **LiteLoaderBDS**!

👉[click here](/Maintenance/)👈 to view the project maintenance and support documentation.

We are in the process of conceptualising LiteLoaderBDS 3 and you can 👉[click here](/Maintenance/Blueprint.md)👈 to view the blueprint.

## 🛴 I want to get my hands dirty and write a plugin, what do I need to do?

First you need to choose the type of plugin you want to create, depending on your needs. Please read the following analysis of the advantages and disadvantages carefully.

In general, we recommend writing plugins in the language you are most familiar with. If you are familiar with all these languages, we recommend developing native plugins to get the latest support.

If you wish to protect your source code, please do native plugin development. Using scripted plug-in code and obfuscating it is very inelegant and does not actually work to protect the source code.

### ⛳ I want to write native plugins (C++)

Pros.
* Direct interaction with the **BDS** underlying layer, with the most APIs to enable any server-side functionality.
* Better performance.
* Easy to manage code.
* Easy to protect private source code.

Disadvantages.
* May require pulling new SDKs to recompile as Minecraft is updated.
* Higher requirements for programming and debugging skills.
* Possible memory leak risk and security concerns.

Recommended for plugins that require changes to the game's base functionality, and any plugins that may exceed 5,000 lines of code.

Ready? 👉[click here](https://cpp.docs.litebds.com/zh-Hans/)👈 Check out the C++ plugin development documentation.

### 🎯 I want to write script plugins (JavsScript or Lua)

Pros.
* No need to focus on **BDS** underlying layers, easy to get started with development.
* Theoretically supports all Minecraft versions without the need for updates.
* Very secure and vulnerabilities are automatically fixed as **LiteLoaderBDS** is updated.

Disadvantages.
* Difficult to manage code and maintenance becomes difficult as the amount of code increases.
* Fewer APIs, which may not be used to implement offbeat features.
* Poor performance.
* Cannot avoid user analysis of source code, difficult to guarantee code privacy.

Recommended for play classes and helper plugins with no more than 5,000 lines of code.

Ready? 👉[click here](/LLSEPluginDevelopment/)👈 Check out the script plugin development documentation.

### 🍳 I want to write Python plugins

Since ScriptX does not support Python at the moment, I need to use [twoone-3/BDSpyrunner](https://github.com/twoone-3/BDSpyrunner) as Python support middleware.

Advantages.
* No need to focus on the **BDS** underlying layer, easy to get started with development.
* Theoretically supports all Minecraft versions without the need for updates.
* Very secure and vulnerabilities are automatically fixed as **LiteLoaderBDS** is updated.

Disadvantages.
* Maintained by third party developers and may not have the latest support.
* Difficult to manage code and maintenance becomes difficult as the amount of code increases.
* Fewer APIs, which may not be available for offbeat functionality.
* Poor performance.

Recommended for playstyle and helper plugins of no more than 5,000 lines of code.

First you need to refer to [this tutorial](https://github.com/twoone-3/BDSpyrunner/wiki) to install BDSpyrunner.

Are you ready? 👉[click here](https://github.com/twoone-3/BDSpyrunner/wiki/Devlopment)👈 Check out the Python plugin development documentation.

### 🪁 I want to write .NET plugins (C#, F# or Visual Basic)

Pros.
* Extensible, with direct access to .NET's rich class library.
* Better performance.

Disadvantages.
* Maintained by third-party developers and may not have up-to-date support.
* In development stage, some features are unstable.

Recommended for developers who are more familiar with the .NET platform.

Ready to get started? 👉[click here](/DotNETPluginDevelopment/)👈 Check out the .NET plugin development documentation.

### ❤️ I want to publish my plugin

When you've written a creative plugin, you'll definitely want more people to use it. Then all you need to do is publish it to the various plugin platforms.

We strongly recommend that you package your plug-in in a package supported by the [Lip Package Management Tool](https://lip.docs.litebds.com), which will make it easy for anyone to install your plug-in via the Lip tool. You can refer to: [Creating a package](https://lip.docs.litebds.com/en/#/tutorials/create_a_lip_tooth) and [Submitting packages to the Lip Registry](https://lip.docs.litebds.com/en/#/tutorials/submit_your_tooth_to_lip_registry).
