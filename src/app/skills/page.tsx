'use client';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>;

import { useState } from 'react';
import Link from 'next/link';
import { skills, categories } from '../../data/skills';
import { Search, ChevronRight, Brain, Database, Plug, Layout, Smartphone, Server } from 'lucide-react';

const iconComponents: Record<string, IconComponent> = { Brain, Database, Plug, Layout, Smartphone, Server };

export default function SkillsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = !activeCategory || skill.category === activeCategory;
    const matchesSearch = !searchQuery || skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-amber-500/5 to-orange-500/5">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">全部技能组件</h1>
          <p className="text-muted-foreground mb-8">探索 {skills.length} 个精选技能组件</p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input type="text" placeholder="搜索技能..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border focus:border-amber-500 outline-none" />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button onClick={() => setActiveCategory(null)} className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium ${!activeCategory ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground'}`}>全部 ({skills.length})</button>
            {categories.map(cat => {
              const count = skills.filter(s => s.category === cat.id).length;
              return (
                <button key={cat.id} onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${activeCategory === cat.id ? 'text-white' : 'bg-muted text-muted-foreground'}`}
                  style={{ backgroundColor: activeCategory === cat.id ? cat.color : undefined }}>
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6 text-sm text-muted-foreground">找到 {filteredSkills.length} 个技能组件</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map(skill => {
            const category = categories.find(c => c.id === skill.category);
            const Icon = iconComponents[category?.icon || 'Brain'] || Brain;
            return (
              <Link key={skill.id} href={`/skill-platform/skills/${skill.slug}`} className="group p-6 rounded-xl border bg-card hover:bg-muted/30 transition-all hover:border-amber-500/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${category?.color}15` }}>
                    <Icon className="w-6 h-6" style={{ color: category?.color }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-amber-500">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{category?.name}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{skill.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium" style={{ color: category?.color }}>{category?.name}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-amber-500" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
