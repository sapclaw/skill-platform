'use client';

import { useState } from 'react';
import Link from 'next/link';
import { skills, categories } from '../data/skills';
import { 
  Sparkles, ArrowRight, ChevronRight, Search, Star, Brain, Database, Plug, Layout, Smartphone, Server
} from 'lucide-react';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>;

const iconComponents: Record<string, IconComponent> = {
  Brain, Database, Plug, Layout, Smartphone, Server
};

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = !activeCategory || skill.category === activeCategory;
    const matchesSearch = !searchQuery || 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-amber-500/5 via-background to-orange-500/5">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-500">智能体技能组件平台</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              数字工匠的技能工坊
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            汇聚 {skills.length} 个精选技能组件，涵盖 AI 能力、数据库存储、集成服务等领域
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Link href="/skills" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all">
              探索全部技能
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/playground" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              在线体验
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: '技能组件', value: skills.length },
              { label: '技能分类', value: categories.length },
              { label: '使用场景', value: '100+' },
              { label: '开发者', value: '10K+' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索技能..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-amber-500 outline-none transition-all"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <button onClick={() => setActiveCategory(null)} className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium ${!activeCategory ? 'bg-foreground text-background' : 'bg-muted hover:bg-muted/80 text-muted-foreground'}`}>全部</button>
              {categories.map(cat => {
                const Icon = iconComponents[cat.icon] || Brain;
                return (
                  <button key={cat.id} onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                    className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id ? 'text-white' : 'bg-muted hover:bg-muted/80 text-muted-foreground'}`}
                    style={{ backgroundColor: activeCategory === cat.id ? cat.color : undefined }}>
                    <Icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map(skill => {
            const category = categories.find(c => c.id === skill.category);
            const Icon = iconComponents[category?.icon || 'Brain'] || Brain;
            return (
              <Link key={skill.id} href={`/skills/${skill.slug}`}
                className="group p-6 rounded-xl border bg-card hover:bg-muted/30 transition-all hover:border-amber-500/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${category?.color}15` }}>
                    <Icon className="w-6 h-6" style={{ color: category?.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-amber-500 transition-colors">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{category?.name}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{skill.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium" style={{ color: category?.color }}>{category?.name}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-500">精选推荐</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">最受欢迎的技能组件</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['llm', 'image-generation', 'supabase'].map(slug => {
              const skill = skills.find(s => s.slug === slug);
              if (!skill) return null;
              const category = categories.find(c => c.id === skill.category);
              const Icon = iconComponents[category?.icon || 'Brain'] || Brain;
              return (
                <Link key={skill.id} href={`/skills/${skill.slug}`} className="group p-6 rounded-xl border bg-card hover:bg-muted/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${category?.color}15` }}>
                      <Icon className="w-7 h-7" style={{ color: category?.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-amber-500">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-6">准备好开始构建了吗？</h2>
        <p className="text-muted-foreground mb-8">浏览完整的技能文档，开始构建你的智能体应用</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/skills" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all">
            浏览技能组件
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-foreground">智能体技能组件平台</div>
                <div className="text-sm text-muted-foreground">Powered by 扣子编程</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/skills" className="hover:text-foreground">技能组件</Link>
              <Link href="/playground" className="hover:text-foreground">在线体验</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
