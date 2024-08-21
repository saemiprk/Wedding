'use client';

import { createGestBook, getGestBook } from "actions/gestBook";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export default function ModalGestBook({setIsOpen}){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [contents, setContents] = useState('');

    const gestBooksQuery = useQuery({
        queryKey: ["gestBooks"],
        queryFn: () => getGestBook(),
    });

    const createGestBookMutation = useMutation({
        mutationFn: () => createGestBook({
            name: name,
            password: password,
            contents: contents,
        }),
        
        onSuccess : () => {
            gestBooksQuery.refetch();
            setIsOpen(false);
        },
    });

    return (
        <div>
            <form className="w-full">
                <div className="flex items-center justify-between mb-2">
                    <label htmlFor="name"><span className="text-red-400">*</span> 이름</label>
                    <input name="name" type="text" className="border-b px-2 py-1" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password"><span className="text-red-400">*</span> 비밀번호</label>
                    <input name="password" type="password" className="border-b px-2 py-1" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <textarea name="contents" placeholder="내용을 입력하세요." className="border w-full mt-3 min-h-20 p-2" onChange={(e) => setContents(e.target.value)} ></textarea>

                <div className="flex items-center justify-end py-4">
                    <button
                    className="bg-red-400 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none"
                    type="submit"
                    name="gestbook"
                    onClick={(e) => {
                        e.preventDefault();
                        createGestBookMutation.mutate();
                    }}
                    >
                        {'축하글 전달하기'}
                    </button>
                </div>
            </form>
        </div>
    )
}