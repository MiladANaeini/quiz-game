

export const randomize = (list = [], range = 0) => {
    let questionList = [];
    let tmp = [];
    if (list && range) {
        while (questionList.length < range) {
            tmp.push(
                list.splice(Math.floor(Math.random() * list.length - 1), 1)[0]
            );
            questionList.push(tmp.pop());
        }
    }
    return (questionList);

};