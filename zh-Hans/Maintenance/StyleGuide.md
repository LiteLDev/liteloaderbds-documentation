# LiteLoaderBDS C++代码风格指南

## 头文件

一般来说，每个 `.cpp` 文件都应该有一个同名的的 `.h` 文件。有一些常见的例外情况，如单元测试和只包含 `main()` 函数的小型 `.cpp` 文件。

正确使用头文件可以对你的代码的可读性、大小和性能产生巨大影响。

下面的规则将引导你了解使用头文件的各种陷阱。

### 可独立编译

头文件应该是可独立编译的，以 `.h` 结尾。非头文件如果要包含在内，应以 `.inc` 结尾，并尽量少用。

所有的头文件都应该是可独立编译的。用户和重构工具不应该为了包含头文件而必须遵守特殊的条件。具体来说，一个头文件应该有头文件哨兵，并包括它所需要的所有其他头文件。

当一个头声明了内联函数或模板时，内联函数和模板也必须在头中有定义。

### 头保护

为了防止重复包含头文件，每个头文件必须包含 `#pragma once` 行。

### 按需包含

如果一个源文件或头文件提到了一个在其他地方定义的符号，该文件应该直接包括一个头文件，该头文件适当地打算提供该符号的声明或定义。

任何头文件一旦没有符号被使用，对应的包含语句应当立即删除。

禁止隐式包含。若 `foo.cpp` 使用到 `bar.h` 的符号，就必须包含 `bar.h` ，即使 `foo.h` 已经包含 `bar.h` 。

### 前置声明

尽可能避免如下的前置声明。作为替代，请使用头文件包含。尽管这可以提升编译速度，且更改头文件后不需要重新编译，但是依赖关系变得不明确。

```cpp
// In a C++ source file:
class ExampleClass;
void exampleFunction();
extern int exampleVariable;
```

### 内联函数

一个好的经验法则是，如果一个函数超过10行，就不要内联。

另一条有用的经验法则是：内联带有循环或切换语句的函数通常是不划算的（除非在常见的情况下，循环或切换语句从未被执行过）。

重要的是要知道，函数并不总是内联的，即使它们被声明为内联；例如，虚函数和递归函数通常不内联。使虚函数内联的主要原因是把它的定义放在类中，或者是为了方便，或者是为了记录它的行为，例如，访问器和修改器。

### 包含顺序

按照以下顺序包括头文件：

1. 与 `.cpp` 文件同名的头文件
2. C系统头文件
3. C++标准库头文件（包括 `cmath` 等）
4. 第三方库（ `third-party` 开头 ）的头文件
5. Minecraft导出头文件
6. LiteLoaderBDS的头文件。

每类头文件包含中间要有一行空行。请注意，如果有C++头文件替代，请不要使用C头文件（譬如使用 `cmath` 而不是 `math.h` ）。在每类头文件包含中，按照忽略大小写的字母顺序排列。

如果一个头文件被条件包含（譬如使用 `#ifdef` ），尽量放所有包含后，除非具有依赖关系。

