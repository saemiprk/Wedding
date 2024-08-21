'use client';

export default function ModalAccount({type}){

    const copyToClipboard = async (text : string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('클립보드에 복사되었습니다.')
        }catch {
            console.error('클립보드 복사 실패');
        }
    }

    const buttonClick = (e) => {
        const text :string = e.target.parentElement.getElementsByTagName('b')[0].textContent;
        copyToClipboard(text);
    }

    if(type === '신랑'){
        return (
            <div>
                <div className="border-b pb-2">
                    <h1 className="font-bold pb-2">신랑</h1>
                    <div className="flex justify-between items-center">
                        <span>이태현</span>
                        <span>우리은행 <b>1104444444</b></span>
                        <button type="button" className="bg-gray-200 p-1 shadow rounded text-sm" onClick={buttonClick}>복사하기</button>
                    </div>
                </div>
                <div className="border-b py-2">
                    <h1 className="font-bold pb-2">신랑 아버지</h1>
                    <div className="flex justify-between items-center">
                        <span>이상규</span>
                        <span>우리은행 <b>1108884444</b></span>
                        <button type="button" className="bg-gray-200 p-1 shadow rounded text-sm" onClick={buttonClick}>복사하기</button>
                    </div>
                </div>
                <div className="pt-2">
                    <h1 className="font-bold pb-2">신랑 어머니</h1>
                    <div className="flex justify-between items-center">
                        <span>정문숙</span>
                        <span>우리은행 <b>1104zzz444444</b></span>
                        <button type="button" className="bg-gray-200 p-1 shadow rounded text-sm" onClick={buttonClick}>복사하기</button>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div>
                <div className="border-b pb-2">
                    <h1 className="font-bold pb-2">신부</h1>
                    <div className="flex justify-between items-center">
                        <span>박새미</span>
                        <span className="text-sm">신한은행 <b>110434755333</b></span>
                        <button type="button" className="bg-gray-200 p-1 shadow rounded text-sm" onClick={buttonClick}>복사하기</button>
                    </div>
                </div>
                <div className="border-b py-2">
                    <h1 className="font-bold pb-2">신부 아버지</h1>
                    <div className="flex justify-between items-center">
                        <span>박광도</span>
                        <span className="text-sm">우리은행 <b>188888444</b></span>
                        <button type="button" className="bg-gray-200 p-1 shadow rounded text-sm" onClick={buttonClick}>복사하기</button>
                    </div>
                </div>
                <div className="pt-2">
                    <h1 className="font-bold pb-2">신부 어머니</h1>
                    <div className="flex justify-between items-center">
                        <span>권영일</span>
                        <span className="text-sm">우리은행 <b>1222224</b></span>
                        <button type="button" className="bg-gray-200 p-1 shadow rounded text-sm" onClick={buttonClick}>복사하기</button>
                    </div>
                </div>
            </div>
        )
    }
}