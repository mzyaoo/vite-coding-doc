### 搜索镜像
```dtd
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

### 打包 Docker 镜像并指定系统架构
```shell
docker buildx build --platform linux/amd64 -t  {service_name}:{tag} .
```

### 查看 Docker 镜像/容器详细信息
```shell
docker inspect {镜像 id} / {容器 id}
```

### 清除构建缓存（buildx 构建用）
```shell
docker builder prune --all
```

### 监听 docker 容器日志
```shell
# 监听容器日志
docker logs -f 容器名/容器ID

# 指定最近行数
docker logs -f --tail 100 容器名/容器ID
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

