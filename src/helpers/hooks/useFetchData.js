import { useEffect, useState } from "react";
import { randomize } from "helpers/functions";

const UseFetchData = (callBack = () => { }) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData()
    }, [])

    //mocks a fetch data API call
    const fetchData = () => {
        setLoading(true);
        setTimeout(() => {
            setResult(randomize());
            callBack()
            setLoading(false);
        }, 1000);
    }

    return { loading, result }
}

export default UseFetchData