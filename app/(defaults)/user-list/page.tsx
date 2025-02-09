import UserManagement from '@/components/user-management/UserManagement';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Fourtake CRM',
};

const Users = () => <UserManagement />;

export default Users;
