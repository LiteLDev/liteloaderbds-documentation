# Installation and use

## 🍳 Can I use it?

If you consider yourself to have basic computer skills, Internet usage and a simple level of everyday English, you are more than welcome and recommended to use LiteLoaderBDS.

If you encounter any problems in using LiteLoaderBDS, please read this document and the C++ plugin development documentation carefully. Most of the problems you encounter should be found in the documentation. If any errors are reported, please read the error message carefully and try to remove the plugins until all of them are removed. If the problem persists, please raise an issue on GitHub or help us fix the problem and initiate a pull request.

The LiteLoaderBDS development team is mostly students, not full-time maintainers or customer service, and have a lot of academic pressure, so please do not report any issues to us in ways other than issues. Also, please do not rush us to do anything.

If you think you can accept the above instructions, you are welcome to join the LiteLoaderBDS circle and let's work together to grow the LiteLoaderBDS ecology!

## 💻 Install LiteLoaderBDS

### Installing on Windows

We recommend installing on the following platforms, for other versions of Windows, we do not guarantee compatibility.

* Windows Server 2019 or later
* Windows 11
* Windows 10 21H2 or later

#### Installation via LipUI

LipUI brings an unprecedented, elegant and clean installation experience to LiteLoaderBDS users. We recommend all users who lack command line knowledge to use LipUI to install LiteLoaderBDS.

