import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ProductList from './ProductList.jsx'
import HomePage from './HomePage.jsx'
import DataSpacePage from './DataSpacePage.jsx'
import ConnectorPage from './ConnectorPage.jsx'
import BusinessOverviewPage from './BusinessOverviewPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/detail" element={<App />} />
        <Route path="/data-space" element={<DataSpacePage />} />
        <Route path="/connector" element={<ConnectorPage />} />
        <Route path="/business-overview" element={<BusinessOverviewPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
