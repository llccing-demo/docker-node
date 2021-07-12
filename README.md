
# node-docker 实践

## 操作步骤

### 先启动一个简单的 docker node 程序

```sh
# 编写 Dockerfile
FROM node:8.9.1

# 复制当前代码到指定目录下
COPY . .
EXPOSE 8080
RUN npm i
CMD npm run dev

# 镜像构建，注意后面的点 很重要；这里的 :v1 是tab，用来做版本区分
docker build -t docker-demo/hello-docker:v3 .

# 查看镜像
docker images

# 启动镜像 -p 是 port 宿主端口:容器端口
docker run -i -t -p 8080:8080 docker-demo/hello-docker:v1

# 后台启动镜像
docker run -d -p 8080:8080 docker-demo/hello-docker:v2

# 查看日志， logs 后跟着的xxx可以通过 docker ps 查看，为container Id。
docker logs xxx

# 登录 docker node
docker exec -i -t xxx bash

# 移除正在运行的docker
docker rm xxx
```

### 使用 docker-compose 启动 docker node 程序

```shell
# docker-compose.yml 内容
version: '3'
services:
  web:
    build: .
    ports:
     - "8080:8080"
  redis:
    image: "redis:alpine"

# 启动 docker-compose
docker-compose up -d

# 使用该命令重新构建，当出现错误的时候
docker-compose up --build

# 查看容器运行状态
docker-compose ps

# 查看容器日志
docker-compose logs

# 暂停容器
docker-compose stop

```

### 集群操作

```shell
# 开启集群
docker swarm init

# 部署集群
docker stack deploy -c docker-compose.yml node-swarm

# 暂停集群
docker swarm leave

# 查看集群容器日志

```

## tips

### docker build 失败解决

尝试两次docker build失败，后来发现通过切换dns 改为114:114:114:114即可，或者8:8:8:8。

### 切换镜像目录

参考的如下的文档 [https://stackoverflow.com/questions/40465979/change-docker-native-images-location-on-windows-10-pro](https://stackoverflow.com/questions/40465979/change-docker-native-images-location-on-windows-10-pro) 但是仍没有效果，待以后机缘巧合解决。

## 参考

- [https://segmentfault.com/a/1190000019512222?utm_source=sf-similar-article](https://segmentfault.com/a/1190000019512222?utm_source=sf-similar-article) 使用 docker 部署 node 应用

- [https://segmentfault.com/a/1190000012654303](https://segmentfault.com/a/1190000012654303) 使用docker部署node集群