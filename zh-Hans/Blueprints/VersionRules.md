# RFC：版本规范

由于现在的版本命名方式和分支管理方式非常不规范，特此制定本规范。本规范适用于LiteLoaderBDS 2.x，对于LiteLoaderBDS 3，请参考LiteLoaderBDS 3蓝图。

## 分支模型

![分支管理方案](../../../assets/BlueprintGitGraph.svg)

- `main`分支是主分支，意味着最新的稳定代码，不应有任何单独的提交，只能有来自本仓库内其余分支的PR。

- `hotfix/*`是热修复分支，当`main`分支中代码出现bug时，从`main`中建立该分支进行修复，最终合并到`main`分支。

   - 对于issue提到的内容，分支名为`hotfix/issue-xxx`。

   - 对于其余内容，最好建立issue，如果不便建立，分支名为`hotfix/aaa-bbb-ccc`，其中“aaa-bbb-ccc”是内容简介。

- `adaptation/*`意味着版本适配，当BDS发布新版本后，在该分支进行适配工作。该分支应当从`main`分支中创建，最终合并到`main`分支

   - 分支名示例：`adaptation/v1.19.60`。

- `develop`意味着开发新功能。合并到`main`分支。

第三方开发者发起PR的对象应当是除了`main`以外的所有分支。

请所有LL开发者遵循以上规范，需要特别注意以下几点：

- Bug修复不要在develop分支进行，而是在hotfix

- 新版本适配不要在develop分支进行，而是在adaptation

- develop中只放新功能

由于人力不足，我们不再使用beta分支，所有新版本适配、beta版本分发全部在main分支。

## 版本管理

应当严格遵循semver，版本的基本格式为`X.Y.Z[-beta.W]`

例如：

- 2.10.0-beta.1

- 2.10.0

- 2.10.2

其中，如果是beta版本，必须在W处带上以1开始的beta版本号，且Z必须为0.

每次从develop分支有任何合并后发布的版本，**必须**更新Y，即使对应的BDS版本没有更新。不应当认为LL与BDS具有版本号一一对应关系。

同时，尽量在develop分支堆积足够的更新后，再合并到main，以防出现像Chrome那样离谱的版本号。

所有新版本stable版发布前，必须发布带有beta后缀的beta版本。