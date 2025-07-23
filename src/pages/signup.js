import AuthLayout from '@/components/AuthLayout';
import AuthForm from '@/components/AuthForm';

export default function SignUpPage() {
  return (
    <AuthLayout>
      <AuthForm isLogin={false} />
    </AuthLayout>
  );
}
