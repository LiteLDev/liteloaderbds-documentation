# 🔍 如何：构建表单

>以下示例显示如何构建表单。使用表单能提供更直观、友好的图形化操作方式。

- 此示例具有 `3` 个部分。

1. 使用简单表单
    1. 为表单添加按钮
    2. 为表单设置回调

2. 使用自定义表单  
   1. 为表单添加控件
   2. 为表单设置回调

3. 发送表单

## 使用简单表单

>初始化一个简单表单类实例的方式如下：

C#
```cs
using System;
using LiteLoader.Form;

namespace PluginMain
{
    class Plugin
    {
        public static void OnPostInit()
        {
            SimpleForm simpleForm = new("Form Title","Form Content");
        }
    }
}
```

### 为表单添加按钮

>可以使用 `SimpleForm.Append` 方法为表单追加表单，也可直接使用 `SimpleForm.AddButton` 方法添加按钮。

C#
```cs
using System;
using LiteLoader.Form;

namespace PluginMain
{
    class Plugin
    {
        public static void OnPostInit()
        {
            SimpleForm simpleForm = new("Form Title","Form Content");

            var button1 = new Button("Button1",String.Empty,player => 
            {
                MC.Level.RuncmdEx($"kill /"{player.Name}/"");
            });

            //追加按钮
            simpleForm.Append(button1);

            //添加新按钮
            simpleForm.AddButton("Button2");
        }
    }
}
```

### 为表单设置回调

>简单表单回调原型为 `delegate void SimpleFormCallback(MC.Player,Int32)` 使用与之匹配的函数即可。

C#
```cs
using System;
using LiteLoader.Form;

namespace PluginMain
{
    class Plugin
    {
        public static void OnPostInit()
        {
            SimpleForm simpleForm = new("Form Title","Form Content");

            var button1 = new Button("Button1",String.Empty,player => 
            {
                MC.Level.RuncmdEx($"kill /"{player.Name}/"");
            });

            //追加按钮
            simpleForm.Append(button1);

            //添加新按钮
            simpleForm.AddButton("Button2");

            simpleForm.Callback = (player,id) =>
            {
                //do something...
            };
        }
    }
}
```

## 使用自定义表单

>自定义表单提供了多种控件，能够实现更为强大的功能。

C#
```cs
using System;
using LiteLoader.Form;

namespace PluginMain
{
    class Plugin
    {
        public static void OnPostInit()
        {
            CustomForm custonForm = new("Form Title","Form Content");
        }
    }
}
```

### 为表单添加控件

C#
```cs
using System;
using LiteLoader.Form;

namespace PluginMain
{
    class Plugin
    {
        public static void OnPostInit()
        {
            CustomForm custonForm = new("Form Title","Form Content");

            //添加文本框
            customForm.Append(new Label("LabelName", "LabelTitle"));

            //添加开关
            customForm.Append(new Toggle("ToggleName", "ToggleTitle"));

            //添加输入框
            customForm.Append(new Input("InputName", "InputTitle"));

            //添加下拉菜单
            customForm.Append(new Dropdown("DropdownName", "DropdownTitle", new()
            {
                "DropDown-1",
                "DropDown-2",
                "DropDown-3"
            }));

            //添加游标滑块
            customForm.Append(new Slider("SliderName", "SliderTitle", 0, 100));

            //添加步进滑块
            customForm.Append(new StepSlider("StepSlider", "TestStepSlider", new()
            {
                "StepSlider-1",
                "StepSlider-2",
                "StepSlider-3"
            }));
        }
    }
}
```

### 为表单设置回调

C#
```cs
using System;
using LiteLoader.Form;

namespace PluginMain
{
    class Plugin
    {
        public static void OnPostInit()
        {
            CustomForm custonForm = new("Form Title","Form Content");

            //添加文本框
            customForm.Append(new Label("LabelName", "LabelTitle"));

            //添加开关
            customForm.Append(new Toggle("ToggleName", "ToggleTitle"));

            //添加输入框
            customForm.Append(new Input("InputName", "InputTitle"));

            //添加下拉菜单
            customForm.Append(new Dropdown("DropdownName", "DropdownTitle", new()
            {
                "DropDown-1",
                "DropDown-2",
                "DropDown-3"
            }));

            //添加游标滑块
            customForm.Append(new Slider("SliderName", "SliderTitle", 0, 100));

            //添加步进滑块
            customForm.Append(new StepSlider("StepSlider", "TestStepSlider", new()
            {
                "StepSlider-1",
                "StepSlider-2",
                "StepSlider-3"
            }));

            customForm.Callback = (pl, val) =>
            {
                //判断是否为空（详见警告内容）
                if(val.Count == 0)
                return;

                Label label = (Label)val["LabelName"];
                Input input = (Input)val["InputName"];
                //...

                Console.WriteLine($"FormInput:{input.Value}");
                //...
            };
        }
    }
}
```

::: warning
如果玩家并没有提交表单而是选择了直接点x，那么作为参数传入的字典就不会有任何内容。请注意空字典异常。  
:::

## 发送表单

>可以配合事件或指令等将表单发送至玩家。

::: warning 性能注意事项
参见 [自定义表单底层相关](../HowItWorks/CustomForm)。
:::