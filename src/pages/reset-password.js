import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AuthLayout from "@/components/AuthLayout";
import {
    EuiButton,
    EuiFieldPassword,
    EuiForm,
    EuiFormRow,
    EuiText,
    EuiSpacer,
    EuiIcon
} from "@elastic/eui";
import Link from "next/link";
import Image from "next/image";

export default function ResetPasswordPage() {
    const router = useRouter();
    const { token } = router.query;

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!token) {
            setError("Invalid or missing token.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Нууц үг таарахгүй байна.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, password }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Алдаа гарлаа");

            setSubmitted(true);
        } catch (err) {
            setError(err.message || "Сэргээхэд алдаа гарлаа");
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
                        <EuiText textAlign="center">
                            <h3>Амжилттай!</h3>
                            <p>Таны нууц үг шинэчлэгдлээ.</p>
                        </EuiText>
                        <EuiSpacer size="xl" />
                        <Link href="/login" legacyBehavior>
                            <EuiButton fill fullWidth>
                                Нэвтрэх хуудас руу буцах
                            </EuiButton>
                        </Link>
                    </>
                ) : (
                    <>
                        <EuiText fontSize="xxl" style={{ marginBottom: 17 }}>
                            <h2>Шинэ нууц үг оруулах</h2>
                        </EuiText>
                        <EuiSpacer size="l" />
                        <EuiForm component="form" onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 550 }}>
                            <EuiFormRow label="Нууц үг">
                                <>
                                    <EuiFieldPassword
                                        required
                                        type="dual"
                                        placeholder="Нууц үгээ оруулна уу."
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={loading}
                                    />

                                    <div style={{ marginTop: 12, marginLeft: 4 }}>
                                        {[
                                            {
                                                label: "Том болон жижиг үсэг агуулсан",
                                                passed: /[a-z]/.test(password) && /[A-Z]/.test(password),
                                            },
                                            {
                                                label: "Дор хаяж нэг тоо агуулсан",
                                                passed: /\d/.test(password),
                                            },
                                            {
                                                label: "Тусгай тэмдэгт агуулсан (!@#$%^&*)",
                                                passed: /[!@#$%^&*(),.?":{}|<>]/.test(password),
                                            },
                                            {
                                                label: "Урт нь 8 болон түүнээс дээш",
                                                passed: password.length >= 8,
                                            },
                                        ].map((rule, index) => (
                                            <div key={index} style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                                                <EuiIcon
                                                    type={rule.passed ? "check" : "cross"}
                                                    color={rule.passed ? "success" : "danger"}
                                                    size="m"
                                                />
                                                <span style={{ fontSize: 13, color: rule.passed ? "#333" : "#888" }}>{rule.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            </EuiFormRow>



                            <EuiFormRow label="Нууц үг давтах">
                                <EuiFieldPassword
                                    required
                                    type="dual"
                                    placeholder="Нууц үгээ давтан оруулна уу."
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                                Нууц үг хадгалах
                            </EuiButton>
                        </EuiForm>
                    </>
                )}
            </div>
        </AuthLayout>
    );
}
