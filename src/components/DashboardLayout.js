import { EuiPageTemplate, EuiPageSidebar, EuiPageSection } from '@elastic/eui';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <EuiPageTemplate
      template="default"
      restrictWidth={false}
      grow
      offset={0}
      pageSideBar={
        <EuiPageSidebar paddingSize="m" sticky>
          <Sidebar />
        </EuiPageSidebar>
      }
    >
      <EuiPageSection paddingSize="l" color="subdued">
        {children}
      </EuiPageSection>
    </EuiPageTemplate>
  );
}
