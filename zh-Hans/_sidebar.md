- [🎨 主页](/README.md)

- 👍 用户指南
    - [🔨 安装与使用](/Usage.md)
    - [❓ 常见问题](/FAQ.md)
    - 🧩 子模块
        - [💰 LLMoney经济核心](/Submodules/LLMoney.md)
        - [🔒 权限API](/Submodules/PermAPI.md)

- 🍔 插件开发者指南
    - [⛳ 原生插件开发](https://cpp.docs.litebds.com/zh-Hans)

    - 🎯 脚本插件开发
        - [⛳ 新手入门（必读）](LLSEPluginDevelopment/README.md)
        - [📋 多种开发语言支持](LLSEPluginDevelopment/LanguageSupport.md)
        - [📜 使用JavaScript创造你的首个脚本插件](LLSEPluginDevelopment/LLSEJSPlugin.md)
        - [💼 通用脚本接口 - 常用](LLSEPluginDevelopment/ScriptAPI/ScriptHelp.md)

        - 游戏内容接口
            - [🎨 基础游戏接口](LLSEPluginDevelopment/GameAPI/Basic.md)
            - [🎯 命令系统](LLSEPluginDevelopment/GameAPI/Command.md)
            - [🏃‍♂️ 玩家对象](LLSEPluginDevelopment/GameAPI/Player.md)
            - [📦 方块对象](LLSEPluginDevelopment/GameAPI/Block.md)
            - [🎈 实体对象](LLSEPluginDevelopment/GameAPI/Entity.md)
            - [🧰 物品对象](LLSEPluginDevelopment/GameAPI/Item.md)
            - [📮 方块实体对象](LLSEPluginDevelopment/GameAPI/BlockEntity.md)
            - [✨ 粒子生成器对象](LLSEPluginDevelopment/GameAPI/Particle.md)
            - [👜 容器对象](LLSEPluginDevelopment/GameAPI/Container.md)
            - [📝 记分板](LLSEPluginDevelopment/GameAPI/ScoreBoard.md)
            - [📩 数据包接口](LLSEPluginDevelopment/GameAPI/Packet.md)
            - [📱 玩家设备信息](LLSEPluginDevelopment/GameAPI/Device.md)
            - [💻 服务端设置](LLSEPluginDevelopment/GameAPI/Server.md)
            - [🎮 游戏实用工具](LLSEPluginDevelopment/GameAPI/GameUtils.md)

        - 事件系统
            - [🔔 监听事件](LLSEPluginDevelopment/EventAPI/Listen.md)
            - [🏃‍♂️ 玩家事件列表](LLSEPluginDevelopment/EventAPI/PlayerEvents.md)
            - [🎈 实体事件列表](LLSEPluginDevelopment/EventAPI/EntityEvents.md)
            - [📦 方块事件列表](LLSEPluginDevelopment/EventAPI/BlockEvents.md)
            - [🔊 其他事件列表](LLSEPluginDevelopment/EventAPI/OtherEvents.md)
            - [💰 经济系统事件列表](LLSEPluginDevelopment/EventAPI/EconomicEvents.md)

        - NBT
            - [🥽 NBT 概述与通用接口](LLSEPluginDevelopment/NbtAPI/NBT.md)
            - [📋 NBT 普通数据类型](LLSEPluginDevelopment/NbtAPI/NBTValue.md)
            - [📚 NBT 列表类型](LLSEPluginDevelopment/NbtAPI/NBTList.md)
            - [📒 NBT 标签类型](LLSEPluginDevelopment/NbtAPI/NBTCompound.md)

        - 图形界面与表单
            - [📊 表单](LLSEPluginDevelopment/GuiAPI/Form.md)
            - [📰 表单构建器](LLSEPluginDevelopment/GuiAPI/FormBuilder.md)

        - 脚本辅助接口
            - [📅 日志系统](LLSEPluginDevelopment/ScriptAPI/Logger.md)
            - [💡 加载器相关接口](LLSEPluginDevelopment/ScriptAPI/Ll.md)
            - [🛫 国际化](LLSEPluginDevelopment/ScriptAPI/i18n.md)

        - 配置文件与数据处理
            - [🔨 配置文件](LLSEPluginDevelopment/DataAPI/ConfigFile.md)
            - [🔐 权限系统](/LLSEPluginDevelopment/DataAPI/PermAPI.md)
            - [📦 数据库](LLSEPluginDevelopment/DataAPI/DataBase.md)
            - [💰 经济系统](LLSEPluginDevelopment/DataAPI/Economy.md)
            - [🏃‍♂️ 玩家绑定数据](LLSEPluginDevelopment/DataAPI/PlayerData.md)
            - [🧰 其他数据处理接口](LLSEPluginDevelopment/DataAPI/OtherData.md)

        - 系统调用与网络
            - [📝 文件读写](LLSEPluginDevelopment/SystemAPI/File.md)
            - [📂 文件与目录操作](LLSEPluginDevelopment/SystemAPI/FileSystem.md)
            - [🌏 网络](LLSEPluginDevelopment/SystemAPI/Network.md)
            - [📡 系统调用](LLSEPluginDevelopment/SystemAPI/SystemCall.md)
            - [📜 获取系统信息](LLSEPluginDevelopment/SystemAPI/SystemInfo.md)
            
        - 本机调用
            - [📚 概述](LLSEPluginDevelopment/NativeAPI/Summary.md)
            - [📲 指针类型NativePointer](LLSEPluginDevelopment/NativeAPI/NativePointer.md)
            - [🎚️ 函数类型NativeFunction](LLSEPluginDevelopment/NativeAPI/NativeFunction.md)
            - [🛠️ 补丁工具NativePatch](LLSEPluginDevelopment/NativeAPI/NativePatch.md)

    - [🍳 Python插件开发](https://github.com/twoone-3/BDSpyrunner/wiki/Devlopment)

    - 🪁 .NET插件开发
        - [⛳ 新手入门（必读）](/DotNETPluginDevelopment/README.md)

        - [✨ 环境部署](/DotNETPluginDevelopment/Deploy.md)

        - 💡 如何：
            - [定义插件入口](/DotNETPluginDevelopment/HowTo/PluginEntry.md)
            - [使用动态指令](/DotNETPluginDevelopment/HowTo/DynamicCommand.md)
            - [使用静态指令](/DotNETPluginDevelopment/HowTo/Static_DynamicCommand.md)
            - [使用事件](/DotNETPluginDevelopment/HowTo/UseEvent.md)
            - [构建表单](/DotNETPluginDevelopment/HowTo/BuildForm.md)

        - 🔍 API参考
            - [LLNET](/DotNETPluginDevelopment/APIs/Namespace/LLNET/LLNET.md)
            - [LLNET.AllowList](/DotNETPluginDevelopment/APIs/Namespace/LLNET.AllowList/LLNET.AllowList.md)
            - [LLNET.Core](/DotNETPluginDevelopment/APIs/Namespace/LLNET.Core/LLNET.Core.md)
            - [LLNET.DynamicCommand](/DotNETPluginDevelopment/APIs/Namespace/LLNET.DynamicCommand/LLNET.DynamicCommand.md)
            - [LLNET.Event](/DotNETPluginDevelopment/APIs/Namespace/LLNET.Event/LLNET.Event.md)
            - [LLNET.Form](/DotNETPluginDevelopment/APIs/Namespace/LLNET.Form/LLNET.Form.md)
            - [LLNET.Hook](/DotNETPluginDevelopment/APIs/Namespace/LLNET.Hook/LLNET.Hook.md)
            - LLNET.LL
            - LLNET.Logger
            - LLNET.PlayerInfo
            - LLNET.RemoteCall
            - LLNET.Schedule
            - MC

- 🎬 维护者指南
    - [⛳ 欢迎！](/Maintenance/README.md)
    - [🔮 Git使用以及项目Commit规范](/Maintenance/Commit.md)
    - [🚥 C++风格指南](/Maintenance/StyleGuide.md)
    - [💡 放在最后](/Maintenance/Conclusion.md)
    - [👓 项目架构分析（待完善）](/Maintenance/Analysis.md)
    - [🎯 维护项目和贡献代码（待完善）](/Maintenance/Coding.md)
    - [🧿 LiteLoaderBDS 3 蓝图](/Maintenance/Blueprint.md)
    - [🧩 子模块使用说明](/Maintenance/Submodules.md)

- [💦 更新日志](https://github.com/LiteLDev/LiteLoaderBDS/releases)