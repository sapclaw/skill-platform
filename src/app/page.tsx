'use client';

import Link from 'next/link';
import { skills, categories, getSkillsByCategory } from '../data/skills';
import { 
  Sparkles, ArrowRight, ChevronRight, Brain, Database, Plug, Layout, Smartphone, Server,
  Zap, Shield, Rocket, Users, Cpu, Cloud, Code
} from 'lucide-react';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>;

const iconComponents: Record<string, IconComponent> = {
  Brain, Database, Plug, Layout, Smartphone, Server
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - 创意美化版 */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-amber-500/5 via-background to-orange-500/5">
        {/* 动态背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
          
          {/* 浮动图标装饰 */}
          <div className="absolute top-32 left-[15%] w-16 h-16 rounded-2xl bg-card/50 backdrop-blur border border-border/50 flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
            <Cpu className="w-8 h-8 text-amber-500/60" />
          </div>
          <div className="absolute top-48 right-[20%] w-14 h-14 rounded-xl bg-card/50 backdrop-blur border border-border/50 flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
            <Cloud className="w-7 h-7 text-orange-500/60" />
          </div>
          <div className="absolute bottom-40 left-[25%] w-12 h-12 rounded-lg bg-card/50 backdrop-blur border border-border/50 flex items-center justify-center animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
            <Code className="w-6 h-6 text-amber-500/60" />
          </div>
          <div className="absolute bottom-32 right-[15%] w-14 h-14 rounded-xl bg-card/50 backdrop-blur border border-border/50 flex items-center justify-center animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.3s' }}>
            <Brain className="w-7 h-7 text-orange-500/60" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          {/* 主标题区域 */}
          <div className="text-center mb-12">
            {/* 小图标 + 数字工匠 + 技能组件平台 */}
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl -z-10 blur opacity-30"></div>
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                  数字工匠
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-px w-8 bg-gradient-to-r from-amber-500 to-transparent"></div>
                  <span className="text-lg text-muted-foreground">技能组件平台</span>
                </div>
              </div>
            </div>
            
            {/* 副标题 */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              汇聚 <span className="text-amber-500 font-semibold">{skills.length}</span> 个精选技能组件
            </p>
            <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10">
              涵盖 AI 能力 · 数据库存储 · 集成服务 · 前端开发 · 移动端 · 运维支持
            </p>

            {/* 按钮组 */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/skill-platform/skills" className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  探索全部技能
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/skill-platform/playground" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-border hover:border-amber-500/50 hover:bg-amber-500/5 text-foreground font-medium transition-all duration-300">
                <Sparkles className="w-5 h-5 text-amber-500" />
                在线体验
              </Link>
            </div>
          </div>

          {/* 统计卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: '技能组件', value: skills.length, icon: Sparkles, color: 'amber' },
              { label: '技能分类', value: categories.length, icon: Layout, color: 'orange' },
              { label: '使用场景', value: '100+', icon: Rocket, color: 'amber' },
              { label: '开发者', value: '10K+', icon: Users, color: 'orange' }
            ].map((stat, i) => (
              <div key={i} className="group relative p-5 rounded-2xl bg-card/80 backdrop-blur border border-border hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color === 'amber' ? 'bg-amber-500/10' : 'bg-orange-500/10'}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color === 'amber' ? 'text-amber-500' : 'text-orange-500'}`} />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${stat.color === 'amber' ? 'text-amber-500' : 'text-orange-500'}`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid - 按类别分板块 */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {categories.map((category) => {
          const categorySkills = getSkillsByCategory(category.id);
          const Icon = iconComponents[category.icon] || Brain;
          
          return (
            <div key={category.id} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${category.color}20` }}>
                  <Icon className="w-5 h-5" style={{ color: category.color }} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">{category.name}</h2>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
                <Link href={`/skill-platform/skills?category=${category.id}`} className="ml-auto text-sm text-amber-500 hover:text-amber-600 flex items-center gap-1">
                  查看全部 <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Skills Grid for this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.slice(0, 6).map((skill) => (
                  <Link key={skill.id} href={`/skill-platform/skills/${skill.slug}`}
                    className="group p-4 rounded-xl border bg-card hover:bg-muted/30 transition-all hover:border-amber-500/30">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${category.color}15` }}>
                        <Icon className="w-5 h-5" style={{ color: category.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground group-hover:text-amber-500 mb-1 truncate">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{skill.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-2">为什么选择我们</h2>
          <p className="text-muted-foreground">专业的技能组件，助你高效开发</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: '开箱即用',
              description: '所有技能组件都经过精心设计，接入简单快捷',
              color: '#f59e0b'
            },
            {
              icon: Shield,
              title: '安全可靠',
              description: '严格的安全审查，确保生产环境稳定运行',
              color: '#10b981'
            },
            {
              icon: Rocket,
              title: '持续更新',
              description: '技能组件持续迭代，紧跟技术发展趋势',
              color: '#3b82f6'
            }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-xl border bg-card">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${feature.color}15` }}>
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">准备好开始构建了吗？</h2>
        <p className="text-muted-foreground mb-6">浏览完整的技能文档，开始构建你的智能体应用</p>
        <Link href="/skill-platform/skills" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all">
          浏览技能组件
        </Link>
      </section>
    </div>
  );
}
