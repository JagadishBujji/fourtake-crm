'use client';
import { getData } from '@/api';
import ComponentsFormsFileUploadMulti from '@/components/Reusable/file-upload/components-forms-file-upload-multi';
import ComponentsFormsFileUploadSingle from '@/components/Reusable/file-upload/components-forms-file-upload-single';
import TableLayout from '@/components/layouts/table-layout';
import { use } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import IconX from '@/components/icon/icon-x';
import VisaChecklistActionModal from './VisaChecklistActionModal';
import Swal from 'sweetalert2';
import { showMessage } from '@/utils/notification';

const getServerData = async () => {
    return await getData({ url: 'http://localhost:5001/center' });
};
const VisaChecklist: React.FC<{ VisaChecklist: any }> = ({ VisaChecklist }) => {
    const [data, setData] = useState(VisaChecklist);
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
        { accessor: 'visaChecklist', textAlign: 'left', title: 'Country' },
        { accessor: 'visaChecklist', textAlign: 'left', title: 'Visa Country' },
        { accessor: 'visaChecklist', textAlign: 'left', title: 'Location' },
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

    const handleDelete = (row: any) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Delete',
            padding: '2em',
            customClass: 'sweet-alerts',
        }).then((result) => {
            if (result.value) {
                setData(data.filter((item: any) => item.id !== row.id));
                Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success', customClass: 'sweet-alerts' });
                return true;
            }
        });
        console.log('delete', row);
    };

    const exportColumns = ['Country', 'Visa Country', 'Location'];
    const handleSumbit = (value: any) => {
        if (value.country == '' || value.country == null) {
            showMessage('Enter country name', 'error');
            return false;
        }
        // if (!isValidName(params.lastname)) {
        //     showMessage('Last Name is required.', 'error');
        //     return true;
        // }
        // if (!isValidEmail(params.email)) {
        //     showMessage('Invalid Email.', 'error');
        //     return true;
        // }
        // if (params.center == '') {
        //     showMessage('Select Center', 'error');
        //     return true;
        // }

        // if (params.phone?.length < 0 || params.phone?.length > 10) {
        //     showMessage('Invalid phone number', 'error');
        //     return true;
        // }
        // if (!isValidPassword(params.password)) {
        //     showMessage('Password must be at least 6 characters long and include at least 1 number, 1 symbol, and 1 uppercase letter', 'error');
        //     return true;
        // }
        // if (!isValidPassword(params.confirmpassword)) {
        //     showMessage('Confirm Password must be at least 6 characters long and include at least 1 number, 1 symbol, and 1 uppercase letter', 'error');
        //     return true;
        // }
        // if (params.password !== params.confirmpassword) {
        //     showMessage('Passwords must match', 'error');
        //     return true;
        // }
        // if (params.designation === '') {
        //     showMessage('Designation is required.', 'error');
        //     return true;
        // }

        // if (params.address == '') {
        //     showMessage('Enter Address', 'error');
        //     return true;
        // }

        if (value.id) {
            //update user
            let formData: any = data.find((d: any) => d.id === value.id);
            formData.country = value.country;
            formData.language = value.language;
            formData.dailingcode = value.dailingcode;
            formData.capital = value.capital;
            formData.cities = value.cities;
            formData.countrydetails = value.countrydetails;
            formData.climate = value.climate;
            formData.currency = value.currency;
            formData.timezone = value.timezone;
            formData.additionalinfo = value.additionalinfo;
            formData.website = value.website;
            formData.ispopular = value.ispopular;
            formData.isoutsource = value.isoutsource;
            formData.isjurisdiction = value.isjurisdiction;
            formData.image = value.image;
            formData.flag = value.flag;

            return formData;
        } else {
            //add user
            let maxUserId = data.length ? data.reduce((max: any, character: any) => (character.id > max ? character.id : max), data[0].id) : 0;

            let formData = {
                id: +maxUserId + 1,
                country: value.country,
                language: value.language,
                dailingcode: value.dailingcode,
                capital: value.capital,
                cities: value.cities,
                countrydetails: value.countrydetails,
                climate: value.climate,
                currency: value.currency,
                timezone: value.timezone,
                additionalinfo: value.additionalinfo,
                website: value.website,
                ispopular: value.ispopular,
                isoutsource: value.isoutsource,
                isjurisdiction: value.isjurisdiction,
                image: value.image,
                flag: value.flag,
            };
            setData([...data, formData]);
            return formData;

            //   searchContacts();
        }

        // showMessage('User has been saved successfully.');
        // setAddContactModal(false);
        // setIsEdit(false);
    };
    return (
        <>
            <TableLayout
                title="Visa Checklist"
                data={data || []}
                totalPages={data?.length || 0}
                tableColumns={tableColumns}
                ActionModal={VisaChecklistActionModal}
                handleDelete={handleDelete}
                setData={setData}
                exportColumns={exportColumns}
                filterby={'country'} // handleSave ={handleSave}
                handleSumbit={handleSumbit}
            />
        </>
    );
};

export default VisaChecklist;
