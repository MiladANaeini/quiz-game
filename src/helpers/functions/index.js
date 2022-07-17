

export const randomize = (list, range) => {
    let questionList = [];
    let tmp = [];
    while (questionList.length < range) {
        tmp.push(
            list.splice(Math.floor(Math.random() * list.length - 1), 1)[0]
        );
        questionList.push(tmp.pop());
    }

    return (questionList);

};