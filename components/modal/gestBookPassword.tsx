'use client';

import { deleteGestBook, getGestBook } from "actions/gestBook";
import { queryClient } from "config/ReactClientProivider";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export default function MoadalGestBookPassword({gestbook, setIsOpen}){
    const [currentPassword, setCurrentPassword] = useState('');

    const gestBooksQuery = useQuery({
        queryKey: ["gestBooks"],
        queryFn: () => getGestBook(),
    });

    const deleteGestBookMutation = useMutation({
        mutationFn: () => deleteGestBook({
            password: gestbook.password,
            id: gestbook.id,
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["gestbooks"],
            });
            setIsOpen(false);
            gestBooksQuery.refetch();
        }
    });

    const handleClick = async () => {
        if(currentPassword === ''){
            alert('비밀번호를 입력하세요.');
        }else{
            if(currentPassword === gestbook.password){
                deleteGestBookMutation.mutate();
            }else{
                alert('비밀번호가 틀렸습니다.')
            }
        }
    }

    return (
        <div>
            <p className="pb-2">삭제하시려면 비밀번호를 입력해 주세요.</p>
            <div className="flex items-center">
                <label className="mr-2">비밀번호</label>
                <input type="password" className="border rounded-md px-2 py-1" onChange={(e) => {setCurrentPassword(e.target.value)}} />
            </div>
            <div className="flex items-center justify-end py-4">
                <button
                className="bg-gray-400 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none"
                onClick={handleClick}
                >
                    {'삭제하기'}
                </button>
            </div>
        </div>
    )
}