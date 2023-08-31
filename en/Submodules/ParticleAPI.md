
# Particle API

> WARN: ParticleAPI is close by default, set the option "ParticleAPI" in "plugins/LiteLoader/LiteLoader.json" to $true$ for enabling.

## Address

`plugins/LiteLoader/ParticleAPI.dll`

## Github

[github.com/LiteLDev/ParticleAPI](https://github.com/LiteLDev/ParticleAPI)

## Usage

ParticleAPI provides a rich and easy-to-use particle generation interface for plugin development, which intuitive design and efficient and stable performance support developers to write better plugins.
 $js$ code to write particle effects related functions refers to[ParticleSpawner Object](../LLSEPluginDevelopment/GameAPI/Particle), here's how to use ParticleAPI in $cpp$.

Including headfile `#include <llapi/ParticleAPI.h>` is the first step to use ParticleAPI。
It provides the generation class `ParticleAPI` which is closer to the bottom layer and the further encapsulated CUI class `ParticleCUI`. The difference between the two is very small, and only the members of the CUI class are introduced here.

### CUI
| Type | Name | Illustration |
| --- | --- | --- |
| Var | displayRadius: uint | maximum visible distance |
| Var | highDetial: bool | draw type HD option |
| Var | doubleSide: bool | draw type two-side option |
| Func | spawnParticle | generate the particle |
| Func | spawnPoint | generate the point |
| Func | spawnNumber | generate the number |
| Func | drawOrientedLine | draw oriented line |
| Func | drawCuboid | draw 3D rectangle |
| Func | drawCircle | draw 2D circle |

### Demo

As the saying goes, "Books can't tell the whole story, words can't tell the meaning". I will give an example to illustrate how to.

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
