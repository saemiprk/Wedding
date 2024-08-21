'use client';

import ImageGallery from 'react-image-gallery';

export default function ImageSlider(){
    const images = [
        {
            original: '/images/1.jpg',
            thumbnail: '/images/1.jpg',
        },
        {
            original: '/images/2.jpg',
            thumbnail: '/images/2.jpg',
        },
        {
            original: '/images/3.jpg',
            thumbnail: '/images/3.jpg',
        },
        {
            original: '/images/4.jpg',
            thumbnail: '/images/4.jpg',
        },
        {
            original: '/images/5.jpg',
            thumbnail: '/images/5.jpg',
        },
        {
            original: '/images/6.jpg',
            thumbnail: '/images/6.jpg',
        },
        {
            original: '/images/7.jpg',
            thumbnail: '/images/7.jpg',
        },
        {
            original: '/images/8.jpg',
            thumbnail: '/images/8.jpg',
        },
        {
            original: '/images/9.jpg',
            thumbnail: '/images/9.jpg',
        },
    ]
    return (
        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showNav={false} />
    )
}