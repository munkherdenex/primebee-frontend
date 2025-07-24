import { EuiCard } from '@elastic/eui';

export default function LockedCard({ label }) {
  return (
    <EuiCard
      icon={<span>🔒</span>}
      title={label}
      description="Энэ боломжийг ашиглахын тулд байгууллага үүсгээрэй."
      layout="vertical"
      isDisabled
    />
  );
}
