import { useState } from "react";
import axios from "axios";

export const useUploadForm = (url) => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const uploadForm = async (formData) => {
        setIsLoading(true);
        const res = await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
                const progress = Math.round((100 * progressEvent.loaded) / progressEvent.total)
                setProgress(progress);
            },
            onDownloadProgress: (progressEvent) => {
                const progress = 50 + (progressEvent.loaded / progressEvent.total) * 50;
                setProgress(progress);
            },
        });
        setIsLoading(false)

        setProgress(0)

        return res.data;
    };

    return { uploadForm, progress, isLoading};
};