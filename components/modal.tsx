'use client';

import { ReactElement } from "react";
import { IoMdClose } from "react-icons/io";
import ModalGestBook from "./modal/gestBook";
import ModalInvition from "./modal/invition";
import ModalAccount from "./modal/account";
import MoadalGestBookPassword from "./modal/gestBookPassword";

interface GestBook {
    id: number;
    name: string;
    password: string;
    contents: string;
    created_at?: Date;
    updated_at?: Date;
}

type Props = {
    type: string;
    text? : string;
    setIsOpen: (isOpen: boolean) => void;
    gestbook?: GestBook;
}

export default function Modal(props: Props){
    let title: string = '방명록';
    let contents: ReactElement = <ModalGestBook setIsOpen={props.setIsOpen} />;

    if(props.type === 'invition'){
        title = '연락하기';
        contents = <ModalInvition />;
    }else if(props.type === 'account'){
        title = `${props.text}측 계좌번호`;
        contents = <ModalAccount type={props.text} />;
    }else if(props.type === 'gestbookItem'){
        title = '삭제';
        contents = <MoadalGestBookPassword gestbook={props.gestbook} setIsOpen={props.setIsOpen} />;
    }

    return (
        <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto min-w-[80%] my-6 mx-auto">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    
                        {/* Header */}
                        <div className="flex items-start justify-between p-4 border-b border-solid rounded-t">
                            <h3 className="text-2xl font-semibold text-center w-full">
                            {title}
                            </h3>
                            <button
                                className="absolute right-4 top-5"
                                onClick={() => props.setIsOpen(false)}
                            >
                                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    <IoMdClose />
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            {contents}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}