# LiteLoaderBDS C++风格指南

## 头文件

一般来说，每个 `.cpp` 文件都应该有一个同名的的 `.h` 文件。有一些常见的例外情况，如单元测试和只包含 `main()` 函数的小型 `.cpp` 文件。

正确使用头文件可以对你的代码的可读性、大小和性能产生巨大影响。

下面的规则将引导你了解使用头文件的各种陷阱。

### 可独立编译

头文件应该是可独立编译的，以 `.h` 结尾。非头文件如果要包含在内，应以 `.inc` 结尾，并尽量少用。

所有的头文件都应该是可独立编译的。用户和重构工具不应该为了包含头文件而必须遵守特殊的条件。具体来说，一个头文件应该有头文件哨兵，并包括它所需要的所有其他头文件。

当一个头声明了内联函数或模板时，内联函数和模板也必须在头中有定义。

### 头保护
_防止重复包含头文件_

每个头文件必须包含 `#pragma once` 行。

### 按需包含

如果一个源文件或头文件提到了一个在其他地方定义的符号，该文件应该直接包括一个头文件，该头文件适当地打算提供该符号的声明或定义。

任何头文件一旦没有符号被使用，对应的包含语句应当立即删除。

禁止隐式包含。若 `foo.cpp` 使用到 `bar.h` 的符号，就必须包含 `bar.h` ，即使 `foo.h` 已经包含 `bar.h` 。

### 内联函数

一个好的经验法则是，如果一个函数超过10行，就不要内联。

另一条有用的经验法则是：内联带有循环或切换语句的函数通常是不划算的（除非在常见的情况下，循环或切换语句从未被执行过）。

重要的是要知道，函数并不总是内联的，即使它们被声明为内联；例如，虚函数和递归函数通常不内联。使虚函数内联的主要原因是把它的定义放在类中，或者是为了方便，或者是为了记录它的行为，例如，访问器和修改器。

### 包含顺序

按照以下顺序包括头文件：与 `.cpp` 文件同名的头文件，C系统头文件，C++标准库头文件（包括 `cmath` 等），第三方库（ `third-party` 开头 ）的头文件，Minecraft导出头文件，LiteLoaderBDS的头文件。每类头文件包含中间要有一行空行。请注意，如果有C++头文件替代，请不要使用C头文件（譬如 `math.h` ）。在每类头文件包含中，按照忽略大小写的字母顺序排列。

如果一个头文件被条件包含（譬如使用 `#ifdef` ），尽量放所有包含后，除非具有依赖关系。

对于需要暴露的头文件，应当使用相对路径包含，而不是使用 `#include <...>` 。
对于需要私有的头文件，不限制使用相对路径，但是应当使用 `#include "..."` 。

对于包含头文件，应当使用 `#include <...>` 。

## ✨ 正确命名类型、函数、变量和枚举器

*选择不当的命名可能会误导读者并导致错误。我们怎么强调使用描述性命名的重要性都不为过。*

## 👌 一般情况

命名应为驼峰式。

例如：
- `TextFileReader`
- `isLValue()`

### 🚨 注意

- 在合理范围内选择与底层实现的语义和行为相匹配的命名。

- 避免缩写，除非它们是众所周知的。


## 宏名称

一般来说，**不应该**使用宏。然而，如果它们是绝对需要的，那么它们应该用大写字母和下划线来命名。

示例如下：

```cpp
#define ROUND(x) ...
#define PI_ROUNDED 3.0
```


## 📜 命名空间

命名空间使用 snake_case 命名法。顶层命名空间的名称是 `ll` 。避免嵌套的名字空间和顶级名字空间之间的冲突。
_尽量使用单个单词作为命名空间的名称。_

除顶层命名空间外，每个命名空间中的代码通常应在一个目录中，目录名与命名空间的名称一致。

请注意，`/utils/` 中的代码不应当放在 `ll` 命名空间内，而是有且**必须有**自己独立的命名空间。请不要污染全局命名空间。

请记住，反对缩写的规则一样适用于命名空间。命名空间内的代码很少需要提到命名空间的名字，所以通常没有特别需要缩写。

避免嵌套的名称空间与知名的顶级名称空间相匹配。由于名称查询规则，名称空间名称之间的碰撞可能导致令人惊讶的构建中断。特别是，不要创建任何嵌套的std命名空间。优先选择独特的项目标识符（例如 `web_search::Index` , `web_search::IndexUtil` ），而不是像 `web::Util` 这样容易发生碰撞的名字。也要避免命名空间嵌套过深。


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


