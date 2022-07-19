

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
export const total = (arr) => {
    let sum = 0;
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i]
        }
    }
    return (sum);
}

export const average = (arr) => {
    let avg = 0;
    if (arr) {
        if (arr.length > 0) {
            avg = Math.round(total(arr) / arr.length)

        }
    }
    return (avg);
}