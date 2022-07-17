import { useEffect, useState } from "react";
import { randomize } from "helpers/functions";
import { filmQuiz } from "assets/data/QuestionsList"
import { QOUESTION_LIMIT } from "assets/constants";
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
            setResult(randomize(filmQuiz, QOUESTION_LIMIT));
            callBack()
            setLoading(false);
        }, 1000);
    }

    return { loading, result }
}

export default UseFetchData