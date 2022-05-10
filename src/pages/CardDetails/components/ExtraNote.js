import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { putCarDetailsAction } from '../../../redux/actions/Action'

function ExtraNote() {

    const dispatch = useDispatch()
    const { comments } = useSelector(state => state.reducer.carDetails)

    const handleChange = (e) => {
        dispatch(putCarDetailsAction({ comments: e.target.value }))
    }

    return (
        <div className="carDetails_notepad">
            <div className="carDetails_notepad_title">
                Дополнительные замечания:
                        </div>
            <div className="carDetails_notepad_input">
                <textarea onChange={handleChange} rows="5" type="text" value={comments} />
            </div>
        </div>
    );
}

export default ExtraNote;