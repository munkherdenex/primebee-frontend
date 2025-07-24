import {
    EuiFieldText,
    EuiFieldPassword,
    EuiButton,
    EuiCheckbox,
    EuiSpacer,
    EuiTitle,
    EuiLink,
    EuiCallOut,
    EuiText
} from '@elastic/eui';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function AuthForm({ isLogin = true }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [resending, setResending] = useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            alert('Logged in!');
        } else {
            setSubmitted(true);
            setResendTimer(60); 
        }
    };
    const [resendTimer, setResendTimer] = useState(0);

    const handleResend = () => {
        setResending(true);
        setResendTimer(60);
        setTimeout(() => setResending(false), 1000);
    };

    useEffect(() => {
        if (resendTimer > 0) {
            const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [resendTimer]);

    if (!isLogin && submitted) {
        return (
            <div style={{ width: '100%', maxWidth: 500, height: '88%', textAlign: 'center' }}>
                <Image
                    src="/primebee-logo.png"
                    alt="PrimeBee Logo"
                    width={160}
                    height={40}
                    style={{ objectFit: 'contain', marginBottom: 42 }}
                />
                <EuiTitle size="l" align="left" style={{ marginBottom: 16 }}>
                    <h1>Бүртгүүлэх</h1>
                </EuiTitle>
                <span style={{ fontSize: 16, color: '#666', textAlign: 'left'}}>
                    Таны имэйл хаяг руу бүртгэлийн линк илгээгдлээ.
                </span>
                <EuiSpacer size="xxl" />
                <EuiCallOut
                    title="Имэйл илгээгдлээ"
                    color="success"
                    iconType="check"
                    style={{ marginBottom: 14, textAlign: 'left' }}
                >
                    <div style={{ marginTop: 8 }}>
                      {`${email} хаяг руу бүртгэлийн линк илгээгдлээ.`}
                      <br />
                      Имэйлээ шалгаад линк дээр дарж бүртгэлээ баталгаажуулна уу.
                    </div>
                </EuiCallOut>
                <EuiButton
                    onClick={handleResend}
                    isLoading={resending}
                    fullWidth
                    style={{ marginBottom: 32, marginTop: 32 }}
                    disabled={resendTimer > 0}
                >
                    {resendTimer > 0 ? `Линк дахин авах (${resendTimer})` : 'Линк дахин авах'}
                </EuiButton>
                <EuiButton
                    color="text"
                    iconType="arrowLeft"
                    iconSide="left"
                    size="m"
                    onClick={() => {
                        setSubmitted(false);
                        setEmail('');
                    }}
                >
                    Буцах
                </EuiButton>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 500, height: '88%' }}>
            <div style={{ display: 'flex', justifyContent: 'left', marginBottom: 70 }}>
                <Image
                    src="/primebee-logo.png"
                    alt="PrimeBee Logo"
                    width={160}
                    height={40}
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <EuiTitle size="l" style={{ marginBottom: 14 }}>
                <h1>{isLogin ? 'Нэвтрэх' : 'Бүртгүүлэх'}</h1>
            </EuiTitle>
            <span style={{ fontSize: 16, color: '#666' }}>
                {isLogin ? '' : 'Имэйл хаягаа оруулж бүртгүүлнэ үү.'}
            </span>
            <EuiSpacer size="xxl" />

            <strong>Имэйл</strong>
            <br />
            <br />
            <EuiFieldText
                placeholder={isLogin ? "Имэйл хаягаа оруулна уу." : "Имэйл хаягаа оруулна уу."}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
            />
            <EuiSpacer size="m" />

            {isLogin && (
                <>
                    <strong>Нууц үг</strong>
                    <br />
                    <br />
                    <EuiFieldPassword
                        placeholder="Нууц үгээ оруулна уу."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                        type="dual"
                    />
                    <EuiSpacer size="m" />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <EuiCheckbox
                            id="remember"
                            label="Сануулах"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                        <EuiLink href="/forgot-password">Нууц үгээ мартсан?</EuiLink>
                    </div>
                </>
            )}

            <EuiSpacer size="m" />
            <EuiButton type="submit" fill fullWidth>
                {isLogin ? 'Нэвтрэх' : 'Үргэлжлүүлэх'}
            </EuiButton>

            <EuiSpacer size="m" />
            {!isLogin && (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                margin: '16px 0'
            }}>
                <div style={{
                    flex: 1,
                    height: 1,
                    background: '#e0e0e0'
                }} />
                <span style={{
                    margin: '0 12px',
                    color: '#999',
                    fontWeight: 500,
                    fontSize: 14
                }}>Эсвэл</span>
                <div style={{
                    flex: 1,
                    height: 1,
                    background: '#e0e0e0'
                }} />
            </div>
            )}
            <EuiText size="s" textAlign="center">
                <p>
                    {isLogin ? (
                        <EuiLink onClick={() => router.push('/signup')}>Бүртгүүлэх</EuiLink>
                    ) : (
                        <>
                            Бүртгэлтэй бол{' '}
                            <EuiLink onClick={() => router.push('/login')}>Нэвтрэх</EuiLink>
                        </>
                    )}
                </p>
            </EuiText>
        </form>
    );
}
