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
