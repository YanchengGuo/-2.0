import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import BusinessSidebar from './BusinessSidebar';
import {
  DashboardOutlined,
  UserAddOutlined,
  AppstoreOutlined,
  SettingOutlined,
  RocketOutlined,
  LinkOutlined as LinkOutlinedIcon
} from '@ant-design/icons';

function App() {
  const [isVersionDropdownOpen, setIsVersionDropdownOpen] = useState(false);
  const versionDropdownRef = useRef(null);
  const navigate = useNavigate();

  // 点击外部关闭下拉框
  useEffect(() => {
    function handleClickOutside(event) {
      if (versionDropdownRef.current && !versionDropdownRef.current.contains(event.target)) {
        setIsVersionDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 返回列表按钮点击事件
  const handleBackToList = () => {
    navigate('/products');
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* 总Header */}
      <Header />
      
      {/* 主内容区 */}
      <div className="flex-1 flex">
        {/* 左侧菜单 */}
        <BusinessSidebar />

        {/* 右侧内容区 */}
        <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* 返回区域 */}
        <div className="bg-white border-b border-gray-200 px-6 py-3">
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={handleBackToList}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h2 onClick={handleBackToList} className="text-sm font-medium text-gray-900 cursor-pointer">返回列表</h2>
          </div>
        </div>

        {/* 主内容 */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {/* 产品头部 */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-yellow-500 text-lg font-bold">G</span>
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">高速公路拥堵指数预测</h1>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="relative" ref={versionDropdownRef}>
                      <button 
                        className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={() => setIsVersionDropdownOpen(!isVersionDropdownOpen)}
                      >
                        <span>v1.0</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isVersionDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-10">
                          <button className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 flex items-center space-x-2">
                            <span>➕</span>
                            <span>新增版本</span>
                          </button>
                          <div className="border-t border-gray-100 my-1"></div>
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between">
                            <span>v2.0</span>
                            <span className="text-xs text-blue-600">当前</span>
                          </button>
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between">
                            <span>v1.0</span>
                            <span className="text-xs text-green-600">已上架</span>
                          </button>
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            v3.0
                          </button>
                        </div>
                      )}
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      已登记
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      已上架
                    </span>
                    <span className="text-gray-500">ID: PROD-001</span>
                    <span className="text-gray-500">创建时间：2026-01-10</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium">
                  申请登记
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium flex items-center space-x-1">
                  <span>申请上架</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

          {/* 产品信息内容 */}
          <div className="bg-white rounded-lg shadow-sm">
            {/* 标签页 */}
            <div className="bg-[#f5f7fa]">
              <ul className="flex">
                <li>
                  <a href="#" className="inline-block px-6 py-3 h-12 bg-white text-[#1677ff] font-bold text-base border-t border-l border-r border-white rounded-t-lg">
                    产品信息
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block px-6 py-3 h-12 bg-[#f0f2f5] text-[#333333] text-base border border-[#e8e8e8] rounded-t-lg flex items-center">
                    登记状态
                    <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-[#f6ffed] text-[#52c41a]">已登记</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block px-6 py-3 h-12 bg-[#f0f2f5] text-[#333333] text-base border border-[#e8e8e8] rounded-t-lg flex items-center">
                    上架状态
                    <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-[#f6ffed] text-[#52c41a]">已上架</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-6">
            {/* 视图切换 - 包含产品完善建议 */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex space-x-2 bg-gray-50 p-1 rounded-lg">
                <button className="px-4 py-2 rounded-md text-sm font-medium bg-white text-gray-800 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-300">
                  简化模式
                </button>
                <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-800 hover:shadow-sm hover:border border-gray-200 transition-all duration-300">
                  国标模式
                </button>
              </div>
              <div className="flex items-start space-x-4">
                {/* 产品完善建议 */}
                <div className="bg-blue-50 rounded-lg p-4 w-64">
                  <h3 className="text-sm font-medium text-blue-800 mb-2">产品完善建议</h3>
                  <p className="text-sm text-blue-700">您的产品信息已基本完善，所有国家标准都已达到区分标准！</p>
                </div>
                <button className="text-sm text-blue-500 hover:text-blue-700 flex items-center space-x-1 mt-2">
                  <span>编辑详情</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 基本信息 */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                基本信息
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">产品名称</label>
                    <p className="text-gray-900">高速公路拥堵指数预测</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">产品类型</label>
                    <p className="text-gray-900">API</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">支付方式</label>
                    <p className="text-gray-900">API调用</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">产品标签</label>
                    <p className="text-gray-900">Transport</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">产品说明</label>
                    <p className="text-gray-900">基于小明的未来24小时交通预测</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 数据描述 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                数据描述
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">数据字典 / Schema</label>
                  <div className="border border-gray-200 rounded p-3 bg-gray-50">
                    <p className="text-gray-500 text-sm">按照标准JSON格式填写数据字典，包含字段名称、类型、说明等</p>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <button className="text-sm text-blue-500 hover:text-blue-700">查看详情</button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">数据样例</label>
                  <div className="border border-gray-200 rounded p-3 bg-gray-50">
                    <p className="text-gray-500 text-sm">请上传JSON格式的数据样例文件</p>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <span className="text-sm text-gray-500">未上传</span>
                  </div>
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
}

export default App;
