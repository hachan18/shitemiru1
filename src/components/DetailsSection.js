// サービスの詳細セクション
import React from 'react';

function DetailsSection() {
  return (
    <section className="details">
      <h2>サービスの詳細</h2>

      {/* 人材紹介の流れ */}
      <div className="detail-item">
        <i className="fas fa-users"></i> {/* アイコン追加 */}
        <p>企業のニーズをヒアリングし、最適な人材をご紹介します。</p>
      </div>

      {/* 補助金活用サポート */}
      <div className="detail-item">
        <i className="fas fa-chart-line"></i> {/* アイコン追加 */}
        <p>補助金の申請をサポートし、企業の成長を支援します。</p>
      </div>
    </section>
  );
}

export default DetailsSection;
