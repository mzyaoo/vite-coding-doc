# Docker安装
### Centos安装Docker
#### 安装 `yum-utils`
```shell
yum install -y yum-utils device-mapper-persistent-data lvm2
```
#### 为yum源添加Docker仓库位置
```shell
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
#### 安装Docker
```shell
yum install docker-ce
```
#### 启动Docker
```shell
systemctl start docker
```
