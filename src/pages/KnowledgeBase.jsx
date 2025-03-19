import React, { useState } from "react";
import { Button, Card, Tabs, Input } from "../components";

const KnowledgeBase = () => {
  // 搜尋功能
  const [searchQuery, setSearchQuery] = useState("");

  // 平台算法知識
  const algorithmData = [
    {
      id: 1,
      title: "Threads 參與度排名",
      description:
        "Threads 會優先顯示高參與度（互動率）的內容。參與度主要衡量標準包括留言、按讚、轉發和分享等互動行為的數量與質量。",
      tips: [
        "鼓勵用戶在您的貼文下留言，可以透過提問或要求分享經驗",
        "對熱門留言及時回覆，形成互動循環",
        "創建容易分享的優質內容，增加分享率",
      ],
      impact: "high",
      lastUpdated: "2023年9月",
    },
    {
      id: 2,
      title: "關鍵字與主題相關性",
      description:
        "Threads 會分析貼文內容的關鍵字和主題，優先向對相關主題感興趣的用戶推薦內容。一致的主題內容更容易建立專業形象。",
      tips: [
        "在貼文中包含與您專業領域相關的關鍵詞",
        "保持主題一致性，圍繞特定領域發布內容",
        "使用相關主題標籤，增強主題關聯性",
      ],
      impact: "medium",
      lastUpdated: "2023年8月",
    },
    {
      id: 3,
      title: "時間與活躍度因素",
      description:
        "Threads 會考慮內容發布的時間與用戶活躍度。在目標受眾活躍時段發布內容，可大幅提高觸及率和互動率。",
      tips: [
        "分析您的受眾何時最活躍，在這些時段發布重要內容",
        "在主要市場的工作時間和休息時間交界處發布可獲得更高曝光",
        "保持帳號規律更新，增加被推薦的機會",
      ],
      impact: "high",
      lastUpdated: "2023年9月",
    },
    {
      id: 4,
      title: "內容多樣性評分",
      description:
        "Threads 會評估創作者的內容多樣性，包括文字、圖片、影片等不同形式。多樣化的內容形式能吸引不同喜好的受眾。",
      tips: [
        "混合使用不同內容形式：純文字、圖片、短影片等",
        "嘗試不同內容風格：教學、分享、討論、問答等",
        "根據數據分析調整不同內容類型的比例",
      ],
      impact: "medium",
      lastUpdated: "2023年7月",
    },
  ];

  // 互動策略指南
  const engagementStrategies = [
    {
      type: "留言回覆",
      effectiveness: 92,
      description:
        "直接回覆用戶留言是建立忠誠粉絲的最有效方式，尤其對於問題型留言",
      bestPractices: [
        "對問題留言優先且詳細回覆",
        "對有建設性的留言表達感謝",
        "使用用戶名稱個人化回覆",
        "嘗試在回覆中提出後續問題",
      ],
    },
    {
      type: "轉發互動",
      effectiveness: 86,
      description: "轉發他人內容並添加有價值的見解，可快速建立行業關係網",
      bestPractices: [
        "轉發時加入您的專業觀點",
        "標記原作者表達謝意",
        "選擇與您專業相關的優質內容轉發",
        "建立轉發與原創內容的平衡",
      ],
    },
    {
      type: "話題參與",
      effectiveness: 89,
      description: "積極參與熱門話題討論，提高品牌曝光度和專業形象",
      bestPractices: [
        "關注行業相關熱門話題",
        "提供獨特且有價值的觀點",
        "使用相關主題標籤增加曝光",
        "及時參與新興話題討論",
      ],
    },
    {
      type: "社群問答",
      effectiveness: 94,
      description: "定期舉辦問答活動，是提高參與度和了解受眾需求的有效方式",
      bestPractices: [
        "設定特定主題的問答環節",
        "提前宣布問答時間，增加參與度",
        "對優質問題提供深度解答",
        "將常見問題整理為內容素材",
      ],
    },
  ];

  // 成功案例
  const successCases = [
    {
      id: 1,
      title: "深度解析型帳號成功案例",
      account: "@tech_insider",
      followers: "56.7萬",
      growthRate: "月增15%",
      strategy:
        "專注於科技產品深度解析，每週固定發布演算法更新分析，並與用戶積極互動",
      keyTactics: [
        "每週三固定發布平台演算法分析",
        "回覆率維持在評論的40%以上",
        "使用簡潔圖解說明複雜概念",
        "定期舉辦行業專家訪談",
      ],
      results: "半年內粉絲增長300%，內容平均互動率達12%，成為該領域權威來源",
      applicable: [
        "建立固定內容發布時間表",
        "專注於專業深度而非廣度",
        "提供獨特且可操作的洞察",
      ],
    },
    {
      id: 2,
      title: "社群互動型帳號成功案例",
      account: "@community_builder",
      followers: "32.4萬",
      growthRate: "月增22%",
      strategy: "以建立高互動社群為核心，通過持續提問和用戶生成內容促進參與",
      keyTactics: [
        "每天提出一個行業相關問題",
        "分享用戶回覆並添加專業見解",
        "每週舉辦線上討論會",
        "創建專屬社群主題標籤",
      ],
      results: "三個月內互動率提高86%，用戶生成內容豐富，形成自主互動社群",
      applicable: [
        "優先培養核心粉絲群體",
        "鼓勵並展示用戶生成內容",
        "建立社群專屬話題和標籤",
      ],
    },
    {
      id: 3,
      title: "教學導向型帳號成功案例",
      account: "@digital_mentor",
      followers: "42.8萬",
      growthRate: "月增18%",
      strategy: "提供簡潔實用的數位技能教學，強調即學即用的實用知識",
      keyTactics: [
        "短小精悍的技能教學（2分鐘內）",
        "系列化內容設計，循序漸進",
        "提供可下載的資源和工具",
        "跟進用戶實踐結果並分享",
      ],
      results: "內容保存率達到35%，實用性使轉發率高於平均水平3倍",
      applicable: [
        "將複雜信息拆分為易消化的小單元",
        "強調實用性和即時應用",
        "提供額外資源增加價值",
      ],
    },
  ];

  // 知識文章
  const knowledgeArticles = [
    {
      id: 1,
      title: "Threads 2023最新演算法完整指南",
      category: "platform",
      readTime: "8分鐘",
      highlights: [
        "演算法核心排名因素詳解",
        "內容推薦機制如何運作",
        "如何適應最新演算法變化",
      ],
      publishDate: "2023-09-20",
      popularity: "high",
    },
    {
      id: 2,
      title: "有效提升互動率的10種提問技巧",
      category: "engagement",
      readTime: "6分鐘",
      highlights: [
        "設計高回覆率提問的框架",
        "不同類型提問的適用場景",
        "提問後的跟進策略",
      ],
      publishDate: "2023-09-15",
      popularity: "medium",
    },
    {
      id: 3,
      title: "內容創作者必懂的數據分析指標",
      category: "analytics",
      readTime: "10分鐘",
      highlights: [
        "關鍵績效指標(KPI)設定指南",
        "如何解讀互動數據",
        "基於數據優化內容策略",
      ],
      publishDate: "2023-09-10",
      popularity: "high",
    },
    {
      id: 4,
      title: "從零開始建立專業形象的內容規劃",
      category: "strategy",
      readTime: "12分鐘",
      highlights: [
        "專業定位與差異化策略",
        "12週內容規劃模板",
        "專業形象的一致性維護",
      ],
      publishDate: "2023-09-05",
      popularity: "medium",
    },
    {
      id: 5,
      title: "Threads 商業帳號成長實戰案例分析",
      category: "case-study",
      readTime: "9分鐘",
      highlights: [
        "三個不同行業的成功案例",
        "關鍵成長轉折點分析",
        "可複製的策略要素",
      ],
      publishDate: "2023-08-30",
      popularity: "high",
    },
  ];

  // 過濾知識文章
  const filteredArticles = searchQuery
    ? knowledgeArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.highlights.some((h) =>
            h.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : knowledgeArticles;

  // 標籤內容
  const tabContent = [
    {
      id: "algorithm",
      label: "平台算法解析",
      content: (
        <div className="space-y-6">
          <div className="bg-primary-light/10 rounded-lg p-4">
            <h3 className="text-primary font-medium mb-2">算法解析</h3>
            <p className="text-sm text-gray-700">
              了解 Threads
              平台算法如何運作，掌握內容推薦機制，優化您的內容策略。
              下方列出了主要的算法因素及其影響，幫助您更精準地規劃內容。
            </p>
          </div>

          <div className="space-y-4">
            {algorithmData.map((item) => (
              <Card key={item.id} className="border-l-4 border-primary">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item.impact === "high"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {item.impact === "high" ? "高影響" : "中影響"}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700">{item.description}</p>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      應用技巧：
                    </h4>
                    <ul className="space-y-1">
                      {item.tips.map((tip, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-gray-500">
                    最後更新: {item.lastUpdated}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline">下載完整算法指南</Button>
          </div>
        </div>
      ),
    },
    {
      id: "engagement",
      label: "互動策略指南",
      content: (
        <div className="space-y-6">
          <div className="bg-primary-light/10 rounded-lg p-4">
            <h3 className="text-primary font-medium mb-2">互動策略指南</h3>
            <p className="text-sm text-gray-700">
              有效的互動策略可以大幅提升您的粉絲忠誠度和帳號影響力。
              以下是經過數據分析證實最有效的互動策略類型。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {engagementStrategies.map((strategy, index) => (
              <Card key={index}>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-900">
                      {strategy.type}
                    </h3>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-2">
                        <div
                          className="bg-primary rounded-full h-1.5"
                          style={{ width: `${strategy.effectiveness}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-primary">
                        {strategy.effectiveness}%
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700">
                    {strategy.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      最佳實踐：
                    </h4>
                    <ul className="space-y-1">
                      {strategy.bestPractices.map((practice, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
            <div className="flex">
              <div className="text-yellow-500 mr-3 text-xl">💡</div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">互動黃金法則</h4>
                <p className="text-sm text-gray-700">
                  研究顯示，持續30天回覆至少30%的留言可使粉絲忠誠度提升高達68%。
                  設定互動時間表，每天固定時段回覆留言，是建立穩定互動習慣的關鍵。
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cases",
      label: "案例學習",
      content: (
        <div className="space-y-6">
          <div className="bg-primary-light/10 rounded-lg p-4">
            <h3 className="text-primary font-medium mb-2">成功案例學習</h3>
            <p className="text-sm text-gray-700">
              學習成功帳號的策略和戰術，從他們的經驗中獲取可應用於您帳號的寶貴經驗。
              以下案例來自不同領域，但策略可跨行業應用。
            </p>
          </div>

          <div className="space-y-5">
            {successCases.map((caseItem) => (
              <Card key={caseItem.id} className="border-t-4 border-accent">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg text-gray-900">
                      {caseItem.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1 text-sm text-gray-600">
                      <span>{caseItem.account}</span>
                      <span>•</span>
                      <span>{caseItem.followers} 粉絲</span>
                      <span>•</span>
                      <span>{caseItem.growthRate}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      核心策略：
                    </h4>
                    <p className="text-sm text-gray-700 mt-1">
                      {caseItem.strategy}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        關鍵戰術：
                      </h4>
                      <ul className="space-y-1">
                        {caseItem.keyTactics.map((tactic, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <span className="text-accent mr-2">•</span>
                            {tactic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        可應用策略：
                      </h4>
                      <ul className="space-y-1">
                        {caseItem.applicable.map((item, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <span className="text-primary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      成果：
                    </h4>
                    <p className="text-sm text-gray-700">{caseItem.results}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "library",
      label: "知識庫",
      content: (
        <div className="space-y-6">
          <div className="flex justify-between">
            <h3 className="text-lg font-medium text-gray-900">
              社群經營知識庫
            </h3>

            <div className="w-64">
              <Input
                type="search"
                placeholder="搜尋知識文章..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                prefix={<span className="text-gray-400">🔍</span>}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredArticles.map((article) => (
              <Card
                key={article.id}
                className={`hover:shadow-md transition-shadow ${
                  article.popularity === "high"
                    ? "border-l-4 border-primary"
                    : ""
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-900">
                      {article.title}
                    </h4>
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full ${
                        article.category === "platform"
                          ? "bg-blue-100 text-blue-800"
                          : article.category === "engagement"
                          ? "bg-green-100 text-green-800"
                          : article.category === "analytics"
                          ? "bg-purple-100 text-purple-800"
                          : article.category === "case-study"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {article.category === "platform"
                        ? "平台"
                        : article.category === "engagement"
                        ? "互動"
                        : article.category === "analytics"
                        ? "分析"
                        : article.category === "case-study"
                        ? "案例"
                        : article.category === "strategy"
                        ? "策略"
                        : article.category}
                    </span>
                  </div>

                  <div className="text-xs text-gray-500 flex items-center">
                    <span>{article.readTime} 閱讀</span>
                    <span className="mx-2">•</span>
                    <span>{article.publishDate}</span>
                    {article.popularity === "high" && (
                      <>
                        <span className="mx-2">•</span>
                        <span className="text-primary font-medium flex items-center">
                          <span className="mr-1">🔥</span> 熱門
                        </span>
                      </>
                    )}
                  </div>

                  <div>
                    <h5 className="text-xs font-medium text-gray-700 mb-1">
                      文章亮點：
                    </h5>
                    <ul className="space-y-1">
                      {article.highlights.map((item, index) => (
                        <li
                          key={index}
                          className="text-xs text-gray-600 flex items-start"
                        >
                          <span className="text-primary mr-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="text" size="sm" className="mt-2">
                    閱讀全文 →
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">
                沒有找到相關文章，請嘗試其他關鍵詞
              </p>
            </div>
          )}

          <div className="flex justify-center mt-4">
            <Button>查看更多知識文章</Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">社群經營知識庫</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">您的學習進度：</span>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div className="bg-primary rounded-full h-2 w-3/5"></div>
          </div>
          <span className="text-sm font-medium text-primary">60%</span>
        </div>
      </div>

      {/* 個性化建議 */}
      <Card className="bg-gradient-to-r from-primary-light/20 to-primary/10 border-none">
        <div className="flex items-start space-x-4">
          <div className="text-2xl">🎯</div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">個性化學習建議</h3>
            <p className="text-sm text-gray-700 mb-3">
              根據您的帳號數據，我們推薦您學習提高互動率的策略。您的貼文獲得了良好的曝光，
              但互動率有提升空間。查看以下資源，強化您的互動策略。
            </p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline">
                提高互動率的10種提問技巧
              </Button>
              <Button size="sm" variant="outline">
                互動策略指南
              </Button>
              <Button size="sm" variant="outline">
                案例：社群互動型帳號
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* 主要內容標籤頁 */}
      <Tabs tabs={tabContent} defaultTab="algorithm" />
    </div>
  );
};

export default KnowledgeBase;
