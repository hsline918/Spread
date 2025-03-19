import React from "react";
import { Button, Card, DataCard, Tabs } from "../components";

const GrowthStrategy = () => {
  // 模擬數據
  const followersStats = {
    totalFollowers: 2548,
    weeklyGrowth: 157,
    growthRate: 6.5,
    engagementRate: 3.8,
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
    },
    {
      id: 2,
      title: "優化互動策略",
      description: "針對每篇貼文的前5條評論進行回覆，增加與粉絲的互動深度。",
      impact: "預計可提升粉絲忠誠度約18%",
      difficulty: "低",
      timeRequired: "每天15-20分鐘",
    },
    {
      id: 3,
      title: "主題聚焦策略",
      description: "建議將內容聚焦在3-5個核心主題上，增強您的專業形象。",
      impact: "預計可提升內容相關度約22%",
      difficulty: "中等",
      timeRequired: "一次性規劃2小時，後續每週審視1小時",
    },
  ];

  // 分析標籤頁內容
  const tabsConfig = [
    {
      id: "overview",
      label: "數據概覽",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <div className="md:col-span-3">
            <Card title="增長趨勢分析">
              <p className="text-gray-600">
                您的帳號呈現穩定增長趨勢，特別是在發布與平台算法相關的內容後。
                建議持續關注此類主題，並在高峰時段（週二和週四晚間）發布。
              </p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "recommendations",
      label: "策略建議",
      content: (
        <div className="space-y-4">
          {strategyRecommendations.map((strategy) => (
            <Card
              key={strategy.id}
              title={strategy.title}
              className="hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <p className="text-gray-700">{strategy.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="font-medium text-primary">預期效果：</span>
                    <span className="text-gray-600">{strategy.impact}</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary">執行難度：</span>
                    <span className="text-gray-600">{strategy.difficulty}</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary">所需時間：</span>
                    <span className="text-gray-600">
                      {strategy.timeRequired}
                    </span>
                  </div>
                </div>
                <div className="pt-2">
                  <Button size="sm">採用此策略</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ),
    },
    {
      id: "content-analysis",
      label: "內容分析",
      content: (
        <Card title="高效內容分析">
          <div className="space-y-4">
            <p className="text-gray-700">
              您最受歡迎的內容主題是{" "}
              <span className="font-medium">
                {followersStats.topPerformingContent}
              </span>
              ， 此類內容的平均互動率比您的其他內容高出約32%。
            </p>

            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-primary mb-2">推薦內容方向</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Threads平台獨家功能使用指南</li>
                <li>算法更新解析與應對策略</li>
                <li>與粉絲互動的創新方式</li>
              </ul>
            </div>

            <div className="flex justify-end">
              <Button variant="outline" size="sm" className="mr-2">
                查看詳細分析
              </Button>
              <Button size="sm">生成內容計劃</Button>
            </div>
          </div>
        </Card>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">增粉策略顧問</h2>
        <Button icon="✨">生成完整報告</Button>
      </div>

      <Tabs tabs={tabsConfig} defaultTab="overview" />
    </div>
  );
};

export default GrowthStrategy;
