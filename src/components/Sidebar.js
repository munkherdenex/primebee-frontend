import { EuiIcon } from '@elastic/eui';
import Link from 'next/link';

const items = [
  {
    name: 'Хяналт самбар',
    id: 'dashboard',
    href: '/dashboard',
    icon: <EuiIcon type="dashboardApp" />,
  },
  {
    name: 'Харилцагч',
    id: 'clients',
    disabled: true,
    icon: <EuiIcon type="user" />,
  },
  {
    name: 'Үйл ажиллагаа',
    id: 'activities',
    disabled: true,
    icon: <EuiIcon type="stats" />,
  },
  {
    name: 'Тайлан',
    id: 'reports',
    disabled: true,
    icon: <EuiIcon type="stats" />,
  },
  {
    name: 'Системийн тохиргоо',
    id: 'settings',
    disabled: true,
    icon: <EuiIcon type="gear" />,
  },
];

export default function Sidebar() {
  return (
    <div>
      <div style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 24 }}>
        PrimeBee
      </div>
      <nav>
        {items.map(({ id, name, href, icon, disabled }) => {
          const commonStyles = {
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            marginBottom: 8,
            borderRadius: 4,
            userSelect: 'none',
            color: 'inherit',
            textDecoration: 'none',
          };

          if (href) {
            return (
              <Link
                key={id}
                href={href}
                style={{
                  ...commonStyles,
                  opacity: disabled ? 0.5 : 1,
                  pointerEvents: disabled ? 'none' : 'auto',
                }}
              >
                {icon}
                <span style={{ marginLeft: 8 }}>{name}</span>
              </Link>
            );
          }

          return (
            <div key={id} style={{ ...commonStyles, opacity: 0.5 }}>
              {icon}
              <span style={{ marginLeft: 8 }}>{name}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
