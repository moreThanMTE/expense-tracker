# expenseTracker
一个练手的小项目
<a href="https://github.com/bradtraversy/vue-expense-tracker">这里是原项目仓库</a>，此项目是在观看视频之后自己使用react+next复刻出来的
![主体图片](./imgs/main.png "主体图片")
### 项目配置
```
安装依赖
npm i
本地调试
npm run dev
react打包
npm run build
启动electron（electron使用的是react打包后的资源）
npm run electron
```
### 作为electron应用打包
```
npm run build // 打包next项目至out
执行之后，将out中index.html里所有的链接从 /资源 改为./资源
更改为相对路径，解决无法找到样式文件的问题
在linux下 electron图标需从ico转换到png

npm run postinstall // 安装electron的依赖

npm run dist // 打包electron至dist
```
