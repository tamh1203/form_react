import { useRef } from 'react';
import './SuperForm.scss';

const SuperFormV2 = (props) => {
    const formRef = useRef([]);
    const handleCheckData = () => {
        console.log(">>> check formRef: ", formRef);

        // let initForm = {};
        // for (let i = 1; i <= 200; i++) {
        //     initForm[`field-${i}`] = formRef.current[i - 1].value;
        // }
        // console.log(">>> check form data:", initForm);
    }
    return (
        <>
            <div> <button onClick={handleCheckData}>Check data</button></div>

            <div className="super-form-container">
                {[...Array(200)].map((e, index) => {
                    return (
                        <div className='input-group' key={`index-${index}`}>
                            <label>Field {index + 1}</label>
                            <input
                                type={'text'}
                                name={`field-${index + 1}`}
                                ref={el => formRef.current[index] = el}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SuperFormV2;