import React, { useState } from "react";
import { Button, Card, DataCard, Input } from "../components";

const ContentAnalysis = () => {
  // 模擬用戶最近的貼文
  const recentPosts = [
    {
      id: 1,
      content:
        "大家好！今天來跟大家分享如何利用 Threads 的最新演算法更新來增加貼文曝光率。根據我的觀察，互動性越高的內容更容易被推薦，尤其是引發深度討論的問題型貼文。你們有發現什麼有效的方式嗎？#Threads技巧 #社群經營",
      posted_at: "2023-09-15T14:30:00",
      likes: 142,
      comments: 38,
      shares: 26,
      views: 1850,
      relevance_score: 92,
    },
    {
      id: 2,
      content:
        "分享一個超實用的小工具！能夠自動整理你在 Threads 上收到的所有評論，並且根據情緒分析幫你找出最積極的粉絲。對於社群經營者來說是個寶藏工具！連結在第一則留言～ #社群工具 #效率提升",
      posted_at: "2023-09-10T09:15:00",
      likes: 98,
      comments: 42,
      shares: 31,
      views: 1430,
      relevance_score: 78,
    },
    {
      id: 3,
      content:
        "今天和團隊一起討論了 2023 下半年的內容策略，我們決定將重點放在更多「幕後」內容上，讓大家看到產品開發的真實過程。你們會對什麼樣的幕後內容感興趣呢？",
      posted_at: "2023-09-05T16:45:00",
      likes: 76,
      comments: 54,
      shares: 12,
      views: 1250,
      relevance_score: 85,
    },
  ];

  // 模擬主題相關度分析
  const relevanceAnalysis = {
    overall: 85,
    byTopic: [
      { topic: "社群策略", score: 92 },
      { topic: "內容創作", score: 88 },
      { topic: "數據分析", score: 76 },
      { topic: "工具應用", score: 84 },
    ],
  };

  // 模擬高效內容元素
  const effectiveElements = [
    {
      element: "問題式結尾",
      effectiveness: 94,
      description: "以問題結束貼文能顯著提高評論率",
    },
    {
      element: "數據支持",
      effectiveness: 88,
      description: "包含具體數據的貼文獲得更高信任度",
    },
    {
      element: "實用工具分享",
      effectiveness: 86,
      description: "分享實用工具能帶來更多保存和分享",
    },
    {
      element: "幕後花絮",
      effectiveness: 82,
      description: "展示真實工作過程增加親近感和互動",
    },
    {
      element: "教學內容",
      effectiveness: 79,
      description: "具體的步驟指南獲得較高保存率",
    },
  ];

  // 模擬互動熱點
  const engagementHotspots = [
    {
      type: "具體數據",
      example: "自動整理...根據情緒分析",
      response: "引發好奇和進一步詢問",
    },
    {
      type: "實用工具",
      example: "超實用的小工具",
      response: "促使用戶尋求更多信息",
    },
    {
      type: "直接提問",
      example: "你們有發現什麼有效的方式嗎？",
      response: "鼓勵用戶分享自身經驗",
    },
    {
      type: "行業趨勢",
      example: "最新演算法更新",
      response: "專業人士會主動補充和討論",
    },
  ];

  // 選中的貼文
  const [selectedPost, setSelectedPost] = useState(recentPosts[0].id);

  // 處理貼文選擇
  const handlePostSelect = (postId) => {
    setSelectedPost(postId);
  };

  // 獲取選中的貼文
  const getSelectedPost = () => {
    return recentPosts.find((post) => post.id === selectedPost);
  };

  // 格式化貼文時間
  const formatPostDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // 模擬生成優化建議
  const generateOptimizationSuggestions = (post) => {
    if (!post) return [];

    // 這裡是簡單的模擬邏輯，實際應用中應該是更複雜的分析系統
    const suggestions = [];

    if (post.content.length > 100 && post.relevance_score < 90) {
      suggestions.push({
        type: "length",
        suggestion: "考慮縮短貼文長度，焦點放在最核心的信息上",
        improvement: "預計可提升互動率約 12%",
      });
    }

    if (!post.content.includes("#") || post.content.split("#").length < 3) {
      suggestions.push({
        type: "hashtags",
        suggestion:
          "增加 2-3 個相關主題標籤，特別是熱門標籤如 #社群經營策略 和 #Threads技巧",
        improvement: "預計可提升觸及率約 18%",
      });
    }

    if (!post.content.includes("?")) {
      suggestions.push({
        type: "engagement",
        suggestion: "在貼文結尾添加開放式問題，鼓勵讀者分享自己的經驗",
        improvement: "預計可提升評論率約 25%",
      });
    }

    if (post.content.split("\n").length < 3) {
      suggestions.push({
        type: "format",
        suggestion: "採用更清晰的段落分隔，增加易讀性",
        improvement: "預計可提升閱讀完成率約 15%",
      });
    }

    return suggestions;
  };

  const selectedPostData = getSelectedPost();
  const optimizationSuggestions =
    generateOptimizationSuggestions(selectedPostData);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* 左側：主要內容區 */}
      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">內容優化分析器</h2>
          <Button icon="✍️">建立新貼文</Button>
        </div>

        {/* 貼文選擇器 */}
        <Card title="選擇貼文進行分析">
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              選擇一篇貼文進行深度分析，了解其表現和優化空間。
            </p>

            <div className="space-y-3 mt-4">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    post.id === selectedPost
                      ? "border-primary bg-primary-light/10"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => handlePostSelect(post.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-4">
                      <p className="text-sm text-gray-900 line-clamp-2">
                        {post.content}
                      </p>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <span>{formatPostDate(post.posted_at)}</span>
                        <span className="mx-2">•</span>
                        <span>{post.likes} 讚</span>
                        <span className="mx-2">•</span>
                        <span>{post.comments} 留言</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          post.relevance_score >= 90
                            ? "bg-green-100 text-green-800"
                            : post.relevance_score >= 70
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        相關度 {post.relevance_score}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* 內容優化建議 */}
        {selectedPostData && (
          <Card title="內容優化建議">
            <div className="space-y-4">
              <div className="p-4 bg-primary-light/10 rounded-lg">
                <h4 className="font-medium text-primary mb-2">原始貼文</h4>
                <p className="text-gray-800">{selectedPostData.content}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
                  <span>{formatPostDate(selectedPostData.posted_at)}</span>
                  <span>•</span>
                  <span>{selectedPostData.likes} 讚</span>
                  <span>•</span>
                  <span>{selectedPostData.comments} 留言</span>
                  <span>•</span>
                  <span>{selectedPostData.shares} 分享</span>
                  <span>•</span>
                  <span>{selectedPostData.views} 瀏覽</span>
                </div>
              </div>

              {optimizationSuggestions.length > 0 ? (
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">AI 優化建議</h4>
                  {optimizationSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="p-3 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary text-lg">
                          {{
                            length: "✂️",
                            hashtags: "#️⃣",
                            engagement: "💬",
                            format: "📝",
                          }[suggestion.type] || "💡"}
                        </div>
                        <div>
                          <p className="text-gray-800">
                            {suggestion.suggestion}
                          </p>
                          <p className="mt-1 text-sm text-green-600">
                            {suggestion.improvement}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="pt-3 flex justify-end gap-3">
                    <Button variant="outline">儲存建議</Button>
                    <Button>套用並重新撰寫</Button>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                  這篇貼文的表現已經很好了！您可以嘗試分析其他貼文，或持續維持當前的內容風格。
                </div>
              )}
            </div>
          </Card>
        )}
      </div>

      {/* 右側：分析面板 */}
      <div className="lg:w-80 space-y-6">
        {/* 主題相關度分析 */}
        <Card title="主題相關度分析">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">
                  整體相關度
                </span>
                <span className="text-sm font-medium text-primary">
                  {relevanceAnalysis.overall}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2"
                  style={{ width: `${relevanceAnalysis.overall}%` }}
                ></div>
              </div>
              <p className="mt-2 text-xs text-gray-600">
                您的內容與品牌定位的整體相符程度。高相關度有助於吸引目標受眾並建立專業形象。
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                核心主題相關度
              </h4>
              {relevanceAnalysis.byTopic.map((topic, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-600">{topic.topic}</span>
                    <span className="text-xs text-gray-600">
                      {topic.score}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`rounded-full h-1.5 ${
                        index % 2 === 0 ? "bg-primary" : "bg-primary-light"
                      }`}
                      style={{ width: `${topic.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* 高效內容元素 */}
        <Card title="高效內容元素">
          <div className="space-y-4">
            <p className="text-xs text-gray-600">
              根據您過往貼文的表現分析，以下元素在提升互動率方面最為有效：
            </p>

            {effectiveElements.map((element, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">
                    {element.element}
                  </span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      element.effectiveness >= 90
                        ? "bg-green-100 text-green-800"
                        : element.effectiveness >= 80
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {element.effectiveness}%
                  </span>
                </div>
                <p className="text-xs text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* 互動熱點 */}
        <Card title="互動熱點">
          <div className="space-y-3">
            <p className="text-xs text-gray-600">
              以下內容元素在您的貼文中引發最多互動：
            </p>

            {engagementHotspots.map((hotspot, index) => (
              <div
                key={index}
                className="p-2 border border-gray-100 rounded bg-gray-50"
              >
                <h4 className="text-sm font-medium text-gray-800">
                  {hotspot.type}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  <span className="font-medium">例句：</span>"{hotspot.example}"
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  <span className="font-medium">用戶反應：</span>
                  {hotspot.response}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContentAnalysis;
