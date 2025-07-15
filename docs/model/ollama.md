# ollama

### ollama安装
<Linkcard url="https://ollama.com/" title="官方地址" description="https://ollama.com/"/>

### 本地部署大模型

本文以 `codegeex4` 模型为例，接口参数遵循 `openai` 规范

```shell
# 运行 codegeex4 模型，首次运行会下载模型文件
ollama run codegeex4
```

### 检查是否启动成功

```shell
# 默认端口 11434，这两个命令其中一个都可以
netstat -an | grep 11434

lsof -n -iTCP:11434 -sTCP:LISTEN
```

### 允许局域网内访问模型
**创建配置文件**
:::details 创建配置文件存放目录并写入配置文件，点我查看
```shell
mkdir -p ~/Library/LaunchAgents
cat <<EOF > ~/Library/LaunchAgents/env.ollama.host.plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
 "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>env.ollama.host</string>
  <key>ProgramArguments</key>
  <array>
    <string>launchctl</string>
    <string>setenv</string>
    <string>OLLAMA_HOST</string>
    <string>0.0.0.0</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
</dict>
</plist>
EOF
```
:::


**加载配置**
```shell
launchctl load ~/Library/LaunchAgents/env.ollama.host.plist
```

**取消此配置**
```shell
launchctl unload ~/Library/LaunchAgents/env.ollama.host.plist
launchctl unsetenv OLLAMA_HOST
```

### 本地访问
```shell
curl --location 'http://127.0.0.1:11434/v1/chat/completions' \
--header 'Content-Type: application/json' \
--data '{
    "model": "codegeex4",
    "messages": [
        {
            "role": "system",
            "content": "你是一位智能编程助手，你会为用户回答关于编程、代码、计算机方面的任何问题，并提供格式规范、可以执行、准确安全的代码，并在必要时提供详细的解释。"
        },
        {
            "role": "user",
            "content": "您是"
        }
    ],
    "stream": true
}'
```


