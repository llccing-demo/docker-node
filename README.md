
# node-docker 实践

## 操作步骤
- 先启动一个简单的 docker node 程序

```sh
// 编写 Dockerfile
FROM node:8.9.1

# 复制当前代码到指定目录下
COPY . .
EXPOSE 8080
RUN npm i
CMD npm run dev

// 镜像构建，注意后面的点 很重要；这里的 :v1 是tab，用来做版本区分
docker build -t docker-demo/hello-docker:v1 .

// 查看镜像
docker images

// 启动镜像 -p 是 port 宿主端口:容器端口
docker run -i -t -p 8080:8080 docker-demo/hello-docker:v1

```

## tips

### docker build 失败解决

尝试两次docker build失败，后来发现通过切换dns 改为114:114:114:114即可，或者8:8:8:8。

## 参考

- [https://segmentfault.com/a/1190000019512222?utm_source=sf-similar-article](https://segmentfault.com/a/1190000019512222?utm_source=sf-similar-article) 使用 docker 部署 node 应用