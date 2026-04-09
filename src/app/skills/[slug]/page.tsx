'use client';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>;

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getSkillBySlug, skills, categories } from '../../../data/skills';
import { ArrowLeft, Copy, Check, ChevronRight, Brain, Database, Plug, Layout, Smartphone, Server, Sparkles, Star } from 'lucide-react';

const iconComponents: Record<string, IconComponent> = { Brain, Database, Plug, Layout, Smartphone, Server };

export default function SkillDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const skill = getSkillBySlug(slug);
  const [copied, setCopied] = useState(false);

  if (!skill) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">技能未找到</h1>
          <Link href="/" className="text-amber-500 hover:text-amber-400">返回首页</Link>
        </div>
      </div>
    );
  }

  const category = categories.find(c => c.id === skill.category);
  const Icon = iconComponents[category?.icon || 'Brain'] || Brain;
  const relatedSkills = skills.filter(s => s.category === skill.category && s.id !== skill.id).slice(0, 4);

  const handleCopy = () => {
    navigator.clipboard.writeText(`import { ${skill.name} } from '@/skills/${skill.slug}'`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />返回首页
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-amber-500/5 to-orange-500/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-start gap-8">
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${category?.color}15` }}>
              <Icon className="w-12 h-12" style={{ color: category?.color }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: `${category?.color}20`, color: category?.color }}>{category?.name}</span>
                {skill.status === 'stable' && <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">稳定版</span>}
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{skill.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">{skill.nameEn}</p>
              <p className="text-lg text-foreground/80">{skill.longDescription}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <button onClick={handleCopy} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted/50">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              复制导入语句
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-amber-500" />核心功能
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skill.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <Check className="w-5 h-5 text-amber-500 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-amber-500" />适用场景
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skill.useCases.map((useCase, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <ChevronRight className="w-5 h-5 text-amber-500" />
                    <span className="text-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {relatedSkills.length > 0 && (
              <div className="p-6 rounded-xl border bg-card">
                <h3 className="font-semibold text-foreground mb-4">同类别技能</h3>
                <div className="space-y-3">
                  {relatedSkills.map(rel => {
                    const relCat = categories.find(c => c.id === rel.category);
                    const RelIcon = iconComponents[relCat?.icon || 'Brain'] || Brain;
                    return (
                      <Link key={rel.id} href={`/skills/${rel.slug}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${relCat?.color}15` }}>
                          <RelIcon className="w-5 h-5" style={{ color: relCat?.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{rel.name}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="p-6 rounded-xl border bg-card">
              <h3 className="font-semibold text-foreground mb-4">技能信息</h3>
              <div className="space-y-4">
                <div className="flex justify-between"><span className="text-muted-foreground">状态</span><span className="text-green-500">稳定版</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">分类</span><span style={{ color: category?.color }}>{category?.name}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">功能数</span><span className="text-foreground">{skill.features.length}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">场景数</span><span className="text-foreground">{skill.useCases.length}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
