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