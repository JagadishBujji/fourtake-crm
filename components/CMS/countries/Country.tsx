'use client';

import { getData } from '@/api';
import ComponentsFormsFileUploadMulti from '@/components/Reusable/file-upload/components-forms-file-upload-multi';
import ComponentsFormsFileUploadSingle from '@/components/Reusable/file-upload/components-forms-file-upload-single';
import TableLayout from '@/components/layouts/table-layout';
import { use } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import IconX from '@/components/icon/icon-x';
import CountryActionModal from './CountryActionModal';

const getServerData = async () => {
    return await getData({ url: 'http://localhost:5001/center' });
};
const Country: React.FC<{ data: any }> = ({ data }) => {
    // const { data, isError, error } = use(getServerData());
    // // const { data, isError, error } = await getData({ url: 'http://localhost:5001/center' });
    // // console.log('dataaaa: ', data);
    // if (isError) {
    //     console.log(error.message);
    // }

    // const data = [
    //     {
    //         id: 2,
    //         name: 'Bangalore',
    //         phone: '8778229794',
    //         email: 'blr@fourtakevisas.com',
    //         address: 'brigade road, bangalore',
    //         is_active: true,
    //     },
    //     {
    //         id: 2,
    //         name: 'Bangalore',
    //         phone: '8778229794',
    //         email: 'blr@fourtakevisas.com',
    //         address: 'brigade road, bangalore',
    //         is_active: true,
    //     },
    // ];

    const tableColumns = [
        { accessor: 'country', textAlign: 'left', title: 'ID' },
        { accessor: 'country', textAlign: 'left', title: 'Country Name' },
        // { accessor: 'phone', textAlign: 'left' },
        // { accessor: 'email', textAlign: 'left' },
        // { accessor: 'address', textAlign: 'left' },
        // {
        //     accessor: 'is_active',
        //     textAlign: 'left',
        //     render: ({ is_active }: { is_active: any }) => {
        //         return is_active;
        //     },
        // },
    ];
    // const handleSave = () => {
    //     console.log('HandleSave');
    // };
    return (
        <>
            <TableLayout
                title="Country List"
                data={data || []}
                totalPages={data?.length || 0}
                tableColumns={tableColumns}
                ActionModal={CountryActionModal}
                // handleSave ={handleSave}
            />
        </>
    );
};

export default Country;
