import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white font-bold text-lg flex items-center">
            <span className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center mr-2">S</span>
            上海城市可信数据空间
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">首页</Link>
          <Link to="/data-space" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">可信数据空间</Link>
          <Link to="/connector" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">接入连接器</Link>
        </nav>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">业务服务平台</Link>
          <Link to="/business-overview" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">流通业务控制台</Link>
          <button className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-110">
            <span className="text-white font-medium">B</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;