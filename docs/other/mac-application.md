# Mac应用分享

### HomeBrew

**安装**
<Linkcard url="https://brew.sh/" title="官方" description="https://brew.sh/"/>

> [!TIP]
> 以上方式可能会安装失败，国内用户可参考 -> https://gitee.com/cunkai/HomebrewCN

#### 端口转发 `socat`

**安装命令**
```shell
brew install socat
```

**确认是否安装成功**

```shell
socat -h
```

**启动转发服务**
```shell
socat TCP-LISTEN:8080,fork TCP:127.0.0.1:9090

# 后台运行 
nohup socat TCP-LISTEN:8080,fork TCP:127.0.0.1:9090
```

**停止端口转发**
```shell
# 查看对应pid，杀死进程
ps aux | grep socat

# 杀死进程
kill -9 <pid>
```

### SublimeText

**配置终端快速打开文件夹、文件**

```shell
# 建立软连接
sudo ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl

# 检查是否成功
subl --version

# 在终端中以 SublimeText 快速打开文件
subl <文件夹/文件>
```

### Visual Studio Code

**配置终端快速打开文件夹、文件**

```shell
# 建立软连接
ln -s "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code" /usr/local/bin/code

# 检查是否成功
code --version

# 在终端中以 VsCode 快速打开文件
code <文件夹/文件>
```

### iTerm2 

#### oh-my-zsh 配置

<Linkcard url="https://ohmyz.sh/" title="官方地址" description="https://ohmyz.sh/"/>

#### 主题样式

<Linkcard url="https://github.com/ohmyzsh/ohmyzsh/wiki/themes" title="oh-my-zsh 官方主题样式" description="https://github.com/ohmyzsh/ohmyzsh/wiki/themes"/>

#### 配色方案

<Linkcard url="https://github.com/mbadolato/iTerm2-Color-Schemes" title="参考仓库" description="https://github.com/mbadolato/iTerm2-Color-Schemes"/>

```shell
# 配色文件目录
cd schemes

# 加载配色文件
open *.itermcolors

# 具体的配色信息可查看
https://iterm2colorschemes.com/
```

#### 字体配置

<Linkcard url="https://github.com/powerline/fonts" title="参考仓库" description="https://github.com/powerline/fonts"/>

```shell
# Git下载仓库，也可以访问仓库下载zip，本文使用 git 的方式下
git clone https://github.com/powerline/fonts.git --depth=1

# 进入文件夹
cd fonts

# 执行安装命令，安装完成后就可以删除
./install.sh
```

#### 插件

**zsh-syntax-highlighting**

<Linkcard url="https://github.com/zsh-users/zsh-syntax-highlighting" title="高亮插件仓库" description="https://github.com/zsh-users/zsh-syntax-highlighting"/>

**zsh-completions**

<Linkcard url="https://github.com/zsh-users/zsh-completions" title="补全插件仓库" description="https://github.com/zsh-users/zsh-completions"/>

**zsh-autosuggestions**

<Linkcard url="https://github.com/zsh-users/zsh-autosuggestions" title="历史命令补全插件仓库" description="https://github.com/zsh-users/zsh-autosuggestions"/>

**Incremental completion on zsh**

<Linkcard url="https://mimosa-pudica.net/zsh-incremental.html" title="实时命令提示插件" description="https://mimosa-pudica.net/zsh-incremental.html"/>

#### 使用iTerm2连接远端服务器

查看并复制配置文件，放置指定目录：
```shell
#!/usr/bin/expect

set PORT 22
set HOST [你连接的主机名]
set USER root
set PASSWORD [密码]

spawn ssh -p $PORT $USER@$HOST
expect {
    "yes/no" {send "yes\r";exp_continue;}
    "*password:*" { send "$PASSWORD\r" }
    }
interact
```

**详细配置如图**
<p>
<img src="../public/img/mac/iTerm2.png" width="40%" height="30%" alt="最终示例图">
</p>

### ClashX
<Linkcard url="https://bucd.me/#/register?code=49v7nXMT" title="Bucd" description="推荐梯子"/>
