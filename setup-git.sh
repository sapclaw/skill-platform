#!/bin/bash
echo "=== GitHub 自动同步配置脚本 ==="
echo ""

# 检查是否已配置TOKEN
if [ -z "$GITHUB_TOKEN" ]; then
    echo "请设置GitHub Personal Access Token"
    echo "1. 访问 https://github.com/settings/tokens"
    echo "2. 创建新token，勾选 'repo' 权限"
    echo "3. 运行: export GITHUB_TOKEN='你的token'"
    echo ""
    echo "或者直接修改remote URL:"
    echo "  git remote set-url origin https://YOUR_TOKEN@github.com/sapclaw/skill-platform.git"
    exit 1
fi

# 更新remote URL
NEW_URL="https://${GITHUB_TOKEN}@github.com/sapclaw/skill-platform.git"
git remote set-url origin "$NEW_URL"

# 测试连接
echo "测试GitHub连接..."
git fetch origin --quiet && echo "✓ 连接成功" || echo "✗ 连接失败"

# 显示当前remote
echo ""
echo "当前remote配置:"
git remote -v
