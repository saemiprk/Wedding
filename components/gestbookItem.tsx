'use client';

import Modal from "./modal";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function GestbookItem({gestbook}){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const openModalHandler = () => {
        setIsOpen(!isOpen) 
    };

    return (
        <div className="relative bg-red-100 p-2 w-[80%] mb-4 mx-auto rounded-md shadow">
            <p className="font-bold mb-1">{gestbook.name}</p>
            <p>{gestbook.contents}</p>

            <button type="button" className="absolute top-2 right-2 text-gray-500 text-md" onClick={openModalHandler}><IoMdClose /></button>
            {isOpen? (
                <Modal type={'gestbookItem'} setIsOpen={openModalHandler} gestbook={gestbook} />
            ): null}
        </div>
    )
}