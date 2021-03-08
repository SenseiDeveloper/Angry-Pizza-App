import React from 'react';

import { FaPlus } from 'react-icons/fa';
import { FaMinus} from 'react-icons/fa';
import {MdAttachMoney} from 'react-icons/md';
import {CgClose} from 'react-icons/cg';

export const SelectProduct = () => {
    return (
        <ul>
            <li>
                <p>Ковбаса (100грам)</p>
                <p>
                    <span>
                        <button><FaMinus /></button>
                                    1
                        <button><FaPlus /></button>
                    </span>
                </p>
                <div className="right">
                    <p>
                        20<span><MdAttachMoney /></span>
                    </p>
                    <button><CgClose /></button>
                </div>
            </li>
            <li>
                <p>Ковбаса (100грам)</p>
                <p>
                    <span>
                        <button ><FaMinus /></button>
                                    1
                        <button><FaPlus /></button>
                    </span>
                </p>
                <div className="right">
                    <p>
                        20<span><MdAttachMoney /></span>
                    </p>
                    <button><CgClose /></button>
                </div>
            </li>
        </ul>
    );
};