- 常量命名 (局部除外)

  声明为 `constexpr` 或 `const` 的常量，其值在程序中是固定的，使用全大写，用下划线作为分隔符，例如 `DAYS_IN_A_WEEK` 和 `ANDROID_8_0_0` 。


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

## 文件名

文件名应遵循大驼峰命名法。除非十分必要（譬如需要使用专有标识符），否则不要使用 `_` 和 `-`。一般来说，专有标识符中除 `-` 外的符号，均使用 `_` 替换。

示例如下：

* ExampleClass.cpp
* ExampleClass-zh.cpp
* ExampleClassForAndroid_8_0_0.cpp

C++文件应该以 `.cpp` 结尾，头文件应该以 `.h` 结尾。在特定点上被包含的非头文件应该以 `.inc` 结尾。

不要使用LiteLoaderBDS中已经出现的文件名，即使在不同路径。不要使用任何常见编译器（包括Microsoft Visual C++、GNU C++ Compiler和Clang C++ Compiler）搜索路径中有可能出现的任何文件的文件名。

一般来说，使你的文件名非常具体。例如，使用 `HttpServerHandler.h` 而不是 `Handler.h` 。一个非常常见的情况是有一对文件，例如 `FooBar.h` 和 `foo_bar.cpp` ，定义了一个名为 `FooBar` 的类。

## 注释

&emsp;&emsp;注释对于保持我们代码的可读性是绝对重要的。下面的规则描述了你应该注释什么，在哪里注释。但请记住：虽然注释非常重要，但最好的代码是自我记录的。给类型和变量起一个合理的名字比使用晦涩的名字要好得多，因为你必须通过注释来解释。

&emsp;&emsp;在写注释的时候，要为你的听众写：下一个需要理解你的代码的贡献者。慷慨一点--下一个人可能就是你!

### 注释风格

&emsp;&emsp;文件注释、类注释和函数注释应当采用Javadoc风格的Doxygen注释，详见下文；单行注释和行尾注释应当采用 `//` 风格；函数参数注释应当采用 `/* */` 风格。

&emsp;&emsp;所有注释均使用英文，翻译使用Crowdin。

### 文件注释

&emsp;&emsp;每个完全由LiteLDev及其它LiteLoaderBDS贡献者编写的文件都以许可证模板开始，但 `/LiteLoader/Header/MC/` 内所有文件和所有第三方代码都不应当加上LiteLoaderBDS的许可证模板。

&emsp;&emsp;文件注释描述了一个文件的内容。如果一个文件只声明、实现或测试了一个抽象概念，而这个抽象概念在声明的时候就有注释记录，那么就不需要文件注释了。所有其他文件必须有文件注释。

#### 法律声明和作者行

&emsp;&emsp;每个完全由LiteLDev及其它LiteLoaderBDS贡献者编写的文件都应该包含许可证模板。LiteLoaderBDS采用LGPL-3.0许可证，请参考本项目的 `/LICENSE` 文件。

&emsp;&emsp;如果您希望集成第三方代码或其修改版本，请确保其具备许可证且其许可证分发条例不与LGPL-3.0有任何冲突，并遵守LGPL-3.0及该代码的许可证的要求进行修改和注释。

#### 文件内容

&emsp;&emsp;如果一个 `.h` 文件声明了多个抽象，文件级的注释应该广泛地描述文件的内容，以及这些抽象是如何联系起来的。一句或两句的文件级注释可能就足够了。关于单个抽象的详细文档属于这些抽象，而不是在文件级别。

&emsp;&emsp;在 `.h` 和 `.cpp` 中不要有重复的文件注释。重复的注释会导致分歧。请优先将注释写在 `.h` 中。

示例如下：

```cpp
/**
 * @file ExampleDirectory/ExampleComponent.h
 *
 * @brief This file contains example interfaces.
 *
 */
```

### 类注释

每一个非显而易见的类或结构声明都应该有一个附带的注释，说明它的用途以及应该如何使用。

类的注释应该为读者提供足够的信息，让他们知道如何和何时使用该类，以及为正确使用该类所需的任何额外考虑。

类的注释通常是一个很好的地方，可以用一个小的例子代码片断来演示类的简单和重点用法。

当充分分离时（例如 `.h` 和 `.cpp` 文件），描述类的使用的注释应该和它的接口定义放在一起；关于类的操作和实现的注释应该伴随着类的方法的实现。

