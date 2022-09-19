# 🚧 这不是一个正式页面，还在编写中
# ✨ 正确命名类型、函数、变量和枚举器

*选择不当的命名可能会误导读者并导致错误。我们怎么强调使用描述性命名的重要性都不为过。*

## 👌 一般情况

命名应为驼峰式。

例如：
- `TextFileReader`
- `isLValue()`

### 🚨 注意

- 在合理范围内选择与底层实现的语义和行为相匹配的命名。

- 避免缩写，除非它们是众所周知的。


## 📜 命名空间

命名空间应当使用小写字母，尽量使用单个单词。如果命名空间名称包含多个单词，应当使用下划线分隔。例如：

```cpp
namespace ll{
    // ...
}
namespace ll::config {
    // ...
}
namespace ll::mc_utils { // 尽量避免使用多个单词
    // ...
}

```

## 🤔 变量命名

### 🎃 一般情况

应当是名词。（因为它们代表状态）

命名应为驼峰式，并以小写字母开头

例如：
- `leader`
- `boats`


### 🚨 例外

- 全局变量
  
  应当采用与类型相同的命名约定。
  
  即大写字母开头的驼峰式命名。
  
  例如：
  - `Leader`
  - `Boats`


- 私有成员变量
  
  应当采用m开头的驼峰式命名
  
  例如：
  - `mLeader`
  - `mBoats`
  

## 😀 类型命名

包括类、结构、枚举、类型定义等应该是名词并以大写字母开头（例如 TextFileReader）。

### 🧑‍💻 枚举类型

形如 enum Foo {...} 的是枚举类型，因此它们应该遵循类型的命名约定。

- 枚举的常见用途是作为Union的鉴别器或子类的指示符。当一个枚举用于这样的事情时，它应该有一个 Kind 后缀（例如 ValueKind）。

- 枚举器（形如 `enum { Foo, Bar }`）和公共成员变量应该以大写字母开头，就像类型一样。

- 除非枚举器是在它们自己的小命名空间或类中定义的，否则枚举器应该有一个对应于枚举声明命名的前缀。
  
  例如，枚举 `ValueKind { ... }`;
  
  可能包含枚举器，如 `VK_Argument`、`VK_BasicBlock `等。只是方便常量的枚举器不需要前缀。例如：

  ```cpp
  enum {
    MaxSize = 42,
    Density = 12
  };
  ```

## 🎈 函数命名

应当是动词短语（因为它们代表动作），并且类似命令的函数应该是命令式的。命名应为驼峰式，并以小写字母开头（例如 openFile() 或 isFoo()）。

## 🚨 其他例外

- 模仿 STL 类的类可以具有 STL 的小写单词风格的成员命名，由下划线分隔（例如 `begin()`、`push_back()` 和 `empty()`）。提供多个迭代器的类应该为 `begin()` 和 `end()` 添加一个单数前缀（例如 `global_begin()` 和 `use_begin()`）。

## 示例

```cpp
class VehicleMaker {
private:
  ...
  Factory<Tire> f;            // 避免：非描述性缩写.
  Factory<Tire> mFactory;      // 更好：采用描述性的命名.
  Factory<Tire> mTireFactory;  // 更更好：描述性的命名，如果有不同的工厂类.
                              // 不同的工厂类型
};

Vehicle makeVehicle(VehicleType Type) {
  VehicleMaker m;                         // 如果作用域很小是可以接受的.
  Tire tmp1 = m.makeTire();               // 避免：tmp1没有任何描述信息.
  Light headlight = m.makeLight("head");  // 好：具有描述性.
  ...
}
```