# LLMoney Economy System

## Moudle path

`plugins/LLMoney.dll`

## Repository link

https://github.com/LiteLDev/LLEssentials

## Configuration file path

`plugins/LLMoney/money.json`
Example:
```json
{
    "language": "en-us",
    "def_money": 0, //Default money
    "pay_tax": 0.0 //Tax
}
```

## Database file path

`plugins/LLMoney/economy.db`

## Command list

| Command | Description | Permission |
| --- | --- | --- |
| /money query [player] | Query your/other players's balance | Player/OP |
| /money pay player amount | Transfer money to a player | Player |
| /money set player amount | Set player's balance | OP |
| /money add player amount | Add player's balance | OP |
| /money reduce player amount | Reduce player's balance | OP |
| /money hist | Print your running account | Player |
| /money purge | Clear your running account | OP |
| /money top | Balance ranking | Player |
| /money_s | Command with TargetSelector | Player |