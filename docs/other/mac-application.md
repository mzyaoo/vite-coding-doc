# Mac应用分享

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
