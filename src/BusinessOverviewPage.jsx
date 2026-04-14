import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import BusinessSidebar from './BusinessSidebar';

const BusinessOverviewPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 模拟页面加载
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* 总Header */}
      <Header />
      
      {/* 主内容区 */}
      <div className="flex-1 flex overflow-hidden">
        {/* 左侧菜单栏 */}
        <BusinessSidebar />

        {/* 右侧内容区 */}
        <div className="flex-1 flex flex-col overflow-hidden">

        {/* 主内容 */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className={`opacity-0 transform translate-y-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">流通业务概览</h1>

            {/* 统计卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-500 text-sm">已加入空间</span>
                </div>
                <div className="text-3xl font-bold text-gray-800">3</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <span className="text-gray-500 text-sm">数据产品</span>
                </div>
                <div className="text-3xl font-bold text-gray-800">12</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-gray-500 text-sm">流通订单</span>
                </div>
                <div className="text-3xl font-bold text-gray-800">8</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-500 text-sm">运行中申请</span>
                </div>
                <div className="text-3xl font-bold text-gray-800">2</div>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 最近活动 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">最近活动</h2>
                <div className="space-y-4">
                  <div className="flex items-start justify-between p-3 border-b border-gray-100">
                    <div>
                      <p className="text-gray-800">产品"企业信用数据API"上架审核通过</p>
                      <p className="text-gray-500 text-sm mt-1">2026-01-18 15:30:00</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">完成</span>
                  </div>
                  <div className="flex items-start justify-between p-3 border-b border-gray-100">
                    <div>
                      <p className="text-gray-800">产品"企业信用数据API"上架审核通过</p>
                      <p className="text-gray-500 text-sm mt-1">2026-01-18 15:30:00</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">完成</span>
                  </div>
                  <div className="flex items-start justify-between p-3">
                    <div>
                      <p className="text-gray-800">产品"企业信用数据API"上架审核通过</p>
                      <p className="text-gray-500 text-sm mt-1">2026-01-18 15:30:00</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">完成</span>
                  </div>
                </div>
              </div>

              {/* 快速入口 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">快速入口</h2>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-800">发布新产品</span>
                    </div>
                    <p className="text-gray-500 text-sm">自助发布你的数据产品</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-800">加入新空间</span>
                    </div>
                    <p className="text-gray-500 text-sm">申请加入已有的数据空间</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
  );
};

export default BusinessOverviewPage;