import { Metadata } from 'next';
import Country from '@/components/cms/countries/Country';
import { Suspense } from 'react';
import { getData } from '@/api';
import ManageVisa from '@/components/visa-process/manage-visa/ManageVisa';

export const metadata: Metadata = {
    title: 'Manage Visa | Fourtake CRM',
};

interface ManageVisaPageProps {
    params: {
        params?: string[]; // Optional array for catch-all route
    };
}

const ManageVisaPage = ({ params }: ManageVisaPageProps) => {
    const id = params?.params?.[0];

    // console.log("id",id)

    return <ManageVisa paramId={id} />;
};

export default ManageVisaPage;
