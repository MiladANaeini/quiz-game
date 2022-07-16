import { filmQuiz } from "assets/data/QuestionsList"
import { QOUESTION_LIMIT } from "assets/constants";

export const randomize = () => {
    let questionList = [];
    let tmp = [];
    while (questionList.length < QOUESTION_LIMIT) {
        tmp.push(
            filmQuiz.splice(Math.floor(Math.random() * filmQuiz.length - 1), 1)[0]
        );
        questionList.push(tmp.pop());
    }

    return (questionList);

};