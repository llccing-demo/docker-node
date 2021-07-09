FROM node:8.9.1

# 复制当前代码到指定目录下
COPY . .
EXPOSE 8080
RUN npm i
CMD npm run dev