import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LiteLoaderBDS',
  description: 'An epoch-making & cross-language plugin loader for Minecraft Bedrock Dedicated Server.',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiteLDev/LiteLoaderBDS' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh_Hans: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示细节',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '返回',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '选择',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '切换上一个',
                  navigateDownKeyAriaLabel: '切换下一个',
                  closeText: '关闭',
                  closeKeyAriaLabel: '关闭',
                }
              }
            }
          }
        }
      }
    }
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      description: '.NET plugin framework for BDS',

      themeConfig: {
        nav: [
          { text: 'Home', link: 'https://www.litebds.com' },
          { text: 'Documentation', link: '/en/README' }
        ],

        sidebar: [
          { text: '🎨 Home', base: '/en/', link: 'README' },
          {
            text: '👍 User Guide',
            collapsed: false,
            base: '/en/',
            items: [
              { text: '🔨 Installation and Usage', link: 'Usage' },
              { text: '❓ Frequently Asked Questions', link: 'FAQ' },
              {
                text: '🧩 Submodules',
                collapsed: false,
                base: '/en/Submodules/',
                items: [
                  { text: '💰 LLMoney Economy System', link: 'LLMoney' },
                  { text: '🔒 PermissionAPI', link: 'PermAPI' },
                  { text: '✨ ParticleAPI', link: 'ParticleAPI' }
                ]
              }
            ]
          },
          {
            text: '🍔 Creator Guide',
            collapsed: false,
            items: [
              {
                text: '⛳ C++ Plugin Development',
                link: 'https://cpp.docs.litebds.com/',
              },
              {
                text: '🎯 Script Plugin Development',
                collapsed: false,
                base: '/en/LLSEPluginDevelopment/',
                link: 'README',
                items: [
                  {
                    text: '📋 Multi Development Language Support (Must Read)',
                    link: 'LanguageSupport',
                  },
                  {
                    text: '📜 Quick Start: Create your first script plugin with JS',
                    link: 'LLSEJSPlugin',
                  },
                  {
                    text: '💼 Generic Script Interface (Commonly Used)',
                    link: 'ScriptAPI/ScriptHelp',
                  },
                  {
                    text: 'Game Content Interface',
                    collapsed: false,
                    base: '/en/LLSEPluginDevelopment/GameAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '🎨 Basic Game Interface',
                        link: 'Basic',
                      },
                      {
                        text: '🎯 Command System',
                        link: 'Command',
                      },
                      {
                        text: '🏃‍♂️ Player Object',
                        link: 'Player',
                      },
                      {
                        text: '📦 Block Object',
                        link: 'Block',
                      },
                      {
                        text: '🎈 Entity Objects',
                        link: 'Entity',
                      },
                      {
                        text: '🧰 Item Object',
                        link: 'Item',
                      },
                      {
                        text: '📮 Block Entity Object',
                        link: 'BlockEntity',
                      },
                      {
                        text: '✨ Particle Spawner Object',
                        link: 'Particle',
                      },
                      {
                        text: '👜 Container Object',
                        link: 'Container',
                      },
                      {
                        text: '📝 Scoreboard',
                        link: 'ScoreBoard',
                      },
                      {
                        text: '📩 Packets',
                        link: 'Packet',
                      },
                      {
                        text: '📱 Player Device Information',
                        link: 'Device',
                      },
                      {
                        text: '💻 Server Settings',
                        link: 'Server',
                      },
                      {
                        text: '🎮 Game Utilities',
                        link: 'GameUtils',
                      },
                    ],
                  },
                  {
                    text: 'Event System',
                    collapsed: false,
                    base: '/en/LLSEPluginDevelopment/EventAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '🔔 Event Listeners',
                        link: 'Listen',
                      },
                      {
                        text: '🏃‍♂️ Player Events List',
                        link: 'PlayerEvents',
                      },
                      {
                        text: '🎈 Entity Events List',
                        link: 'EntityEvents',
                      },
                      {
                        text: '📦 Block Event List',
                        link: 'BlockEvents',
                      },
                      {
                        text: '🔊 Other Event List',
                        link: 'OtherEvents',
                      },
                      {
                        text: '💰 Economic System Events',
                        link: 'EconomicEvents',
                      },
                    ],
                  },
                  {
                    text: 'NBT',
                    collapsed: false,
                    base: '/en/LLSEPluginDevelopment/NbtAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '🥽 NBT Overview and Common Interface',
                        link: 'NBT',
                      },
                      {
                        text: '📋 NBT Common Data Types',
                        link: 'NBTValue',
                      },
                      {
                        text: '📚 NBT List Types',
                        link: 'NBTList',
                      },
                      {
                        text: '📒 NBT Tag Types',
                        link: 'NBTCompound',
                      },
                    ],
                  },
                  {
                    text: 'Graphical Interface and Forms  ',
                    collapsed: false,
                    base: '/en/LLSEPluginDevelopment/GuiAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '📊 Forms',
                        link: 'Form',
                      },
                      {
                        text: '📰 Form Builder',
                        link: 'FormBuilder',
                      },
                    ],
                  },
                  {
                    text: 'Script Auxiliary Interface',
                    collapsed: false,
                    base: '/en/LLSEPluginDevelopment/ScriptAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '📅 Log System',
                        link: 'Logger',
                      },
                      {
                        text: '💡 Loader Interface',
                        link: 'Ll',
                      },
                      {
                        text: '🛫 Internationalization',
                        link: 'i18n',
                      },
                    ],
                  },
                  {
                    text: 'Configuration Files and Data Processing',
                    collapsed: false,
                    base: '/en/LLSEPluginDevelopment/DataAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '🔨 Config File',
                        link: 'ConfigFile',
                      },
                      {
                        text: '🔐 Discord-like Permission Interface',
                        link: 'PermAPI',
                      },
                      {
                        text: '📦 Database',
                        link: 'DataBase',
                      },
                      {
                        text: '💰 Economic System',
                        link: 'Economy',
                      },
                      {
                        text: '🏃‍♂️ Player Binding Data',
                        link: 'PlayerData',
                      },
                      {
                        text: '🧰 Other Data Processing Interfaces',
                        link: 'OtherData',
                      },
                    ],
                  },
                  {
                    text: 'System Calls and Networking',
                    collapsed: false,
                    base: '/en/LLSEPluginDevelopment/SystemAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '📝 File Reading and Writing',
                        link: 'File',
                      },
                      {
                        text: '📂 File and Directory Manipulation',
                        link: 'FileSystem',
                      },
                      {
                        text: '🌏 Network',
                        link: 'Network',
                      },
                      {
                        text: '📡 System Calls',
                        link: 'SystemCall',
                      },
                      {
                        text: '📜 Get System Information',
                        link: 'SystemInfo',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          { text: '💦 Changelog', link: 'https://github.com/LiteLDev/LiteLoaderBDS/releases' }
        ],

        editLink: {
          pattern: 'https://github.com/LiteLDev/Documentation/edit/refactor/vitepress/docs/:path',
          text: 'Edit this page on GitHub'
        },

        footer: {
          message: 'Powered by Vitepress',
          copyright: '© 2023 LiteLDev LGPL-3.0'
        },

        lastUpdated: {
          text: 'Last updated'
        }
      }
    },
    zh_Hans: {
      label: '简体中文',
      lang: 'zh-Hans',
      description: 'BDS .NET插件框架',

      themeConfig: {
        nav: [
          { text: '主页', link: 'https://www.litebds.com' },
          { text: '文档', link: '/zh_Hans/README' }
        ],

        sidebar: [
          { text: '🎨 主页', base: '/zh_Hans/', link: 'README' },
          {
            text: '👍 用户指南',
            collapsed: false,
            base: '/zh_Hans/',
            items: [
              { text: '🔨 安装与使用', link: 'Usage' },
              { text: '❓ 常见问题', link: 'FAQ' },
              {
                text: '🧩 子模块',
                collapsed: false,
                base: '/zh_Hans/Submodules/',
                items: [
                  { text: '💰 LLMoney经济核心', link: 'LLMoney' },
                  { text: '🔒 权限API', link: 'PermAPI' },
                  { text: '✨ 粒子API', link: 'ParticleAPI' }
                ]
              }
            ]
          },
          {
            text: '🍔 创造者指南',
            collapsed: false,
            items: [
              {
                text: '⛳ 原生插件开发',
                link: 'https://cpp.docs.litebds.com/',
              },
              {
                text: '🎯 脚本插件开发',
                collapsed: false,
                base: '/zh_Hans/LLSEPluginDevelopment/',
                link: 'README',
                items: [
                  {
                    text: '📋 特定脚本语言开发须知（必读）',
                    link: 'LanguageSupport',
                  },
                  {
                    text: '📜 快速入门：使用JS创造你的首个脚本插件',
                    link: 'LLSEJSPlugin',
                  },
                  {
                    text: '💼 通用脚本接口 - 常用',
                    link: 'ScriptAPI/ScriptHelp',
                  },
                  {
                    text: '游戏内容接口',
                    collapsed: false,
                    base: '/zh_Hans/LLSEPluginDevelopment/GameAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '🎨 基础游戏接口',
                        link: 'Basic',
                      },
                      {
                        text: '🎯 命令系统',
                        link: 'Command',
                      },
                      {
                        text: '🏃‍♂️ 玩家对象',
                        link: 'Player',
                      },
                      {
                        text: '📦 方块对象',
                        link: 'Block',
                      },
                      {
                        text: '🎈 实体对象',
                        link: 'Entity',
                      },
                      {
                        text: '🧰 物品对象',
                        link: 'Item',
                      },
                      {
                        text: '📮 方块实体对象',
                        link: 'BlockEntity',
                      },
                      {
                        text: '✨ 粒子生成器对象',
                        link: 'Particle',
                      },
                      {
                        text: '👜 容器对象',
                        link: 'Container',
                      },
                      {
                        text: '📝 记分板',
                        link: 'ScoreBoard',
                      },
                      {
                        text: '📩 数据包接口',
                        link: 'Packet',
                      },
                      {
                        text: '📱 玩家设备信息',
                        link: 'Device',
                      },
                      {
                        text: '💻 服务端设置',
                        link: 'Server',
                      },
                      {
                        text: '🎮 游戏实用工具',
                        link: 'GameUtils',
                      },
                    ],
                  },
                  {
                    text: '事件系统',
                    collapsed: false,
                    base: '/zh_Hans/LLSEPluginDevelopment/EventAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '🔔 监听事件',
                        link: 'Listen',
                      },
                      {
                        text: '🏃‍♂️ 玩家事件列表',
                        link: 'PlayerEvents',
                      },
                      {
                        text: '🎈 实体事件列表',
                        link: 'EntityEvents',
                      },
                      {
                        text: '📦 方块事件列表',
                        link: 'BlockEvents',
                      },
                      {
                        text: '🔊 其他事件列表',
                        link: 'OtherEvents',
                      },
                      {
                        text: '💰 经济系统事件列表',
                        link: 'EconomicEvents',
                      },
                    ],
                  },
                  {
                    text: '二进制命名标签（NBT）',
                    collapsed: false,
                    base: '/zh_Hans/LLSEPluginDevelopment/NbtAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '🥽 NBT 概述与通用接口',
                        link: 'NBT',
                      },
                      {
                        text: '📋 NBT 普通数据类型',
                        link: 'NBTValue',
                      },
                      {
                        text: '📚 NBT 列表类型',
                        link: 'NBTList',
                      },
                      {
                        text: '📒 NBT 标签类型',
                        link: 'NBTCompound',
                      },
                    ],
                  },
                  {
                    text: '图形界面与表单',
                    collapsed: false,
                    base: '/zh_Hans/LLSEPluginDevelopment/GuiAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '📊 表单',
                        link: 'Form',
                      },
                      {
                        text: '📰 表单构建器',
                        link: 'FormBuilder',
                      },
                    ],
                  },
                  {
                    text: '脚本辅助接口',
                    collapsed: false,
                    base: '/zh_Hans/LLSEPluginDevelopment/ScriptAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '📅 日志系统',
                        link: 'Logger',
                      },
                      {
                        text: '💡 加载器相关接口',
                        link: 'Ll',
                      },
                      {
                        text: '🛫 国际化',
                        link: 'i18n',
                      },
                    ],
                  },
                  {
                    text: '配置文件与数据处理',
                    collapsed: false,
                    base: '/zh_Hans/LLSEPluginDevelopment/DataAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '🔨 配置文件',
                        link: 'ConfigFile',
                      },
                      {
                        text: '🔐 权限系统',
                        link: 'PermAPI',
                      },
                      {
                        text: '📦 数据库',
                        link: 'DataBase',
                      },
                      {
                        text: '💰 经济系统',
                        link: 'Economy',
                      },
                      {
                        text: '🏃‍♂️ 玩家绑定数据',
                        link: 'PlayerData',
                      },
                      {
                        text: '🧰 其他数据处理接口',
                        link: 'OtherData',
                      },
                    ],
                  },
                  {
                    text: '系统调用与网络',
                    collapsed: false,
                    base: '/zh_Hans/LLSEPluginDevelopment/SystemAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '📝 文件读写',
                        link: 'File',
                      },
                      {
                        text: '📂 文件与目录操作',
                        link: 'FileSystem',
                      },
                      {
                        text: '🌏 网络',
                        link: 'Network',
                      },
                      {
                        text: '📡 系统调用',
                        link: 'SystemCall',
                      },
                      {
                        text: '📜 获取系统信息',
                        link: 'SystemInfo',
                      },
                    ],
                  },
                  {
                    text: '本机调用',
                    collapsed: false,
                    base: '/zh_Hans/LLSEPluginDevelopment/NativeAPI/',
                    link: 'README',
                    items: [
                      {
                        text: '📚 概述',
                        link: 'Summary',
                      },
                      {
                        text: '📲 指针类型NativePointer',
                        link: 'NativePointer',
                      },
                      {
                        text: '🎚️ 函数类型NativeFunction',
                        link: 'NativeFunction',
                      },
                      {
                        text: '🛠️ 补丁工具NativePatch',
                        link: 'NativePatch',
                      },
                    ],
                  },
                ],
              },
              {
                text: '🪁 .NET插件开发（已过时）',
                collapsed: false,
                base: '/zh_Hans/DotNETPluginDevelopment/',
                link: 'README',
                items: [
                  {
                    text: '✨ 环境部署',
                    link: 'Deploy',
                  },
                  {
                    text: '💡 如何：',
                    collapsed: false,
                    base: '/zh_Hans/DotNETPluginDevelopment/HowTo/',
                    items: [
                      {
                        text: '定义插件入口',
                        link: 'PluginEntry',
                      },
                      {
                        text: '使用动态命令',
                        link: 'DynamicCommand',
                      },
                      {
                        text: '使用静态命令',
                        link: 'Static_DynamicCommand',
                      },
                      {
                        text: '使用事件',
                        link: 'UseEvent',
                      },
                      {
                        text: '构建表单',
                        link: 'BuildForm',
                      },
                      {
                        text: '使用自定义依赖库路径',
                        link: 'CustomLibraryPath',
                      },
                    ],
                  },
                  {
                    text: '🔍 API参考',
                    collapsed: false,
                    base: '/zh_Hans/DotNETPluginDevelopment/APIs/Namespace/',
                    items: [
                      {
                        text: 'LLNET',
                        link: 'LLNET/LLNET',
                      },
                      {
                        text: 'LLNET.AllowList',
                        link: 'LLNET.AllowList/LLNET.AllowList',
                      },
                      {
                        text: 'LLNET.Core',
                        link: 'LLNET.Core/LLNET.Core',
                      },
                      {
                        text: 'LLNET.DynamicCommand',
                        link: 'LLNET.DynamicCommand/LLNET.DynamicCommand',
                      },
                      {
                        text: 'LLNET.Event',
                        link: 'LLNET.Event/LLNET.Event',
                      },
                      {
                        text: 'LLNET.Form',
                        link: 'LLNET.Form/LLNET.Form',
                      },
                      {
                        text: 'LLNET.Hook',
                        link: 'LLNET.Hook/LLNET.Hook',
                      },
                      { text: 'LLNET.LL', link: 'LLNET.LL/LLNET.LL', },
                      { text: 'LLNET.Logger', link: 'LLNET.Logger/LLNET.Logger', },
                      { text: 'LLNET.PlayerInfo', link: 'LLNET.PlayerInfo/LLNET.PlayerInfo', },
                      { text: 'LLNET.RemoteCall', link: 'LLNET.RemoteCall/LLNET.RemoteCall', },
                      { text: 'LLNET.Schedule', link: 'LLNET.Schedule/LLNET.Schedule', },
                      { text: 'MC', link: 'MC/MC', },
                    ],
                  },
                ],
              },
            ],
          },
          {
            text: '🎬 开发指南',
            collapsed: false,
            base: '/zh_Hans/Maintenance/',
            link: 'README',
            items: [
              { text: '🔮 代码管理规范', link: 'Commit' },
              { text: '🚥 C++代码风格指南', link: 'StyleGuide' },
              { text: '🧩 子模块使用说明', link: 'Submodules' },
              { text: '👓 项目架构分析（待完善）', link: 'Analysis' },
              { text: '🎯 维护项目和贡献代码（待完善）', link: 'Coding' },
              { text: '💡 放在最后', link: 'Conclusion' },
            ]
          },
          {
            text: '🧿 蓝图和RFC',
            collapsed: false,
            base: '/zh_Hans/Blueprints/',
            items: [
              { text: '蓝图：LiteLoaderBDS 3', link: 'LiteLoaderBDS3' }
            ]
          },
          { text: '💦 更新日志', link: 'https://github.com/LiteLDev/LiteLoaderBDS/releases' }
        ],

        editLink: {
          pattern: 'https://github.com/LiteLDev/Documentation/edit/refactor/vitepress/docs/:path',
          text: '在GitHub上编辑此页面'
        },

        footer: {
          message: '由Vitepress提供支持',
          copyright: '© 2023 LiteLDev LGPL-3.0'
        },

        lastUpdated: {
          text: '更新于'
        }
      }
    }
  }
})
