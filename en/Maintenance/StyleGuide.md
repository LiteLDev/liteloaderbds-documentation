# LiteLoaderBDS C++风格指南

> We are sorry that this document has not been translated into English yet. If interested, please give us a hand to translate it.

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

### 前置声明

尽可能避免如下的前置声明。作为替代，请使用头文件包含。
_尽管这可以提升编译速度，且更改头文件后不需要重新编译，但是依赖关系变得不明确。_

```cpp
// In a C++ source file:
class B;
void FuncInB();
extern int variable_in_b;
ABSL_DECLARE_FLAG(flag_in_b);
```

### 内联函数

一个好的经验法则是，如果一个函数超过10行，就不要内联。

另一条有用的经验法则是：内联带有循环或切换语句的函数通常是不划算的（除非在常见的情况下，循环或切换语句从未被执行过）。

重要的是要知道，函数并不总是内联的，即使它们被声明为内联；例如，虚函数和递归函数通常不内联。使虚函数内联的主要原因是把它的定义放在类中，或者是为了方便，或者是为了记录它的行为，例如，访问器和修改器。

### 包含顺序

按照以下顺序包括头文件：与 `.cpp` 文件同名的头文件，C系统头文件，C++标准库头文件（包括 `cmath` 等），第三方库（ `third-party` 开头 ）的头文件，Minecraft导出头文件，LiteLoaderBDS的头文件。每类头文件包含中间要有一行空行。请注意，如果有C++头文件替代，请不要使用C头文件（譬如 `math.h` ）。在每类头文件包含中，按照忽略大小写的字母顺序排列。

如果一个头文件被条件包含（譬如使用 `#ifdef` ），尽量放所有包含后，除非具有依赖关系。

