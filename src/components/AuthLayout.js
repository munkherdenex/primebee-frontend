import React, { useEffect, useState } from 'react';

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
                        background: 'linear-gradient(-60deg, #0033ff, #5997f4ff)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        padding: 32,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            pointerEvents: 'none',
                            borderRadius: 18,
                            boxShadow: '0 0 20px 80px #fff, 0 0 20px 20px #eef7faff inset',
                            filter: 'blur(2px)',
                            zIndex: 1,
                        }}
                    />
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div
                            style={{
                                flex: 1,
                                background: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                padding: 32,
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: 18,
                            }}>
                            <p style={{ maxWidth: 300, textAlign: 'center', color: '#000', fontWeight: 'bold'  }}>
                                Connect all of your customer data in one platform.
                            </p>
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
