## ✨ 环境部署

>以 **Visual Studio 2022** 和 **C#** 为例：

### 获取LiteLoader.NET

从 https://github.com/LiteLDev/LiteLoader.NET/releases 下载适用于你将用来测试插件的BDS的协议的LiteLoaderBDS版本的发行版并将其解压。

### 创建基于 .NET 7 的类库项目

启动 Visual Studio 2022。

在“开始”页上，选择“创建新项目”。

![步骤1](/assets/DotNetDeploy1.png)

在“创建新项目”页面，在搜索框中输入“类库”并选择“类库”。 然后选择“ 下一步”。

![步骤2](/assets/DotNetDeploy2.png)

::: tip
如果未看到模板， .NET 则可能缺少所需的工作负载。 在“找不到所需内容?”消息下，选择“安装更多工具和功能”链接。 Visual Studio 安装程序随即打开。 请确保已安装 .NET 桌面开发 工作负载。
:::

在“配置新项目”对话框中填写项目名称，然后，选择“下一步”。

在“其他信息”对话框中：
- 选择.NET 7 (标准期限支持) 。
- 选择“创建” 。

### 将 “LiteLoader.NET” 添加到项目引用

点击解决方案资源管理器中的“在解决方案和可用视图之间切换”，切换至“解决方案资源管理器 - 视图”，双击此项目的解决方案文件。

右键项目，在“添加”二级菜单中选择“项目引用”。

![步骤3](/assets/DotNetDeploy3.png)

在打开的引用管理器窗口右下，点击“浏览”。

找到刚刚从 LiteLDev/LiteLoader.NET/releases 下载的文件夹，在LiteLoader/下找到LiteLoader.NET.dll，点击“添加”。

至此，你已经完成了环境部署。