示例如下：

```cpp
/**
 * @brief The ExampleClass class does example jobs.
 *
 * @par Example:
 * @code
 * ExampleClass ex("example", 114514);
 * ex.doExampleThings();
 * for (auto& ex_unit : ex.getExampleList()) {
 *   process(ex_unit);
 * }
 * @endcode
 */
```

### 函数注释

声明注释描述了函数的使用（当它不明显时）；函数定义处的注释描述了操作。

#### 函数声明

几乎每一个函数声明都应该在其前面有注释，描述该函数的作用以及如何使用它。只有在函数简单而明显的情况下才可以省略这些注释（例如，对类的明显属性的简单访问器）。在 `.cpp` 文件中声明的私有方法和函数也不例外。函数注释应该以该函数的隐含主语来写，并且应该以动词短语开始；例如，"Opens the file"，而不是 "Open the file"。一般来说，这些注释并不描述该函数如何执行其任务。相反，这应该留给函数定义中的注释。

注释应当分为两个部分，第一部分是对函数行为的一句话描述，并应该写在 `@brief` 后；第二部分是对函数的详细注释，应包含一句话描述的相近内容，并写在注释的最后。

在函数声明处的详细注释中要提到的事情类型。

* 输入和输出是什么。如果函数的参数名是以反引号的形式提供的，那么代码索引工具可能会更好地呈现文档。

* 对于类成员函数：对象在方法调用的持续时间之外是否还记得引用或指针参数。这对于构造函数的指针/引用参数来说是很常见的。

* 对于每个指针参数，是否允许为空，如果为空会怎样。

