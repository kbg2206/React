import { useEffect , useState } from "react";


const useCurrencyInfo = (currency) =>{
    const [currencyInfo, setCurrencyInfo] = useState({})
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

        fetch(url)
       .then((response)=>{
        return response.json()
       })
       .then((res)=>{
            setCurrencyInfo(res[currency])
       })

       console.log(currencyInfo);
    },[currency])

    return currencyInfo
}

export default useCurrencyInfo;