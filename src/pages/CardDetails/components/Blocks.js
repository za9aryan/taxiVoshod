import React from 'react';
import { SelectInput } from '../../../components/Components';
import block1 from '../../../assets/img/block1.png'
import block2 from '../../../assets/img/block2.png'
import block3 from '../../../assets/img/block3.png'
import { useDispatch, useSelector } from "react-redux";
import { putCarDetailsAction } from '../../../redux/actions/Action'


function Blocks(props) {

    const dispatch = useDispatch()
    const { distance, body_clean, interior_clean } = useSelector(state => state.reducer.carDetails)

    const getBodyCleanSelected = (name) => {
        dispatch(putCarDetailsAction({
            body_clean: name
        }));
    }

    const getInteriorCleanSelected = (name) => {
        dispatch(putCarDetailsAction({
            interior_clean: name
        }));
    }

    const handleDistanceChange = (e) => {
        dispatch(putCarDetailsAction({
            distance: e.target.value
        }));
    }



    return (
        <div className="carDetails_block3">
            <div className="carDetails_block">
                <img src={block1} alt="block1" />
                <div>
                    <p>Пробег (км)</p>
                </div>
                <div className="carDetails_block_probeg_input_part">
                    <input onChange={handleDistanceChange} value={distance} />
                </div>
            </div>
            <div className="carDetails_block">
                <img src={block2} alt="block2" />
                <div>
                    <p>Чистота кузова</p>
                </div>
                <div>
                    {console.log(body_clean)}
                    <SelectInput data={[{ name: "Грязный" }, { name: "Чистый" }]} status={body_clean} getSelected={getBodyCleanSelected} />
                </div>
            </div>
            <div className="carDetails_block">
                <img src={block3} alt="block3" />
                <div>
                    <p>Чистота салона</p>
                </div>
                <div>
                    <SelectInput data={[{ name: "Грязный" }, { name: "Чистый" }]} status={interior_clean} getSelected={getInteriorCleanSelected} />
                </div>
            </div>
        </div>
    );
}

export default Blocks;