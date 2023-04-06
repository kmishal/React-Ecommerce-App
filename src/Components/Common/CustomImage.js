import { useState } from 'react';
import Preloader from './Preloader';

export default function CustomImage({ imgUrl, title }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    let img = new Image();
    img.onload = function () {
        setImageLoaded(true);
    };
    img.src = imgUrl;

    return (
        <>
            {imageLoaded ? (
                <img src={imgUrl} alt={title} loading="lazy" />
            ) : (
                <Preloader />
            )}
        </>
    );
}
