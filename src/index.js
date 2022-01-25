// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    } else {
        for (let i = 1; i < matrix.length; i += 2) {
            matrix[i] = matrix[i].reverse();
        }
        const rez = [].concat(...matrix);

        return rez;
    }
};

// const towSort = (matrix) => {
//     if (matrix === undefined) {
//         return [];
//     } else {
//         for (let i = 1; i < matrix.length; i += 2) {
//             matrix[i] = matrix[i].reverse();
//         }
//         const rez = [].concat(...matrix);

//         return rez;
//     }
// };
// // towSort(matrix);
