'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/skill-platform" className="flex items-center gap-3 group">
            <img src="/logo-brand.png" alt="龙标" className="w-10 h-10" />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-foreground group-hover:text-amber-500 transition-colors">智能体技能组件开发与测试平台</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/skill-platform" className="text-sm font-medium text-foreground hover:text-amber-500 transition-colors">
              首页
            </Link>
            <Link href="/skill-platform/skills" className="text-sm font-medium text-muted-foreground hover:text-amber-500 transition-colors">
              技能组件
            </Link>
            <Link href="/skill-platform/playground" className="text-sm font-medium text-muted-foreground hover:text-amber-500 transition-colors">
              在线体验
            </Link>
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
              <Link 
                href="/skill-platform/skills" 
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all"
              >
                开始使用
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <Link 
                href="/skill-platform" 
                className="px-4 py-3 rounded-lg hover:bg-muted transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                首页
              </Link>
              <Link 
                href="/skill-platform/skills" 
                className="px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                技能组件
              </Link>
              <Link 
                href="/skill-platform/playground" 
                className="px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                在线体验
              </Link>
              <Link 
                href="/skill-platform/skills" 
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                开始使用
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
