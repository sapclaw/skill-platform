#!/bin/bash
# 数字龙标智能体技能组件平台 - 部署脚本
# 用于 129 服务器部署

set -e

echo "======================================"
echo "  技能组件平台部署脚本"
echo "======================================"

# 配置
APP_NAME="skill-platform"
APP_DIR="/opt/skill-platform"
PORT=5000
DOMAIN="skills.数字龙标.com"

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# 检查是否为 root 用户
if [ "$EUID" -ne 0 ]; then 
    log_warn "建议使用 root 用户运行此脚本"
fi

# 步骤 1: 安装 Node.js 和 pnpm
log_info "检查 Node.js 环境..."
if ! command -v node &> /dev/null; then
    log_info "安装 Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi

NODE_VERSION=$(node -v)
log_info "Node.js 版本: $NODE_VERSION"

# 安装 pnpm
if ! command -v pnpm &> /dev/null; then
    log_info "安装 pnpm..."
    npm install -g pnpm
fi

PNPM_VERSION=$(pnpm -v)
log_info "pnpm 版本: $PNPM_VERSION"

# 步骤 2: 创建应用目录
log_info "创建应用目录..."
mkdir -p $APP_DIR
cd $APP_DIR

# 步骤 3: 上传文件后执行
# 注意: 请先使用 scp 上传 skill-platform.tar.gz 到 /opt/ 目录
if [ -f "/opt/skill-platform.tar.gz" ]; then
    log_info "解压应用文件..."
    tar -xzvf /opt/skill-platform.tar.gz
else
    log_error "未找到 skill-platform.tar.gz，请先上传文件"
    exit 1
fi

# 步骤 4: 安装依赖
log_info "安装项目依赖..."
pnpm install

# 步骤 5: 构建项目
log_info "构建生产版本..."
pnpm build

# 步骤 6: 配置 PM2 进程管理
log_info "配置 PM2 进程管理..."
pnpm add -g pm2

# 创建 PM2 配置文件
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'skill-platform',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 5000',
    cwd: '/opt/skill-platform',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    }
  }]
};
EOF

# 停止旧进程并启动新进程
pm2 delete skill-platform 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save

# 配置开机自启
pm2 startup > /dev/null 2>&1 || true

# 步骤 7: 配置 Nginx 反向代理
log_info "配置 Nginx 反向代理..."
cat > /etc/nginx/sites-available/skill-platform << 'EOF'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# 启用站点
ln -sf /etc/nginx/sites-available/skill-platform /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

# 完成
log_info "======================================"
log_info "部署完成!"
log_info "======================================"
log_info "访问地址: http://129.211.44.27"
log_info "管理命令:"
log_info "  查看状态: pm2 status"
log_info "  查看日志: pm2 logs skill-platform"
log_info "  重启服务: pm2 restart skill-platform"
log_info "======================================"
