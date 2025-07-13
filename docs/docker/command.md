# Docker常用命令
### 搜索镜像
```shell
# 也可通过官方地址 https://hub.docker.com/ 来进行搜索镜像
docker search 镜像名称
```

### 下载镜像
```shell
docker pull 镜像名称:版本号
```

### 查看Docker镜像相关命令
```shell
# 查看Docker中运行的容器
docker ps

# 查看Docker所有容器
docker ps -a

# 查看Docker所有镜像
docker images

# 删除Docker镜像
docker rmi 镜像ID

# 删除容器
docker rm 容器ID/容器名称
```

### 创建并启动一个新的容器
```shell
docker run -d \ # 后台运行容器
  --name 设置容器名 \
  --restart 容器异常退出后自动重启 \
  --network 自定义docker网络名 \
  --network-alias 网络别名 \
  -p 映射端口 \
  -e 环境变量 \
  -v 宿主机文件路径:容器内部路径 \
  -w /app \    
  IMAGE \
  COMMAND 
```

### 打包 Docker 镜像并指定系统架构
```shell
docker buildx build --platform linux/amd64 -t  {service_name}:{tag} .
```

### 查看 Docker 镜像/容器详细信息
```shell
docker inspect <镜像id> / <容器id>
```

### 清除构建缓存（buildx 构建用）
```shell
docker builder prune --all
```

### 监听 docker 容器日志
```shell
# 监听容器日志
docker logs -f <容器名/容器ID>

# 指定最近行数
docker logs -f --tail 100 <容器名/容器ID>
```

### 修改容器名称
```shell
docker rename 原名称 新名称
```

### Docker 修改镜像名称
```shell
docker tag 原镜像名[:原标签] 新镜像名[:新标签]
```
### 本地镜像打包
```shell
docker save -o <tar包名称> <镜像名:标签>
```

### 导入镜像
```shell
docker load -i <镜像tar包路径>
```

### 自定义Docker网络
```shell
docker network create <name>
```
> [!Warning]
> 1、在`Linux`服务器中，如需容器直接使用宿主机的网络栈（例如用于高性能或绕过端口映射），可以使用`--network host`模式。\
> 2、Mac中使用docker部署服务，官方不支持使用`--network host`，则必须要使用自定义网络的形式来实现。其他容器在请求时，则使用`容器名/容器ID/容器网络别名：端口`，来进行请求.

### 通过docker-compose.yml获取镜像并启动
```shell
# 启动并构建服务
docker-compose up -d

# 停止并清理容器、网络
docker-compose down

# 查看容器日志
docker-compose logs

# 重启指定服务
docker-compose restart redis
```