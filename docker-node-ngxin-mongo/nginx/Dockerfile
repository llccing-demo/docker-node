# 使用社区的 nginx:alpine 作为基础镜像
FROM nginx:alpine

# 拷贝 nginx 全局配置文件
COPY nginx.conf /etc/nginx/

# apk 国内源
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories

# 安装 nginx
RUN apk update \
    && apk upgrade \
    && apk add --no-cache openssl \
    && apk add --no-cache bash

# 创建账号
RUN set -x ; \
    addgroup -g 1000 -S www-data ; \
    adduser -u 1000 -D -S -G www-data www-data && exit 0 ; exit 1
    
# 启动 nginx
CMD nginx

# 暴露 80 和 443 端口
EXPOSE 80 443