import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const ConnectorPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 模拟页面加载
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* 总Header */}
      <Header />

      {/* 主内容 */}
      <main className="container mx-auto px-4 py-12">
        {/* 页面标题 */}
        <div className={`text-center mb-12 opacity-0 transform translate-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h1 className="text-3xl font-bold text-white mb-4">接入连接器</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">连接数据供需，构建可信流通网络，提供安全、高效、可控的数据接入与流通服务。</p>
          
          <div className="flex justify-center space-x-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transform hover:-translate-y-1">
              快速选择器
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              使用说明文档
            </button>
          </div>
        </div>

        {/* 功能亮点 */}
        <div className={`mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <div className="flex items-center mb-8">
            <div className="w-1 h-6 bg-blue-500 mr-3"></div>
            <h2 className="text-xl font-bold text-white">功能亮点</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 基础功能 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-blue-600/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">基础功能</h3>
              <p className="text-gray-400 text-sm">提供数据源管理、数据管理、访问控制、数据变更日志审计等基础功能，确保接入能力的完整性。</p>
            </div>

            {/* 数据流通利用 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-purple-600/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">数据流通利用</h3>
              <p className="text-gray-400 text-sm">支持点对点数据交换、链产管理、交易管理、计量计费等高效服务，实现数据安全可控流通。</p>
            </div>

            {/* 区块链支持 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-green-600/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">区块链支持</h3>
              <p className="text-gray-400 text-sm">支持数据资产上链、智能合约交易、链上数据交付、链外数据交易的速度和可审计性。</p>
            </div>
          </div>
        </div>

        {/* 底部区域 */}
        <div className={`bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8 opacity-0 transform translate-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">立即加入上海城市可信数据空间</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">通过接入连接器，您可以快速接入数据要素流通生态，实现数据价值的最大化。</p>
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              联系我们咨询
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConnectorPage;