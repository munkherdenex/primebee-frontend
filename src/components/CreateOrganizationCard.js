import { EuiCard } from '@elastic/eui';

export default function CreateOrganizationCard({ onCreate }) {
  return (
    <EuiCard
      icon={<span>🏢</span>}
      title="Байгууллага үүсгэх"
      description="Шинэ байгууллага нэмэх."
      onClick={onCreate}
      layout="vertical"
    />
  );
}
