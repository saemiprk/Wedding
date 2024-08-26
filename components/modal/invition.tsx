'use client';

import Link from "next/link";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

export default function ModalInvition(){
    return (
        <div>
            <div className="border-b border-dotted">
                <div className="flex justify-between mb-2">
                    <span className="w-[25%]">신랑</span>
                    <span>이태현</span>
                    <div className="flex items-center text-red-400 mx-2">
                        <Link href='tel:01079140900'><BsFillTelephoneFill className="mr-4" /></Link>
                        <Link href='sms:'><BsEnvelopeFill /></Link>
                    </div>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="w-[25%]">신랑 아버지</span>
                    <span>이상규</span>
                    <div className="flex items-center text-red-400 mx-2">
                        <Link href='tel:'><BsFillTelephoneFill className="mr-4" /></Link>
                        <Link href='sms:'><BsEnvelopeFill /></Link>
                    </div>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="w-[25%]">신랑 어머니</span>
                    <span>정문숙</span>
                    <div className="flex items-center text-red-400 mx-2">
                        <Link href='tel:'><BsFillTelephoneFill className="mr-4" /></Link>
                        <Link href='sms:'><BsEnvelopeFill /></Link>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="flex justify-between mb-2">
                    <span className="w-[25%]">신부</span>
                    <span>박새미</span>
                    <div className="flex items-center text-red-400 mx-2">
                        <Link href='tel:01092852860'><BsFillTelephoneFill className="mr-4" /></Link>
                        <Link href='sms:01092852860'><BsEnvelopeFill /></Link>
                    </div>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="w-[25%]">신부 아버지</span>
                    <span>박광도</span>
                    <div className="flex items-center text-red-400 mx-2">
                        <Link href='tel:01088921471'><BsFillTelephoneFill className="mr-4" /></Link>
                        <Link href='sms:01088921471'><BsEnvelopeFill /></Link>
                    </div>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="w-[25%]">신부 어머니</span>
                    <span>권영일</span>
                    <div className="flex items-center text-red-400 mx-2">
                        <Link href='tel:01064422146'><BsFillTelephoneFill className="mr-4" /></Link>
                        <Link href='sms:01064422146'><BsEnvelopeFill /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}