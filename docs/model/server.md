# 相关服务

### milvus

<LinkCard url="https://github.com/milvus-io/milvus"
title="官方仓库"
description="https://github.com/milvus-io/milvus"
/>

> [!TIP]
> 通过官方仓库获取 `docker-compose.yml`文件进行安装。
> 如需设置密码，通过官方仓库源码获取 `milvus.yaml` 挂载配置文件启动

<FileViewer aInfo="点我查看docker-compose.yml v2.5.14" file="/vite-coding-doc/file/milvus-standalone-docker-compose.yml" />

**通过修改`defaultRootPassword`值来配置密码**

<FileViewer aInfo="点我查看 milvus.yaml" file="/vite-coding-doc/file/milvus.yaml" />

```yaml {8}
  security:
    authorizationEnabled: false
    # The superusers will ignore some system check processes,
    # like the old password verification when updating the credential
    superUsers: 
    # default password for root user. The maximum length is 72 characters. 
    # Large numeric passwords require double quotes to avoid yaml parsing precision issues.
    defaultRootPassword: Milvus
    rootShouldBindRole: false # Whether the root user should bind a role when the authorization is enabled.
    enablePublicPrivilege: true # Whether to enable public privilege
```

[点我跳转：具体可参考，版本为 v2.5.14](../other/m1-docker.md#mysql、redis、otel、minio、milvus)



**客户端工具**

milvus客户端工具更推荐使用`zilliz/attu`，docker安装方式如下

```shell
# milvus客户端工具
docker pull zilliz/attu:latest

docker run -d -p 3000:3000 \
    --name attu \
    --network host \
    -e MILVUS_URL=localhost:19530 \
    zilliz/attu:latest
```

> [!TIP]
> 安装完成后，通过访问 `http://localhost:3000`，查看是否安装成功 。
