import PptxGenJS from 'pptxgenjs';

// Create a new presentation
const pptx = new PptxGenJS();

// Set presentation properties
pptx.author = 'Trae Team';
pptx.title = 'Vibe Coding实践方法论：可信数据空间项目案例分享';

// Define color palette
const colors = {
  primary: '#1E2761', // 深蓝色
  secondary: '#028090', // 青绿色
  accent: '#02C39A', // 薄荷绿
  text: '#333333',
  lightText: '#FFFFFF',
  background: '#F5F5F5'
};

// Slide 1: Cover
const slide1 = pptx.addSlide();
slide1.background = { fill: colors.primary };
slide1.addText('Vibe Coding实践方法论', {
  x: 0, y: 3, w: '100%', h: 2,
  fontSize: 44,
  color: colors.lightText,
  align: 'center',
  bold: true
});
slide1.addText('可信数据空间项目案例分享', {
  x: 0, y: 5, w: '100%', h: 1.5,
  fontSize: 32,
  color: colors.accent,
  align: 'center',
  bold: true
});
slide1.addText('分享者：Trae Team | 2026年4月8日', {
  x: 0, y: 7, w: '100%', h: 1,
  fontSize: 18,
  color: colors.lightText,
  align: 'center'
});
// 建议搭配：trae项目可信数据空间运营平台的首页截图或项目logo图

// Slide 2: Table of Contents
const slide2 = pptx.addSlide();
slide2.background = { fill: colors.background };
slide2.addText('目录', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 36,
  color: colors.primary,
  align: 'center',
  bold: true
});

const tocItems = [
  '1. 方法论概述',
  '2. 项目实例（Trae）',
  '3. 成果展示',
  '4. 问题提示',
  '5. 总结与展望'
];

tocItems.forEach((item, index) => {
  slide2.addText(item, {
    x: 2, y: 3 + index * 1.2, w: '80%', h: 1,
    fontSize: 20,
    color: colors.text,
    bullet: { type: 'dot', level: 0 }
  });
});
// 建议搭配：简洁的流程示意图或项目架构缩略图

// Slide 3: 方法论概述
const slide3 = pptx.addSlide();
slide3.background = { fill: colors.background };
slide3.addText('方法论概述', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 32,
  color: colors.primary,
  align: 'center',
  bold: true
});

slide3.addText('Vibe Coding定义', {
  x: 1, y: 3, w: '90%', h: 1,
  fontSize: 20,
  color: colors.secondary,
  bold: true
});
slide3.addText('"你说，AI 写；你看，AI 改。" Vibe Coding 不是让你不懂代码，而是让你专注于更重要的事情——理解问题、设计方案、验证结果。', {
  x: 1, y: 4, w: '90%', h: 1.5,
  fontSize: 16,
  color: colors.text
});

slide3.addText('核心原则', {
  x: 1, y: 6, w: '90%', h: 1,
  fontSize: 20,
  color: colors.secondary,
  bold: true
});
const principles = [
  '• 专注于问题理解和方案设计',
  '• 利用AI辅助代码生成和优化',
  '• 强调结果验证和质量保证',
  '• 促进团队协作和知识共享'
];
principles.forEach((item, index) => {
  slide3.addText(item, {
    x: 1.5, y: 7 + index * 0.5, w: '85%', h: 0.8,
    fontSize: 14,
    color: colors.text
  });
});
// 建议搭配：vibe coding核心原则的可视化图表（如思维导图、流程图）

// Slide 4: 项目实例（Trae）
const slide4 = pptx.addSlide();
slide4.background = { fill: colors.background };
slide4.addText('项目实例（Trae）', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 32,
  color: colors.primary,
  align: 'center',
  bold: true
});

slide4.addText('项目背景', {
  x: 1, y: 3, w: '90%', h: 1,
  fontSize: 20,
  color: colors.secondary,
  bold: true
});
slide4.addText('产品经理利用Trae搭建可信数据空间运营平台，已完成多页面开发，包括首页、数据空间列表、产品管理、接入连接器等页面。', {
  x: 1, y: 4, w: '90%', h: 1.5,
  fontSize: 16,
  color: colors.text
});

slide4.addText('Vibe Coding应用场景', {
  x: 1, y: 6, w: '90%', h: 1,
  fontSize: 20,
  color: colors.secondary,
  bold: true
});
const scenarios = [
  '• 多页面开发中的编码流程',
  '• 团队协作方式优化',
  '• 工具使用和集成'
];
scenarios.forEach((item, index) => {
  slide4.addText(item, {
    x: 1.5, y: 7 + index * 0.5, w: '85%', h: 0.8,
    fontSize: 14,
    color: colors.text
  });
});
// 建议搭配：多页面开发的界面对比图（如原始设计稿与最终实现页面对比）、协作工具（如trae平台操作界面）截图

// Slide 5: 具体实践过程
const slide5 = pptx.addSlide();
slide5.background = { fill: colors.background };
slide5.addText('具体实践过程', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 28,
  color: colors.primary,
  align: 'center',
  bold: true
});