不要使用 `./` (当前目录）或 `../`（父目录）前缀。

## 缩进

缩进使用4个空格

## 命名与声明

最重要的一致性规则是那些管理命名的规则。一个名字的风格立即告诉我们这个被命名的实体是什么样的东西：一个类型、一个变量、一个函数、一个常量、一个宏等等，而不需要我们去搜索这个实体的声明。

选择不当的命名可能会误导读者并导致错误。我们怎么强调使用描述性命名的重要性都不为过。

### 一般的命名规则

优化可读性，使用即使对不同团队的人来说也很清楚的名字。

使用描述对象的目的或意图的名称。不要担心节省空间，因为使你的代码能被新读者立即理解更为重要。尽量减少使用对你的项目以外的人来说可能不知道的缩写（特别是首字母缩写和首字母缩写）。不要通过删除一个词中的字母来进行缩写。作为一个经验法则，如果一个缩写在维基百科中被列出，它可能是可以的。一般来说，描述性应与名称的可见范围成正比。例如，在一个5行的函数中，n可能是一个很好的名字，但在一个类的范围内，它可能太模糊了。

注意，某些众所周知的缩写是可以的，比如i代表迭代变量，T代表模板参数。

在下面的命名规则中，“单词”是指任何你在英语中写的没有内部空格的东西。这包括缩略语，如首字母缩写和首字母缩写。对于用混合大小写书写的名称，其中每个词的第一个字母都是大写的（小驼峰命名法第一个词的首字母小写）。最好将缩写作为单字大写，例如，`startRpc()` 而不是 `startRPC()` 。

模板参数应遵循其类别的命名风格：类型模板参数应遵循类型名称的规则，而非类型模板参数应遵循变量名称的规则。

### 文件与目录名

目录名应同命名空间一样采用 `snake_case` 命名方式。

文件名应与类名一样采用大驼峰的命名方式

示例如下：

* example/ExampleClass.h
* example/ExampleClass.cpp
* example/i18n/I18n.h
* example/http_server/HttpServer.h

C++文件应该以 `.cpp` 结尾，头文件应该以 `.h` 或 `.hpp` 结尾。在特定点上被包含的非头文件应该以 `.inc` 结尾。

尽量不要使用重复的文件名。尽量不要使用任何包含路径中有可能出现的任何文件的文件名。

一般来说，使你的文件名非常具体。例如，使用 `HttpServerHandler.h` 而不是 `Handler.h` 。一个非常常见的情况是有一对文件，例如 `FooBar.h` 和 `FooBar.cpp` ，定义了一个名为 `FooBar` 的类。但请注意，如果路径中已经包含了信息，譬如 `http_server/Handler.h` ，那么就不需要在文件名中再次包含这些信息。

### 类型名称

类型名称采用大驼峰命名，例如 `MyExcitingClass` 和 `MyExcitingEnum` 。

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

均采用小驼峰命名法。

例外：

- 类中，公有成员采用`m`开头的大驼峰命名法，例如`mGoodMember`。

- 对于std容器相关以及Windows API相关的变量，可以依据其命名规则进行命名。

示例如下：

```cpp
int aLocalVariable;

struct ExampleStruct {
    int structDataMember;
};

class ExampleClass {

private:
    int privateMember;

public:
    int mPublicMember;

};
```

单词的顺序应当遵循英文语法。避免使用缩写，除非该缩写是众所周知且不会产生误解的。譬如应当使用`studentNumber`而不是`numStu`。

### 常量名称

一般采用`constexpr`或`const`修饰，其值在程序中是固定的，仅允许使用大写字母和下划线，例如`DAYS_IN_A_WEEK`和`ANDROID_8_0_0`。

### 函数声明

不抛出异常的函数在定义末尾加上 `noexcept`

重写了基类方法的函数加上 `override` 关键字

### 函数名称

普通函数使用小驼峰命名法。

通常情况下，函数应该以小写字母开始，每个新词都有一个大写字母。如果没有特殊原因，第一个词应当是动词原形。

示例如下：

```cpp
addTableEntry()
deleteUrl()
openFile()
```

例外：

- 对于std容器相关以及Windows API相关的函数名，可以依据其命名规则进行命名。

### 命名空间名称

命名空间使用 `snake_case` 命名法。避免嵌套的名字空间和顶级名字空间之间的冲突。_尽量使用单个单词作为命名空间的名称。_

除顶层命名空间外，每个命名空间中的代码通常应在一个目录中，目录名与命名空间的名称一致。

请记住，反对缩写的规则一样适用于命名空间。命名空间内的代码很少需要提到命名空间的名字，所以通常没有特别需要缩写。

避免嵌套的名称空间与知名的顶级名称空间相匹配。由于名称查询规则，名称空间名称之间的碰撞可能导致令人惊讶的构建中断。特别是，不要创建任何嵌套的std命名空间。优先选择独特的项目标识符（例如 `web_search::index` , `web_search::index_util` ），而不是像 `web::util` 这样容易发生碰撞的名字。也要避免命名空间嵌套过深。

### 枚举相关名称

枚举和枚举类采用大驼峰命名法，例如`ValueKind`，有特殊规则如下：

* 作为联合体的鉴别器或子类的指示符时，应该有一个 Kind 后缀，例如`ValueKind`。

* 尽可能使用枚举类而不是枚举。

* 枚举器和枚举类成员采用大驼峰命名法，例如`MaxSize`

* 若使用枚举而不是枚举类，除非枚举生效于局部作用域，否则枚举器应该有一个对应于枚举声明命名的前缀，例如：
  
  ```cpp
  enum ValueKind {
    ValueKind_ExternalClass = 0,
    ValueKind_InternalClass = 1
  };
  ```
  
* 不要使用匿名枚举，请使用constexpr替代。

### 宏名称

一般来说，**不应该**使用宏。然而，如果它们是绝对需要的，那么它们应该用大写字母和下划线来命名。

示例如下：

```cpp
#define ROUND(x) ...
#define PI_ROUNDED 3.0
```

### 其他

setter 与 getter 方法的命名规则如下：

```cpp
class Foo {
private:
    int bar;
public:
    int getBar() const { return bar; }
    void setBar(int value) { bar = value; }
};
```

## 注释

注释对程序员来说是必需品，因为它们可以帮助我们理解代码。通常情况下，简单的具有良好命名的代码不需要注释。但是，当代码变得复杂时，就需要进行注释了。

### 注释风格

文件注释、类注释和函数注释应当采用 `javadoc` 风格的 `Doxygen` 注释。短注释使用 `//` 长篇注释使用 `/* */` 。

所有注释均使用英文，注释中的代码块使用反引号包裹。

#### 文件

可以对比较复杂的文件添加文件注释，文件注释应该包含文件的简介与用途等信息。文件注释应该放在文件的开头，如

示例如下：

```cpp
/**
 * @file llapi/component/file.h
 *
 * @brief This file contains example interfaces.
 *
 */
```

### 类注释

功能非显而易见的类或结构声明都应有注释，说明它的用途。

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
 *     process(ex_unit);
 * }
 * @endcode
 */
