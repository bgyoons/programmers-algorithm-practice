function solution(str1, str2) {
    var answer = 0;
    const arr1 = strFormat(str1);
    const arr2 = strFormat(str2);

    if (!arr1.length && !arr2.length) return 1 * 65536;

    let intersection = 0;
    for (let str of arr1) {
        const index = arr2.indexOf(str);
        if (index > -1) {
            intersection += 1;
            arr2.splice(index, 1);
        }
    }

    answer = intersection / (arr1.length + arr2.length);
    return parseInt(answer * 65536);
}

const strFormat = (str) => {
    let output = [];
    for (let i = 0; i < str.length - 1; i++) {
        const reg = /^[a-zA-Z]/;
        let string = '';
        if (reg.test(str[i]) && reg.test(str[i + 1])) {
            string = str[i] + str[i + 1];
            output.push(string.toLowerCase());
        }
    }
    return output;
}