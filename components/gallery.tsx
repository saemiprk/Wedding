'use client';

import ImageSlider from "./imageSlider";
import Title from "./title";

export default function Gallery(){
    return (
        <div className="py-5">
            <Title en={'Gallery'} ko={'우리의 순간'} />

            {/* Content */}
            <ImageSlider />
        </div>
    )
}