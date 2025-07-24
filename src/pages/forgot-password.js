// pages/forgot-password.js
import { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import { EuiButton, EuiFieldText, EuiForm, EuiFormRow, EuiText, EuiSpacer, EuiCallOut } from "@elastic/eui";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSubmitted(true);
        } catch (err) {
            setError("Алдаа гарлаа");
        } finally {
            setLoading(false);
        }
    };

return (
    <AuthLayout>
        <div
            style={{
                width: "100%",
                maxWidth: 550,
                height: "100%",
                margin: "0 auto",
                borderRadius: 18,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            }}
        >
            <Image
                src="/primebee-logo.png"
                alt="PrimeBee Logo"
                width={160}
                height={40}
                style={{ objectFit: "contain", marginBottom: 82 }}
            />

            {submitted ? (
                <>
                    <EuiCallOut textAlign="left"
                        title="Амжилттай"
                        color="success"
                        iconType="check"
                        style={{ width: "100%", maxWidth: 550, marginBottom: 24 }}
                    >
                        <p>Таны и-мэйл хаяг руу линк илгээгдлээ. Та имэйл хаягаа шалгана уу.</p>
                    </EuiCallOut>
                </>
            ) : (
                <>
                    <EuiText fontSize="xxl" style={{ marginBottom: 17 }}>
                        <h2>Нууц үгээ сэргээх</h2>
                    </EuiText>
                    <EuiSpacer size="l" />
                    <EuiForm component="form" onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
                        <EuiFormRow label={<strong>Имэйл</strong>}>
                            <EuiFieldText
                                required
                                placeholder="Имэйл хаягаа оруулна уу."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                        </EuiFormRow>

                        {error && (
                            <EuiText color="danger" style={{ marginTop: 8 }}>
                                <small>{error}</small>
                            </EuiText>
                        )}

                        <EuiSpacer size="l" />
                        <EuiButton type="submit" isLoading={loading} fill fullWidth>
                            Нууц үгээ сэргээх
                        </EuiButton>

                        <EuiSpacer size="l" />
                        <Link href="/login" legacyBehavior>
                            <EuiButton color="text" fullWidth>
                                Нэвтрэх хуудас руу буцах
                            </EuiButton>
                        </Link>
                    </EuiForm>
                </>
            )}
        </div>
    </AuthLayout>
);
}
