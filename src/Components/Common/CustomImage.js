import { useState, memo } from 'react';
import Preloader from './Preloader';

const CustomImage = memo(function ({ imgUrl, title }) {
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
});

export default CustomImage;
