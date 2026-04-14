import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 模拟页面加载
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* 总Header */}
      <Header />

      {/* 主横幅 */}
      <section className="relative h-[500px] overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <img 
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20blue%20and%20purple%20gradient%20background%20with%20dynamic%20light%20streaks%20and%20curves%2C%20modern%20tech%20style%2C%20dark%20background&image_size=landscape_16_9" 
            alt="背景" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* 文字内容 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className={`opacity-0 transform translate-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <h1 className="text-4xl font-bold mb-6 text-white">上海城市可信数据空间</h1>
              <p className="text-lg text-white mb-4 max-w-3xl mx-auto">正式运行加入企业近300家，开发形成数据产品超过300个，累计数据调用数以亿计</p>
              <p className="text-lg text-white mb-4 max-w-3xl mx-auto">全国首批"可信数据空间创新试点"城市</p>
              <p className="text-lg text-white mb-10 max-w-3xl mx-auto">遵循国家数标委、信通院制定的国家标准，立足上海，联通全国</p>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '8', label: '可信数据空间总数', delay: 0.1 },
              { value: '316', label: '参与利用方数量', delay: 0.2 },
              { value: '145', label: '数据产品数量', delay: 0.3 },
              { value: '4', label: '上链场景数', delay: 0.4 }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`opacity-0 transform translate-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
                style={{ transitionDelay: `${0.5 + stat.delay}s` }}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-lg text-center hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务平台 */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className={`opacity-0 transform translate-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">服务平台</h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">上海数据流通利用共性服务统一基础设施，统一能力服务，统一用数体验</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '公共数据授权运营平台', description: '提供公共数据资源目录，实现公共数据有序开放共享。', delay: 0.1 },
              { title: '公共数据开放平台', description: '汇聚政府部门开放数据，促进数据资源开发共享。', delay: 0.2 },
              { title: '区块链公共服务', description: '提供区块链底层基础设施，保障数据交易安全可信。', delay: 0.3 },
              { title: '隐私保护计算公共服务', description: '实现数据可用不可见，保护数据安全生命周期安全。', delay: 0.4 }
            ].map((service, index) => (
              <div 
                key={index}
                className={`opacity-0 transform translate-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
                style={{ transitionDelay: `${0.7 + service.delay}s` }}
              >
                <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-lg hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 典型案例 */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className={`opacity-0 transform translate-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">典型案例展示</h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">覆盖全部行业的经典案例展示，精准分析行业数据产品的数据情况与应用的数据报告</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '中药安心达', description: '一键查询的"中药安心达"信息真实吗？区块链能"锁住"信息防篡改，让中药有了"身份码"这是上海移动的5G、区块链、分布式数据库等技术在上海中药云"中药安心达"项目中发挥的大作用。', delay: 0.1 },
              { title: '工行区块链赋能', description: '工行参与国家可信数据空间创新发展试点，区块链技术从3方面赋能工行金融科技研究院区块链研究团队撰文分享了区块链赋能可信数据空间建设的研究与实践。', delay: 0.2 },
              { title: '知识产权可信数据空间', description: '上海上线运行知识产权可信数据空间日前，上海市知识产权局与上海数据集团共同打造了上海市知识产权可信数据空间，并正式上线运行。', delay: 0.3 }
            ].map((case_, index) => (
              <div 
                key={index}
                className={`opacity-0 transform translate-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
                style={{ transitionDelay: `${0.9 + case_.delay}s` }}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-lg hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{case_.title}</h3>
                  <p className="text-gray-400">{case_.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 新闻动态 */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className={`opacity-0 transform translate-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '1s' }}>
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">新闻动态</h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">查看最新的政策，了解各行各业数据使用动态，促进数据有效共享</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '信筑生态·数享价值｜2025全球数商大会可信数据流通主题论坛在沪举办', content: '11月26日上午，围绕"构建可信数据新生态，赋能城市数字化转型"的可信数据流通主题论坛在上海举办。', date: '2025/12/08', delay: 0.1 },
              { title: '上海城市可信数据空间试运行 已有近300家企业加入 形成数据产品超300个', content: '上海超大城市级可信数据空间加快落地，并在今年7月成为国家数据局公布的首批63个可信数据空间创新发展试点项目之一。', date: '2025/12/08', delay: 0.2 },
              { title: '国家数据局正式公布可信数据空间创新发展试点名单', content: '7月16日，国家数据局综合司正式发布《2025年可信数据空间创新发展试点名单》。名单显示2025年可信数据空间创新发展试点项目共63个，其中城市可信数据空间方向13个，行业可信数据空间方向22个，企业可信数据空间方向28个。', date: '2025/12/08', delay: 0.3 },
              { title: '《可信数据空间标准化研究报告（2025版）》正式发布', content: '本研究报告基于可信数据空间建设现状，以及已有标准基础，根据我国可信数据空间未来发展趋势，以《国家数据标准体系建设指南》为指导，形成可信数据空间标准体系框架，属于国家数据标准体系中"数据基础设施－流通利用设施"标准。', date: '2025/12/08', delay: 0.4 }
            ].map((news, index) => (
              <div 
                key={index}
                className={`opacity-0 transform translate-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
                style={{ transitionDelay: `${1.1 + news.delay}s` }}
              >
                <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-lg hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{news.title}</h3>
                  <p className="text-gray-400 mb-4">{news.content}</p>
                  <p className="text-gray-500 text-sm">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">上海城市可信数据空间</h3>
              <p className="text-gray-400">全国首批"可信数据空间创新试点"城市</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">快速链接</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">首页</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">关于我们</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">服务平台</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">典型案例</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">联系我们</h3>
              <p className="text-gray-400">地址：上海市</p>
              <p className="text-gray-400">电话：021-12345678</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">关注我们</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">微信</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">微博</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
            <p>© 2026 上海城市可信数据空间 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;