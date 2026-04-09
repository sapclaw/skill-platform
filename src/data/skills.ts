/**
 * 智能体技能组件数据 - 38个技能组件
 */

export interface SkillCategory {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  color: string;
}

export interface Skill {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  category: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
  useCases: string[];
  status: 'stable' | 'beta' | 'new';
  documentation: string;
}

export const categories: SkillCategory[] = [
  { id: 'ai', name: 'AI 能力', nameEn: 'AI Capabilities', icon: 'Brain', description: '大语言模型、图像生成、视频生成等AI核心能力', color: '#f59e0b' },
  { id: 'database', name: '数据库与存储', nameEn: 'Database & Storage', icon: 'Database', description: 'PostgreSQL数据库、对象存储、知识库等数据服务', color: '#10b981' },
  { id: 'integration', name: '集成服务', nameEn: 'Integration Services', icon: 'Plug', description: '支付宝、微信、飞书等第三方服务集成', color: '#3b82f6' },
  { id: 'frontend', name: '前端开发', nameEn: 'Frontend Development', icon: 'Layout', description: 'React组件、UI设计、性能优化等前端技术', color: '#8b5cf6' },
  { id: 'mobile', name: '移动端开发', nameEn: 'Mobile Development', icon: 'Smartphone', description: 'React Native、Expo、小程序等移动端开发', color: '#ec4899' },
  { id: 'ops', name: '运维支持', nameEn: 'DevOps & Support', icon: 'Server', description: '环境修复、监控诊断、日志分析等运维工具', color: '#64748b' }
];

