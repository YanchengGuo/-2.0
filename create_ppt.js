import PptxGenJS from 'pptxgenjs';

// Create a new presentation
const pptx = new PptxGenJS();

// Set presentation properties
pptx.author = 'Trae Team';
pptx.title = '可信数据空间项目的Vibe Coding实践';

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
slide1.addText('可信数据空间项目', {
  x: 0, y: 3.5, w: '100%', h: 2,
  fontSize: 44,
  color: colors.lightText,
  align: 'center',
  bold: true
});
slide1.addText('Vibe Coding实践', {
  x: 0, y: 5.5, w: '100%', h: 1.5,
  fontSize: 32,
  color: colors.accent,
  align: 'center',
  bold: true
});
slide1.addText('Trae整体使用方法论、项目成果与问题提示', {
  x: 0, y: 7.5, w: '100%', h: 1,
  fontSize: 18,
  color: colors.lightText,
  align: 'center'
});

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
  '1. Trae整体使用方法论',
  '2. 项目成果',
  '3. 问题提示',
  '4. 结论'
];

tocItems.forEach((item, index) => {
  slide2.addText(item, {
    x: 2, y: 3 + index * 1.2, w: '80%', h: 1,
    fontSize: 20,
    color: colors.text,
    bullet: { type: 'dot', level: 0 }
  });
});

// Slide 3: Trae整体使用方法论
const slide3 = pptx.addSlide();
slide3.background = { fill: colors.background };
slide3.addText('Trae整体使用方法论', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 32,
  color: colors.primary,
  align: 'center',
  bold: true
});

const methodologyItems = [
  '1. 需求分析与规划',
  '2. 代码生成与优化',
  '3. 项目管理与协作',
  '4. 测试与部署'
];

methodologyItems.forEach((item, index) => {
  slide3.addText(item, {
    x: 1.5, y: 3 + index * 1.1, w: '80%', h: 1,
    fontSize: 18,
    color: colors.text,
    bold: true
  });
});

// Slide 4: 需求分析与规划
const slide4 = pptx.addSlide();
slide4.background = { fill: colors.background };
slide4.addText('需求分析与规划', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 28,
  color: colors.primary,
  align: 'center',
  bold: true
});

const planningItems = [
  '• 详细理解用户需求',
  '• 制定清晰的项目规划',
  '• 确定技术栈与架构',
  '• 建立项目里程碑'
];

planningItems.forEach((item, index) => {
  slide4.addText(item, {
    x: 2, y: 3 + index * 0.8, w: '80%', h: 0.8,
    fontSize: 16,
    color: colors.text
  });
});

// Slide 5: 代码生成与优化
const slide5 = pptx.addSlide();
slide5.background = { fill: colors.background };
slide5.addText('代码生成与优化', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 28,
  color: colors.primary,
  align: 'center',
  bold: true
});

const codingItems = [
  '• 使用AI辅助代码生成',
  '• 遵循最佳实践与编码规范',
  '• 持续优化代码质量',
  '• 实现响应式设计与动画效果'
];

codingItems.forEach((item, index) => {
  slide5.addText(item, {
    x: 2, y: 3 + index * 0.8, w: '80%', h: 0.8,
    fontSize: 16,
    color: colors.text
  });
});

// Slide 6: 项目成果
const slide6 = pptx.addSlide();
slide6.background = { fill: colors.background };
slide6.addText('项目成果', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 32,
  color: colors.primary,
  align: 'center',
  bold: true
});

const achievementItems = [
  '1. 完整的可信数据空间平台',
  '2. 数据产品管理系统',
  '3. 接入连接器页面',
  '4. 响应式设计与现代UI'
];

achievementItems.forEach((item, index) => {
  slide6.addText(item, {
    x: 1.5, y: 3 + index * 1.1, w: '80%', h: 1,
    fontSize: 18,
    color: colors.text,
    bold: true
  });
});

// Slide 7: 技术实现成果
const slide7 = pptx.addSlide();
slide7.background = { fill: colors.background };
slide7.addText('技术实现成果', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 28,
  color: colors.primary,
  align: 'center',
  bold: true
});

const techItems = [
  '• React + Vite 构建现代化前端',
  '• Tailwind CSS 实现响应式设计',
  '• React Router 实现页面导航',
  '• 动态气泡效果与动画',
  '• 暗色系主题设计'
];

techItems.forEach((item, index) => {
  slide7.addText(item, {
    x: 2, y: 3 + index * 0.8, w: '80%', h: 0.8,
    fontSize: 16,
    color: colors.text
  });
});

// Slide 8: 问题提示
const slide8 = pptx.addSlide();
slide8.background = { fill: colors.background };
slide8.addText('问题提示', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 32,
  color: colors.primary,
  align: 'center',
  bold: true
});

const issueItems = [
  '1. 技术挑战',
  '2. 性能优化',
  '3. 兼容性问题',
  '4. 维护与更新'
];

issueItems.forEach((item, index) => {
  slide8.addText(item, {
    x: 1.5, y: 3 + index * 1.1, w: '80%', h: 1,
    fontSize: 18,
    color: colors.text,
    bold: true
  });
});

// Slide 9: 技术挑战与解决方案
const slide9 = pptx.addSlide();
slide9.background = { fill: colors.background };
slide9.addText('技术挑战与解决方案', {
  x: 0, y: 1, w: '100%', h: 1.5,
  fontSize: 28,
  color: colors.primary,
  align: 'center',
  bold: true
});

const challengeItems = [
  '• 动态气泡效果实现',
  '• 响应式布局适配',
  '• 动画性能优化',
  '• 多页面路由管理'
];

challengeItems.forEach((item, index) => {
  slide9.addText(item, {
    x: 2, y: 3 + index * 0.8, w: '80%', h: 0.8,
    fontSize: 16,
    color: colors.text
  });
});

// Slide 10: 结论
const slide10 = pptx.addSlide();
slide10.background = { fill: colors.primary };
slide10.addText('结论', {
  x: 0, y: 2, w: '100%', h: 1.5,
  fontSize: 36,
  color: colors.lightText,
  align: 'center',
  bold: true
});

const conclusionItems = [
  '• Vibe Coding实践提高了开发效率',
  '• 现代化技术栈确保了项目质量',
  '• 暗色系设计符合现代审美',
  '• 持续优化是项目成功的关键'
];

conclusionItems.forEach((item, index) => {
  slide10.addText(item, {
    x: 0, y: 4 + index * 0.8, w: '100%', h: 0.8,
    fontSize: 18,
    color: colors.lightText,
    align: 'center'
  });
});

// Slide 11: Thank You
const slide11 = pptx.addSlide();
slide11.background = { fill: colors.secondary };
slide11.addText('Thank You!', {
  x: 0, y: 4, w: '100%', h: 2,
  fontSize: 44,
  color: colors.lightText,
  align: 'center',
  bold: true
});

// Save the presentation
pptx.writeFile({ fileName: '可信数据空间项目_Vibe_Coding实践.pptx' });

console.log('PPT生成完成！');
