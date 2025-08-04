## docker 安装向量数据库

docker compose 安装

docker-compose.yml下载地址
https://github.com/milvus-io/milvus/releases/download/v2.5.14/milvus-standalone-docker-compose.yml

milvus 向量数据配置文件
https://raw.githubusercontent.com/milvus-io/milvus/v2.5.14/configs/milvus.yaml

开启用户认证
authorizationEnabled：true
superUsers：root  默认是root

milvus客户端：https://localhost:9091
minio客户端：https://localhost:9001




docker info | grep "Docker Root Dir"


zsh 配置

https://sysin.org/blog/linux-zsh/


分布式链路追踪
docker pull jaegertracing/all-in-one:1.71.0

docker run -d --name jaeger \
--network docker-net \
--network-alias jaeger \
-e COLLECTOR_ZIPKIN_HTTP_PORT=9411 \
-p 5775:5775/udp \
-p 6831:6831/udp \
-p 6832:6832/udp \
-p 5778:5778 \
-p 16686:16686 \
-p 14268:14268 \
-p 14250:14250 \
-p 9411:9411 \
jaegertracing/all-in-one:1.71.0


###

新版本Docker Desktop 支持模型部署

官方文档：https://docs.docker.com/ai/model-runner/#how-do-i-interact-through-the-openai-api

在模型运行器 基础上运行，默认端口 12434

指定端口
docker desktop enable model-runner --tcp=<port>

停止模型运行
docker desktop disable model-runner

暴露出来的接口
https://docs.docker.com/ai/model-runner/#what-api-endpoints-are-available

允许局域网访问模型服务，Docker Desktop不允许0.0.0.0的方式，使用三方工具完成


####

mac 端口转发

安装
brew install socat

确认是否安装成功
socat -h

启动转发服务
socat TCP-LISTEN:8080,fork TCP:127.0.0.1:9090

后台运行
nohup socat TCP-LISTEN:8080,fork TCP:127.0.0.1:9090

取消端口转发

ps aux | grep socat

查看对应pid，杀死进程

kill -9 <pid>

