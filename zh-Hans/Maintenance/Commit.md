# 🔮 代码管理规范

## Git代码管理

### Git版本管理控制使用原则

- 如果您是一位不拥有write权限的开发者，建议将项目fork到个人账号下进行修改
- 请从git中排除在项目生成过程中的中间文件
- 实现大型功能的时候建立独立分支并在其中完成工作
- 在新分支内时常rebase，追踪来自上游分支的修改，方便后期合并过程的进行
- 合并到上游分支前，通过pull request功能发起code review要求其他参与者共同检查
- 当一个功能分支已经合并时，请尽快清除

### 创建新功能

- 首先，我们需要基于beta分支创建一个新的分支（feature branch）

```sh
git checkout beta
git pull
git checkout -b feature/<FeatureName>
```

此时我们获得了一个基于beta创建的工作分支，接下来的工作请在此分支内完成

- 在完成工作的同时，建议经常性的与上游分支同步

```sh
git fetch origin
git rebase origin/beta
```

同步上游的过程实际上就是对冲突（conflict）的解决过程，任何冲突的解决都应在进行时尽快解决，避免大型工程中冲突过多导致合并时出现困难

- 将文件的改动添加进入git修改区内

```sh
git add <files>
```

自git2.0，all是git add的默认值

- 检查待提交修改并创建commit

```sh
git add --all        #将所有修改的文件添加到暂存区
git status           #查看修改的文件列表
git commit --verbose #查看具体修改内容
```

- 合并重复commit，修正提交信息

在进行新功能的开发过程中难免遇到问题，进行修复后会出现多个重复commit，通过使用git rebase，对commit进行合并操作（squash），有助于更好的追踪修改
通过变基操作（rebase）我们可以轻松实现此类操作

```sh
git rebase -i HEAD~5 #以当前HEAD往前5个commit，执行交互式rebase
```

> Rebase操作过后，若之前的commit已经推送到远端，可能需要`--force`参数以强制远端更新
> 具体细节操作可以参考 [Keep your branch clean guide](https://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html)

### Feature分支合并至Beta分支

使用pull request的方式，将feature分支的修改根据需要合并或原样提交至beta分支，待ci测试成功后合并进入main分支，同时，beta分支的任何合并操作，应该由1个或以上拥有write权限的成员进行code review

### Beta分支合并至Main分支

使用pull request的方式，将beta分支的修改**原样**提交至main分支，待ci测试成功后合并进入main分支

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