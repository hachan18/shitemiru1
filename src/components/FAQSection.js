// FAQセクション
import React from 'react';

function FaqSection() {
  return (
    <section className="faq">
      <h2>よくある質問</h2>

      <div className="faq-items">
        {/* FAQアイテム1 */}
        <div className="faq-item">
          <i className="fas fa-question-circle"></i> {/* アイコン */}
          <p><strong>Q1. サービス利用には費用がかかりますか？</strong></p>
          <p>A1. 初回の相談は無料です。</p>
        </div>

        {/* FAQアイテム2 */}
        <div className="faq-item">
          <i className="fas fa-clock"></i> {/* アイコン */}
          <p><strong>Q2. 補助金申請にはどれくらいの時間がかかりますか？</strong></p>
          <p>A2. 申請には通常1ヶ月程度かかります。</p>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
