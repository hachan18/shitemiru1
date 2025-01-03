// お客様の声セクション
import React from 'react';

function SuccessStoriesSection() {
  return (
    <section className="success-stories">
      <h2>お客様の声</h2>

      {/* A社の声 */}
      <div className="story">
        <i className="fas fa-users"></i> {/* アイコン追加 */}
        <h3>A社（人材紹介）</h3>
        <p>「迅速で的確な人材紹介のおかげで、当社は短期間で必要な人材を確保できました。」</p>
      </div>

      {/* B社の声 */}
      <div className="story">
        <i className="fas fa-chart-line"></i> {/* アイコン追加 */}
        <h3>B社（補助金活用）</h3>
        <p>「補助金申請のサポートを受け、助成金を活用して設備投資を行い、業務が大きく改善しました。」</p>
      </div>
    </section>
  );
}

export default SuccessStoriesSection;
