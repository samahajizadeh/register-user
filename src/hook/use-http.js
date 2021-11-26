import { useState } from "react";
const useHttp = () =>{
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(null)
    const sendRequest = async(dataConfig,resultData) =>{
        setIsLoading(true);
        setIsError(null)
        try{
            const respponse = await fetch(dataConfig.url,{
                method:dataConfig.method ? dataConfig.method: 'GET',
                headers: dataConfig.headers ? dataConfig.headers : {},
                body: dataConfig.body ?  JSON.stringify(dataConfig.body) : null
            });
            if(!respponse.ok){
                throw new Error('Error')
            }
            const data = await respponse.json();
            resultData(data);

        }catch(error){
            setIsError(error.message)
        }
        setIsLoading(false);
    }
    return{
        isLoading,
        isError,
        sendRequest
    }
}
export default useHttp;