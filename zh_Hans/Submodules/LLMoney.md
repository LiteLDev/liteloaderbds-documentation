# LLMoney经济核心

## 模块路径

`plugins/LLMoney.dll`

## 仓库地址

https://github.com/LiteLDev/LLMoney

## 配置文件路径

`plugins/LLMoney/money.json`
配置文件示例:
```json
{
    "language": "en-us", //语言，改为zh-cn为中文
    "def_money": 0, //默认金钱数
    "pay_tax": 0.0 //转账税率
}
```

## 数据库文件路径

`plugins/LLMoney/economy.db`

## 命令列表

| 命令 | 说明 | 权限等级 |
| --- | --- | --- |
| /money query [玩家] | 查询你自己/他人的余额 | 玩家/OP |
| /money pay <玩家> <数量> | 转账给某人 | 玩家 |
| /money set <玩家> <数量> | 设置某人的余额 | OP |
| /money add <玩家> <数量> | 添加某人的余额 | OP |
| /money reduce <玩家> <数量> | 减少某人的余额 | OP |
| /money hist | 打印流水账 | 玩家 |
| /money purge | 清除流水账 | OP |
| /money top | 余额排行 | 玩家 |
| /money_s | 带有选择器支持的命令 | 玩家 |
