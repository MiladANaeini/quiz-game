import { filmQuiz } from "assets/data/QuestionsList"


export const randomize = () => {
    let questionList = [];
    let tmp = [];
    while (questionList.length < 10) {
        tmp.push(
            filmQuiz.splice(Math.floor(Math.random() * filmQuiz.length - 1), 1)[0]
        );
        questionList.push(tmp.pop());
    }
    console.log("questionList", questionList);
    return (questionList);

};