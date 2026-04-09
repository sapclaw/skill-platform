'use client';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>;

import { useState } from 'react';
import Link from 'next/link';
import { skills, categories } from '../../data/skills';
import { ArrowLeft, Play, Loader2, Send, Sparkles, Brain, Database, Plug, Layout, Smartphone, Server } from 'lucide-react';

const iconComponents: Record<string, IconComponent> = { Brain, Database, Plug, Layout, Smartphone, Server };

interface Message {
  role: 'user' | 'assistant';
  content: string;
  skill?: string;
}

export default function PlaygroundPage() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = { role: 'user', content: input, skill: selectedSkill.name };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const response: Message = {
        role: 'assistant',
        content: `已调用【${selectedSkill.name}】技能进行处理。这是对输入的模拟响应。在实际使用中，这里会调用真实的AI服务来处理您的请求。`,
        skill: selectedSkill.name
      };
      setMessages(prev => [...prev, response]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />返回首页
            </Link>
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />技能体验台
            </h1>
            <div className="w-24" />
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-8 flex gap-8">
        {/* 左侧技能列表 */}
        <div className="w-80 shrink-0">
          <div className="sticky top-24">
            <h2 className="text-sm font-medium text-muted-foreground mb-4">选择技能</h2>
            <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
              {categories.map(cat => {
                const catSkills = skills.filter(s => s.category === cat.id);
                if (catSkills.length === 0) return null;
                const Icon = iconComponents[cat.icon] || Brain;
                return (
                  <div key={cat.id} className="mb-4">
                    <div className="flex items-center gap-2 mb-2 text-xs font-medium" style={{ color: cat.color }}>
                      <Icon className="w-4 h-4" />{cat.name}
                    </div>
                    {catSkills.map(skill => (
                      <button key={skill.id} onClick={() => { setSelectedSkill(skill); setMessages([]); }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedSkill.id === skill.id ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'text-muted-foreground hover:bg-muted/50'}`}>
                        {skill.name}
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 右侧对话区域 */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="bg-card/50 rounded-xl border border-border p-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${categories.find(c => c.id === selectedSkill.category)?.color}15` }}>
                {(() => { const Icon = iconComponents[categories.find(c => c.id === selectedSkill.category)?.icon || 'Brain'] || Brain; return <Icon className="w-5 h-5" style={{ color: categories.find(c => c.id === selectedSkill.category)?.color }} />; })()}
              </div>
              <div>
                <div className="font-medium text-foreground">{selectedSkill.name}</div>
                <div className="text-xs text-muted-foreground">{selectedSkill.description}</div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 mb-4 min-h-[400px]">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Sparkles className="w-12 h-12 text-amber-500/30 mb-4" />
                <p className="text-muted-foreground">开始与 {selectedSkill.name} 对话</p>
                <p className="text-xs text-muted-foreground mt-1">{selectedSkill.longDescription}</p>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-amber-500' : 'bg-muted'}`}>
                    {msg.role === 'user' ? <Sparkles className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-foreground" />}
                  </div>
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${msg.role === 'user' ? 'bg-amber-500 text-white' : 'bg-card border border-border text-foreground'}`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <Play className="w-4 h-4 text-foreground" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-card border border-border">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}
              placeholder={`输入内容使用 ${selectedSkill.name}...`}
              className="w-full px-4 py-4 pr-24 rounded-xl bg-card border border-border resize-none focus:border-amber-500 outline-none"
              rows={2} />
            <button onClick={handleSend} disabled={!input.trim() || isLoading}
              className="absolute right-2 bottom-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium flex items-center gap-2">
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}发送
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
