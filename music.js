api_version=2
(script = registerScript({
    name MusicPlayer,
    version 1.6,
    authors [natte]
})).import(Core.lib);

var FileOutputStream = Java.type(java.io.FileOutputStream);
var FileInputStream = Java.type(java.io.FileInputStream);
var URLClassLoader = Java.type(java.net.URLClassLoader);
var OUtils = Java.type(org.apache.commons.io.IOUtils);
var Channels = Java.type(java.nio.channels.Channels);
var Desktop = Java.type(java.awt.Desktop);
var Arrays = Java.type(java.util.Arrays);
var Long = Java.type(java.lang.Long);
var URL = Java.type(java.net.URL);

command = {
    commands [MusicPlayer, mp],
    subcommands {playname  url,stop,youtubequery,list,folder},
    onExecute function (args) {
        try {
            setup();
            folder = new File(LiquidBounce-1.8music);

            switch(args[1]) {
                case play {
                    if (thread != null) {
                        chat.print(§8▏ §cPlayer is already playing);
                        return;
                    }

                    name = ;

                    if ((args[2].startsWith(https)  args[2].startsWith(http)) && args[2].endsWith(.mp3)) {
                        player = new Player(new URL(args[2]).openStream()); name = args[2];
                    } else {
                        file = new File(folder, args[2].endsWith(.mp3)  args[2]  args[2] + .mp3);

                        if (!file.exists()) {
                            chat.print(§8▏ §cCouldn't find '§4§l + file.getName() + §c');
                            return;
                        }

                        player = new Player(new FileInputStream(file)); name = file.getName();
                    }

                    if (player == null) {
                        chat.print(§8▏ §cerror);
                        return;
                    }

                    thread = new Thread(new Runnable({
                        run function () {
                            player.play();
                        }
                    }));
                    thread.start();

                    chat.print(§8▏ §aPlaying '§2§l + name + §a');
                    break;
                }

                case stop {
                    if (thread != null) {
                        thread.stop(); thread = null;
                        chat.print(§8▏ §cPlayer stopped);
                    } else chat.print(§8▏ §cPlayer is not playing);
                    break;
                }

                case youtube {
                    new Thread(new Runnable({
                        run function () {
                            query = java.lang.String.join( , Arrays.copyOfRange(args, 2, args.length));

                            chat.print(§8▏ §aFinding '§2§l + query + §a');
                            response = HttpUtils.get(http167.172.173.2393000searchsingle + query.replaceAll( , %20)); json = JSON.parse(response); code = json.code; message = json.message;
        
                            if (code == 1) {
                                id = message.id; title = message.title; author = message.author;
        
                                chat.print(§8▏ §aConverting, please wait...);
                                response = HttpUtils.get(http167.172.173.2393000download + id); json = JSON.parse(response); code = json.code; message = json.message;
        
                                if (code == 1) {
                                    url = message.url;
        
                                    if (thread != null) {
                                        LiquidBounce.commandManager.executeCommands(.mp stop);
                                        return;
                                    }
        
                                    player = new Player(new URL(url).openStream()); name = author +  -  + title;
                
                                    if (player == null) {
                                        chat.print(§8▏ §cerror);
                                        return;
                                    }
                
                                    thread = new Thread(new Runnable({
                                        run function () {
                                            player.play();
                                        }
                                    }));
                                    thread.start();
        
                                    chat.print(§8▏ §aPlaying '§2§l + name + §a');
                                } else {
                                    chat.print(§8▏ §c + message);
                                }
        
                            } else {
                                chat.print(§8▏ §c + message);
                            }
                        }
                    })).start();

                    break;
                }

                case list {
                    files = folder.listFiles();
                    array = [];
                    
                    for (i in files) {
                        name = files[i].getName();
                        if (name.toLowerCase().endsWith(.mp3)) array.push(name);
                    }
                    chat.print(§8▏ §7Local songs §8(§7 + array.length + §8));
                    for (i in array) chat.print(§8▏ §8[§7 + (parseInt(i) + 1) + §8]§7  + array[i]);
                    break;
                }

                case folder {
                    openFolder(folder);
                    chat.print(§8▏ §aOpened folder);
                    break;
                }
            }
        } catch(e) {
            chat.print(§8▏ §c + e);
        }
    },
    onLoad function () {
        setup();
    },
    onUnload function () {
        if (thread != null) {
            thread.stop(); thread = null;
        }
    }
}

function setup() {
    if (!new File(LiquidBounce-1.8music).exists()) new File(LiquidBounce-1.8music).mkdir();

    if (!new File(LiquidBounce-1.8music-api.jar).exists()) {
        HttpUtils.download(httpscloud.natte.devmusic-api.jar, new File(LiquidBounce-1.8music-api.jar));
        Player = classLoader.type(javazoom.jl.player.Player);
        classLoader = new ClassLoader(LiquidBounce-1.8music-api.jar);

    }
}

function ClassLoader() {
    this._convertArguments = function(args) {
        return [].slice.call(args).map(function(path) {
            return new URL(jarfile + path + !)
        });
    }

    this.type = function (className) {
        clazz = Class.forName(className, true, this.classLoader);
        return StaticClass.forClass(clazz);
    }

    this.classLoader = new URLClassLoader(this._convertArguments(arguments));
}

var player, thread, folder;