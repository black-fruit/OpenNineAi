# OpenNineAi

NineAI半开源版，删除服务端所有加密！

Official Demo / 官方演示: [Click Here](https://ai.jiangly.com)

# 暂时没有删除授权验证，需要购买授权！

# 安装Install

重命名`.env.example`文件为`.env` | Rename`.env.example`to`.env`

## 如果没有NodeJS和PM2 If you don't have NodeJS and PM2 (如有请跳过|Have can skip)

```bash
curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install nodejs -y
npm i pm2 pnpm -g
```

## 启动程序Start Program

```bash
pnpm i
pnpm start
```

# FAQ

## 查看日志Check LOG

```bash
pm2 log
```

## 如何确定授权成功？How to check auth finally?

检查日志是否有`授权成功`如有即为授权成功 Check LOG, if it have `授权成功` is finally!