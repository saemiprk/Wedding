'use client';

import { useState } from 'react';
import Modal from './modal';

type Props = {
    type: string;
    title?: string;
    bgColor?: string;
    color?: string;
    text? : string;
}

export default function ModalButton(props: Props){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const openModalHandler = () => {
        setIsOpen(!isOpen) 
    };

    return (
        <div>
            <button type='button' onClick={openModalHandler} className={`bg-${props.bgColor === 'red' ? 'red-400' : props.bgColor} text-${props.color === 'red' ? 'red-400' : props.color} font-bold text-sm px-10 py-2 rounded shadow outline-none mx-auto my-2 block`}>{props.title}</button>
            {isOpen? (
                <Modal type={props.type} setIsOpen={openModalHandler} text={props.text} />
            ): null}
        </div>
    )
}