```

### 函数注释

声明注释描述了函数的用途及用法

#### 函数声明

每一个 `API` 函数声明都应该在其前面有注释，描述该函数的作用以及如何使用它。在函数简单而明显的情况下才可以省略这些注释。函数注释应该以该函数的隐含主语来写，并且应该以动词短语开始；
例如，"Opens the file"，而不是 "Open the file"，因为完整的句子是 "This function opens the file"。一般来说，这些注释并不描述该函数如何执行其任务。相反，这应该留给函数定义中的注释。

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

> [!WARNING]
> 参数注释和返回值注释不要写类型！否则会给翻译工作者带来极大困扰。

示例如下：

```cpp
/**
 * @brief Extracts the example thing from `example_para3`.
 * 
 * @param example_para1 The example number
 * @param example_para2 The example offset
 * @param example_para3 The example string to be extracted
 * @return The example value extracted from the string
 * 
 * @par Extracts substrings matching the example rule from `example_para3` according to
 * `example_para1`, then offsetting them by `example_para2` and returning the
 * example thing.
 * @par Example:
 * @code
 * std::string example_str = "Example";
 * LL::DoExampleThing(1, 2.1, example_str);
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
int doExampleThing(int examplePara1, double examplePara2, std::string examplePara3) {
    // Some code here
}
```

### 变量注释

一般来说，变量的实际名称应该有足够的描述性，以使人们对该变量的用途有一个很好的了解。在某些情况下，需要更多的注释。

#### 类数据成员

每个类数据成员（也称为实例变量或成员变量）的目的必须明确。如果有任何不变量（特殊值、成员之间的关系、寿命要求）没有被类型和名称清楚地表达出来，它们必须被注释。然而，如果类型和名称已经足够了（例如 `int eventNumber;` ），则不需要注释。

特别是在不明显的情况下，添加注释来描述哨兵值的存在和意义，例如 `nullptr` 或 `-1` 。

对于头文件中的 `public` 数据成员，请用Doxygen文档注释。

示例如下：

```cpp
class ExampleClass {
public:
    /**
     * @brief Example data member
     */
    int mPublicExample;
  
private:
    // Used to bounds-check table accesses. -1 means
    // that we don't yet know how many entries the table has.
    int numTotalEntries;
};
```

#### 全局变量

所有的全局变量都应该有一个注释，描述它们是什么，它们的用途，以及（如果不清楚的话）为什么它们需要成为全局变量。

示例如下：

```cpp
// The total number of test cases that we run through in this regression test.
const int NUM_TEST_CASES = 6;
```

### 代码实现注释

在你的代码实现中，你应该在代码中棘手的、不明显的、有趣的或重要的部分有注释。
好的代码是不需要注释就能易于阅读的，您应该让代码更具可读性。  

#### 解释性注释

棘手的或复杂的代码块应该在它们之前有注释。  
例如，某处地方使用了某种算法，您应该对算法作出解释。

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
    calculateProduct(values, options, /*completion_callback=*/nullptr)
```

### 忌讳

不要陈述明显的东西。特别是，不要从字面上描述代码的作用，除非这些行为对一个很了解C++的读者来说是不明显的。相反，要提供更高层次的注释，描述代码为什么要这样做，或者让代码自我描述。

比起这个：

```cpp
// Find the element in the vector.  <-- Bad: obvious!
if (std::find(v.begin(), v.end(), element) != v.end()) {
    process(element);
}
```

你更应该写这个：

```cpp
// Process "element" unless it was already processed.
if (std::find(v.begin(), v.end(), element) != v.end()) {
    process(element);
}
```

### 标点符号、拼写和语法

注意标点符号、拼写和语法；写得好的评论比写得不好的评论更容易阅读。

评论应该像叙述性文字一样具有可读性，大写字母和标点符号要正确。在许多情况下，完整的句子比零碎的句子更易读。较短的注释，例如在一行代码末尾的注释，有时可以不那么正式，但你应该与你的风格一致。

虽然让代码审查员指出你在应该使用分号的时候却使用了逗号会让人感到沮丧，但源代码保持高度的清晰和可读性是非常重要的。正确的标点符号、拼写和语法有助于实现这一目标。  

请务必在西文符号后添加一个空格。

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