export const skills: Skill[] = [
  // AI能力类
  { id: 'llm', name: '大语言模型', nameEn: 'Large Language Model', slug: 'llm', category: 'ai', icon: 'Bot', description: '对话式AI应用，支持流式响应、思考模式、多轮对话', longDescription: '基于豆包、DeepSeek、Kimi等前沿大语言模型，提供文本生成、对话交互、意图识别等能力。', features: ['多模型支持', '流式输出', '思考模式', '多轮对话', '图像理解'], useCases: ['智能客服', 'AI助手', '内容创作'], status: 'stable', documentation: '/skills/public/prod/llm/SKILL.md' },
  { id: 'image-generation', name: '图像生成', nameEn: 'Image Generation', slug: 'image-generation', category: 'ai', icon: 'ImageIcon', description: 'AI图像生成，支持2K/4K分辨率、文生图、图生图', longDescription: '使用coze-coding-dev-sdk实现高质量图像生成，支持参考图片、批量生成。', features: ['2K/4K分辨率', '文生图', '图生图', '批量生成'], useCases: ['产品设计', '营销素材', '游戏原画'], status: 'stable', documentation: '/skills/public/prod/image-generation/SKILL.md' },
  { id: 'video-generation', name: '视频生成', nameEn: 'Video Generation', slug: 'video-generation', category: 'ai', icon: 'Video', description: 'AI视频生成，支持480p/720p分辨率、文生视频、图生视频', longDescription: '基于doubao-seedance模型实现高质量视频生成。', features: ['480p/720p', '文生视频', '图生视频', '多种宽高比'], useCases: ['短视频创作', '动画制作', '广告片'], status: 'stable', documentation: '/skills/public/prod/video-generation/SKILL.md' },
  { id: 'audio', name: '音频处理', nameEn: 'Audio Processing', slug: 'audio', category: 'ai', icon: 'Mic', description: 'TTS语音合成与ASR语音识别', longDescription: '实现语音合成和语音识别功能。', features: ['TTS合成', 'ASR识别', '多种音色', '实时交互'], useCases: ['语音助手', '有声书', '语音导航'], status: 'stable', documentation: '/skills/public/prod/audio/SKILL.md' },
  { id: 'embedding', name: '向量化', nameEn: 'Embedding', slug: 'embedding', category: 'ai', icon: 'Vector', description: '文本、图像、视频的向量表示', longDescription: '将文本、图像、视频转换为向量表示，用于语义搜索和RAG。', features: ['文本嵌入', '图像嵌入', '视频嵌入', '可定制维度'], useCases: ['语义搜索', '推荐系统', 'RAG知识库'], status: 'stable', documentation: '/skills/public/prod/embedding/SKILL.md' },
  { id: 'web-search', name: '网络搜索', nameEn: 'Web Search', slug: 'web-search', category: 'ai', icon: 'Search', description: '实时网络信息检索，支持AI摘要', longDescription: '实现网络搜索功能，返回结构化结果和AI摘要。', features: ['实时检索', '结构化结果', 'AI摘要', '多源搜索'], useCases: ['新闻聚合', '市场调研', '竞品分析'], status: 'stable', documentation: '/skills/public/prod/web-search/SKILL.md' },
  { id: 'video-edit', name: '视频剪辑', nameEn: 'Video Editing', slug: 'video-edit', category: 'ai', icon: 'Film', description: '视频剪辑、处理', longDescription: '全面的视频处理能力。', features: ['帧提取', '视频剪辑', '字幕添加', '音频提取'], useCases: ['视频后期', '短视频剪辑', '教学视频'], status: 'stable', documentation: '/skills/public/prod/video-edit/SKILL.md' },
  { id: 'knowledge', name: '知识库', nameEn: 'Knowledge Base', slug: 'knowledge', category: 'ai', icon: 'BookOpen', description: '文档导入、向量化存储、语义检索', longDescription: '构建RAG知识库系统。', features: ['多格式导入', '自动向量化', '语义检索'], useCases: ['企业知识库', '智能客服', '文档问答'], status: 'stable', documentation: '/skills/public/prod/knowledge/SKILL.md' },
  { id: 'fetch-url', name: 'URL内容提取', nameEn: 'URL Content Fetching', slug: 'fetch-url', category: 'ai', icon: 'Link', description: '网页和文档内容抓取解析', longDescription: '抓取和解析网页内容，支持PDF、Office文档等。', features: ['网页抓取', 'PDF解析', 'Office解析', '结构化提取'], useCases: ['数据采集', '内容分析', '竞品监控'], status: 'stable', documentation: '/skills/public/prod/fetch-url/SKILL.md' },
  
  // 数据库存储类
  { id: 'supabase', name: 'Supabase数据库', nameEn: 'Supabase Database', slug: 'supabase', category: 'database', icon: 'Database', description: 'PostgreSQL数据库，支持CRUD、实时订阅', longDescription: 'Supabase是开源的Firebase替代品。', features: ['PostgreSQL', '实时订阅', 'Edge Functions', '行级安全'], useCases: ['用户管理', '实时聊天', '数据分析'], status: 'stable', documentation: '/skills/public/prod/supabase/SKILL.md' },
  { id: 'supabase-auth', name: 'Supabase认证', nameEn: 'Supabase Auth', slug: 'supabase-auth', category: 'database', icon: 'Shield', description: '用户身份验证', longDescription: '完整的身份验证解决方案。', features: ['邮箱登录', 'OAuth登录', 'Magic Link', '会话管理'], useCases: ['用户注册', '社交登录', '无密码登录'], status: 'stable', documentation: '/skills/public/prod/supabase-auth/SKILL.md' },
  { id: 'storage', name: '对象存储', nameEn: 'Object Storage', slug: 'storage', category: 'database', icon: 'HardDrive', description: 'S3兼容文件存储', longDescription: 'S3兼容的对象存储服务。', features: ['S3兼容API', '文件上传', 'CDN加速', '图片处理'], useCases: ['文件存储', '媒体托管', '备份归档'], status: 'stable', documentation: '/skills/public/prod/storage/SKILL.md' },
  { id: 'database', name: '通用数据库', nameEn: 'Database', slug: 'database', category: 'database', icon: 'Server', description: '多数据库支持', longDescription: '通用数据库操作技能。', features: ['多数据库', '统一CRUD', '事务支持', 'ORM支持'], useCases: ['企业应用', '数据分析', '日志存储'], status: 'stable', documentation: '/skills/public/prod/database/SKILL.md' },

  // 集成服务类
  { id: 'alipay', name: '支付宝支付', nameEn: 'Alipay Payment', slug: 'alipay-payment-integration', category: 'integration', icon: 'CreditCard', description: '支付宝支付集成', longDescription: '集成支付宝支付能力。', features: ['扫码支付', 'APP支付', '支付回调', '退款'], useCases: ['电商支付', '线下扫码', '小程序支付'], status: 'stable', documentation: '/skills/public/prod/alipay-payment-integration/SKILL.md' },
  { id: 'wechat-bot', name: '企业微信机器人', nameEn: 'WeChat Work Bot', slug: 'wechat-bot', category: 'integration', icon: 'MessageSquare', description: '企业微信机器人消息推送', longDescription: '企业微信机器人Webhook集成。', features: ['文本消息', 'Markdown', '图片消息', '卡片消息'], useCases: ['运维告警', '订单通知', '审批提醒'], status: 'stable', documentation: '/skills/public/prod/wechat-bot/SKILL.md' },
  { id: 'feishu', name: '飞书集成', nameEn: 'Feishu Integration', slug: 'feishu-base', category: 'integration', icon: 'Table', description: '飞书多维表格和消息', longDescription: '飞书多维表格和消息推送集成。', features: ['数据CRUD', '消息推送', '卡片消息'], useCases: ['项目管理', '客户管理', '工作通知'], status: 'stable', documentation: '/skills/public/prod/feishu-base/SKILL.md' },
  { id: 'volcano', name: '火山方舟', nameEn: 'Volcano Ark', slug: 'volcano-ark', category: 'integration', icon: 'Flame', description: '火山方舟大模型API', longDescription: '火山引擎方舟大模型服务集成。', features: ['豆包模型', '多模型切换', '流式输出'], useCases: ['AI应用', '企业智能化', '对话系统'], status: 'stable', documentation: '/skills/public/prod/volcano-ark/SKILL.md' },
  { id: 'email', name: '邮件服务', nameEn: 'Email Service', slug: 'email', category: 'integration', icon: 'Mail', description: '邮件发送服务', longDescription: '邮件发送和接收服务。', features: ['SMTP发送', 'IMAP接收', 'HTML邮件', '附件支持'], useCases: ['注册验证', '密码重置', '订单通知'], status: 'stable', documentation: '/skills/public/prod/email/SKILL.md' },
  { id: 'document-gen', name: '文档生成', nameEn: 'Document Generation', slug: 'document-generation', category: 'integration', icon: 'FileText', description: 'PDF/DOCX/XLSX文档生成', longDescription: '专业文档生成服务。', features: ['PDF生成', 'Word生成', 'Excel生成', '批量生成'], useCases: ['报告生成', '合同生成', '发票开具'], status: 'stable', documentation: '/skills/public/prod/document-generation/SKILL.md' },
  { id: 'pptx', name: 'PPT演示生成', nameEn: 'PPTX Generation', slug: 'pptx-generation', category: 'integration', icon: 'Presentation', description: 'PowerPoint演示文稿生成', longDescription: '从Markdown生成PPT。', features: ['PPT生成', '主题模板', '图表插入'], useCases: ['商业计划', '产品演示', '培训课件'], status: 'stable', documentation: '/skills/public/prod/pptx-generation/SKILL.md' },

  // 前端开发类
  { id: 'frontend-design', name: '前端界面设计', nameEn: 'Frontend Design', slug: 'frontend-design', category: 'frontend', icon: 'Palette', description: '独特风格的UI设计', longDescription: '创建独特、精致的前端界面。', features: ['独特风格', '精致细节', '动效设计', '响应式'], useCases: ['落地页', '仪表盘', '组件库'], status: 'stable', documentation: '/skills/public/prod/frontend-design/SKILL.md' },
  { id: 'shadcn-theme', name: 'Shadcn主题配置', nameEn: 'Shadcn Theme', slug: 'shadcn-web-base-theme', category: 'frontend', icon: 'Paintbrush', description: 'Shadcn/ui主题定制', longDescription: 'Shadcn/ui组件库主题配置。', features: ['颜色系统', '字体配置', '圆角定制', '暗色模式'], useCases: ['品牌定制', '主题换肤', '设计系统'], status: 'stable', documentation: '/skills/public/prod/shadcn-web-base-theme/SKILL.md' },
  { id: 'ui-ux', name: 'UI/UX设计智能', nameEn: 'UI/UX Pro Max', slug: 'ui-ux-pro-max', category: 'frontend', icon: 'Layers', description: '50+种设计风格', longDescription: '全面的UI/UX设计指南。', features: ['50+风格', '97配色', '57字体', '9技术栈'], useCases: ['设计系统', '产品设计', '组件开发'], status: 'stable', documentation: '/skills/public/prod/ui-ux-pro-max/SKILL.md' },
  { id: 'react-perf', name: 'React性能优化', nameEn: 'React Performance', slug: 'vercel-react-best-practices', category: 'frontend', icon: 'Zap', description: 'Next.js性能优化', longDescription: 'Vercel性能优化指南。', features: ['组件优化', '数据获取', 'Bundle优化'], useCases: ['性能调优', '加载优化', 'SEO优化'], status: 'stable', documentation: '/skills/public/prod/vercel-react-best-practices/SKILL.md' },
  { id: 'react-patterns', name: 'React组件模式', nameEn: 'React Patterns', slug: 'vercel-composition-patterns', category: 'frontend', icon: 'Code', description: '可扩展的组件架构', longDescription: 'React组合模式指南。', features: ['复合组件', 'Children模式', 'Context设计'], useCases: ['组件库设计', 'API设计', '代码重构'], status: 'stable', documentation: '/skills/public/prod/vercel-composition-patterns/SKILL.md' },

  // 移动端开发类
  { id: 'expo', name: 'Expo高级开发', nameEn: 'Expo Advanced', slug: 'expo-advanced', category: 'mobile', icon: 'Smartphone', description: 'React Native Expo开发', longDescription: 'React Native Expo开发的高级规范。', features: ['录音功能', '文件上传', '瀑布流布局'], useCases: ['音频录制', '社交分享', '内容发布'], status: 'stable', documentation: '/skills/public/prod/expo-advanced/SKILL.md' },
  { id: 'miniapp', name: '小程序适配', nameEn: 'MiniApp Adaptation', slug: 'miniapp-upload-asr', category: 'mobile', icon: 'AppWindow', description: '小程序跨端方案', longDescription: '小程序跨端开发规范。', features: ['录音适配', '上传适配', 'API封装'], useCases: ['小程序开发', 'H5嵌入', '跨端应用'], status: 'stable', documentation: '/skills/public/prod/miniapp-upload-asr/SKILL.md' },

  // 运维支持类
  { id: 'repair', name: '环境修复', nameEn: 'Environment Repair', slug: 'repair', category: 'ops', icon: 'Wrench', description: '开发环境问题修复', longDescription: '开发环境问题调查与修复。', features: ['磁盘诊断', 'Git问题', '缓存清理'], useCases: ['环境搭建', '问题排查', '迁移协助'], status: 'stable', documentation: '/skills/public/prod/repair/SKILL.md' },
  { id: 'doctor', name: '运行时诊断', nameEn: 'Runtime Doctor', slug: 'doctor', category: 'ops', icon: 'Stethoscope', description: '运行时问题诊断', longDescription: '运行时问题诊断工具。', features: ['SQL诊断', '错误追踪', '性能分析'], useCases: ['性能调优', '错误排查', 'SQL优化'], status: 'stable', documentation: '/skills/public/prod/doctor/SKILL.md' },
  { id: 'websocket', name: 'WebSocket指南', nameEn: 'WebSocket Guide', slug: 'websocket-guide', category: 'ops', icon: 'Radio', description: '实时通信集成', longDescription: 'WebSocket实时通信集成指南。', features: ['双向通信', '心跳检测', '自动重连'], useCases: ['实时聊天', '协作编辑', '游戏开发'], status: 'stable', documentation: '/skills/public/prod/websocket-guide/SKILL.md' },
  { id: 'webrtc', name: 'WebRTC规范', nameEn: 'WebRTC Best Practice', slug: 'webrtc-best-practice', category: 'ops', icon: 'Camera', description: '摄像头、麦克风开发', longDescription: 'WebRTC摄像头功能开发规范。', features: ['摄像头', '麦克风', '屏幕共享'], useCases: ['视频通话', '直播功能', '录屏工具'], status: 'stable', documentation: '/skills/public/prod/webrtc-best-practice/SKILL.md' },
  { id: 'web-perf', name: 'Web性能优化', nameEn: 'Web Performance', slug: 'coze-coding-web-performance-best-practice', category: 'ops', icon: 'Gauge', description: '减少重绘与重排', longDescription: 'Web性能优化最佳实践。', features: ['重绘优化', '资源加载', '缓存策略'], useCases: ['首屏优化', '交互优化', '体验提升'], status: 'stable', documentation: '/skills/public/prod/coze-coding-web-performance-best-practice/SKILL.md' }
];

export function getSkillBySlug(slug: string): Skill | undefined {
  return skills.find(skill => skill.slug === slug);
}

export function getSkillsByCategory(categoryId: string): Skill[] {
  return skills.filter(skill => skill.category === categoryId);
}
