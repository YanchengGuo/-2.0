import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

// 动态气泡组件
const Bubble = ({ size, color, top, left, delay, duration }) => {
  return (
    <div
      className="absolute rounded-full opacity-20 animate-bubble"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        top: top,
        left: left,
        animationDelay: delay + 's',
        animationDuration: duration + 's'
      }}
    />
  );
};

const DataSpacePage = () => {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // 动态气泡数据
  const bubbles = [
    { size: '150px', color: 'rgba(59, 130, 246, 0.6)', top: '10%', left: '5%', delay: 0, duration: 20 },
    { size: '200px', color: 'rgba(139, 92, 246, 0.6)', top: '30%', left: '80%', delay: 5, duration: 25 },
    { size: '100px', color: 'rgba(52, 211, 153, 0.6)', top: '60%', left: '10%', delay: 2, duration: 15 },
    { size: '180px', color: 'rgba(249, 115, 22, 0.6)', top: '80%', left: '70%', delay: 7, duration: 22 },
    { size: '120px', color: 'rgba(236, 72, 153, 0.6)', top: '20%', left: '40%', delay: 3, duration: 18 },
    { size: '160px', color: 'rgba(16, 185, 129, 0.6)', top: '70%', left: '50%', delay: 9, duration: 23 },
    { size: '90px', color: 'rgba(99, 102, 241, 0.6)', top: '40%', left: '90%', delay: 1, duration: 14 },
    { size: '140px', color: 'rgba(244, 114, 182, 0.6)', top: '50%', left: '20%', delay: 6, duration: 21 }
  ];

  useEffect(() => {
    // 模拟页面加载
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  const filters = ['全部', '城市', '行业', '企业'];
  const dataSpaces = [
    {
      id: 1,
      name: '城市公共空间',
      description: '上海城市公共空间',
      color: 'purple',
      delay: 0,
      tag: '区域',
      stats: {
        entities: 128,
        dataProducts: 35,
        transactions: 1250
      }
    },
    {
      id: 2,
      name: '上海市出行服务可信数据空间',
      description: '上海市公共交通出行服务数据空间',
      color: 'blue',
      delay: 0.1,
      tag: '行业',
      stats: {
        entities: 96,
        dataProducts: 28,
        transactions: 980
      }
    },
    {
      id: 3,
      name: '工商银行可信数据空间',
      description: '工商银行企业可信数据空间致力于建立"技术＋数据+生态＋运营"四位一体的企业级数据空间体系',
      color: 'red',
      delay: 0.2,
      tag: '全部',
      stats: {
        entities: 156,
        dataProducts: 42,
        transactions: 2100
      }
    },
    {
      id: 4,
      name: '现代服务业可信数据空间',
      description: '现代服务业数据可信空间，以"垂直深耕+跨域融合"双轮驱动，构建安全合规、场景驱动的数据要素流通枢纽',
      color: 'green',
      delay: 0.3,
      tag: '行业',
      stats: {
        entities: 89,
        dataProducts: 24,
        transactions: 850
      }
    },
    {
      id: 5,
      name: '时空地理可信数据空间',
      description: '为企业提供业务相关的高质量的时空地理信息服务',
      color: 'yellow',
      delay: 0.4,
      tag: '企业',
      stats: {
        entities: 112,
        dataProducts: 31,
        transactions: 1050
      }
    },
    {
      id: 6,
      name: '食无忧食材可信数据空间',
      description: '面向食材全产业链的行业级数据空间运营商，建设"可互信、可互通、可计量、可结算"的公共数据基础设施',
      color: 'pink',
      delay: 0.5,
      tag: '全部',
      stats: {
        entities: 78,
        dataProducts: 19,
        transactions: 720
      }
    }
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-950 text-white">
      {/* 总Header */}
      <Header />
      
      {/* 主内容区 */}
      <div className="flex-1 flex relative overflow-hidden">
        {/* 动态背景气泡 */}
        {bubbles.map((bubble, index) => (
          <Bubble
            key={index}
            size={bubble.size}
            color={bubble.color}
            top={bubble.top}
            left={bubble.left}
            delay={bubble.delay}
            duration={bubble.duration}
          />
        ))}
        {/* 右侧内容区 */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* 主内容 */}
          <main className="flex-1 overflow-y-auto p-8 bg-black">
          {/* 页面标题 */}
          <div className={`opacity-0 transform translate-y-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">可信数据空间</h1>
          </div>

          {/* 筛选标签 */}
          <div className={`opacity-0 transform translate-y-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="flex justify-end mb-10">
              <div className="flex space-x-2 bg-gray-900/50 backdrop-blur-sm p-1.5 rounded-full shadow-lg">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 transform scale-105' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 数据空间卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataSpaces.map((space) => (
              <div
                key={space.id}
                className={`opacity-0 transform translate-y-8 transition-all duration-700 hover:translate-y-2 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
                style={{ transitionDelay: `${0.3 + space.delay}s` }}
                onMouseEnter={() => setHoveredCard(space.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl group relative">
                  {/* 标签 */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-800/50">{space.tag}</span>
                  </div>
                  
                  {/* 卡片内容 */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{space.name}</h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">{space.description}</p>
                    
                    {/* 数据空间可视化图形 */}
                    <div className="flex items-center justify-center h-48 mb-6">
                      <div className="relative w-36 h-36">
                        {/* 环形背景 */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-sm"></div>
                        
                        {/* 环形 */}
                        <div className="absolute inset-0 rounded-full">
                          {/* 环形分段 */}
                          {Array.from({ length: 12 }).map((_, index) => {
                            const angle = (index * 30) % 360;
                            const colors = space.color === 'purple' ? ['#6366f1', '#8b5cf6', '#d946ef'] :
                                         space.color === 'blue' ? ['#3b82f6', '#10b981', '#34d399'] :
                                         space.color === 'red' ? ['#3b82f6', '#ef4444', '#f97316'] :
                                         space.color === 'green' ? ['#10b981', '#34d399', '#6ee7b7'] :
                                         space.color === 'yellow' ? ['#f59e0b', '#fbbf24', '#fcd34d'] :
                                         ['#ec4899', '#f472b6', '#f9a8d4'];
                            const color = colors[index % colors.length];
                            
                            return (
                              <div
                                key={index}
                                className="absolute top-1/2 left-1/2 w-2 h-8 bg-current origin-bottom transform -translate-x-1/2 -translate-y-full"
                                style={{
                                  transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                                  backgroundColor: color,
                                  opacity: 0.8
                                }}
                              />
                            );
                          })}
                        </div>
                        
                        {/* 中心气泡 */}
                        <div className="absolute inset-4 rounded-full flex items-center justify-center">
                          <div className="relative w-full h-full">
                            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
                            <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          

        </main>
      </div>
    </div>
  </div>
  );
};

export default DataSpacePage;

// 动态气泡动画样式
const style = document.createElement('style');
style.textContent = `
  @keyframes bubble {
    0% {
      transform: translateY(0) translateX(0) scale(1);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-200px) translateX(50px) scale(1.1);
      opacity: 0.3;
    }
    100% {
      transform: translateY(-400px) translateX(-20px) scale(0.9);
      opacity: 0.1;
    }
  }
  
  .animate-bubble {
    animation: bubble linear infinite;
  }
`;
document.head.appendChild(style);