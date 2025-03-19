import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components";
import GrowthStrategy from "./pages/GrowthStrategy";
import ContentAnalysis from "./pages/ContentAnalysis";
import KnowledgeBase from "./pages/KnowledgeBase";
import "./index.css";

// 模擬用戶數據
const mockUser = {
  name: "測試用戶",
  username: "test_user",
  avatar: null,
};

function App() {
  // 全局搜索處理函數
  const handleSearch = (searchTerm) => {
    console.log("搜尋:", searchTerm);
    // 實際應用中這裡可以實現全局搜索邏輯
  };

  return (
    <Router>
      <Routes>
        {/* 重定向到增粉策略頁面 */}
        <Route path="/" element={<Navigate to="/growth-strategy" replace />} />

        {/* 主應用路由 */}
        <Route
          path="/"
          element={<Layout user={mockUser} onSearch={handleSearch} />}
        >
          {/* 增粉策略顧問頁面 */}
          <Route path="/growth-strategy" element={<GrowthStrategy />} />

          {/* 內容優化分析器頁面 */}
          <Route path="/content-analysis" element={<ContentAnalysis />} />

          {/* 發文排程日曆頁面 */}
          <Route
            path="/posting-schedule"
            element={
              <div className="p-6 bg-white rounded-lg shadow">
                發文排程日曆頁面建設中...
              </div>
            }
          />

          {/* 社群經營知識庫頁面 */}
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
        </Route>

        {/* 404 頁面 */}
        <Route path="*" element={<div>找不到頁面</div>} />
      </Routes>
    </Router>
  );
}

export default App;
