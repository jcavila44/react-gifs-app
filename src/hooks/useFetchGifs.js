import { useEffect, useState } from "react";
import { fetchGetGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async (category) => {
        const newImages = await fetchGetGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages(category);
    }, [category]);

    return {
        images,
        isLoading
    }

}
