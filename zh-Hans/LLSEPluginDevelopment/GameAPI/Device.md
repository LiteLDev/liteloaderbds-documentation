##  📱 设备信息对象 API

在脚本引擎中，使用「设备信息对象」来操作和获取某一个玩家使用的游戏设备的相关信息。

### 获取一个设备信息对象

#### 通过玩家获取

通过玩家对象的`.getDevice`成员函数，来获取一个玩家对应的**设备信息对象**    
详见 [玩家对象 API](LLSEPluginDevelopment/GameAPI/Player.md)      

>  注意：不要**长期保存**一个设备信息对象  
> 当设备对应的玩家退出游戏时，对应的对象将同时释放。因此，如果有长期操作某个对象的需要，请通过上述途径获取实时的设备信息对象

<br>


### 设备信息对象 - 属性

每一个设备信息对象都包含一些固定的对象属性。对于某个特定的实体对象`dv`，有以下这些属性

| 属性             | 含义                         | 类型      |
| ---------------- | ---------------------------- | --------- |
| dv.ip            | 玩家设备的IP地址             | `String`  |
| dv.avgPing       | 玩家的平均网络延迟时间（ms） | `Integer` |
| dv.avgPacketLoss | 玩家的平均网络丢包率（%）    | `Float`   |
| dv.lastPing      | 玩家的网络延迟时间（ms）     | `Integer` |
| dv.lastPacketLoss| 玩家的网络丢包率（%）        | `Float`   |
| dv.os            | 玩家设备的操作系统类型       | `String`  |
| dv.inputMode     | Player's input mode | `Integer` |
| dv.playMode     | Player's play mode | `Integer` |
| dv.serverAddress | 玩家连接的地址              | `String`  |
| dv.clientId      | 玩家客户端的识别码ID         | `String`  |

这些对象属性都是只读的，无法被修改 

其中，操作系统类型属性返回一个字符串，记录了玩家设备的操作系统。可能返回的值如下表

| dv.os返回字符串 | 玩家设备的操作系统    |
| --------------- | --------------------- |
| `Android`       | 手机谷歌Android       |
| `iOS`           | 手机苹果iOS/平板iPadOS           |
| `OSX`           | 电脑苹果macOS           |
| `Amazon`        | 平板/电视亚马逊FireOS                |
| `GearVR`        | 头显三星GearVR                |
| `Hololens`      | 头显微软HoloLens              |
| `Windows10`     | 电脑微软Windows         |
| `Win32`         | 电脑微软Win32（教育版？） |
| `TVOS`          | 机顶盒苹果tvOS                  |
| `PlayStation`   | 主机索尼PlayStation       |
| `Nintendo`      | 掌机任天堂Switch          |
| `Xbox`          | 主机微软Xbox              |
| `WindowsPhone`  | 手机微软Windows Mobile     |
| `Unknown`       | 未知系统              |

| Input mode ENUM |
| --------------- |
| `InputMode.Mouse`       |
| `InputMode.Touch`       |
| `InputMode.GamePad`       |
| `InputMode.MotionController`       |

| Play mode ENUM |
| --------------- |
| `ClientPlayMode.Normal`       |
| `ClientPlayMode.Teaser`       |
| `ClientPlayMode.Screen`       |
| `ClientPlayMode.Viewer`       |
| `ClientPlayMode.VR`       |
| `ClientPlayMode.Placement`       |
| `ClientPlayMode.LivingRoom`       |
| `ClientPlayMode.ExitLevel`       |
| `ClientPlayMode.ExitLevelLivingRoom `       |