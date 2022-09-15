# Installation and Usage

## 🍳 Can I Use LiteLoaderBDS?

If you consider yourself to have basic computer skills, Internet skills and a simple level of everyday English, you are more than welcome and recommended to use LiteLoaderBDS.

If you encounter any problems in using it, please read this documentation and the C++ plugin development documentation carefully. Most of the problems you encounter should be able to be found in the documentation.

If any errors are reported, please read the error message carefully and try removing the plugins until all of them have been removed. If the problem persists, please raise an issue on GitHub or help us fix the problem and initiate a pull request.

The LiteLoaderBDS development team is mostly students, not full-time maintainers or customer service, and have a lot of academic pressure. Hence, please do not report any issues to us in ways other than issues. What's more, DO NOT urge us to do anything.

If you think you can accept the above instructions, you are welcome to join the LiteLoaderBDS circle and let's grow the LiteLoaderBDS ecology hand in hand!

## 💻 Install LiteLoaderBDS

### Install on Windows (Recommended)

We recommend installing LiteLoaderBDS on these platforms:

* Windows 10 21H2 or later
* Windows 11
* Windows Server 2019 or later

Follow these steps to install:

1. Download and unzip Bedrock Dedicated Server from [Minecraft Wiki](https://www.minecraft.net/en-us/download/server/bedrock).
2. Download the corresponding version of LiteLoaderBDS from [GitHub releases](https://github.com/LiteLDev/LiteLoader/releases).
3. Unzip the achieve file you downloaded in step 2, putting all files in the directory of BDS. If conflicts occurs, overwrite the files.
4. Check if the `bedrock_server.pdb` file exists. If not, please redownload Bedrock Server
5. In the directory of BDS, run `LLPeEditor.exe` and wait until the program hints to close it.
6. In the directory of BDS, run `bedrock_server_mod.exe` to launch the server. Note that you should always run `bedrock_server_mod.exe` to launch ther server. Otherwise, features provided by LiteLoaderBDS are unavailable.

### Install on Linux Distributions

### Via Scripts (Available on Ubuntu)

In the directory to put the server, run:

```sh
wget https://raw.githubusercontent.com/LiteLDev/LiteLoaderBDS/main/Scripts/install.sh
chmod +x install.sh
./install.sh
```

### Via Docker

You should have the latest version of Docker installed. Then run:

```sh
docker pull shrbox/liteloaderbds
docker create --name <container name> -v <installation directory>:/root/bedrock-server -p <port>:19132/udp -it shrbox/liteloaderbds
```

You ought to adapt the `<installation directory>` and the `<port>` to your environment.

* `<container name>` is the name of the container. You can choose any name you like meeting the requirements of Docker. If you have no idea, how about `llbds`?
* `<installation directory>` is directory to put the BDS server and the data. It's a good idea to put it in a directory that everyone can read and write.
* `<port>` is the port that players fill in when connecting to the server.

It takes more time to start up for the first time downloading BDS and LiteLoaderBDS. Please wait patiently.

Some common commands are shown below:

* Start the server: `docker start <container name>`
* Stop the server: `docker stop <container name>`
* Attach to the console: `docker attach <container name>`
* Detach from the console: Press `Ctrl` + `P` + `Q`. You should not press `Ctrl` + `C` or the server will terminate immediately.

Now that you have LiteLoaderBDS installed, how about adding some plugins?

## 🎯 Add Some Plugins

There are 2 types of plugins: Native plugins and Script plugins<!-- and .NET plugins-->.

Native plugins are written in C++, Go or Rust, which have better performance but cannot be loaded, unloaded or reloaded after the server starts.

Script plugins are written in JavaScript, Python or Lua, which can be flexibly managed and have better security but perform worse.

<!--.NET plugins are runs on the .NET developer platform(CLR) and is written in a CLS-compatible language(such as C#, Visual Basic.NET, and F#, etc.).-->

> [!WARNING]
> To ensure that most plugins work properly, in `server.properties` , set `online-mode` to `true` and `server-authoritative-movement` to `server-auth` or `server-auth-with- rewind` .

### Find Your Favorite Plugins

You can look for plugins in these websites:

* [LiteLoader Forum](https://forum.litebds.com/)
* [MineBBS (Native plugins)](https://www.minebbs.net/resources/?prefix_id=59)
* [MineBBS (Script plugins)](https://www.minebbs.net/resources/?prefix_id=67)

### Install Plugins

1. Unzip if you have got an archieve file.
2. Check the content of the plugin. The file names of LiteLoaderBDS plugins end with `.dll`, `.js` or `.lua`.
3. Place the files in the `plugins` directory. Some plugins may be distributed with other files, you should put them in the `plugins` directory at the same time.

## 🔌 Manage Plugins

You can manage the plugins with the commands listed below:

* `ll list`: list all plugins
* `ll load plugins/xxxx.js`: load an LLSE plugin
* `ll unload plugin/xxxx.js`: unload an LLSE plugin
* `ll reload plugin/xxxx.js`: reload an LLSE plugin
* `ll reload`: reload all LLSE plugins
* `ll version`: print the LiteLoaderBDS version
* `ll upgrade`: Check for LiteLoaderBDS updates

### Notice

* After unloading a plugin, the commands registered by it will NOT be totally removed, which may resulting in hinting the command not existent when players attempts to use the commands.
* If the plugin unloaded exports interfaces used by other plugins, the other plugins will be unavailable.
* DO NOT unload or reload plugins when the server has not been started or there are players in the server, or the server will face the risk to crash.
* On loading a plugin, the `onServerStarted` event and the the `onPlayerJoin` events of all players will be triggered in the plugin.

> [!WARNING]
> DO NOT load, unload or reload any plugin under production environment.

## 🎨 Manage Addons

Copy the addon whose file name ends with `.mcpack`, `.mcaddon` or `.zip` to `plugins/AddonsHelper/` and restart the server. The addons will then be automatically added to the world.

You can manage them with command `addons` in the console.

## 📡 Debug Plugins

You can type these commands to enter the corresponding debug mode:

* `jsdebug`: JavaScript debug mode
* `luadebug`: Lua debug mode

In debug mode, all texts you type will be parsed as scripts and be executed in real time, as the console of developer tools of browsers do. If any error occurs, you will see an error report.

You can type `jsdebug` / `luadebug` and enter to exit the debug mode.

## 🚅 Update LiteLoaderBDS

When a new LiteLoaderBDS or Minecraft Bedrock Edition is released, you need to update to make the server side adapt to the latest client.

> [!WARNING]
> Please note that some plugins, maps, etc. have additional requirements for the update operation, which may lead to data corruption if you follow the steps below. Please make a backup of your data.

### Update LiteLoaderBDS on Windows

To update, please follow the following steps.

1. Delete all files except `allowlist.json`, `permissions.json`, `server.properties`, `plugins`, and `worlds` from the directory where the server is located.
2. Extract all the contents of the Bedrock version of the new LiteLoaderBDS (BDS) package for Minecraft, except `allowlist.json`, `permissions.json`, `server.properties`, to the server directory. . This step should not result in an overwrite prompt.
3. Extract all the contents of the new LiteLoaderBDS package to the server directory and overwrite the old files.
4. Run `LLPeEditor.exe` and wait for the operation as prompted.

### Update LiteLoaderBDS on Linux Distributions

To update, please follow the steps below.

1. Back up `allowlist.json`, `permissions.json`, `server.properties`, `plugins`, `worlds` in the directory where the server is located.
2. Delete the server.
3. Install the new version of LiteLoaderBDS according to the installation guide.
4. Put the backup files back to the server directory and overwrite the files with the same name.