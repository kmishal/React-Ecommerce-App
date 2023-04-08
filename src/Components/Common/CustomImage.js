import { useState, memo } from 'react';
import Preloader from './Preloader';

const CustomImage = function ({ imgUrl, title }) {
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
};

export default memo(CustomImage);

// const CustomImage = function ({ imgUrl, title }) {
//     const [imageLoaded, setImageLoaded] = useState(false);
//     useMemo(() => {
//         let img = new Image();
//         img.onload = function () {
//             setImageLoaded(true);
//         };
//         img.src = imgUrl;
//     }, [imgUrl]);

//     return (
//         <>
//             {imageLoaded ? (
//                 <img src={imgUrl} alt={title} loading="lazy" />
//             ) : (
//                 <Preloader />
//             )}
//         </>
//     );
// };

// export default CustomImage;