* 对于每个输出或输入/输出参数，该参数所处的任何状态会发生什么。(例如，该状态是被追加还是被覆盖？）

* 如果一个函数的使用方式有任何性能上的影响。

然而，不要不必要地啰嗦，也不要说得太简短。

当重写函数（使用 `override` ）时，应着重于重写本身的细节，而不是重复重写函数的注释。在许多这种情况下，覆盖不需要额外的文档，因此不需要注释。

在注释构造函数和析构函数时，请记住，阅读你的代码的人知道构造函数和析构函数的用途，所以只说 "销毁此对象 "这样的话的注释是没有用的。记录下构造函数对它们的参数做了什么（例如，如果它们取得了指针的所有权），以及析构函数做了什么清理工作。如果这很微不足道，就跳过这个注释。析构函数没有头注释是很常见的。

示例如下：

```cpp
/**
 * @brief Extracts the example thing from `example_para3`.
 * 
 * @param example_para1 The example number
 * @param example_para2 The example offset
 * @param example_para3 The example string to be extracted
 * @return int The example value extracted from the string
 * 
 * @par Extracts substrings matching the example rule from `example_para3` according to
 * `example_para1`, then offsetting them by `example_para2` and returning the
 * example thing.
 * @par Example:
 * @code
 * std::string example_str = "Example";
 * LL::doExampleThing(1, 2.1, example_str);
 * @endcode
 * @note This function should not be called globally.
 * @warning This function is deprecated. Please use `LL::doExampleThingEx()` instead.
 */
int doExampleThing(int example_para1, double example_para2, std::string example_para3);
```

#### 函数定义

如果一个函数的工作方式有什么棘手的地方，函数定义应该有一个解释性的注释。例如，在定义注释中，你可以描述你所使用的任何编码技巧，概述你所经历的步骤，或者解释你为什么选择以你的方式实现该函数，而不是使用可行的替代方法。例如，你可以提到为什么在函数的前半部分必须获得一个锁，而后半部分却不需要它。

注意，你不应该重复函数声明中给出的注释。简要地复述一下该函数的作用是可以的，但注释的重点应该是它是如何做到的。

由于这里的内容并不显示在文档中，所以不需要i18n.

示例如下：

```cpp
/**
 * Use KMP algorithm.
 * First do something. Then do something.
 * Note that the `example_para3` cannot be empty. Otherwise, the function may return a
 * unpredictable value.
 */
int doExampleThing(int example_para1, double example_para2, std::string example_para3) {
  // Some code here
}
```

### 变量注释

一般来说，变量的实际名称应该有足够的描述性，以使人们对该变量的用途有一个很好的了解。在某些情况下，需要更多的注释。

#### 类数据成员

每个类数据成员（也称为实例变量或成员变量）的目的必须明确。如果有任何不变量（特殊值、成员之间的关系、寿命要求）没有被类型和名称清楚地表达出来，它们必须被注释。然而，如果类型和名称已经足够了（例如 `int num_events_;` ），则不需要注释。

特别是在不明显的情况下，添加注释来描述哨兵值的存在和意义，例如 `nullptr` 或 `-1` 。

对于头文件中的 `public` 数据成员，请用Doxygen文档注释。

示例如下：

```cpp
class ExampleClass {
 public:
  /**
   * @brief Example data member
   */
  int public_example;
  
 private:
  // Used to bounds-check table accesses. -1 means
  // that we don't yet know how many entries the table has.
  int num_total_entries_;
};
```

#### 全局变量

所有的全局变量都应该有一个注释，描述它们是什么，它们的用途，以及（如果不清楚的话）为什么它们需要成为全局变量。

示例如下：

```cpp
// The total number of test cases that we run through in this regression test.
const int kNumTestCases = 6;
```

### 代码实现注释

在你的代码实现中，你应该在代码中棘手的、不明显的、有趣的或重要的部分有注释。

#### 解释性注释

棘手的或复杂的代码块应该在它们之前有注释。

### 函数参数注释

当一个函数参数的含义不明显时，可以考虑以下的补救措施之一。

* 如果参数是一个字面常数，而同一个常数在多个函数调用中使用，并默认它们是相同的，那么你应该使用一个命名的常数来明确这个约束，并保证它成立。
* 考虑改变函数签名，用一个枚举参数取代一个 `bool` 参数。这将使参数值自我描述。
* 对于有多个配置选项的函数，考虑定义一个单一的类或结构来保存所有的选项，并传递一个实例。这种方法有几个优点。选项在调用的地方是以名称来引用的，这就明确了它们的含义。它还减少了函数参数的数量，这使得函数调用更容易阅读和编写。作为一个额外的好处，当你添加另一个选项时，你不必改变调用站点。
* 用命名的变量代替大型或复杂的嵌套表达式。
* 作为**最后的**手段，使用注释来澄清调用部位的参数含义。

示例如下：

```cpp
const int product =
    CalculateProduct(values, options, /*completion_callback=*/nullptr)
```

### 忌讳

不要陈述明显的东西。特别是，不要从字面上描述代码的作用，除非这些行为对一个很了解C++的读者来说是不明显的。相反，要提供更高层次的注释，描述代码为什么要这样做，或者让代码自我描述。

比起这个：

```cpp
// Find the element in the vector.  <-- Bad: obvious!
if (std::find(v.begin(), v.end(), element) != v.end()) {
  Process(element);
}
```

你更应该写这个：

```cpp
// Process "element" unless it was already processed.
if (std::find(v.begin(), v.end(), element) != v.end()) {
  Process(element);
}
```

### 标点符号、拼写和语法

注意标点符号、拼写和语法；写得好的评论比写得不好的评论更容易阅读。

评论应该像叙述性文字一样具有可读性，大写字母和标点符号要正确。在许多情况下，完整的句子比零碎的句子更易读。较短的注释，例如在一行代码末尾的注释，有时可以不那么正式，但你应该与你的风格一致。

虽然让代码审查员指出你在应该使用分号的时候却使用了逗号会让人感到沮丧，但源代码保持高度的清晰和可读性是非常重要的。正确的标点符号、拼写和语法有助于实现这一目标。

### TODO注释

对于临时性的、短期的解决方案，或足够好但不完美的代码，使用TODO注释。

TODO应该包括 `@todo`，后面是名字、e-mail地址、Issue ID或者其他具有关于TODO所引用的问题的最佳背景的人或问题的标识。主要目的是为了有一个一致的TODO，可以通过搜索来了解如何根据要求获得更多的细节。TODO并不是一个承诺，即被引用的人将解决这个问题。因此，当你创建一个有名字的TODO时，几乎都是你的名字被给出。

```cpp
/**
 * @todo (kl@gmail.com) Use a "*" here for concatenation operator.
 * @todo (Zeke) Change this to use relations.
 * @todo (#12345) Remove the "Last visitors" feature.
 */
```

如果你的TODO的形式是 "在未来的某一天做一些事情"，请确保你包括一个非常具体的日期（"Fix before Jan 1, 2032"）或一个非常具体的事件（"Remove this code when Mojang releases Minecraft BE 2.0"）。
