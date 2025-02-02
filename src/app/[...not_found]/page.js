"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { HomeIcon, ArrowLeft } from 'lucide-react';
import Footer from "@/app/components/Footer";

const Custom404 = () => {
    const router = useRouter();

    return (
        <><div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center space-y-8">
                <div className="relative">
                    <h1 className="text-9xl font-bold text-slate-200 animate-pulse">404</h1>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h2 className="text-3xl font-semibold text-slate-700">
                            เอ๋! ไม่พบหน้าที่คุณค้นหา
                        </h2>
                    </div>
                </div>
                <p className="text-lg text-slate-600 max-w-md mx-auto">
                    หน้าที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือไม่มีอยู่จริง
                    ลองตรวจสอบ URL อีกครั้งหรือกลับไปที่หน้าแรกนะ
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        ย้อนกลับ
                    </button>
                    <button
                        onClick={() => router.push('/')}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                        <HomeIcon className="w-5 h-5 mr-2" />
                        กลับหน้าแรก
                    </button>
                </div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-200 rounded-full animate-bounce delay-100" />
                    <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-200 rounded-full animate-bounce delay-200" />
                    <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-pink-200 rounded-full animate-bounce delay-300" />
                </div>
            </div>
        </div><Footer /></>
    );
    
};

export default Custom404;