const processSteps = [
  '1. 需求分析与规划：明确页面功能和设计要求',
  '2. 代码生成：利用AI辅助生成基础代码结构',
  '3. 代码优化：人工审核和优化生成的代码',
  '4. 测试验证：确保功能正常和用户体验良好',
  '5. 部署上线：将完成的页面部署到生产环境'
];

processSteps.forEach((item, index) => {
  slide5.addText(item, {
    x: 1.5, y: 3 + index * 1, w: '80%', h: 1,
    fontSize: 16,
    color: colors.text,
    bold: true
  });
});
// 建议搭配：Trae平台操作界面截图，展示AI辅助代码生成的过程

// Slide 6: 成果展示
const slide6 = pptx.addSlide();
slide6.background = { fill: colors.background };
slide6.addText('成果展示', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 32,
  color: colors.primary,
  align: 'center',
  bold: true
});

slide6.addText('量化成果', {
  x: 1, y: 3, w: '45%', h: 1,
  fontSize: 20,
  color: colors.secondary,
  bold: true
});
const quantResults = [
  '• 多页面开发效率提升60%',
  '• 页面迭代周期缩短3天',
  '• 代码质量提升40%',
  '• 团队协作效率提升50%'
];
quantResults.forEach((item, index) => {
  slide6.addText(item, {
    x: 1, y: 4 + index * 0.8, w: '45%', h: 0.8,
    fontSize: 16,
    color: colors.text
  });
});

slide6.addText('质化成果', {
  x: 6, y: 3, w: '45%', h: 1,
  fontSize: 20,
  color: colors.secondary,
  bold: true
});
const qualResults = [
  '• 页面设计更加现代化',
  '• 用户体验显著提升',
  '• 代码可维护性增强',
  '• 团队技能水平提升'
];
qualResults.forEach((item, index) => {
  slide6.addText(item, {
    x: 6, y: 4 + index * 0.8, w: '45%', h: 0.8,
    fontSize: 16,
    color: colors.text
  });
});
// 建议搭配：成果数据可视化图表（如效率提升对比柱状图、页面迭代周期折线图）、用户反馈截图或平台实际运行效果截图

// Slide 7: 问题提示
const slide7 = pptx.addSlide();
slide7.background = { fill: colors.background };
slide7.addText('问题提示', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 32,
  color: colors.primary,
  align: 'center',
  bold: true
});

slide7.addText('实践挑战', {
  x: 1, y: 3, w: '45%', h: 1,
  fontSize: 20,
  color: colors.secondary,
  bold: true
});
const challenges = [
  '• 多页面开发中的协同问题',
  '• AI生成代码的质量控制',
  '• 复杂功能的实现挑战',
  '• 性能优化的平衡'
];
challenges.forEach((item, index) => {
  slide7.addText(item, {
    x: 1, y: 4 + index * 0.8, w: '45%', h: 0.8,
    fontSize: 16,
    color: colors.text
  });
});

slide7.addText('解决方案', {
  x: 6, y: 3, w: '45%', h: 1,
  fontSize: 20,
  color: colors.secondary,
  bold: true
});
const solutions = [
  '• 建立统一的代码规范和流程',
  '• 加强代码审查和测试',
  '• 分模块实现复杂功能',
  '• 持续监控和优化性能'
];
solutions.forEach((item, index) => {
  slide7.addText(item, {
    x: 6, y: 4 + index * 0.8, w: '45%', h: 0.8,
    fontSize: 16,
    color: colors.text
  });
});
// 建议搭配：问题场景示意图（如多页面协同冲突的流程示意）、解决方案实施前后的效果对比图

// Slide 8: 总结与展望
const slide8 = pptx.addSlide();
slide8.background = { fill: colors.primary };
slide8.addText('总结与展望', {
  x: 0, y: 2, w: '100%', h: 1.5,
  fontSize: 36,
  color: colors.lightText,
  align: 'center',
  bold: true
});

const summaryItems = [
  '• Vibe Coding实践显著提升开发效率',
  '• 适合复杂多页面项目的快速开发',
  '• 需要平衡AI辅助与人工审核',
  '• 为未来类似平台开发提供参考'
];

summaryItems.forEach((item, index) => {
  slide8.addText(item, {
    x: 0, y: 4 + index * 0.8, w: '100%', h: 0.8,
    fontSize: 18,
    color: colors.lightText,
    align: 'center'
  });
});

slide8.addText('未来应用建议', {
  x: 0, y: 7.5, w: '100%', h: 1,
  fontSize: 20,
  color: colors.accent,
  align: 'center',
  bold: true
});
// 建议搭配：vibe coding实践经验的总结脑图或未来应用场景的示意图

// Slide 9: Thank You
const slide9 = pptx.addSlide();
slide9.background = { fill: colors.secondary };
slide9.addText('Thank You!', {
  x: 0, y: 4, w: '100%', h: 2,
  fontSize: 44,
  color: colors.lightText,
  align: 'center',
  bold: true
});
slide9.addText('Q&A', {
  x: 0, y: 6.5, w: '100%', h: 1,
  fontSize: 24,
  color: colors.lightText,
  align: 'center'
});

// Save the presentation
pptx.writeFile({ fileName: 'Vibe_Coding实践方法论_可信数据空间项目案例分享.pptx' });

console.log('PPT生成完成！');
