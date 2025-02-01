'use client'
import React, { useState, useEffect, useRef } from 'react';
import AudioPlayer from '@/app/components/AudioPlayer';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import '@fontsource/kanit';

export default function iicxery() {

    const [isOpen, setIsOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState(null); // State for modal image source
    const [modalQuote, setModalQuote] = useState(''); // State for modal quote


    const images = [
        {
            src: "https://img2.pic.in.th/pic/Locket_1738165264490_32.webp",
            quote: "จับมือกันแบบจริงจังครั้งแรก | 24 June 2024"
        },
        {
            src: "https://i.imgur.com/uQpr2xm.jpg",
            quote: "เดินจับมือกันครั้งแรก | 27 June 2024"
        },
        {
            src: "https://i.imgur.com/w1Ig9jQ.jpg",
            quote: "หนังเรื่องแรกที่เราไปดูกัน เรื่อง แดนสาป รอบ 15:30 | 22 July 2024"
        },
        {
            src: "https://i.imgur.com/N1yPwqO.jpg",
            quote: "กินชาบูด้วยกันครั้งแรก | 27 September 2024"
        },
        {
            src: "https://i.imgur.com/LsI5aLc.jpg",
            quote: "คาเฟ่แรกที่เค้าพาเธอไป | 28 January 2025"
        },

        // Add more images and quotes as needed
    ];

    const openModal = (id) => {
        setIsOpen(true);
        if (images[id]) {
            setModalImageSrc(images[id].src);
            setModalQuote(images[id].quote);
        }
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalImageSrc(null); // Reset the image source when closing the modal
        setModalQuote(''); // Reset the quote when closing the modal
    };



    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/next-dot-js.svg" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Luv Ice 😻</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        "\n * { margin: 0; padding: 0; box-sizing: border-box; } body { font-family: "Kanit", serif; background-image: linear-gradient(60deg, rgba(255,112,112,1) 35%, rgb(255, 83, 232) 100%);  min-height: 100vh; padding: 2rem; } .header { text-align: center; padding: 2rem 0 4rem; } .header h1 { color: rgb(250, 118, 255); font-size: 3rem; margin-bottom: 1rem; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); } .love-message { font-size: 1.2rem; color: rgb(255, 255, 255); max-width: 600px; margin: 0 auto; line-height: 1.6; } .gallery { box-shadow: 0 6px 6px rgba(0, 0, 0, 0.1); box-shadow: var(--shadow-xl);max-width: 1400px; margin: 0 auto; columns: 5; column-gap: 1.5rem; } @media (max-width: 1200px) { .gallery { columns: 2; } } @media (max-width: 768px) { .gallery { columns: 1; } } .gallery-item { box-shadow: 0 5px 5px rgba(48, 48, 48, 0.34); break-inside: avoid; margin-bottom: 1.5rem; position: relative; border-radius: 1rem; overflow: hidden; cursor: pointer; transition: transform 0.3s ease; } .gallery-item:hover { transform: translateY(-5px); } .gallery-item img { width: 100%; height: auto; display: block; border-radius: 1rem; } .gallery-item .overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent); padding: 2rem 1rem 1rem; color: white; opacity: 0; transition: opacity 0.3s ease; } .gallery-item:hover .overlay { opacity: 1; } .love-quote { font-size: 1rem; margin-bottom: 0.5rem; font-style: bold; } .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.9); z-index: 1000; padding: 2rem; align-items: center; justify-content: center; } .modal-content { max-width: 90%; max-height: 90vh; position: relative; } .modal-image { max-width: 100%; max-height: 80vh; border-radius: 1rem; } .modal-quote { color: white; text-align: center; margin-top: 1rem; font-size: 1.2rem; font-style: italic; } .close-modal { position: absolute; top: -2rem; right: -2rem; color: white; font-size: 2rem; cursor: pointer; } .floating-hearts { position: fixed; width: 100%; height: 100%; pointer-events: none; z-index: -1; } .heart { position: absolute; font-size: 1rem; color: #ff4d6d; opacity: 0.6; animation: float 6s ease-in infinite; } @keyframes float { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 50% { opacity: 0.6; } 100% { transform: translateY(-100px) scale(1); opacity: 0; } } \n"
                
                    `
                }}
            />
            {/* Floating Hearts Background */}
            <div className="floating-hearts" id="heartsContainer" />
            {/* Header */}
            <header className="header">
                <h1>
                    Our Gallery <i className="fas fa-heart" />
                </h1>
                <p className="love-message">
                    Timeline of love 💟
                </p>
            </header>
            {/* Gallery */}
            <div className="gallery">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index} onClick={() => openModal(index)}>
                        <img src={image.src} alt={`Image ${index + 1}`} />
                        <div className="overlay">
                            <p className="love-quote">{image.quote}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal */}
            {isOpen && (
                <div className="modal" id="imageModal" onClick={closeModal}>
                    <div className="modal-content">
                        <span className="close-modal" onClick={closeModal}>×</span>
                        <img
                            className="modal-image"
                            id="modalImage"
                            src={modalImageSrc || undefined} // Use undefined to avoid empty string
                            alt="Full size image"
                        />
                        <p className="modal-quote">{modalQuote}</p>
                    </div>
                </div>
            )}

            <AudioPlayer />

            <div className="flex items-center justify-center">
                <Link className="my-8 text-black text-lg hover:text-blue-600" href="/">
                    <i className="fa-solid fa-house"></i> Back to Home
                </Link>
            </div><br></br>&nbsp;
            <Footer />
        </>
    );
}