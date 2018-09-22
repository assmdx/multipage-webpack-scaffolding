# 开箱即用的多页面webpack脚手架

## Build Setup

```
# 安装依赖
npm install

# 开发的时候在本地启localhost:9000，并开始热加载
npm run dev

# production的发布时打包
npm run prod
```

## 目录结构

```
└─src                                      // src 文件夹
│    ├─pages                               // 页面文件夹
│    │  ├─font
│    │  │      font.html
│    │  │      font.css
│    │  │	   font.js
│    │  │
│    │  └─layout
│              layout.css
│              layout.html
│    	       layout.js
└─build                                      // build 文件夹
│    ├─webpack.config.dev.js            // 开发环境的webpack配置文件
│    ├─webpack.config.prod.js           // 生产环境的webpack配置文件
│    ├─page.config.js                   // 页面的配置文件
│
│  package.json
│  README.md
         
```

## 开发流程

如果增加新页面，只需两步，不需要改webpack等配置文件

1. 在pages中新增一个文件夹
2. 在page.config.js中添加这个页面的信息即可

比如

```
  {
    name: 'contact',
    html: 'contact/contact.html',
    jsEntry: 'contact/contact.js'
  }
```

