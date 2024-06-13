import IconX from '@/components/icon/icon-x';
import ComponentsFormsFileUploadMulti from '../../Reusable/file-upload/components-forms-file-upload-multi';
import ComponentsFormsFileUploadSingle from '../../Reusable/file-upload/components-forms-file-upload-single';
import ActionModal from '@/components/Reusable/Modal/ActionModal';
import ComponentsFormDatePickerBasic from './components-form-date-picker-basic';

interface LeadManagementActionModalProps {
    isOpen: any;
    setIsOpen: any;
    handleSave: any;
    addData?: any;
    handleInputChange: any;
    setAddData: any;
}
const LeadManagementActionModal: React.FC<LeadManagementActionModalProps> = ({ isOpen, setAddData, handleInputChange, setIsOpen, handleSave, addData }) => {
    const handleCheckBoxChange = (e: any) => {
        const { id, checked } = e.target;
        setAddData((prev: any) => ({ ...prev, [id]: checked }));
    };
    return (
        <>
            <ActionModal isOpen={isOpen} setIsOpen={setIsOpen} handleSave={handleSave} width="max-w-5xl">
                <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                    <h5 className="text-lg font-bold">Add Lead</h5>
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            setAddData({});
                        }}
                        type="button"
                        className="text-white-dark hover:text-dark"
                    >
                        <IconX />
                    </button>
                </div>

                <div className="p-5">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-1 ">
                        <div className="mb-5">
                            <ComponentsFormDatePickerBasic />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
                        <div className="mb-5">
                            <label htmlFor="name">Applicant Name </label>
                            <input id="name" type="text" onChange={(e) => handleInputChange(e)} value={addData?.language} placeholder="Enter Applicant Name" className="form-input" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phone">Mobile Number </label>
                            <input id="phone" value={addData?.capital} onChange={(e) => handleInputChange(e)} type="text" placeholder="Enter Mobile Number" className="form-input" />
                        </div>
                    </div>
                    <div className="mb-2 grid grid-cols-1 gap-5 md:grid-cols-2 ">
                        <div className="mb-5">
                            <label htmlFor="email">Email </label>
                            <input id="email" value={addData?.cities} onChange={(e) => handleInputChange(e)} type="text" placeholder="Enter Email" className="form-input" />
                        </div>
                        <div className="dropdown mb-5">
                            <label htmlFor="country">Country</label>
                            <select className="form-input" defaultValue="" id="country" value={addData?.country} onChange={(e) => handleInputChange(e)}>
                                <option value="" disabled={true}>
                                    Country
                                </option>
                                <option value="Canada">Canada</option>
                                <option value="India">India</option>
                                <option value="Usa">Usa</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
                        <div className="mb-5">
                            <label htmlFor="countrydetails">Country Details</label>
                            <textarea
                                id="countrydetails"
                                rows={3}
                                value={addData?.countrydetails}
                                onChange={(e) => handleInputChange(e)}
                                placeholder="Enter Country Details"
                                className="form-textarea min-h-[80px] resize-none"
                            ></textarea>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="climate">Climate</label>
                            <textarea
                                id="climate"
                                rows={3}
                                placeholder="Enter Climate"
                                value={addData?.climate}
                                onChange={(e) => handleInputChange(e)}
                                className="form-textarea min-h-[80px] resize-none"
                            ></textarea>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
                        <div className="mb-5">
                            <label htmlFor="currency">Currency</label>
                            <input id="currency" type="tel" value={addData?.currency} onChange={(e) => handleInputChange(e)} placeholder="Enter Currency" className="form-input" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="timezone">Time Zone</label>
                            <input id="timezone" type="text" placeholder="Enter Time Zone" value={addData?.timezone} onChange={(e) => handleInputChange(e)} className="form-input" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-1 ">
                        <div className="mb-5">
                            <label htmlFor="additionalinfo">Additional Info</label>
                            <textarea
                                id="additionalinfo"
                                rows={3}
                                value={addData?.additionalinfo}
                                onChange={(e) => handleInputChange(e)}
                                placeholder="Enter Additional Info"
                                className="form-textarea min-h-[80px] resize-none"
                            ></textarea>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-1 ">
                        <div className="mb-5">
                            <label htmlFor="website">Website</label>
                            <input id="website" type="text" value={addData?.website} onChange={(e) => handleInputChange(e)} placeholder="Enter Website" className="form-input" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 ">
                        <div className="mb-5">
                            <label className="flex cursor-pointer items-center">
                                <input
                                    type="checkbox"
                                    id="ispopular"
                                    // value={addData?.ispopular}
                                    onChange={(e) => handleCheckBoxChange(e)}
                                    checked={addData?.ispopular || false}
                                    className="form-checkbox  bg-white dark:bg-black"
                                />
                                <span className="text-white-dark">Is popular Country </span>
                            </label>
                        </div>
                        <div className="mb-5">
                            <label className="flex cursor-pointer items-center">
                                <input
                                    type="checkbox"
                                    id="isoutsource"
                                    checked={addData?.isoutsource || false}
                                    // value={addData?.isoutsource}
                                    onChange={(e) => handleCheckBoxChange(e)}
                                    className="form-checkbox bg-white dark:bg-black"
                                />
                                <span className="text-white-dark">Enable outsource application center</span>
                            </label>
                        </div>
                        <div className="mb-5">
                            <label className="flex cursor-pointer items-center">
                                <input
                                    type="checkbox"
                                    id="isjurisdiction"
                                    checked={addData?.isjurisdiction || false}
                                    // value={addData?.isjurisdiction}
                                    onChange={(e) => handleCheckBoxChange(e)}
                                    className="form-checkbox bg-white dark:bg-black"
                                />
                                <span className="text-white-dark">Enable Jurisdiction</span>
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 ">
                        <div className="mb-5">
                            <ComponentsFormsFileUploadSingle setAddData={setAddData} addData={addData} />
                        </div>
                        <div className="mb-5">
                            <ComponentsFormsFileUploadMulti setAddData={setAddData} addData={addData} />
                        </div>
                    </div>
                    <div className="mt-8 flex items-center justify-end">
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setAddData({});
                            }}
                            type="button"
                            className="btn btn-outline-danger"
                        >
                            Cancel
                        </button>
                        <button onClick={handleSave} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                            Save
                        </button>
                    </div>
                </div>
            </ActionModal>
        </>
    );
};

export default LeadManagementActionModal;
