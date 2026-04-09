import Link from 'next/link';
import { Sparkles, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-foreground">数字工匠</div>
                <div className="text-xs text-muted-foreground">智能体技能组件平台</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              汇聚38+精选技能组件，涵盖AI能力、数据库存储、集成服务等领域。助力数字工匠高效构建智能体应用。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">快速链接</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-amber-500 transition-colors">
                首页
              </Link>
              <Link href="/skills" className="block text-sm text-muted-foreground hover:text-amber-500 transition-colors">
                技能组件
              </Link>
              <Link href="/playground" className="block text-sm text-muted-foreground hover:text-amber-500 transition-colors">
                在线体验
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">技能分类</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>AI 能力 (9)</div>
              <div>数据库与存储 (4)</div>
              <div>集成服务 (7)</div>
              <div>前端开发 (5)</div>
              <div>移动端开发 (2)</div>
              <div>运维支持 (5)</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 数字龙标智能体服务平台. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@longbiao.com"
              className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
