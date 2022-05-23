import React from 'react';
import { v4 as uuid4 } from "uuid"
import c from "./TableSection.module.css"

import Box from "../../Box/Box";
import Edit from "../../Edit/Edit";
import { useSelector } from "react-redux";

const TableSection = () => {

    const { finish } = useSelector(state => state.reducer)

    const {
        equipment
    } = finish

    return (
        <Box style={{ overflow: "hidden", backgroundColor: "transparent" }}>
            <div className={c.Container}>
                <table className={`${c.Table} customText`}>
                    <thead>
                        <tr>
                            <td className={c.Col1}>
                                КОМПЛЕКТАЦИЯ
                        </td>
                            <td className={c.Col2}>
                                Количество
                        </td>
                            <td className={c.Col3}>
                                Штраф в случае утери
                                или порчи комплектующих
                        </td>
                            <td className={c.Col4}>
                                <Edit link={"/equipment"} mode={"light"} />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            equipment ? equipment.list.map(({ name, count, price }) => (
                                <tr key={uuid4()}>
                                    <td className={c.Col1}>
                                        {name}
                                    </td>
                                    <td className={c.Col2}>
                                        {count}
                                    </td>
                                    <td className={c.Col3}>
                                        {price} руб.
                                </td>
                                    <td className={c.Col4} />
                                </tr>
                            )) : null
                        }
                    </tbody>
                </table>
            </div>
        </Box>
    );
};

export default TableSection;