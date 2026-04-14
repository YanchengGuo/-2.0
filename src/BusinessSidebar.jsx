import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BusinessSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      path: '/business-overview',
      name: '业务概览',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      path: '/',
      name: '加入数据空间',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      path: '/products',
      name: '数据产品管理',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      path: '/',
      name: '流通业务办理',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      path: '/connector',
      name: '连接器管理',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )
    }
  ];

  const isActive = (path) => {
    // 当路径是 /product/detail 时，也认为数据产品管理是激活状态
    if (path === '/products' && location.pathname === '/product/detail') {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex-shrink-0 border-r border-gray-700 shadow-lg">
      {/* 标题栏 */}
      <div className="p-4 border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <h2 className="font-semibold text-lg text-blue-400 flex items-center">
          <span className="w-8 h-8 rounded-md bg-blue-600/20 flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </span>
          流通业务控制台
        </h2>
      </div>
      
      {/* 导航菜单 */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group ${isActive(item.path) ? 'bg-blue-600/20 text-blue-400' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}
              >
                <span className={`w-8 h-8 flex items-center justify-center rounded-md transition-all duration-300 ${isActive(item.path) ? 'bg-blue-600/30 text-blue-400' : 'text-gray-400 group-hover:text-white'}`}>
                  {item.icon}
                </span>
                <span className="font-medium transition-all duration-300">{item.name}</span>
                {isActive(item.path) && (
                  <span className="ml-auto w-1 h-6 bg-blue-400 rounded-full animate-pulse"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* 底部装饰 */}
      <div className="mt-auto p-4 border-t border-gray-700">
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-70"></div>
      </div>
    </aside>
  );
};

export default BusinessSidebar;