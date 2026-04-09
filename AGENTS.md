# 智能体技能组件平台 - AGENTS.md

## 项目概述

**项目名称**：智能体技能组件开发与测试平台  
**所属公司**：数字龙标有限公司  
**平台定位**：汇聚38+精选技能组件，涵盖AI能力、数据库存储、集成服务等领域

## 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **包管理器**: pnpm

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
│   ├── build.sh            # 构建脚本
│   ├── dev.sh              # 开发环境启动脚本
│   ├── prepare.sh          # 预处理脚本
│   └── start.sh            # 生产环境启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── page.tsx        # 首页
│   │   ├── layout.tsx      # 根布局
│   │   ├── globals.css     # 全局样式
│   │   ├── skills/         # 技能组件页面
│   │   │   ├── page.tsx    # 技能列表页
│   │   │   └── [slug]/    # 动态路由
│   │   │       └── page.tsx    # 技能详情页
│   │   └── playground/      # 在线体验页面
│   ├── components/         # 组件目录
│   │   ├── ui/            # Shadcn UI 组件库
│   │   ├── Navigation.tsx # 导航栏组件
│   │   └── Footer.tsx     # 页脚组件
│   ├── data/               # 数据文件
│   │   └── skills.ts      # 技能组件数据（38个技能）
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   └── utils.ts        # 通用工具函数 (cn)
│   └── server.ts           # 自定义服务端入口
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
├── deploy.sh              # 部署脚本（用于129服务器）
└── tsconfig.json           # TypeScript 配置
```

## 核心页面

### 1. 首页 (`/`)
- Hero区域：展示平台名称、口号和统计数据
- 搜索过滤：支持按关键词和分类筛选技能
- 技能卡片网格：展示所有技能组件
- 精选推荐：展示热门技能组件
- 特性介绍：展示平台优势

### 2. 技能列表页 (`/skills`)
- 全部技能组件列表
- 支持搜索和分类筛选
- 分类统计显示

### 3. 技能详情页 (`/skills/[slug]`)
- 技能图标、名称、分类展示
- 核心功能列表
- 适用场景展示
- 相关技能推荐

### 4. 在线体验页 (`/playground`)
- 技能在线测试入口

## 技能分类体系

| 分类ID | 分类名称 | 图标 | 颜色 | 技能数量 |
|--------|----------|------|------|----------|
| ai | AI 能力 | Brain | #f59e0b | 9 |
| database | 数据库与存储 | Database | #10b981 | 4 |
| integration | 集成服务 | Plug | #3b82f6 | 7 |
| frontend | 前端开发 | Layout | #8b5cf6 | 5 |
| mobile | 移动端开发 | Smartphone | #ec4899 | 2 |
| ops | 运维支持 | Server | #64748b | 5 |

## 设计规范

### 颜色系统（琥珀色工匠风格）
- 主色：琥珀色 `#f59e0b` → 橙色 `#f97316`
- 渐变：`from-amber-500 to-orange-500`
- 背景：`#ffffff`（亮色）/ `#0c0c1e`（暗色）
- 边框：`rgba(255, 255, 255, 0.1)`

### 组件规范
- 所有页面必须使用 `globals.css` 中的主题变量
- 优先使用 Tailwind 的语义化变量（如 `bg-background`, `text-foreground`）
- 按钮样式：`bg-gradient-to-r from-amber-500 to-orange-500`
- 卡片样式：`rounded-xl border bg-card`

## 开发命令

```bash
# 安装依赖
cd skill-platform
pnpm install

# 开发模式
pnpm dev  # 端口5000

# 类型检查
pnpm ts-check

# 构建生产版本
pnpm build

# 启动生产服务
pnpm start
```

## 部署说明

### 部署到129服务器
```bash
# 1. 打包项目
cd /workspace/projects
tar -czvf skill-platform.tar.gz skill-platform

# 2. 上传到129服务器
scp skill-platform.tar.gz root@129.211.44.27:/opt/

# 3. 在129服务器上执行部署
cd /opt
tar -xzvf skill-platform.tar.gz
cd skill-platform
bash deploy.sh
```

### Nginx配置
```nginx
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。
**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发规范

### Hydration 问题防范

1. 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据。**必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染**；同时严禁非法 HTML 嵌套（如 <p> 嵌套 <div>）。
2. **禁止使用 head 标签**，优先使用 metadata，详见文档：https://nextjs.org/docs/app/api-reference/functions/generate-metadata
   1. 三方 CSS、字体等资源可在 `globals.css` 中顶部通过 `@import` 引入或使用 next/font
   2. preload, preconnect, dns-prefetch 通过 ReactDOM 的 preload、preconnect、dns-prefetch 方法引入
   3. json-ld 可阅读 https://nextjs.org/docs/app/guides/json-ld

## UI 设计与组件规范 (UI & Styling Standards)

- 模板默认预装核心组件库 `shadcn/ui`，位于`src/components/ui/`目录下
- Next.js 项目**必须默认**采用 shadcn/ui 组件、风格和规范，**除非用户指定用其他的组件和规范。**
