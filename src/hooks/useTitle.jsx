import { useEffect } from "react";

const useTitle = (title) => {

    useEffect(() => {
        document.title = ` ${title} / Ifenkili`
    });
    
    return null;
}

export default useTitle
