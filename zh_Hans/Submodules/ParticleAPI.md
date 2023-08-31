
# 粒子API

::: tip
ParticleAPI是默认关闭的，设置文件`plugins/LiteLoader/LiteLoader.json`中的`ParticleAPI`选项为 `true` 来启用。
:::

## 模块地址

`plugins/LiteLoader/ParticleAPI.dll`

## 仓库地址

[github.com/LiteLDev/ParticleAPI](https://github.com/LiteLDev/ParticleAPI)

## 使用方法

ParticleAPI为插件开发提供了丰富易用的粒子生成接口，符合直观的设计和高效稳定的性能支持开发者写出更优秀的插件。
	脚本引擎 代码编写粒子特效相关功能请参考[ParticleSpawner 对象](../LLSEPluginDevelopment/GameAPI/Particle)，下文介绍如何在 C++ 中使用ParticleAPI。

包含头文件`#include <llapi/ParticleAPI.h>`是使用ParticleAPI的第一步。
其中提供了更接近底层的生成类`ParticleAPI`和经过进一步封装的CUI类`ParticleCUI`，两者事实差异很小，在这里只介绍CUI类的成员。

### CUI类
| 类型 | 名字 | 描述 |
| --- | --- | --- |
| 变量 | `displayRadius`: `uint` | 玩家可视粒子的最大距离 |
| 变量 | `highDetial`: `bool` | 绘制型粒子高清选项 |
| 变量 | `doubleSide`: `bool` | 绘制型粒子双面选项 |
| 函数 | `spawnParticle` | 生成指定粒子 |
| 函数 | `spawnPoint` | 生成点状粒子 |
| 函数 | `spawnNumber` | 生成数字粒子 |
| 函数 | `drawOrientedLine` | 绘制定向线段 |
| 函数 | `drawCuboid` | 绘制三维矩体 |
| 函数 | `drawCircle` | 绘制二维圆形 |

### 例子

常言道“书不尽言，言不尽意”，是言之难尽，而试之易知也。又于笔者水平限制，团辞试提挈，挂一念万漏，懈劲感尤为甚，故举一例子以其道明。

```cpp
#include <llapi/mc/Player.hpp>
#include <llapi/ScheduleAPI.h>
#include <llapi/ParticleAPI.h>
#include <llapi/EventAPI.h>

ParticleCUI* CUI;
void update(){
    CUI->spawnParticle(Vec3(6, 6, 6), "minecraft:balloon_gas_particle", 0);
}
void PluginInit() {
	Event::ServerStartedEvent::subscribe([](const Event::ServerStartedEvent& ev) {
		return Schedule::repeat(update, 1), CUI = new ParticleCUI(), true;
		});
	Event::ServerStopEvent::subscribe([](const Event::ServerStopEvent& ev) {
		return delete CUI, true;
		});
}
```