First you need to install Lip, please refer to the [Lip documentation](https://lip.docs.litebds.com). Then, download [LipUI](https://github.com/LiteLDev/LipUI/releases/latest) and run it.

First, you need to specify the working path, which is the directory where the BDS and LiteLoaderBDS need to be placed. If you don't know what to choose, feel free to create a new folder and select it.

![LipUI Main Window](../assets/img/lipui_main_window.png)

Then, go to the package marketplace and select the package you need to install. In order to run LiteLoaderBDS, you need to install BDS and LiteLoaderBDS

![LipUI Registry](../assets/img/lipui_registry.png)

There are also various plugins in the package marketplace that you can install according to your needs. For example, you can install AntiToolbox to prevent players from using Toolbox, LLAntiCheat to prevent players from using plugins, and LLEssentials to add online basics to the server.

Translated with www.DeepL.com/Translator (free version)

#### Installation via Lip

We recommend using [Lip](https://lip.docs.litebds.com) to install LiteLoaderBDS. You need to install Lip first, please refer to the [Lip documentation](https://lip.docs.litebds.com). If Lip is already installed, please follow the steps below to install LiteLoaderBDS:

For LiteLoaderBDS 2.10.0-beta.1 and earlier, there is no BDS automatic installation mechanism, you can run the following command to install BDS. Please note the version correspondence.

```shell
lip install bds@1.19.61
```

1. Run the following command in the BDS directory.

    ```shell
    lip install ll
    ```

2. For LiteLoaderBDS 2.9.3 and earlier, there is no post-installation script provided, so you need to run ``LLPeEditor.exe`` in the BDS directory and wait for the program to prompt to close to complete the post-installation task.

3. Run `bedrock_server_mod.exe` in the BDS directory to start the server. Please note that you should always run `bedrock_server_mod.exe` to start the server.

If you wish to install another version of LiteLoaderBDS, you can run a command similar to the following.

```shell
lip install ll@2.9.2
```

#### Manual installation

If you do not want to use Lip, or if you want to do some advanced operations, you can install LiteLoaderBDS manually. follow these steps to install it:

1. Download the corresponding version of LiteLoaderBDS from <https://github.com/LiteLDev/LiteLoader/releases>. Most of assets are components of LiteLoaderBDS, so you need to download the `LiteLoaderBDS-full.zip` file.

2. Unzip the downloaded file into the BDS directory.

3. (Optional) If you want to use LLMoney, which is a prerequisite of many plugins, download it from <https://github.com/LiteLDev/LLMoney/releases/latest> and put the `LLMoney.dll` file to `plugins/`.

4. (Optional) If you want to use LLPermission, which is a prerequisite of some plugins, download `LLPermission.zip` and put everything in it to `plugins/LiteLoader`.

5. (Optinoal) If you want to use LLParticle, which is a prerequisite of some plugins, download `LLParticle.zip` and put everything in it to `plugins/LiteLoader`.

6. Run `LLPeEditor.exe` in the BDS directory. 4.

7. Run `bedrock_server_mod.exe` in the BDS directory to start the server.

### Installing on a Linux distribution

We do not recommend running LiteLoaderBDS on Linux distributions because of serious performance issues when Bedrock Dedicated Server (1.19+) is running on Wine. If you still want to run LiteLoaderBDS on Linux, you can try the following method. This method was tested and passed on Ubuntu 20.04. For other Linux distributions, you may need to fix the problem yourself.

### Via script (available on Ubuntu)

In the directory where you want to install the server, run.

```sh
wget https://raw.githubusercontent.com/LiteLDev/LiteLoaderBDS/main/scripts/install.sh && sh install.sh
```

## 🚅 Update LiteLoaderBDS

When a new Minecraft bedrock version is released, you need to update to make the server side adapt to the latest client.

> [!WARNING]
> Please note that some plugins, maps, etc. have additional requirements for the update operation, which may result in data corruption if you follow the steps below. Please do your data backup work.

### Updating BDS on Windows

When updating, please follow the following steps.

1. Delete all files except `allowlist.json`, `permissions.json`, `server.properties`, `plugins` and `worlds` from the directory where the server is located.
2. Extract all the contents of the Bedrock version of the new LiteLoaderBDS (BDS) package for Minecraft, except `allowlist.json`, `permissions.json` and `server.properties`, to the server directory. . This step should not result in an overwrite prompt.
3. Install the new LiteLoaderBDS. 4.
4. Put the backup files back to the server directory and overwrite the files with the same name.

### Update LiteLoaderBDS on Windows

If BDS is not updated, but LiteLoaderBDS is, you can use Lip to do the update.

In the BDS directory run.

```shell
lip install --upgrade ll
```

If you wish to update to a specific version, you can use the following command.

```shell
lip install --upgrade ll@2.9.2
```

If you wish to roll back to a specific version, you can use the following command.

```shell
lip install --force-reinstall ll@2.9.2
```

If you do not wish to use Lip, you can update LiteLoaderBDS manually by following the steps in [Updating BDS on Windows](#Update BDS on Windows).

Translated with www.DeepL.com/Translator (free version)

### Updating BDS on Linux

To update, please follow these steps.

1. Back up `allowlist.json`, `permissions.json`, `server.properties`, `plugins`, `worlds` in the directory where the server is located.
2. Delete the server. 3.
3. Install the new version of LiteLoaderBDS. 4.
4. Put the backup file back to the server directory and overwrite the file with the same name.

If BDS is not updated, but LiteLoaderBDS is updated, you must also follow the above steps.

## 🎯 Installing plug-ins

There are two types of plugins: native plugins and scripted plugins. Native plugins are compiled native plugins with better performance, but they cannot be re-enabled or disabled after the server is started. Scripted plugins are written in JavaScript or Lua and can be managed flexibly with better security, but have poorer performance.

> [!WARNING]
> To ensure that most plugins work properly, set `online-mode` to `true` in `server.properties` and `server-authoritative-movement` to `server-auth` or `server-auth-with- rewind`.

### Find your favorite plugins

You can look for plugins on these sites.

* [Official Lip Registry](https://registry.litebds.com)(Recommended)
* [LiteLoaderBDS Forum](https://www.litebds.com/)
* [MineBBS (native plugin)](https://www.minebbs.net/resources/?prefix_id=59)
* [MineBBS (Scripting Plugin)](https://www.minebbs.net/resources/?prefix_id=67)

### Installation via Lip

If the plugin author provides a Lip compliant distribution repository or distributes the plugin as a Tooth package (with the suffix `.tth`), we recommend using [Lip](https://lip.docs.litebds.com) to install the plugin, because Lip can handle dependencies automatically, making it easier to install, upgrade and uninstall the plugin.

You need to install Lip first, please refer to the [Lip documentation](https://lip.docs.litebds.com).

If you need to add a plugin from a distribution repository, use a command similar to the following to install it.

```shell
lip install example.com/exampleuser/exampleplugin
```

If you have already obtained the Tooth package file, install it with a command similar to the following.

```shell
lip install myplugin.tth
```

Lip also provides support for installing Tooth package file URLs, such as

```shell
lip install https://example.com/myplugin.tth
```

You can run a command like the following to remove the plugin.

```shell
lip uninstall example.com/exampleuser/exampleplugin
```

If the plugin has been submitted to Lip registry, you can use the following command to install it.

```shell
lip install llanticheat
```

If you need to remove the plugin but don't know the Tooth path of the plugin, you can run the following command to query all installed Tooth packages.

```shell
lip list
```

If you are not sure if a Tooth package is the plugin you need to remove, you can run a command like the following to see the plugin details.

```shell
lip show example.com/exampleuser/exampleplugin
```

### Manual installation

If you do not want to use Lip, or if the plugin does not provide Lip support for distribution, you can install the plugin manually. However, installing the plugin manually requires you to handle the dependencies yourself, which may cause the plugin to not work properly.

If the plug-in provides an installation guide, please follow it. If not, put all the contents of the plugin into the `plugins` folder.

If you need to remove the plugin, simply remove the file you put in when you added the plugin.

## 🔌 Managing plugins

You can manage these plugins with the following listed commands.

* `ll list`: list plugins
* `ll load plugins/xxx.js`: load a script plugin
* `ll unload plugin/xxx.js`: unload a script plugin
* `ll reload plugin/xxx.js`: reload a script plugin
* `ll reload`: reload all script plugins
* `ll version`: print LiteLoaderBDS version
* `ll upgrade`: check for updates to LiteLoaderBDS

### Cautions

* After uninstalling a plugin, the command it was registered with will not be completely removed, which may cause the player to be prompted that the command does not exist when trying to use it.
* If the interface exported by the uninstalled plugin is used by other plugins, the other plugins will not work.
* Do not uninstall or reload plugins when the server is not yet started or when there are players in the server, or the server will be at risk of crashing.
* When a plugin is loaded, the `onServerStarted` event and the `onPlayerJoin` event for all players will be fired in that plugin.

> [!WARNING]
> Do not load, unload, or reload any plugins in a production environment.

## 🎨 Installing add-on packages

Copy addon packages with filenames ending in `.mcpack`, `.mcaddon` or `.zip` to `plugins/AddonsHelper/` and restart the server. These addon packages will then be automatically added to the world.

You can manage them in the console with the `addons` command.

Translated with www.DeepL.com/Translator (free version)