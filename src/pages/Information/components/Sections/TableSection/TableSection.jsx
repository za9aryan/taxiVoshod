import React from 'react';
import c from "./TableSection.module.css"

import Box from "../../Box/Box";
import Edit from "../../Edit/Edit";

const TableSection = () => {
    return (
        <Box style={{overflow: "hidden", backgroundColor: "transparent"}}>
            <table className={c.Table}>
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
                        <Edit mode={"light"}/>
                    </td>
                </tr>
                <tr>
                    <td className={c.Col1}>
                        Свидетельство о регистрации
                    </td>
                    <td className={c.Col2}>
                        1
                    </td>
                    <td className={c.Col3}>
                        5000 руб.
                    </td>
                    <td className={c.Col4} />
                </tr>
                <tr>
                    <td className={c.Col1}>
                        Свидетельство о регистрации
                    </td>
                    <td className={c.Col2}>
                        1
                    </td>
                    <td className={c.Col3}>
                        5000 руб.
                    </td>
                    <td className={c.Col4} />
                </tr>
                <tr>
                    <td className={c.Col1}>
                        Свидетельство о регистрации
                    </td>
                    <td className={c.Col2}>
                        1
                    </td>
                    <td className={c.Col3}>
                        5000 руб.
                    </td>
                    <td className={c.Col4} />
                </tr>
                <tr>
                    <td className={c.Col1}>
                        Свидетельство о регистрации
                    </td>
                    <td className={c.Col2}>
                        1
                    </td>
                    <td className={c.Col3}>
                        5000 руб.
                    </td>
                    <td className={c.Col4} />
                </tr>
                <tr>
                    <td className={c.Col1}>
                        Свидетельство о регистрации
                    </td>
                    <td className={c.Col2}>
                        1
                    </td>
                    <td className={c.Col3}>
                        5000 руб.
                    </td>
                    <td className={c.Col4} />
                </tr>
            </table>
        </Box>
    );
};

export default TableSection;