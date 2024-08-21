'use client';

import { useQuery } from "react-query";
import ModalButton from "./modalButton";
import Title from "./title";
import { getGestBook } from "actions/gestBook";
import GestbookItem from "./gestbookItem";
import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";

export default function GestBook(){
    const gestBooksQuery = useQuery({
        queryKey: ["gestBooks"],
        queryFn: () => getGestBook()
    });

    return (
        <div className="py-5">
            <Title en={'GestBook'} ko={'박명록'} />

            {/* Content */}
            <div className="py-2">
                {gestBooksQuery.isLoading && <p className="text-center">Loading...</p>}
                {gestBooksQuery.data && gestBooksQuery.data.map(gestbook => <GestbookItem key={gestbook.id} gestbook={gestbook}/>)}
                {gestBooksQuery.data && gestBooksQuery.data.length === 0 ? (<p className="text-center">축하글을 작성해주세요.</p>): null}
            </div>

            {gestBooksQuery.data && gestBooksQuery.data.length > 5 ?
                (<button className="flex items-center justify-center w-full text-center">더보기<IoIosArrowDown /></button>)
            : null}

            <div className="flex justify-end mx-6">
                <ModalButton type={'gestbook'} bgColor={'red'} color={'white'} title={'작성하기'} />
            </div>
        </div>
    )
}