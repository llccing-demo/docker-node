FROM mongo:latest

# 宿主机的 mongo 配置文件拷贝到容器
COPY mongo.conf /usr/local/etc/mongod.conf

# 映射外部 DB 的存储文件到容器内
VOLUME /c/data/db /data/configdb

# 启动 mongo
CMD ["mongod", "--port", "27018"]

# 暴露 27017 端口到宿主机
EXPOSE 27018