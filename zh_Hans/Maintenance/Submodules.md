# LiteLoaderBDS submodules相关说明

## 已用到submodule的目录
- `ParticleAPI`
- `PermissionAPI`
- `assets/plugins/LiteLoader/ResourcePacks/LiteLoaderBDS-CUI`

## 如何在clone时拉取所有submodules

`git clone --recursive git@github.com:LiteLDev/LiteLoaderBDS.git`

## 如何更新submodule里的内容

`cd`到子模块目录，就像平常一样，做出更改，`add`然后`commit`然后`push`  
记得在主项目`add`子模块目录以更新主项目的子模块引用

## 我可以将submodule的url改为ssh吗?

可以，只需要编辑`.git/config`内的`submodule`项的`url`部分即可  
::: warning
请勿直接更改`.gitmodules`或使用`git submodule set-url`
:::