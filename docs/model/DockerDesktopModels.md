# DockerDesktopModels

> [!TIP]
> 版本要求：Docker Engine or Docker Desktop (Windows) 4.41+ or Docker Desktop (MacOS) 4.40+

<LinkCard url="https://docs.docker.com/ai/model-runner/#how-do-i-interact-through-the-openai-api" title="官方文档" description="https://docs.docker.com/ai/model-runner/#how-do-i-interact-through-the-openai-api"/>

## 此文档以`Qwen3`为例

### 下载模型
```shell
docker model pull ai/qwen3:latest
```

**下载完成后 `DockerDesktop` 即可看到对应模型，点击对应的模型即可本地对话。**


### 开启模型运行器并指定端口
```shell
docker desktop enable model-runner --tcp=<port>
```

### 关闭模型运行器
```shell
docker desktop disable model-runner
```

**默认端口：12434**

### TCP 请求示例

> [!TIP]
> 调用其他模型修改参数 `model` 即可，DockerDesktop不提供配置局域网访问，即 `0.0.0.0`，
> 可通过端口代理的方式来实现
> [点我跳转：查看 socat 使用](../other/mac-application.md#端口转发-socat)


```shell
curl http://localhost:12434/engines/llama.cpp/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "ai/qwen3",
    "stream": true,
    "chat_template_kwargs": {
      "enable_thinking": false
    },
    "messages": [
      {"role": "user", "content": "一句话概括自己，你是谁"}
    ]
  }'
```