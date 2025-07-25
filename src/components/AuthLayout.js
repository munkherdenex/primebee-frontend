import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AuthLayout({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {!isMobile && (
                <div
                    style={{
                        flex: 1,
                        background: 'linear-gradient(-60deg, #0033ff, #5997f4ff, #2a48c3ff)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        padding: 32,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* background blur  */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            pointerEvents: 'none',
                            borderRadius: 18,
                            boxShadow: '0 0 0px 90px #fff, 0 0 25px 20px white inset',
                            filter: 'blur(2px)',
                            zIndex: 1,
                        }}
                    />

                    {/* Cards container */}
                    <div
                        style={{
                            position: 'relative',
                            zIndex: 2,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 24,
                        }}
                    >
                        {/* Top Card */}
                        <div style={{ borderRadius: 18, marginTop: 0, marginBottom: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                            <Image
                                src="/cards=2.png"
                                alt="Bottom Card"
                                width={330}
                                height={370}
                                style={{
                                    borderRadius: 18,
                                    objectFit: 'cover',
                                    opacity: 0.4,
                                }}
                            />
                        </div>

                        {/* Center Card */}
                        <div style={{ borderRadius: 18, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                            <Image
                                src="/cards=1.png"
                                alt="Center Card"
                                width={330}
                                height={400}
                                style={{
                                    borderRadius: 18,
                                    objectFit: 'cover',
                                }}
                            />
                        </div>

                        {/* Bottom Card */} 
                
                        <div style={{ borderRadius: 18, marginTop: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                            <Image
                                src="/cards=3.png"
                                alt="Bottom Card"
                                width={330}
                                height={370}
                                style={{
                                    borderRadius: 18,
                                    objectFit: 'cover',
                                    opacity: 0.4,
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}

            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 24,
                }}
            >
                {children}
            </div>
        </div>
    );
}
