// pages/dashboard/index.js
import Sidebar from '../../components/Sidebar';
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { EuiPageSection } from '@elastic/eui';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CreateOrganizationCard from '@/components/CreateOrganizationCard';
import LockedCard from '../../components/LockedCard';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />

      <main style={{ flex: 1, padding: '2rem', backgroundColor: '#f5f7fa' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Хяналтын самбар
        </h1>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
          <LockedCard label="Харилцагч" />
          <LockedCard label="Үйл ажиллагаа" />
          <LockedCard label="Тайлан" />
          <LockedCard label="Системийн тохиргоо" />
        </div>
      </main>
    </div>
  );
}
