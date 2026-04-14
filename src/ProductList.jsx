import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import BusinessSidebar from './BusinessSidebar';

function ProductList() {
  // 状态管理
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 模拟产品数据
  const products = [
    {
      id: 'PROD-001',
      name: '企业信用评估数据集',
      version: 'V1.0',
      type: '数据集',
      date: '2026-01-10',
      industry: '金融',
      status: '已登记',
     上架Status: '已上架'
    },
    {
      id: 'PROD-002',
      name: '长三角物流运输数据',
      version: 'V1.0',
      type: 'API服务',
      date: '2026-02-01',
      industry: '物流',
      status: '已登记',
     上架Status: '申请中'
    },
    {
      id: 'PROD-003',
      name: '新能源汽车统计分析',
      version: 'V1.0',
      type: '数据报告',
      date: '2026-02-05',
      industry: '汽车',
      status: '未登记',
     上架Status: '未上架'
    },
    {
      id: 'PROD-004',
      name: '三甲医院数据分析引擎',
      version: 'V1.0',
      type: '数据集',
      date: '2026-02-20',
      industry: '医疗',
      status: '已登记',
     上架Status: '已上架'
    },
    {
      id: 'PROD-005',
      name: '实时空气质量监测',
      version: 'V1.0',
      type: 'API服务',
      date: '2026-02-25',
      industry: '环保',
      status: '已登记',
     上架Status: '未上架'
    },
    {
      id: 'PROD-006',
      name: '电商消费行为分析',
      version: 'V1.0',
      type: '数据报告',
      date: '2026-03-05',
      industry: '电商',
      status: '已登记',
     上架Status: '已上架'
    },
    {
      id: 'PROD-007',
      name: '高速公路拥堵指数预测',
      version: 'V1.0',
      type: '数据集',
      date: '2026-02-08',
      industry: '交通',
      status: '未登记',
     上架Status: '未上架'
    },
    {
      id: 'PROD-008',
      name: '企业税收信用等级查询',
      version: 'V1.0',
      type: '数据集',
      date: '2026-01-28',
      industry: '金融',
      status: '已登记',
     上架Status: '已登记'
    },
    {
      id: 'PROD-009',
      name: '房价增长趋势预测',
      version: 'V1.0',
      type: '数据集',
      date: '2026-01-15',
      industry: '房地产',
      status: '已登记',
     上架Status: '已上架'
    },
    {
      id: 'PROD-010',
      name: '上海城市功能细胞模型',
      version: 'V1.0',
      type: '数据集',
      date: '2026-02-04',
      industry: '城市规划',
      status: '已登记',
     上架Status: '申请中'
    }
  ];

  useEffect(() => {
    // 模拟页面加载
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

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
        {/* 主内容 */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className={`opacity-0 transform translate-y-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">数据产品管理</h1>

            {/* 操作栏 */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>批量操作</option>
                    <option>批量删除</option>
                    <option>批量上架</option>
                  </select>
                </div>
              </div>
              <button onClick={() => setShowCreateModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <span>创建数据产品</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            {/* 搜索栏 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 mb-6">
              <div className="flex items-center">
                <label className="mr-4 text-sm font-medium text-gray-600">搜索产品名称：</label>
                <input 
                  type="text" 
                  className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入产品名称"
                />
              </div>
            </div>

            {/* 标签筛选 */}
            <div className="flex items-center mb-6">
              <button className="px-4 py-2 mr-3 border border-blue-500 rounded-lg text-sm font-medium bg-blue-50 text-blue-600 shadow-sm">
                全部
              </button>
              <button className="px-4 py-2 mr-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-300">
                草稿
              </button>
              <button className="px-4 py-2 mr-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-300">
                已登记
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-300">
                已上架
              </button>
            </div>

            {/* 产品列表 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      产品名称
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      产品版本
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      产品类型
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      更新时间
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      行业标签
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      上架状态
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product, index) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link to="/product/detail" className="text-blue-600 hover:text-blue-700 flex items-center transition-colors duration-300">
                          <span className="text-yellow-500 mr-2">⭐</span>
                          {product.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {product.version}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {product.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {product.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                          {product.industry}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {product.status === '已登记' && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                              {product.status}
                            </span>
                          )}
                          {product.status === '未登记' && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                              {product.status}
                            </span>
                          )}
                          {product.上架Status === '已上架' && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                              {product.上架Status}
                            </span>
                          )}
                          {product.上架Status === '申请中' && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                              {product.上架Status}
                            </span>
                          )}
                          {product.上架Status === '未上架' && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                              {product.上架Status}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* 创建数据产品弹窗 */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-800">创建数据产品</h2>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* 步骤指示器 */}
            <div className="flex items-center justify-center mb-10">
              <div className="flex items-center space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium shadow-md shadow-blue-500/30">1</div>
                  <span className="mt-2 text-sm text-blue-600">选择方式</span>
                </div>
                <div className="h-1 flex-1 bg-gray-200"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-medium">2</div>
                  <span className="mt-2 text-sm text-gray-500">填写信息</span>
                </div>
                <div className="h-1 flex-1 bg-gray-200"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-medium">3</div>
                  <span className="mt-2 text-sm text-gray-500">完成</span>
                </div>
              </div>
            </div>
            
            {/* 选择创建方式 */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">选择创建方式</h3>
              <p className="text-gray-600">请选择最适合您的产品创建方式</p>
            </div>
            
            {/* 创建方式选项 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 手工填写 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">手工填写</h4>
                <p className="text-sm text-gray-600">
                  通过向导式表单，逐步完善数据产品的基础信息、业务属性及附件材料。适合首次创建或非标品。
                </p>
              </div>
              
              {/* 模板导入 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-5 group-hover:bg-purple-200 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">模板导入</h4>
                <p className="text-sm text-gray-600">
                  下载标准Excel/JSON模板，批量填报后上传。适合批量创建或已有标准化元数据的场景。
                </p>
              </div>
              
              {/* 数据同步 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/10">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center shadow-md shadow-green-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">数据同步</h4>
                <p className="text-sm text-gray-600">
                  连接数据库或元数据管理平台，自动抓取并同步数据产品信息。适合技术集成场景。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
}

export default ProductList;