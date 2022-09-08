## 🧰 物品对象 API

在LLSE中，使用「物品对象」来操作和获取某一个物品栏物品的相关信息。

### 获取一个物品对象

#### 从事件或API获取

通过注册**事件监听**函数，或者调用某些**返回物品对象**的函数，来获取到BDS给出的物品对象  
详见 [事件监听文档 - EventAPI ](LLSEPluginDevelopment/EventAPI/Listen.md)   

#### 生成新的物品对象

通过此函数，根据给出的信息生成一个新的物品对象

`mc.newItem(name,count)`  

- 参数：
  - name : `String`  
    物品的标准类型名，如`minecraft:bread`
  - count : `Integer`  
    物品堆叠数量
- 返回值：生成的物品对象
- 返回值类型：`Item`
  - 如返回值为 `Null` 则表示生成失败

#### 从现有的物品对象克隆


通过此函数，根据某个现有的物品对象克隆一个新的物品对象  
新的物品对象与旧的对象并无关联关系  
对于一个已经存在的物品对象item，有函数：

`item.clone()`  

- 返回值：生成的新物品对象
- 返回值类型：`Item`
  - 如返回值为 `Null` 则表示生成失败

#### 通过 **NBT** 生成物品对象

通过此函数，根据某个NBT生成一个新的物品对象

`mc.newItem(nbt)`  

- 参数：
  - nbt : `NbtCompound`  
    生成物品对象所使用的物品NBT
- 返回值：生成的物品对象
- 返回值类型：`Item`
  - 如返回值为 `Null` 则表示生成失败

> 注意：不要**长期保存**一个物品对象  
> 当物品对象对应的物品被销毁时，对应的物品对象将变得无效。因此，如果有长期操作某个物品的需要，请通过上述途径获取实时的物品对象

<br>


### 物品对象 - 属性

每一个物品对象都包含一些固定的对象属性。对于某个特定的物品对象`it`，有以下这些属性

| 属性     | 含义                     | 类型      |
| -------- | ------------------------ | --------- |
| it.name  | 游戏内显示的物品名称     | `String`  |
| it.type  | 物品标准类型名           | `String`  |
| it.id    | 物品的游戏内id           | `Integer` |
| it.count | 这个物品对象堆叠的个数   | `Integer` |
| it.aux   | 物品附加值（如羊毛颜色） | `Integer` |
| it.damage   | Item Current Damage | `Integer` |
| it.attackDamage   | Item Attack Damage | `Integer` |
| it.maxDamage   | Item Max Damage | `Integer` |
| it.isArmorItem   | Whether the item is armor item | `Boolean` |
| it.isBlock   | Whether the item is block | `Boolean` |
| it.isDamageableItem   | Whether the item has attack damage | `Boolean` |
| it.isDamaged   | Whether the item is damaged | `Boolean` |
| it.isEnchanted   | Whether the item is enchanted | `Boolean` |
| it.isEnchantingBook   | Whether the item is Enchanting Book | `Boolean` |
| it.isFireResistant   | Whether the item is fire resistant | `Boolean` |
| it.isFullStack   | Whether the item have full stack | `Boolean` |
| it.isGlint   | Whether the item is glint | `Boolean` |
| it.isHorseArmorItem   | Whether the item is armor item for horse | `Boolean` |
| it.isHorseArmorItem   | Whether the item is liquid clip | `Boolean` |
| it.isMusicDiscItem   | Whether the item is music disc | `Boolean` |
| it.isOffhandItem   | Whether the item can be on second hand | `Boolean` |
| it.isPotionItem   | Whether the item is potion | `Boolean` |
| it.isStackable   | Whether the item can be stackable | `Boolean` |
| it.isWearableItem   | Whether the item can wearable | `Boolean` |

这些对象属性都是只读的，无法被修改

<br>

### 物品对象 - 函数

每一个物品对象都包含一些可以执行的成员函数（成员方法）。对于某个特定的物品对象`it`，可以通过以下这些函数对这个物品进行一些操作

> 注意，在修改完玩家物品栏对应的物品之后，不要忘记使用玩家对象的成员函数`pl.refreshItems`，刷新客户端显示的玩家物品栏

#### 判断物品对象是否为空

`it.isNull()`

比如说当某个格子没有任何物品的时候，你获取到的物品对象即是空

- 返回值：这个物品对象是否为空
- 返回值类型： `Boolean`

<br>

#### 将此物品对象置为空（删除物品）

`it.setNull()`

- 返回值：是否删除成功
- 返回值类型： `Boolean`

<br>

#### 将此物品对象设置为另一个物品

`it.set(item)`

- 参数：
  - item : `Item`  
    要赋值的物品对象
- 返回值：是否赋值成功
- 返回值类型： `Boolean`

<br>

#### Damage Item

`it.setDamage(damage)`

- Parameters: 
  - damage : `Integer`  
    Damage to highlight.
- Return value: Whether the assignment is successful.
- Return value type:  `Boolean`

<br>

#### 设置物品的附加值

`it.setAux(aux)`

- 参数：
  - aux : `Integer`  
    物品附加值
- 返回值：是否设置成功
- 返回值类型： `Boolean`

<br>

#### 根据物品对象生成掉落物实体

通过此函数，根据物品对象，在指定的位置生成一个同样内容的掉落物实体

`mc.spawnItem(item,pos)`    
`mc.spawnItem(item,x,y,z,dimid)`  

- 参数：
  - item : `Item`  
    生成掉落物实体所使用的物品对象
  - pos : `IntPos `/ `FloatPos`  
    生成掉落物实体的位置的坐标对象（或者使用x, y, z, dimid来确定生成位置）
- 返回值：生成的掉落物实体对象
- 返回值类型：`Entity`
  - 如返回值为 `Null` 则表示生成失败

<br>

#### 获取物品对应的NBT对象

`it.getNbt()`

- 返回值：物品的NBT对象
- 返回值类型：`NbtCompound`

<br>

#### 写入物品对应的NBT对象

`it.setNbt(nbt)`

- 参数：
  - nbt : `NbtCompound`  
    NBT对象
- 返回值：是否成功写入
- 返回值类型：`Boolean`

关于NBT对象的更多使用，请参考 [NBT接口文档](LLSEPluginDevelopment/NbtAPI/NBT.md)

<br>

#### 设置自定义Lore

`it.setLore(names)`

- 参数：
  - names : `Array<String,String,...>`  
    要设置的Lore字符串的数组
- 返回值：是否设置成功
- 返回值类型： `Boolean`

<br>

