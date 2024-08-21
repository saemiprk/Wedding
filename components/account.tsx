'use client';

import ModalButton from "./modalButton";
import Title from "./title";

export default function Account(){
    return (
        <div className="py-5 bg-red-100">
            <Title en={'Account'} ko={'마음 전하실 곳'} />

            {/* Content */}
            <div className="w-full py-2">
                <p className="text-lg text-center">
                    참석이 어려우신 분들을 위해<br />
                    계좌번호를 기재하였습니다.<br />
                    너그러운 마음으로 양해 부탁드립니다.
                </p>
                <div className="w-full pt-3">
                    <ModalButton title={'신랑측 계좌번호'} bgColor={'white'} color={'red'} type={'account'} text={'신랑'} />
                    <ModalButton title={'신부측 계좌번호'} bgColor={'white'} color={'red'} type={'account'} text={'신부'}/>
                </div>
            </div>
        </div>
    )
}