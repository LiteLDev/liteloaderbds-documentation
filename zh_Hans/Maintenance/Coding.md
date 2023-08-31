## 🎯 维护项目和贡献代码

由于Mojang每次更新BDS时候都会修改代码，导致部分使用钩子机制的底层API失效，因此，加载器也需要跟随版本更新不断进行维护，否则很多功能会逐渐失去效用。

由于相关维护需要较强的技术能力，这方面的社区人才一直处于较为匮乏的状态。  
因此，如果你有兴趣参与项目的维护和贡献代码，我们绝对非常欢迎

### 如果您

#### C++ 开发技术相对欠缺，但我希望对项目做出贡献

- 你可以积极为LiteLoaderBDS开发插件，这对LiteLoaderBDS的生态建设可以说是莫大的帮助
- 你可以帮助修改和优化开发文档，提出你想要的API并推送给作者，给大家一些改进的点子
- 你可以帮助宣传和推广LiteLoaderBDS，让更多的人参与到这个项目中来，也可以帮萌新们答疑解惑

#### 有一定的 C++ / 脚本开发能力，使用过 / 有兴趣学习如何使用 ScriptX 跨语言脚本引擎

- 你可以维护LiteLoaderBDS和LiteLoaderBDS脚本引擎的接口层API，修复某些问题，提出改进
- 你可以帮忙为LiteLoaderBDS和LiteLoaderBDS脚本引擎实现更多的基础设施，类似于完整的网络库、完整的JSON解析系统等等

#### 有较强的 C++ 开发能力，对底层技术有一定掌握

- 你可以帮助维护LiteLoaderBDS的 C++ API 部分，并在发现问题时提出解决方案
- 你可以帮忙使用IDA解析 pdb 符号数据库，从中发现新的可用的事件点和API函数添加到 LiteLoaderBDS 当中
- 你可以对我们的底层机制提出改进的意见，帮助我们将好的想法付诸实践

#### 底层开发大佬 / 算法竞赛大神 / 逆向大佬 / 工作经验丰富的开发者

- 你可以深度参与项目各方面开发和推进，帮助优化LiteLoaderBDS的代码和设施，对架构进行改进甚至翻新
- 你可以帮忙改进相关底层机制，提高运行效率，也可以贡献代码改进关键部分的算法
- 你可以为LiteLoaderBDS未来的发展提出你的思考和想法，为未来做个引路者

欢迎各位向LiteLoaderBDS项目和ScriptX项目做出贡献。你们是LiteLoaderBDS发展的重要支持。  
只要你愿意，开源社区的大门将永远向你敞开！

### 具体维护方法举例

按照当前的程序架构和代码排布，针对特定的一些维护需求，为大家指明方向

#### 项目开发环境配置指南

1. 首先，需要从github仓库clone LiteLoaderBDS项目到你的本地，并把分支切换到`develop`开发分支。

2. ... **TODO**

3. 为你的IDE配置编译产物自动复制：
    为了比较方便地对LL源码进行修改后调试，在LL项目的 `cmakelist` 中设置有编译产物自动复制功能。按如下方法启用：

      - 如果你使用VSCode，在LL项目所在目录下的`.vscode/settings.json`文件中添加如下新配置项：
    
        ```json
        {
            //...
            "cmake.configureArgs": [
        		"-DBDS_LOCAL_DEV_ENVIRONMENT_DIR=<本地BDS目录>"
        	]
        }
        ```
    

      - 如果你使用Clion，在项目的cmake profile中增加条目：
    
        ```
        -DBDS_LOCAL_DEV_ENVIRONMENT_DIR=<本地BDS目录>
        ```
    

      - 通过此方法，将`BDS_LOCAL_DEV_ENVIRONMENT_DIR`变量设置为你本地测试用的BDS目录（例如`C:/Users/Administrator/Desktop/BDS`）。在LL编译完成之后，最新的产物`.dll`和`.pdb`文件将被自动复制到BDS目录的对应位置覆盖，以方便开发者在修改代码后进行调试。


#### 维护
<!--
TODO
-->
