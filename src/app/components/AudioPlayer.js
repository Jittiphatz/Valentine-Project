'use client';

import { useRef, useState, useEffect } from 'react';
import '@fontsource/kanit';

export default function AudioPlayer() {

        const audioRef = useRef(null);
        const [isPlaying, setIsPlaying] = useState(true); // เปลี่ยนค่าเริ่มต้นเป็น true เพื่อให้สอดคล้องกับ autoplay
        const [currentTime, setCurrentTime] = useState(0);
        const [duration, setDuration] = useState(0);
    
        // ใช้ useEffect เพื่อตั้งค่าความดังเมื่อ component โหลด
        useEffect(() => {
            if (audioRef.current) {
                audioRef.current.volume = 0.5; // ตั้งความดังที่ 60%
            }
        }, []);
    
        const togglePlayPause = () => {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        };
    
        const onTimeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime);
        };
    
        const onSeek = (e) => {
            const time = (e.target.value / 100) * duration;
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        };
    
        const onLoadedMetadata = () => {
            setDuration(audioRef.current.duration);
            audioRef.current.play(); // เริ่มเล่นเพลงทันทีเมื่อโหลดเสร็จ
            setIsPlaying(true); // อัพเดทสถานะการเล่นให้ตรงกับ autoplay
        };
    
        const formatTime = (time) => {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60).toString().padStart(2, '0');
            return `${minutes}:${seconds}`;
        };

    return (
        <div className="audio-player">
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            />
            <h1 className='text-center'><i className="fa-duotone fa-solid fa-circle-play"></i> เพลงรัก - Three Man Down 💖</h1>
            <audio
                ref={audioRef}
                src="/Love.mp3"
                onTimeUpdate={onTimeUpdate}
                autoPlay
                loop
                onLoadedMetadata={onLoadedMetadata}
            />
            <div className="controls">
                <button onClick={togglePlayPause}>
                    {isPlaying ? '⏸ Pause' : '▶ Play'} {/* ปุ่มจะแสดง Pause เมื่อเริ่มต้น */}
                </button>
                <div className="progress">
                    <span>Time : {formatTime(currentTime)}</span>
                </div>
            </div>
            <style jsx>{`
        .audio-player {
            font-family: "Kanit", sans-serif;
            padding: 20px;
            max-width: 400px;
            margin: auto;
            background: linear-gradient(152deg, rgb(255, 69, 69) 35%, rgba(255,0,221,1) 100%);
            border-radius: 30px;
            box-shadow: 0 6px 6px rgba(0, 0, 0, 0.1);
            
        }
        .controls {
            display: flex;
            flex-direction: column;
            align-items: center;
            
        }
        button {
            padding: 10px 20px;
            margin: 10px 0;
            background:rgb(255, 113, 113);
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }
        button:hover {
            background:rgb(255, 73, 73);
        }
        .progress {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        `}</style>
        </div>
    );
}
