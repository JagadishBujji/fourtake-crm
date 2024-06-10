import IconX from '@/components/icon/icon-x';
import ComponentsFormsFileUploadMulti from '../../Reusable/file-upload/components-forms-file-upload-multi';
import ComponentsFormsFileUploadSingle from '../../Reusable/file-upload/components-forms-file-upload-single';
import ActionModal from '@/components/Reusable/Modal/ActionModal';
import ComponentsFormsSelectMultiselect from '@/components/Reusable/select/components-forms-select-multiselect';

interface CountryVisaTypeActionModalProps {
    isOpen: any;
    setIsOpen: any;
    handleSave: any;
    editData?: any;
}
const CountryVisaTypeActionModal: React.FC<CountryVisaTypeActionModalProps> = ({ isOpen, setIsOpen, handleSave, editData }) => {
    return (
        <>
            <ActionModal isOpen={isOpen} setIsOpen={setIsOpen} handleSave={handleSave} width="max-w-xl" height='h-50' >
                <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                    <h5 className="text-lg font-bold">Edit Country Visa Type</h5>
                    <button onClick={() => setIsOpen(false)} type="button" className="text-white-dark hover:text-dark">
                        <IconX />
                    </button>
                </div>

                <div className="p-5">
                    <div className="mb-2 grid grid-cols-1 gap-5 md:grid-cols-1 ">
                        {/* <div className="dropdown">
                            <label htmlFor="role">Cities</label>
                            <select className="form-input" defaultValue="" id="role">
                                <option value="" disabled={true}>
                                    Cities
                                </option>
                                <option value="Chennai">Chennai</option>
                                <option value="Vellore">Vellore</option>
                                <option value="Bengaluru">Bengaluru</option>
                                <option value="New Delhi">New Delhi</option>
                                <option value="Mangalore">Mangalore</option>
                                <option value="Mumbai">Mumbai</option>
                            </select>
                        </div> */}
                        {/* <ComponentsFormsSelectMultiselect /> */}
                    </div>

                    <div className="mt-8 flex items-center justify-end">
                        <button onClick={() => setIsOpen(false)} type="button" className="btn btn-outline-danger">
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

export default CountryVisaTypeActionModal;
