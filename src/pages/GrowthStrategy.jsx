import React, { useState } from "react";
import { Button, Card, DataCard } from "../components";

const GrowthStrategy = () => {
  // 模擬數據
  const followersStats = {
    totalFollowers: 2548,
    weeklyGrowth: 157,
    growthRate: 6.5,
    engagementRate: 3.8,
    clickThroughRate: 2.1,
    topPerformingContent: "關於Threads算法解析的貼文",
  };

  // 策略建議數據
  const strategyRecommendations = [
    {
      id: 1,
      title: "增加發文頻率",
      description:
        "根據您的粉絲活躍時間，建議每天增加至少一篇優質內容，特別是在晚間7-9點之間。",
      impact: "預計可提升曝光率約15%",
      difficulty: "中等",
      timeRequired: "每天30-45分鐘",
      category: "posting_frequency",
    },
    {
      id: 2,
      title: "優化互動策略",
      description: "針對每篇貼文的前5條評論進行回覆，增加與粉絲的互動深度。",
      impact: "預計可提升粉絲忠誠度約18%",
      difficulty: "低",
      timeRequired: "每天15-20分鐘",
      category: "engagement",
    },
    {
      id: 3,
      title: "主題聚焦策略",
      description: "建議將內容聚焦在3-5個核心主題上，增強您的專業形象。",
      impact: "預計可提升內容相關度約22%",
      difficulty: "中等",
      timeRequired: "一次性規劃2小時，後續每週審視1小時",
      category: "content_strategy",
    },
    {
      id: 4,
      title: "主題標籤策略",
      description:
        "分析顯示特定主題標籤能大幅提升您的內容曝光。建議在每篇貼文中使用3-5個熱門且相關的標籤。",
      impact: "預計可提升觸及率約25%",
      difficulty: "低",
      timeRequired: "每篇貼文額外5分鐘",
      category: "hashtags",
    },
  ];

  // 內容類型效果數據
  const contentTypeEffects = [
    { type: "算法解析", effectiveness: 87, growth: 3.2 },
    { type: "實用技巧", effectiveness: 72, growth: 2.5 },
    { type: "案例分析", effectiveness: 68, growth: 1.8 },
    { type: "行業動態", effectiveness: 54, growth: 1.2 },
    { type: "互動問答", effectiveness: 76, growth: 2.7 },
  ];

  // 當前選中的策略
  const [selectedStrategy, setSelectedStrategy] = useState(
    strategyRecommendations[0].id
  );

  // 選擇策略
  const handleSelectStrategy = (id) => {
    setSelectedStrategy(id);
  };

  // 獲取當前選中的策略詳情
  const getSelectedStrategyDetails = () => {
    return strategyRecommendations.find(
      (strategy) => strategy.id === selectedStrategy
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* 左側：主要內容區 - AI 分析的關鍵增粉建議 */}
      <div className="flex-1">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">增粉策略顧問</h2>
          <Button icon="✨">生成完整報告</Button>
        </div>

        {/* 策略列表 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              AI 推薦增粉策略
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {strategyRecommendations.map((strategy) => (
              <div
                key={strategy.id}
                className={`p-4 cursor-pointer transition-colors hover:bg-gray-50 ${
                  strategy.id === selectedStrategy
                    ? "bg-primary-light/10 border-l-4 border-primary"
                    : ""
                }`}
                onClick={() => handleSelectStrategy(strategy.id)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {strategy.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {strategy.description}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      strategy.difficulty === "低"
                        ? "bg-green-100 text-green-800"
                        : strategy.difficulty === "中等"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {strategy.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 策略詳情 - 根據所選策略顯示詳細信息 */}
        {getSelectedStrategyDetails() && (
          <div className="mt-6 bg-white rounded-lg shadow">
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">策略詳情</h3>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-medium text-primary">
                {getSelectedStrategyDetails().title}
              </h4>
              <p className="mt-2 text-gray-700">
                {getSelectedStrategyDetails().description}
              </p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="text-sm font-medium text-gray-500">
                    預期效果
                  </h5>
                  <p className="text-primary font-medium">
                    {getSelectedStrategyDetails().impact}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="text-sm font-medium text-gray-500">
                    執行難度
                  </h5>
                  <p className="font-medium">
                    {getSelectedStrategyDetails().difficulty}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="text-sm font-medium text-gray-500">
                    所需時間
                  </h5>
                  <p className="font-medium">
                    {getSelectedStrategyDetails().timeRequired}
                  </p>
                </div>
              </div>

              {/* 行動建議 */}
              <div className="mt-6 bg-primary-light/10 p-4 rounded-lg border border-primary-light">
                <h4 className="font-medium text-primary">行動建議</h4>
                <ul className="mt-2 space-y-2 text-gray-700">
                  {getSelectedStrategyDetails().category ===
                    "posting_frequency" && (
                    <>
                      <li>• 設置每日發文提醒，優先選擇晚間7-9點時段</li>
                      <li>• 提前準備3-5篇高質量文章，作為緩衝</li>
                      <li>• 使用排程功能，確保在最佳時間點發布</li>
                    </>
                  )}
                  {getSelectedStrategyDetails().category === "engagement" && (
                    <>
                      <li>• 每天固定時間（如早上9點和晚上8點）回覆評論</li>
                      <li>• 優先回覆有問題的評論，增加互動深度</li>
                      <li>• 對特別有見解的評論進行引用回覆，提高曝光</li>
                    </>
                  )}
                  {getSelectedStrategyDetails().category ===
                    "content_strategy" && (
                    <>
                      <li>• 根據數據分析確定3-5個最受歡迎的主題方向</li>
                      <li>• 為每個主題創建內容日曆，保持主題連貫性</li>
                      <li>• 定期評估各主題效果，調整內容比重</li>
                    </>
                  )}
                  {getSelectedStrategyDetails().category === "hashtags" && (
                    <>
                      <li>• 創建常用主題標籤庫，分類保存</li>
                      <li>• 每篇貼文使用1-2個熱門標籤和2-3個相關專業標籤</li>
                      <li>• 定期更新標籤庫，跟踪熱門話題變化</li>
                    </>
                  )}
                </ul>
                <div className="mt-4 flex justify-end">
                  <Button>採用此策略</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 右側：數據概覽面板 */}
      <div className="md:w-80 space-y-6">
        {/* 關鍵指標 */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-4 text-gray-900">
            帳號數據概覽
          </h3>
          <div className="space-y-4">
            <DataCard
              title="總粉絲數"
              value={followersStats.totalFollowers}
              icon="👥"
              trend="up"
              trendValue={followersStats.growthRate}
              trendPeriod="相比上週"
            />
            <DataCard
              title="本週新增粉絲"
              value={followersStats.weeklyGrowth}
              icon="📈"
              color="#71a8c8"
            />
            <DataCard
              title="互動率"
              value={followersStats.engagementRate}
              unit="%"
              icon="💬"
              color="#EE6C4D"
            />
            <DataCard
              title="點擊轉化率"
              value={followersStats.clickThroughRate}
              unit="%"
              icon="🔗"
              color="#6c4b3a"
            />
          </div>
        </div>

        {/* 內容類型效果分析 */}
        <Card title="內容類型效果分析">
          <div className="space-y-3">
            {contentTypeEffects.map((content, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{content.type}</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                    <div
                      className="bg-primary rounded-full h-2"
                      style={{ width: `${content.effectiveness}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">
                    {content.effectiveness}%
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                <span className="font-medium">推薦：</span>
                根據分析，「算法解析」類型內容效果最佳，平均帶來3.2%的粉絲增長。
              </p>
            </div>
          </div>
        </Card>

        {/* 最佳發文時間 */}
        <Card title="最佳發文時間">
          <div className="space-y-2">
            <div className="grid grid-cols-7 gap-1">
              {["一", "二", "三", "四", "五", "六", "日"].map((day, index) => (
                <div
                  key={index}
                  className="text-center text-xs font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}
              {[1, 2, 3, 4, 3, 1, 2].map((intensity, index) => (
                <div
                  key={index}
                  className={`h-6 rounded ${
                    intensity === 4
                      ? "bg-primary"
                      : intensity === 3
                      ? "bg-primary-light"
                      : intensity === 2
                      ? "bg-gray-300"
                      : "bg-gray-200"
                  }`}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 px-1">
              <span>上午</span>
              <span>下午</span>
              <span>晚間</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              您的粉絲活躍度最高時段為「週三、週四晚間」，建議在這些時間發布重要內容。
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GrowthStrategy;
