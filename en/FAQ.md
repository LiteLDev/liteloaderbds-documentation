# Frequently Asked Questions

## Why Is the Server Occupying So Much RAM on My Linux Distribution?
This is the memory leakage caused by Wine, which cannot be resolved by us. If the server is running on Docker, limit the memory of the container.

## Does LiteLoaderBDS Support Different Versions of Minecraft?

Yes, but only the versions sharing an identical protocol version.

When starting the server, LiteLoaderBDS will print the protocol version (i.e. 545). You can either get it by the command `/version`.

## Does Native Plugins Support Different Versions of Minecraft?

Yes, but some errors may occur with different protocol version, if some APIs used by the plugin have changed.

## Does Non-native Plugins (JavaScript, Lua, Python, Rust or .NET Plugins) Support Different Versions of Minecraft?

Yes, except for breaking changes of LiteLoader Script Engine.

## Why Does the Server Report Error Code XXX When Loading Plugins?

- `126`: Some of the dependencies are missing. Please check if the plugin is completely installed.

- `127`: The plugin is not compatible with the current version of LiteLoaderBDS.

## Why Can't I Start the Server on Linux Distribution?

Try to remove `plugins/LiteLoader/LLAutoUpdate.dll`.

If the free memory of the server is not more than 1.2GB, LiteLoaderBDS may failed to launch.

## Why Are There So Many Incomprehensible Symbols In the Crash Log?

Download the corresponding version of `PDB.zip` to the LiteLoaderBDS version of your server from [Release](https://github.com/LiteLDev/LiteLoaderBDS/releases), and extract it to one of the following folders:
- `./`
- `./plugins/`
- `./plugins/lib`

## Why Is It Reporting "There is already a command named xxx"?

Some of the commands are duplicated, you can:

* Delete some conflicting plugins, if different plugins register an identical command;
* Report the issue to the plugin developer, if a command is registered more than once by a plugin.