一个项目的所有头文件包含路径都应该基于 `Header` 目录，不要使用 `.` (当前目录）或 `..`（父目录）。

## 命名

最重要的一致性规则是那些管理命名的规则。一个名字的风格立即告诉我们这个被命名的实体是什么样的东西：一个类型、一个变量、一个函数、一个常量、一个宏等等，而不需要我们去搜索这个实体的声明。我们大脑中的模式匹配引擎在很大程度上依赖于这些命名规则。

### 一般的命名规则

优化可读性，使用即使对不同团队的人来说也很清楚的名字。

使用描述对象的目的或意图的名称。不要担心节省水平空间，因为使你的代码能被新读者立即理解更为重要。尽量减少使用对你的项目以外的人来说可能不知道的缩写（特别是首字母缩写和首字母缩写）。不要通过删除一个词中的字母来进行缩写。作为一个经验法则，如果一个缩写在维基百科中被列出，它可能是可以的。一般来说，描述性应与名称的可见范围成正比。例如，在一个5行的函数中，n可能是一个很好的名字，但在一个类的范围内，它可能太模糊了。

注意，某些众所周知的缩写是可以的，比如i代表迭代变量，T代表模板参数。

在下面的命名规则中，“单词”是指任何你在英语中写的没有内部空格的东西。这包括缩略语，如首字母缩写和首字母缩写。对于用混合大小写书写的名称，其中每个词的第一个字母都是大写的（小驼峰命名法第一个词的首字母小写）。最好将缩写作为单字大写，例如，`startRpc()` 而不是 `StartRPC()` 。

模板参数应遵循其类别的命名风格：类型模板参数应遵循类型名称的规则，而非类型模板参数应遵循变量名称的规则。

### 文件名

文件名应遵循大驼峰命名法。除非十分必要（譬如需要使用专有标识符），否则不要使用 `_` 和 `-`。一般来说，专有标识符中除 `-` 外的符号，均使用 `_` 替换。

示例如下：

* ExampleClass.cpp
* ExampleClass-zh.cpp
* ExampleClassForAndroid_8_0_0.cpp

C++文件应该以 `.cpp` 结尾，头文件应该以 `.h` 结尾。在特定点上被包含的非头文件应该以 `.inc` 结尾。

不要使用LiteLoaderBDS中已经出现的文件名，即使在不同路径。不要使用任何常见编译器（包括Microsoft Visual C++、GNU C++ Compiler和Clang C++ Compiler）搜索路径中有可能出现的任何文件的文件名。

一般来说，使你的文件名非常具体。例如，使用 `HttpServerHandler.h` 而不是 `Handler.h` 。一个非常常见的情况是有一对文件，例如 `FooBar.h` 和 `foo_bar.cpp` ，定义了一个名为 `FooBar` 的类。

### 类型名称

类型名称以大写字母开始，每个新词都有一个大写字母，没有下划线，例如 `MyExcitingClass` 和 `MyExcitingEnum` 。

所有类型的名称——类、结构、类型别名、枚举和类型模板参数——都有相同的命名规则。类型名称应该以大写字母开始，每个新词都有一个大写字母。没有下划线。

示例如下：

```cpp
// Classes and structs
class UrlTable { ...
class UrlTableTester { ...
struct UrlTableProperties { ...

// Typedefs
typedef hash_map<UrlTableProperties *, std::string> PropertiesMap;

// Using aliases
using PropertiesMap = hash_map<UrlTableProperties *, std::string>;

// Enums
enum class UrlTableError { ...
```

对于事件（Event），应当加以分类，并遵循如下命名和分类规则：

* 事件的命名应当使用包含主谓的主动的简单句形式；
* 事件的类型按照事件命名的主语，分类到Block、Entity、Mob、Player、World中，对于无法分类的，统一放到Misc中。

### 变量名称

变量（包括函数参数）和数据成员的名称都是小写的，单词之间有下划线。类（但不是结构）的数据成员还带有尾部下划线。

示例如下：

```cpp
int a_local_variable;

struct ExampleStruct {
  int a_struct_data_member;
};

class ExampleClass {
 private:
  int a_class_data_member_;
};
```

### 常量名称

声明为 `constexpr` 或 `const` 的常量，其值在程序中是固定的，用前缀 `k` 命名，后面是混合大小写。在少数不能用大写字母分隔的情况下，可以用下划线作为分隔符，例如 `kDaysInAWeek` 和 `kAndroid8_0_0` 。

所有这类具有静态存储期限的常量（即静态常量和全局常来给你，详见[存储期限](http://zh.cppreference.com/w/cpp/language/storage_duration#Storage_duration)）都应该这样命名。对于其他存储类别的变量，例如局部常量，这个约定是可选的。

### 函数名称

普通函数使用小驼峰命名法；访问器和设置器可以像变量一样命名。

通常情况下，函数应该以小写字母开始，每个新词都有一个大写字母。如果没有特殊原因，第一个词应当是动词原形。

示例如下：

```cpp
addTableEntry()
deleteUrl()
openFileOrDie()
```

(同样的命名规则适用于作为API的一部分被暴露出来的类和命名空间范围的常量，这些常量旨在看起来像函数，因为它们是对象而不是函数这一事实是一个不重要的实现细节。)

访问器和设置器（get和set函数）可以像变量一样被命名。这些通常对应于实际的成员变量，但这并不是必须的。例如，`int count()` 和 `void set_count(int count)` 。

### 命名空间名称

命名空间使用snake_case命名法。顶层命名空间的名称是 `ll` 。避免嵌套的名字空间和顶级名字空间之间的冲突。
_尽量使用单个单词作为命名空间的名称。_

除顶层命名空间外，每个命名空间中的代码通常应在一个目录中，目录名与命名空间的名称一致。

请注意，`/utils/` 中的代码不应当放在 `ll` 命名空间内，而是有且**必须有**自己独立的命名空间。请不要污染全局命名空间。

请记住，反对缩写的规则一样适用于命名空间。命名空间内的代码很少需要提到命名空间的名字，所以通常没有特别需要缩写。

避免嵌套的名称空间与知名的顶级名称空间相匹配。由于名称查询规则，名称空间名称之间的碰撞可能导致令人惊讶的构建中断。特别是，不要创建任何嵌套的std命名空间。优先选择独特的项目标识符（例如 `web_search::Index` , `web_search::IndexUtil` ），而不是像 `web::Util` 这样容易发生碰撞的名字。也要避免命名空间嵌套过深。

### 枚举器名称

枚举（包括作用域和非作用域枚举）应该像常量一样命名，而不是像宏一样。也就是说，使用 `kEnumName` 而不是 `ENUM_NAME` 。

### 宏名称

一般来说，**不应该**使用宏。然而，如果它们是绝对需要的，那么它们应该用大写字母和下划线来命名。

示例如下：

```cpp
#define ROUND(x) ...
#define PI_ROUNDED 3.0
```

### 命名规则的例外情况

如果你命名的东西与现有的C或C++标识符相类似，那么你可以遵循现有的命名规则方案。

示例如下：

```cpp
double fast_pow();
typedef unsigned int uint;
class fast_map;
constexpr long long LONGLONGMAX;
```

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
