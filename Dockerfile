FROM node:8.9.1

# 复制当前代码到指定目录下
COPY . /home/app
# 这个很重要，指定的是 npm 依赖的环境变量，如果不指定，npm install 就会报错
WORKDIR /home/app
# 端口映射，这里指定的是 8080 端口
EXPOSE 8080
RUN npm i
CMD npm run dev