'use client';

type Props = {
    text: string
}

export default function Button(props: Props){
    return (
        <button className="block bg-white text-red-400 font-bold text-sm px-10 py-2 rounded shadow outline-none mx-auto my-2">{props.text}</button>
    )
}