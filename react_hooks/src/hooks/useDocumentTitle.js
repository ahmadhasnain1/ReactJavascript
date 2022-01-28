import { useEffect } from "react";

function useDocumentTitle(title){
    useEffect(() => {
        document.title = title;
        return () => {
            console.log('clean up');
        }; //componentWillUnmount
      });
}

export default useDocumentTitle;
