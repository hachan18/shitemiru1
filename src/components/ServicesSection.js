import React from 'react';

function ServicesSection() {
  return (
    <section className="services" id="services">
      <h2>提供するサービス</h2>
      <p>私たちは、ビジネスニーズに応じた高品質なソリューションを提供します。</p>

      {/* 人材紹介カード */}
      <div className="service-card">
        <i className="fas fa-users"></i> {/* アイコン追加 */}
        <h3>人材紹介</h3>
        <p>企業の採用をサポートし、最適な人材を迅速に提供</p>
      </div>

      {/* 補助金活用カード */}
      <div className="service-card">
        <i className="fas fa-chart-line"></i> {/* アイコン追加 */}
        <h3>補助金活用</h3>
        <p>中小企業向けに補助金を最大限活用するサポート</p>
      </div>
    </section>
  );
}

export default ServicesSection;
