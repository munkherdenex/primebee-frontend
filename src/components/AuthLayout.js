import React, { useEffect, useState } from 'react';
import { EuiIcon } from '@elastic/eui';
import Image from 'next/image';

function CircleIcon({ children, style }) {
    return (
        <div
            style={{
                position: 'absolute',
                background: '#f3f6fd',
                borderRadius: '50%',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 4px rgba(37,99,235,0.07)',
                ...style,
            }}
        >
            {children}
        </div>
    );
}

function InfoCard({ items = [], title, position = 'top' }) {
    return (
        <div
            style={{
                background: 'rgba(255,255,255,0.4)',
                width: 330,
                height: 250,
                borderRadius: 18,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                marginTop: position === 'bottom' ? -60 : 0,
                marginBottom: position === 'top' ? -60 : 0,
                paddingLeft: 24,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: position === 'bottom' ? 'flex-end' : 'flex-start',
                gap: 34,
            }}
        >
            {title && (
                <div style={{ textAlign: 'center', marginTop: 39 }}>
                    <p style={{ margin: 0, color: '#000', fontWeight: 'bold' }}>{title}</p>
                </div>
            )}
            {items.map(({ icon, label, aria }, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginLeft: 10, marginBottom: 20 }}>
                    <EuiIcon type={icon} size="xl" color="#2563eb" aria-label={aria} />
                    <p style={{ marginLeft: 10, color: '#000', fontWeight: 'bold' }}>{label}</p>
                </div>
            ))}
        </div>
    );
}

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
                            inset: 0,
                            pointerEvents: 'none',
                            borderRadius: 18,
                            boxShadow: '0 0 20px 80px #fff, 0 0 25px 17px white inset',
                            filter: 'blur(2px)',
                            zIndex: 1,
                        }}
                    />

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
                        {/* Bottom Card */}
                        <InfoCard
                            position="bottom"
                            items={[
                                { icon: 'user', label: 'Компанит ажил', aria: 'Campaign' },
                                { icon: 'visBarVertical', label: 'Тайлан', aria: 'Analytics' },
                            ]}
                        />

                        {/* Center Card */}
                        <div
                            style={{
                                background: 'white',
                                width: 330,
                                height: 400,
                                borderRadius: 18,
                                padding: 24,
                                position: 'relative',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            <strong
                                style={{
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    lineHeight: 1.3,
                                    marginBottom: 24,
                                    width: '100%',
                                    textAlign: 'left',
                                }}
                            >
                                Connect all of your customer data in one platform.
                            </strong>

                            <div style={{ width: 220, height: 220, margin: '0 auto', position: 'relative' }}>
                                {/* Center Logo */}
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: 58,
                                    height: 58,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: '#fff',
                                    borderRadius: '50%',
                                    boxShadow: '0 2px 8px rgba(37,99,235,0.10)',
                                    zIndex: 2,
                                }}>
                                    <Image
                                        src="/shape.png"
                                        alt="Platform Logo"
                                        width={58}
                                        height={58}
                                        style={{
                                            width: 58,
                                            height: 58,
                                            objectFit: 'contain',
                                            borderRadius: 12,
                                            boxShadow: '0 2px 8px rgba(37,99,235,0.10)',
                                        }}
                                    />
                                </div>

                                {/* Dotted Lines - all start from center (110, 110) */}
                                {/* Top */}
                                <svg style={{ position: 'absolute', left: 110, top: 110 }} width="82" height="70">
                                    <line x1="1" y1="0" x2="1" y2="-70" stroke="#d3e3fd" strokeDasharray="4,4" strokeWidth="2" />
                                </svg>
                                {/* Top-right */}
                                <svg style={{ position: 'absolute', left: 110, top: 110 }} width="80" height="80">
                                    <line x1="0" y1="0" x2="56" y2="-56" stroke="#d3e3fd" strokeDasharray="4,4" strokeWidth="2" />
                                </svg>
                                {/* Bottom-right */}
                                <svg style={{ position: 'absolute', left: 110, top: 110 }} width="80" height="80">
                                    <line x1="0" y1="0" x2="56" y2="56" stroke="#d3e3fd" strokeDasharray="4,4" strokeWidth="2" />
                                </svg>
                                {/* Bottom */}
                                <svg style={{ position: 'absolute', left: 110, top: 110 }} width="80" height="70">
                                    <line x1="1" y1="0" x2="1" y2="70" stroke="#d3e3fd" strokeDasharray="4,4" strokeWidth="2" />
                                </svg>
                                {/* Bottom-left */}
                                <svg style={{ position: 'absolute', left: 110, top: 110 }} width="80" height="80">
                                    <line x1="0" y1="0" x2="-56" y2="56" stroke="#d3e3fd" strokeDasharray="4,4" strokeWidth="2" />
                                </svg>
                                {/* Top-left */}
                                <svg style={{ position: 'absolute', left: 110, top: 110 }} width="80" height="80">
                                    <line x1="0" y1="0" x2="-56" y2="-56" stroke="#d3e3fd" strokeDasharray="4,4" strokeWidth="2" />
                                </svg>

                                {/* Icons (keep as before, positioned at ends of lines) */}
                                <CircleIcon style={{ left: '50%', top: 0, transform: 'translateX(-50%)' }}>
                                    <EuiIcon type="user" size="xxl" color="#2563eb" />
                                </CircleIcon>
                                <CircleIcon style={{ right: 0, top: 36 }}>
                                    <EuiIcon type="user" size="xxl" color="#2563eb" />
                                </CircleIcon>
                                <CircleIcon style={{ right: 0, bottom: 36 }}>
                                    <EuiIcon type="user" size="xxl" color="#2563eb" />
                                </CircleIcon>
                                <CircleIcon style={{ left: '50%', bottom: 0, transform: 'translateX(-50%)' }}>
                                    <EuiIcon type="comment" size="xxl" color="#2563eb" />
                                </CircleIcon>
                                <CircleIcon style={{ left: 0, bottom: 36 }}>
                                    <EuiIcon type="visBarVertical" size="xxl" color="#2563eb" />
                                </CircleIcon>
                                <CircleIcon style={{ left: 0, top: 36 }}>
                                    <EuiIcon type="document" size="xxl" color="#2563eb" />
                                </CircleIcon>
                            </div>
                        </div>

                        {/* Top Card */}
                        <InfoCard
                            position="top"
                            title="Customer Relationship Management"
                            items={[
                                { icon: 'user', label: 'Дуудлага', aria: 'Call' },
                            ]}
                        />
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
