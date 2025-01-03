import React, { useEffect, useState } from 'react';
import '../App.css';  // 正しいパスに修正

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 1000); // 1秒後にアニメーション開始
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={`hero ${isVisible ? 'fade-in' : ''}`}>
      <div className="hero-content">
        <h2>あなたのビジネスを支える最強のパートナー。<br />
            人材と補助金の両方を手に入れよう。</h2>
        <p>人材紹介や補助金活用に関する最適な解決策を提供し、企業と求職者の成長をサポートします。</p>
        <p>あなたの未来を切り開こう!</p>
        <a href="#consultation" className="btn-primary">無料相談を申し込む</a>
      </div>
    </section>
  );
}

export default HeroSection;
