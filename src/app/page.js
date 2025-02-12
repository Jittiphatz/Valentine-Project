'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Footer from "@/app/components/Footer";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/next-dot-js.svg" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>To Ice 💖</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "* {margin: 0; padding: 0; box-sizing: border-box;} body {font-family: 'Kanit', sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(90deg, rgba(255,112,112,1) 35%, rgba(255,0,221,1) 100%); padding: 20px; perspective: 1000px;} .card-container {width: 300px; height: 400px; position: relative; cursor: pointer; transform-style: preserve-3d; transition: transform 1s;} .card-container.opened {transform: rotateY(-180deg);} .card-front, .card-back {position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 20px; box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 100%); overflow: hidden;} .card-back {transform: rotateY(180deg); background: linear-gradient(135deg, #fff5f5 0%, #ffe9e9 100%);} .heart-icon {font-size: 4rem; color: #ff4d6d; animation: pulse 1.5s infinite; margin-bottom: 20px;} .card-text {text-align: center; color: #ff4d6d; font-size: 1.5rem; margin-bottom: 20px; font-weight: bold;} .click-hint {font-size: 0.9rem; color: #666; position: absolute; bottom: 20px; animation: bounce 2s infinite;} .hearts-decoration {position: absolute; width: 100%; height: 100%; pointer-events: none;} .mini-heart {position: absolute; font-size: 1rem; color: #ff4d6d; opacity: 0.5; animation: float 3s ease-in infinite;} @keyframes pulse {0% {transform: scale(1);} 50% {transform: scale(1.1);} 100% {transform: scale(1);}} @keyframes bounce {0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 40% {transform: translateY(-10px);} 60% {transform: translateY(-5px);}} @keyframes float {0% {transform: translateY(0) rotate(0deg);} 50% {transform: translateY(-20px) rotate(180deg);} 100% {transform: translateY(0) rotate(360deg);}} .message-content {text-align: center; max-width: 100%; transform: translateY(20px); opacity: 0; transition: all 0.5s ease-out;} .opened .card-back .message-content {transform: translateY(0); opacity: 1; transition-delay: 0.5s;} .message-title {font-size: 1.8rem; color: #ff4d6d; margin-bottom: 15px; font-weight: bold;} .message-body {font-size: 1rem; color: #666; line-height: 1.5; margin-bottom: 20px;} .love-signature {font-weight: bold; color: #ff4d6d; font-size: 1.2rem;} .corner-decoration {position: absolute; width: 50px; height: 50px; color: #ff4d6d; opacity: 0.3;} .top-left {top: 10px; left: 10px;} .top-right {top: 10px; right: 10px; transform: rotate(90deg);} .bottom-left {bottom: 10px; left: 10px; transform: rotate(-90deg);} .bottom-right {bottom: 10px; right: 10px; transform: rotate(180deg);} @media (max-width: 350px) {.card-container {width: 260px; height: 350px;} .message-title {font-size: 1.5rem;} .message-body {font-size: 0.9rem;}}",
        }}
      />
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Card Container */}
        <div className={`card-container ${isFlipped ? 'opened' : ''}`} onClick={toggleCard}>
          <div className="card-front">
            <i className="fas fa-heart heart-icon" />
            <div className="card-text">Happy Valentine's Day</div>
            <div className="card-text">14 Febuary 2025 💖</div>
            <div className="click-hint">Click to open ❤️</div>
            <i className="fas fa-heart corner-decoration top-left" />
            <i className="fas fa-heart corner-decoration top-right" />
            <i className="fas fa-heart corner-decoration bottom-left" />
            <i className="fas fa-heart corner-decoration bottom-right" />
          </div>
          <div className="card-back">
            <div className="message-content">
              <h2 className="message-title">My Love</h2>
              <p className="message-body">
                สุขสันต์วันวาเลนไทน์นะคับเธออ เค้าโชคดีที่เธอเข้ามาในชีวิตเค้า เธอทำให้ชีวิตเค้ากลับมามีความสุขอีกครั้ง
                เค้าอยากจะบอกเธอว่า เค้ารักเธอมากๆเลยนะ ไม่มีวันไหนที่เค้าไม่รักเธอเลย เค้าอยากให้เธออยู่กับเค้าไปนานๆเลยนะ 💖🌷
              </p>
              <div className="love-signature">8 Months 💖</div>
            </div>
            <div className="hearts-decoration" id="heartsContainer" />
          </div>
        </div>

        {/* Link for Next Page */}
        <Link className="mt-7 text-black text-lg hover:text-pink-600" href="/iicxery">
        <i className="fa-duotone fa-solid fa-circle-arrow-right"></i> กดตรงนี้เพื่อไปหน้าต่อไป
        </Link><br></br>&nbsp;<br></br>&nbsp;<br></br>&nbsp;<br></br>&nbsp;<br></br>&nbsp;<br></br>&nbsp;<br></br>&nbsp;
        <Footer />
      </div>
    </>
  );
}
