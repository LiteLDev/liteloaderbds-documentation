# 🔮 代码管理规范

## 分支模型

- `main`分支是主分支，意味着最新的可用代码（包括稳定版本和beta版本），不应有任何单独的提交，只能有来自本仓库内其余分支的PR。

- `hotfix/*`是热修复分支，当`main`分支中代码出现bug时，从`main`中建立该分支进行修复，最终合并到`main`分支。

   - 对于issue提到的内容，分支名为`hotfix/issue-xxx`。

   - 对于其余内容，最好建立issue，如果不便建立，分支名为`hotfix/aaa-bbb-ccc`，其中“aaa-bbb-ccc”是内容简介。

- `adaptation/*`意味着版本适配，当BDS发布新版本后，在该分支进行适配工作。该分支应当从`main`分支中创建，最终合并到`main`分支

   - 分支名示例：`adaptation/1.19.60`。

- `develop`意味着开发新功能。合并到`main`分支。

第三方开发者发起PR的对象应当是除了`main`以外的所有分支。

请所有LL开发者遵循以上规范，需要特别注意以下几点：

- Bug修复不要在develop分支进行，而是在hotfix

- 新版本适配不要在develop分支进行，而是在adaptation

- develop中只放新功能，不放修复bug

## Commit信息

所有commit信息都使用英语，且必须遵顼以下规范。

### 基本格式

按照<https://www.conventionalcommits.org/en/v1.0.0/>执行。

示例：

```
feat: add 'comments' option
```
```
fix(deps): update dependency
```
```
docs: correct spelling of CHANGELOG
```

### 用语约定

- 提交信息应以小写字母开头
- 作用域(scope)可以省略，若有多个作用域，应使用英文逗号分隔
- 作用域使用小写字母
- 尽可能控制在50个字符以内
- 从功能角度描述提交内容，而不是代码变动，例如使用`feat: add 'comments' option`而不是`feat: update main.cpp`

类型前缀列表（参考<https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines>）：

- **build**: 影响构建系统或外部依赖项的更改（示例范围：gulp，broccoli，npm）
- **feat**: 新功能（示例范围：新的命令，新的API，依赖项更新）
- **fix**: 修复bug（示例范围：修复命令，修复API）
- **perf**: 改进性能的代码更改
- **refactor**: 既不修复bug也不添加功能的代码更改
- **style**: 不影响代码含义的更改（空格，格式，缺少分号等）
- **test**: 添加缺失的测试或更正现有测试
- **chore**: 不包含在上述类型中的更改（示例范围：.gitignore、README.md等文件的修改）

合并分支、撤回提交等操作使用GitHub自动提供的commit信息以便于追踪。

由于文档已经分离，因此不再使用`docs`类型。

### 语法规范

- 使用第一人称现在时
- 使用祈使句
- 使用主动语态
- 若可以，使用名词单数形式

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

## 依赖管理

### 原则

> 本项目中由于前期的开发过程较为随意，仓库内留下了大量的二进制文件，将逐步替换

- 不直接引入二进制依赖
- 引入大型依赖时，使用git submodule等形式管理依赖
- 对于源码量级较小的依赖，应放入对应使用项目中编译，或创建静态库
- 大型依赖请尽量保留原项目结构，小型项目请确保分类明确

以下为外部依赖结构示例
```
|-- third_party
    |-- libname
    |   |-- include
    |   |   |-- lib.h
    |   |-- src
    |   |   |-- lib.cpp
    |-- header_only_libname
    |   |-- header_only.h
```