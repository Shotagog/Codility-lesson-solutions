//////////////////////////////////////////////BinaryGap/////////////////////////////////////////////////////////
// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
//
//     For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
//
//     Write a function:
//
// function solution(N);
//
// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
//
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
//
//     Write an efficient algorithm for the following assumptions:
//
//     N is an integer within the range [1..2,147,483,647].
// Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bin = Math.abs(N).toString(2),
        finalMax = 0,
        currentMax;

    for (let i = 0; i < bin.length; i++) {
        currentMax = 0;
        while (bin[i] === "0") {
            ++currentMax && ++i;
        }
        if (bin[i] === '1' ) finalMax = Math.max(finalMax, currentMax);
    }
    return finalMax;
}

//console.log(solution(1041));




/////////////////////////////////////////////CyclicRotation////////////////////////////////////////////////////////
// An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and
// the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]
// (elements are shifted right by one index and 6 is moved to the first place).
// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
//     Write a function:
// function solution(A, K);
// that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.
//     For example, given
// A = [3, 8, 9, 7, 6]
// K = 3
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:
//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
// For another example, given
//
// A = [0, 0, 0]
// K = 1
// the function should return [0, 0, 0]
// Given
// A = [1, 2, 3, 4]
// K = 4
// the function should return [1, 2, 3, 4]
//
// Assume that:
//
//     N and K are integers within the range [0..100];
// each element of array A is an integer within the range [−1,000..1,000].
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    K = K % A.length;

    const sliceIdx = A.length - K;
    return [...A.slice(sliceIdx), ...A.slice(0, sliceIdx)];
}

//console.log(solution([1, 2, 3, 4], 3));




////////////////////////////////////////OddOccurrencesInArray//////////////////////////////////////////////
// A non-empty array A consisting of N integers is given. The array contains an odd number of elements,
// and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
//     For example, in array A such that:
//     A[0] = 9  A[1] = 3  A[2] = 9
// A[3] = 3  A[4] = 9  A[5] = 7
// A[6] = 9
// the elements at indexes 0 and 2 have value 9,
//     the elements at indexes 1 and 3 have value 3,
//     the elements at indexes 4 and 6 have value 9,
//     the element at index 5 has value 7 and is unpaired.
//     Write a function:
// function solution(A);
// that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.
//     For example, given array A such that:
//     A[0] = 9  A[1] = 3  A[2] = 9
// A[3] = 3  A[4] = 9  A[5] = 7
// A[6] = 9
// the function should return 7, as explained in the example above.
//     Write an efficient algorithm for the following assumptions:
//     N is an odd integer within the range [1..1,000,000];
// each element of array A is an integer within the range [1..1,000,000,000];
// all but one of the values in A occur an even number of times.
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const newSet = new Set([]);

    for(const item of A){
        newSet.has(item) ? newSet.delete(item) : newSet.add(item);
    }

    return Array.from(newSet)[0];
}
//console.log(solution([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]));



///////////////////////////////////////////////FrogJmp///////////////////////////////////////////////////////
// A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to
// a position greater than or equal to Y. The small frog always jumps a fixed distance, D.
//     Count the minimal number of jumps that the small frog must perform to reach its target.
//     Write a function:
// function solution(X, Y, D);
// that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.
//     For example, given:
// X = 10
// Y = 85
// D = 30
// the function should return 3, because the frog will be positioned as follows:
// after the first jump, at position 10 + 30 = 40
// after the second jump, at position 10 + 30 + 30 = 70
// after the third jump, at position 10 + 30 + 30 + 30 = 100
// Write an efficient algorithm for the following assumptions:
//     X, Y and D are integers within the range [1..1,000,000,000];
// X ≤ Y.
// frogjump solution
function solution(X, Y, D) {
    return Math.ceil((Y - X) / D);
}

//console.log(solution(10, 85, 30));




////////////////////////////////////////////PermMissingElem/////////////////////////////////////////////////
// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
//     Your goal is to find that missing element.
//     Write a function:
// function solution(A);
// that, given an array A, returns the value of the missing element.
//     For example, given array A such that:
//     A[0] = 2
// A[1] = 3
// A[2] = 1
// A[3] = 5
// the function should return 4, as it is the missing element.
//     Write an efficient algorithm for the following assumptions:
//     N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].
// PermMissingElem Solution in Javascript
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let missing = (A.length + 1) * (A.length + 2) / 2;
    for(let i = 0; i < A.length; i++){
        missing -= A[i];
    }
    return missing;
}

//console.log(solution([1,2,4,5,6]))







/////////////////////////////////////TapeEquilibrium////////////////////////////////////////////////////
// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
//     Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
//     For example, consider array A such that:
//     A[0] = 3
// A[1] = 1
// A[2] = 2
// A[3] = 4
// A[4] = 3
// We can split this tape in four places:
//     P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
// Write a function:
// function solution(A);
// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.
//     For example, given:
// A[0] = 3
// A[1] = 1
// A[2] = 2
// A[3] = 4
// A[4] = 3
// the function should return 1, as explained above.
//     Write an efficient algorithm for the following assumptions:
//     N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−1,000..1,000].
// Equilibrium Problem on Codility
A = []
A[0] = 3
A[1] = 1
A[2] = 2
A[3] = 4
A[4] = 3

function solution(A) {
    let left = A[0], right = 0;
    for (let i = 1; i < A.length; i++){
        right += A[i]
        console.log(right)
    }
    let min = Math.abs(left - right);
    for (let i = 1; i < A.length-1; i++){
        left += A[i];
        right -= A[i];
        if (min > (Math.abs(left - right))) {
            min = Math.abs(left - right);
        }
    }
    return min;

}

//console.log(solution(A))




/////////////////////////////////////////FrogRiverOne////////////////////////////////////////////////////////
// A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0)
// and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.
//     You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.
//     The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when
//     leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from
//     1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.
//     For example, you are given integer X = 5 and array A such that:
//     A[0] = 1
// A[1] = 3
// A[2] = 1
// A[3] = 4
// A[4] = 2
// A[5] = 3
// A[6] = 5
// A[7] = 4
// In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.
//     Write a function:
// function solution(X, A);
// that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.
//     If the frog is never able to jump to the other side of the river, the function should return −1.
// For example, given X = 5 and array A such that:
//     A[0] = 1
// A[1] = 3
// A[2] = 1
// A[3] = 4
// A[4] = 2
// A[5] = 3
// A[6] = 5
// A[7] = 4
// the function should return 6, as explained above.
//     Write an efficient algorithm for the following assumptions:
//     N and X are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..X].
// Frog River One Codility Problem
function solution(X, A) {
    let step = Array(X).fill(0);
    let sum = 0;
    for(let i = 0; i < A.length; i++){
        if(A[i] <= X){
            if(step[A[i] - 1] === 0){
                step[A[i] -1] = 1;
                sum += 1;
                if(sum === X){
                    return i;
                }
            }
        }
    }
    return (-1);
}

//console.log(solution(5, A))




////////////////////////////////////////////PermCheck////////////////////////////////////////////////////
// A non-empty array A consisting of N integers is given.
// A permutation is a sequence containing each element from 1 to N once, and only once.
// For example, array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation, because value 2 is missing.
// The goal is to check whether array A is a permutation.
// Write a function:
// function solution(A);
// that, given an array A, returns 1 if array A is a permutation and 0 if it is not.
// For example, given array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// the function should return 1.
// Given array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// the function should return 0.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].
function solution(A) {
    let max = 0
    for (let i = 0; i < A.length; i++){
        if (A[i] > max) max = A[i]
    }

    if (A.length !== max) return 0;
    let Indexes = Array(max).fill(0);

    for (let i = 0; i < A.length; i++){
        Indexes[A[i] - 1]++
    }
    let result = Indexes.indexOf(0);

    return result === -1 ? 1 : 0;
}

// console.log(solution(4, 1, 3, 2));
// console.log(solution(4, 1, 3));



////////////////////////////////////////////MaxCounters////////////////////////////////////////////////////
// You are given N counters, initially set to 0, and you have two possible operations on them:
// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:
// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:
//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:
//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)
// The goal is to calculate the value of every counter after all operations.
// Write a function:
// function solution(N, A);
// that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.
// Result array should be returned as an array of integers.
// For example, given:
//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the function should return [3, 2, 2, 4, 2], as explained above.
// Write an efficient algorithm for the following assumptions:
// N and M are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..N + 1].
function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counters = new Array(N).fill(0);
    let maxCounter = 0;
    let maxSet = 0;

    for(let i = 0; i < A.length; i++){
        let x = A[i] - 1;
        if(x === N){
            maxSet = maxCounter;
        }else if(0 <= x && x < N){
            counters[x] = Math.max(counters[x] + 1, maxSet + 1);
            maxCounter = Math.max(counters[x], maxCounter);
        }
    }

    counters = counters.map((x) => Math.max(x, maxSet));
    return counters;
}

// console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]))




///////////////////////////////////////MissingInteger////////////////////////////////////////////////////
// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
function solution(A) {
    const highestNum = Math.max.apply(null, A);
    if (highestNum < 0) return 1;

    let newArr = new Array(highestNum).fill(0);

    for (let i = 0; i < A.length; i++) {
        if(A[i] > 0){
            newArr[A[i] - 1]++;
        }
    }

    let index = newArr.indexOf(0);
    if(index === -1){
        return highestNum + 1;
    }else {
        return index + 1
    }
}

// console.log(solution([1, 3, 6, 4, 1, 2]))



//////////////////////////////////////////PassingCars/////////////////////////////////////////////////////////
// A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.
// Array A contains only 0s and/or 1s:
// 0 represents a car traveling east,
// 1 represents a car traveling west.
// The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.
// For example, consider array A such that:
//   A[0] = 0
//   A[1] = 1
//   A[2] = 0
//   A[3] = 1
//   A[4] = 1
// We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).
// Write a function:
// function solution(A);
// that, given a non-empty array A of N integers, returns the number of pairs of passing cars.
// The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.
// For example, given:
//   A[0] = 0
//   A[1] = 1
//   A[2] = 0
//   A[3] = 1
//   A[4] = 1
// the function should return 5, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer that can have one of the following values: 0, 1.
function solution(A){
    let all = 0, res = 0;

    for (let i = 0; i < A.length; i++){
        if(A[i] === 0) all++;
        else {
            res += 1 * all;
            if(res > 1000000000) return -1
        }
    }

    return res;
}

// console.log(solution([0, 1, 0, 1, 1]))



/////////////////////////////////////////////CountDiv//////////////////////////////////////////////////////////
// Write a function:
// class Solution { public int solution(int A, int B, int K); }
// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:
// { i : A ≤ i ≤ B, i mod K = 0 }
// For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.
// Write an efficient algorithm for the following assumptions:
// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B.
function solution(A, B, K){
    if (A === B) {
        return A % K === 0 ? 1 : 0;
    }

    let leftLimit = Math.ceil(A / K);
    let rightLimit = Math.floor(B / K);

    return (rightLimit - leftLimit + 1)
}

// console.log(solution(6, 11, 2));



///////////////////////////////////////GenomicRangeQuery///////////////////////////////////////////////////////
// A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence.
// Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are
// going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?
//
// The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays
// P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence
// between positions P[K] and Q[K] (inclusive).
// For example, consider string S = CAGCCTA and arrays P, Q such that:
//     P[0] = 2    Q[0] = 4
//     P[1] = 5    Q[1] = 5
//     P[2] = 0    Q[2] = 6
// The answers to these M = 3 queries are as follows:
// The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
// The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
// The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
// Write a function:
// function solution(S, P, Q);
// that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M integers
// specifying the consecutive answers to all queries.
// Result array should be returned as an array of integers.
// For example, given the string S = CAGCCTA and arrays P, Q such that:
//     P[0] = 2    Q[0] = 4
//     P[1] = 5    Q[1] = 5
//     P[2] = 0    Q[2] = 6
// the function should return the values [2, 4, 1], as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// M is an integer within the range [1..50,000];
// each element of arrays P and Q is an integer within the range [0..N − 1];
// P[K] ≤ Q[K], where 0 ≤ K < M;
// string S consists only of upper-case English letters A, C, G, T.
function solution(S, P, Q){
    const res = [];

    for (let i = 0; i < P.length; i++){
        let check = S.substring(P[i], Q[i] + 1);
        console.log(check)
        if(check.indexOf('A') !== -1){
            res[i] = 1;
            continue;
        }
        if(check.indexOf('C') !== -1){
            res[i] = 2;
            continue;
        }
        if(check.indexOf('G') !== -1){
            res[i] = 3;
            continue;
        }
        res[i] = 4
    }
    return res;
}

// console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]));



////////////////////////////////////////////MinAvgTwoSlice/////////////////////////////////////////////////////
// A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A
// (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by
// the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).
// For example, array A such that:
//     A[0] = 4
//     A[1] = 2
//     A[2] = 2
//     A[3] = 5
//     A[4] = 1
//     A[5] = 5
//     A[6] = 8
// contains the following example slices:
// slice (1, 2), whose average is (2 + 2) / 2 = 2;
// slice (3, 4), whose average is (5 + 1) / 2 = 3;
// slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
// The goal is to find the starting position of a slice whose average is minimal.
// Write a function:
// function solution(A);
// that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average.
// If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.
// For example, given array A such that:
//     A[0] = 4
//     A[1] = 2
//     A[2] = 2
//     A[3] = 5
//     A[4] = 1
//     A[5] = 5
//     A[6] = 8
// the function should return 1, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−10,000..10,000].
function solution(A){
    let min = (A[0] + A[1]) / 2;
    let minIdx = 0;
    for ( let i = 1; i < A.length - 1 ; i ++ ) {
        let two = (A[i] + A[i + 1]) / 2;
        if (i > A.length - 2) {
            if ( two < min) {
                min = two;
                minIdx = i;
            }
        } else {
            let three = (A[i] + A [i + 1] + A[i + 2]) / 3;
            if (two < min || three < min) {
                min = two < three ? two : three;
                minIdx = i;
            }
        }
    }
    return minIdx;
}

// console.log(solution([4, 2, 2, 5, 1, 5, 8]));



///////////////////////////////////////////////Distinct//////////////////////////////////////////////////////////
// Write a function
// function solution(A);
// that, given an array A consisting of N integers, returns the number of distinct values in array A.
// For example, given array A consisting of six elements such that:
//  A[0] = 2    A[1] = 1    A[2] = 1
//  A[3] = 2    A[4] = 3    A[5] = 1
// the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
function solution(A){
    let sorted = A.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < sorted.length; i++){
        if(sorted[i] !== sorted[i + 1]){
            res.push(sorted[i])
        }
    }
    return res.length;
}

// console.log(solution([2, 1, 1, 2, 3, 1]));



/////////////////////////////////////////////MaxProductOfThree///////////////////////////////////////////////////////
// A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).
// For example, array A such that:
//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// contains the following example triplets:
// (0, 1, 2), product is −3 * 1 * 2 = −6
// (1, 2, 4), product is 1 * 2 * 5 = 10
// (2, 4, 5), product is 2 * 5 * 6 = 60
// Your goal is to find the maximal product of any triplet.
// Write a function:
// function solution(A);
// that, given a non-empty array A, returns the value of the maximal product of any triplet.
// For example, given array A such that:
//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// the function should return 60, as the product of triplet (2, 4, 5) is maximal.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−1,000..1,000].
function solution(A){
    let sorted = A.sort((a, b) => a - b);

    let type1 = sorted[0] * sorted[1] * sorted[sorted.length-1];
    let type2 = sorted[sorted.length-1] * sorted[sorted.length-2] * sorted[sorted.length-3];

    return Math.max(type1, type2);
}

// console.log(solution([-3, 1, 2, -2, 5, 6]));



///////////////////////////////////////////Triangle////////////////////////////////////////////////////////////
// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:
// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
// For example, consider array A such that:
//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// Triplet (0, 2, 4) is triangular.
// Write a function:
// function solution(A);
// that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.
// For example, given array A such that:
//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// the function should return 1, as explained above. Given array A such that:
//   A[0] = 10    A[1] = 50    A[2] = 5
//   A[3] = 1
// the function should return 0.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
function solution(A){
    if (A.length < 2) return 0;
    A = A.sort((a, b) => a - b);

    for (let i = 0; i < A.length - 2; i++){
        if ((A[i] + A[i + 1] > A[i + 2]) &&
            (A[i + 1] + A[i + 2] > A[i]) &&
            (A[i] + A[i + 2] > A[i + 1])) {
            return 1;
        }
    }

    return 0;
}

// console.log(solution([10, 2, 5, 1, 8, 20]));
// console.log(solution([10, 50, 5, 1]));



///////////////////////////////////////////NumberOfDiscIntersections/////////////////////////////////////////////////////////
// We draw N discs on a plane. The discs are numbered from 0 to N − 1. An array A of N non-negative integers, specifying the radiuses of the discs,
// is given. The J-th disc is drawn with its center at (J, 0) and radius A[J].
// We say that the J-th disc and K-th disc intersect if J ≠ K and the J-th and K-th discs have at least one common point (assuming that the discs contain their borders).
// The figure below shows discs drawn for N = 6 and A as follows:
//   A[0] = 1
//   A[1] = 5
//   A[2] = 2
//   A[3] = 1
//   A[4] = 4
//   A[5] = 0
// There are eleven (unordered) pairs of discs that intersect, namely:
// discs 1 and 4 intersect, and both intersect with all the other discs;
// disc 2 also intersects with discs 0 and 3.
// Write a function:
// function solution(A);
// that, given an array A describing N discs as explained above, returns the number of (unordered) pairs of intersecting discs. The function should return −1
// if the number of intersecting pairs exceeds 10,000,000.
// Given array A shown above, the function should return 11, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [0..2,147,483,647].
function solution(A){
    let counter = 0, j = 0, left = [], right = [];

    //fill the left and right limits of each circle
    for(let i = 0; i < A.length; i++) {
        left[i] = i - A[i];
        right[i] = i + A[i];
    }

    //sort them in an ascending order - why ? Basically we will rearrange their limits in an ascending way, we will have in leftLimit all
    // open circles while  in the right we will have where the next circle closes
    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);

    //loop through all the elements of the RIGHT boundaries
    for(let i = 0; i < A.length; i++) {
        //this is the tricky part to understand
        //on the left we have the boundaries of open circles, on the right the boundary of the next circle
        //as long as there are circles open (rightLimit[i] >= leftLimit[j]) and (j < A.length)
        while(j < A.length && right[i] >= left[j]){
            //we have circles at each position, so, as long as the left boundaries are smaller or equal to the right boundary, there are circles intersecting there
            //if j surpasses j, it means we overcalculated and we start to decrease the number of intersections
            counter += j - i;
            //pass to the next open circle
            j++;
        }
        if(counter > 10000000) return -1;
    }

    return counter;
}

// console.log(solution([1, 5, 2, 1, 4, 0]));



//////////////////////////////////////////Brackets/////////////////////////////////////////////////////////
// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:
// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.
// Write a function:
// function solution(S);
// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.
// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..200,000];
// string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
function solution(S){
    const brackets = {
        "{": "}",
        "(": ")",
        "[": "]"
    }

    const closedBrackets = ["}", ")", "]"]

    let stack = [];

    for (let i = 0; i < S.length; i++) {
        if (brackets.hasOwnProperty(S[i])) {
            stack.push(S[i]);
        } else if (brackets[stack[stack.length -1]] == S[i]) {
            stack.pop();
        } else if (closedBrackets.indexOf(S[i]) !== -1) {
            return 0;
        }
    }

    return stack.length === 0 ? 1 : 0
}

// console.log(solution("{[()()]}"));
// console.log(solution("([)()]"));




////////////////////////////////////////////////Fish/////////////////////////////////////////////////////////////
// You are given two non-empty arrays A and B consisting of N integers. Arrays A and B represent N voracious fish in a river, ordered downstream along the flow of the river.
// The fish are numbered from 0 to N − 1. If P and Q are two fish and P < Q, then fish P is initially upstream of fish Q. Initially, each fish has a unique position.
// Fish number P is represented by A[P] and B[P]. Array A contains the sizes of the fish. All its elements are unique. Array B contains
// the directions of the fish. It contains only 0s and/or 1s, where:
// 0 represents a fish flowing upstream,
// 1 represents a fish flowing downstream.
// If two fish move in opposite directions and there are no other (living) fish between them, they will eventually meet each other. Then only one fish can stay alive −
// the larger fish eats the smaller one. More precisely, we say that two fish P and Q meet each other when P < Q, B[P] = 1 and B[Q] = 0, and there are no living fish between them. After they meet:
// If A[P] > A[Q] then P eats Q, and P will still be flowing downstream,
// If A[Q] > A[P] then Q eats P, and Q will still be flowing upstream.
// We assume that all the fish are flowing at the same speed. That is, fish moving in the same direction never meet. The goal is to calculate the number of fish that will stay alive.
// For example, consider arrays A and B such that:
//   A[0] = 4    B[0] = 0
//   A[1] = 3    B[1] = 1
//   A[2] = 2    B[2] = 0
//   A[3] = 1    B[3] = 0
//   A[4] = 5    B[4] = 0
// Initially all the fish are alive and all except fish number 1 are moving upstream. Fish number 1 meets fish number 2 and eats it, then it meets fish number 3 and eats it too. Finally,
// it meets fish number 4 and is eaten by it. The remaining two fish, number 0 and 4, never meet and therefore stay alive.
// Write a function:
// function solution(A, B);
// that, given two non-empty arrays A and B consisting of N integers, returns the number of fish that will stay alive.
// For example, given the arrays shown above, the function should return 2, as explained above.

function solution(A, B){
    const downStream = [], upStream = [];
    let direction = 0;

    for (let i = 0; i < A.length; i++){
        direction = B[i];

        if(direction === 0){
            while (downStream.length > 0){
                let d = downStream.pop();

                if(d > A[i]){
                    downStream.push(d);
                    break;
                }
            }

            if(downStream.length === 0){
                upStream.push(A[i])
            }
        }else{
            downStream.push(A[i])
        }
    }

    return downStream.length + upStream.length;
}

// console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));





//////////////////////////////////////////Nesting//////////////////////////////////////////////////////////////
// A string S consisting of N characters is called properly nested if:
// S is empty;
// S has the form "(U)" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, string "(()(())())" is properly nested but string "())" isn't.
// Write a function:
// function solution(S);
// that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.
// For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..1,000,000];
// string S consists only of the characters "(" and/or ")".
function solution(S){
    const brackets = {
        "(": ")"
    }

    const closedBrackets = [")"];

    let stack = [];

    for (let i = 0; i < S.length; i++) {
        if (brackets.hasOwnProperty(S[i])) {
            stack.push(S[i]);
        } else if (brackets[stack[stack.length -1]] === S[i]) {
            stack.pop();
        } else if (closedBrackets.indexOf(S[i]) !== -1) {
            return 0;
        }
    }

    return stack.length === 0 ? 1 : 0
}

// console.log(solution("(()(())())"));
// console.log(solution("())"));



////////////////////////////////////////////StoneWall////////////////////////////////////////////////////////
// You are going to build a stone wall. The wall should be straight and N meters long, and its thickness should be constant;
// however, it should have different heights in different places. The height of the wall is specified by an array H of N positive integers.
// H[I] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H[0] is the height of the wall's
// left end and H[N−1] is the height of the wall's right end.
// The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular). Your task is to compute the minimum number of blocks needed to build the wall.
// Write a function:
// function solution(H);
// that, given an array H of N positive integers specifying the height of the wall, returns the minimum number of blocks needed to build it.
// For example, given array H containing N = 9 integers:
//   H[0] = 8    H[1] = 8    H[2] = 5
//   H[3] = 7    H[4] = 9    H[5] = 8
//   H[6] = 7    H[7] = 4    H[8] = 8
// the function should return 7. The figure shows one possible arrangement of seven blocks.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array H is an integer within the range [1..1,000,000,000].
function solution(H){
    let height = 0, stackIndex = 0, stack = [];

    for (let i = 0; i < H.length; i++){
        while (stackIndex > 0 && stack[stackIndex - 1] > H[i]) {
            stackIndex--
        }
        if (stackIndex > 0 && stack[stackIndex -1] === H[i] ){
            continue
        } else {
            height++
            stack[stackIndex] = H[i]
            stackIndex++
        }
    }

    return height;
}

// console.log(solution(8, 8, 5, 7, 9, 8, 7, 4, 8));




/////////////////////////////////////////Dominator///////////////////////////////////////////////////////////
// An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.
// For example, consider array A such that
//  A[0] = 3    A[1] = 4    A[2] =  3
//  A[3] = 2    A[4] = 3    A[5] = -1
//  A[6] = 3    A[7] = 3
// The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.
// Write a function
// function solution(A);
// that, given an array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs.
// The function should return −1 if array A does not have a dominator.
// For example, given array A such that
//  A[0] = 3    A[1] = 4    A[2] =  3
//  A[3] = 2    A[4] = 3    A[5] = -1
//  A[6] = 3    A[7] = 3
// the function may return 0, 2, 4, 6 or 7, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
function solution(A){
    const arr = []
    for (let i = 0; i < A.length; i++){
        console.log(arr[A[i]])
        if (!arr[A[i]])
            arr[A[i]] = 1;
        else
            arr[A[i]]++;
        if (arr[A[i]] > A.length / 2)
            return i;
    }
    return -1;
}

// console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));




//////////////////////////////////////EquiLeader//////////////////////////////////////////////////////////
// A non-empty array A consisting of N integers is given.
// The leader of this array is the value that occurs in more than half of the elements of A.
// An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.
// For example, given array A such that:
//     A[0] = 4
//     A[1] = 3
//     A[2] = 4
//     A[3] = 4
//     A[4] = 4
//     A[5] = 2
// we can find two equi leaders:
// 0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
// 2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
// The goal is to count the number of equi leaders.
// Write a function:
// function solution(A);
// that, given a non-empty array A consisting of N integers, returns the number of equi leaders.
// For example, given:
//     A[0] = 4
//     A[1] = 3
//     A[2] = 4
//     A[3] = 4
//     A[4] = 4
//     A[5] = 2
// the function should return 2, as explained above.
function solution(A){
    let len = A.length, size = 0, indexCount = 0, candidateCount = 0, leader, leaderCount = 0, candidate = null;

    // First find the leader within A
    for (let i = 0; i < len; i++) {
        if (size === 0) {
            size++;
            candidate = A[i];
        } else {
            (candidate === A[i]) ? size++ : size--;
        }
    }

    for (let j = 0; j < len; j++) {
        if (A[j] === candidate) {
            candidateCount++;
        }
    }

    if (candidateCount <= len / 2) { // Our candidate failed :(
        return 0;
    } else { // we have a winner!
        leader = candidate;
        leaderCount = candidateCount;
    }

    let leaderLeftCount = 0;
    for (let k = 0; k < len - 1; k++) {
        let lenLeft = (k + 1);
        let lenRight = len - lenLeft;
        if (A[k] === leader) {
            leaderCount--;
            leaderLeftCount++;
        }
        if (leaderLeftCount > (lenLeft / 2) && leaderCount > (lenRight / 2)) {
            indexCount++;
        }
    }
    return indexCount;
}

// console.log(solution([4, 3, 4, 4, 4, 2]));




////////////////////////////////////////////////MaxProfit////////////////////////////////////////////////////////
// An array A consisting of N integers is given. It contains daily prices of a stock share for a period of N consecutive days.
// If a single share was bought on day P and sold on day Q, where 0 ≤ P ≤ Q < N, then the profit of such transaction is equal to A[Q] − A[P],
// provided that A[Q] ≥ A[P]. Otherwise, the transaction brings loss of A[P] − A[Q].
// For example, consider the following array A consisting of six elements such that:
//   A[0] = 23171
//   A[1] = 21011
//   A[2] = 21123
//   A[3] = 21366
//   A[4] = 21013
//   A[5] = 21367
// If a share was bought on day 0 and sold on day 2, a loss of 2048 would occur because A[2] − A[0] = 21123 − 23171 = −2048.
// If a share was bought on day 4 and sold on day 5, a profit of 354 would occur because A[5] − A[4] = 21367 − 21013 = 354.
// Maximum possible profit was 356. It would occur if a share was bought on day 1 and sold on day 5.
// Write a function,
// function solution(A);
// that, given an array A consisting of N integers containing daily prices of a stock share for a period of N consecutive days,
// returns the maximum possible profit from one transaction during this period. The function should return 0 if it was impossible to gain any profit.
// For example, given array A consisting of six elements such that:
//   A[0] = 23171
//   A[1] = 21011
//   A[2] = 21123
//   A[3] = 21366
//   A[4] = 21013
//   A[5] = 21367
// the function should return 356, as explained above.
function solution(A){
    let max = 0, maxEnd = 0;
    let minPrice = A[0];

    for (let i = 0; i < A.length; i++){
        maxEnd = Math.max(0, A[i] - minPrice);
        minPrice = Math.min(minPrice, A[i]);
        max = Math.max(maxEnd, max);
    }

    return max;
}

// console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));




////////////////////////////////////////////////MaxSliceSum/////////////////////////////////////////////////////
// A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a
// slice of array A. The sum of a slice (P, Q) is the total of A[P] + A[P+1] + ... + A[Q].
// Write a function:
// function solution(A);
// that, given an array A consisting of N integers, returns the maximum sum of any slice of A.
// For example, given array A such that:
// A[0] = 3  A[1] = 2  A[2] = -6
// A[3] = 4  A[4] = 0
// the function should return 5 because:
// (3, 4) is a slice of A that has sum 4,
// (2, 2) is a slice of A that has sum −6,
// (0, 1) is a slice of A that has sum 5,
// no other slice of A has sum greater than (0, 1).
function solution(A){
    let max = A[0], sum = 0;

    for(let i = 0; i < A.length; i++){
        sum += A[i];
        if(sum > max) max = sum
        if(sum < 0) sum = 0
    }

    return max
}

// console.log(solution([3, 2, -6, 4, 0]));




/////////////////////////////////////////////MaxDoubleSliceSum///////////////////////////////////////////////////////
// A non-empty array A consisting of N integers is given.
// A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called a double slice.
// The sum of double slice (X, Y, Z) is the total of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1].
// For example, array A such that:
//     A[0] = 3
//     A[1] = 2
//     A[2] = 6
//     A[3] = -1
//     A[4] = 4
//     A[5] = 5
//     A[6] = -1
//     A[7] = 2
// contains the following example double slices:
// double slice (0, 3, 6), sum is 2 + 6 + 4 + 5 = 17,
// double slice (0, 3, 7), sum is 2 + 6 + 4 + 5 − 1 = 16,
// double slice (3, 4, 5), sum is 0.
// The goal is to find the maximal sum of any double slice.
// Write a function:
// function solution(A);
// that, given a non-empty array A consisting of N integers, returns the maximal sum of any double slice.
// For example, given:
//     A[0] = 3
//     A[1] = 2
//     A[2] = 6
//     A[3] = -1
//     A[4] = 4
//     A[5] = 5
//     A[6] = -1
//     A[7] = 2
// the function should return 17, because no double slice of array A has a sum of greater than 17.
function solution(A){
    const left = A.map(i => 0), right = A.map(i => 0);

    for (let li = 1, ri = A.length - 2; ri >= 2; li++, ri--) {
        left[li] = Math.max(0, left[li - 1] + A[li]);
        right[ri] = Math.max(0, right[ri+1] + A[ri]);
    }

    let max = left[0] + right[2];

    for (let i = 2; i < A.length - 1; i++) {
        max = Math.max(max, left[i - 1] + right[i + 1]);
    }

    return max;
}

// console.log(solution([3, 2, 6, -1, 4, 5, -1, 2]));



//////////////////////////////////////CountFactors///////////////////////////////////////////////////////
// A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.
// For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).
// Write a function:
// function solution(N);
// that, given a positive integer N, returns the number of its factors.
// For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.
function solution(N){
    let factors = 0, root = Math.sqrt(N);

    for(let i = 1; i <= root; i++){
        if(N % i === 0)
            if(i === root)
                factors++;
            else
                factors += 2;
    }
    return factors;
}

// console.log(solution(24));



////////////////////////////////////MinPerimeterRectangle////////////////////////////////////////////////////
// An integer N is given, representing the area of some rectangle.
// The area of a rectangle whose sides are of length A and B is A * B, and the perimeter is 2 * (A + B).
// The goal is to find the minimal perimeter of any rectangle whose area equals N. The sides of this rectangle should be only integers.
// For example, given integer N = 30, rectangles of area 30 are:
// (1, 30), with a perimeter of 62,
// (2, 15), with a perimeter of 34,
// (3, 10), with a perimeter of 26,
// (5, 6), with a perimeter of 22.
// Write a function:
// function solution(N);
// that, given an integer N, returns the minimal perimeter of any rectangle whose area is exactly equal to N.
// For example, given an integer N = 30, the function should return 22, as explained above.
function solution(N){
    const root = Math.round(Math.sqrt(N));

    for(let i = root; i >= 1; i--){
        if(N % i === 0){
            let a = i, b = N / a;
            return 2 *(a + b);
        }
    }
}

// console.log(solution(30));




////////////////////////////////////Flags////////////////////////////////////////////////////
// A non-empty array A consisting of N integers is given.
// A peak is an array element which is larger than its neighbours. More precisely, it is an index P such that 0 < P < N − 1 and A[P − 1] < A[P] > A[P + 1].
// For example, the following array A:
//     A[0] = 1
//     A[1] = 5
//     A[2] = 3
//     A[3] = 4
//     A[4] = 3
//     A[5] = 4
//     A[6] = 1
//     A[7] = 2
//     A[8] = 3
//     A[9] = 4
//     A[10] = 6
//     A[11] = 2
// has exactly four peaks: elements 1, 3, 5 and 10.
// You are going on a trip to a range of mountains whose relative heights are represented by array A, as shown in a figure below.
// You have to choose how many flags you should take with you. The goal is to set the maximum number of flags on the peaks, according to certain rules.
// Flags can only be set on peaks. What's more, if you take K flags, then the distance between any two flags should be greater
// than or equal to K. The distance between indices P and Q is the absolute value |P − Q|.
// For example, given the mountain range represented by array A, above, with N = 12, if you take:
// two flags, you can set them on peaks 1 and 5;
// three flags, you can set them on peaks 1, 5 and 10;
// four flags, you can set only three flags, on peaks 1, 5 and 10.
// You can therefore set a maximum of three flags in this case.
// Write a function:
// function solution(A);
// that, given a non-empty array A of N integers, returns the maximum number of flags that can be set on the peaks of the array.
// For example, the following array A:
//     A[0] = 1
//     A[1] = 5
//     A[2] = 3
//     A[3] = 4
//     A[4] = 3
//     A[5] = 4
//     A[6] = 1
//     A[7] = 2
//     A[8] = 3
//     A[9] = 4
//     A[10] = 6
//     A[11] = 2
// the function should return 3, as explained above.
function solution(A){
    let peaks = [];

    for (let i = 1; i < A.length -1; i++){
        if(A[i - 1] < A[i] && A[i] > A[i + 1]){
            peaks.push(i);
        }
    }

    if(peaks.length < 2)
        return peaks.length;

    let root = Math.floor(Math.sqrt(peaks[peaks.length - 1] - peaks[0]));

    for(let i = root + 1; i > 0; i--){
        let distance = 0, flags = 1;

        for(let j = 0; j < peaks.length - 1; j++){
            let current = peaks[j], next = peaks[j + 1], difference = Math.abs(next - current);
            if((difference + distance) >= i){
                flags++;
                distance = 0;
            }else{
                distance += difference;
            }

            if(flags === i)
                return flags;
        }
    }
}

// console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));




////////////////////////////////////Peaks////////////////////////////////////////////////////
// A non-empty array A consisting of N integers is given.
// A peak is an array element which is larger than its neighbors. More precisely, it is an index P such that 0 < P < N − 1,  A[P − 1] < A[P] and A[P] > A[P + 1].
// For example, the following array A:
//     A[0] = 1
//     A[1] = 2
//     A[2] = 3
//     A[3] = 4
//     A[4] = 3
//     A[5] = 4
//     A[6] = 1
//     A[7] = 2
//     A[8] = 3
//     A[9] = 4
//     A[10] = 6
//     A[11] = 2
// has exactly three peaks: 3, 5, 10.
// We want to divide this array into blocks containing the same number of elements. More precisely, we want to choose a number K that will yield the following blocks:
// A[0], A[1], ..., A[K − 1],
// A[K], A[K + 1], ..., A[2K − 1],
// ...
// A[N − K], A[N − K + 1], ..., A[N − 1].
// What's more, every block should contain at least one peak. Notice that extreme elements of the blocks (for example A[K − 1] or A[K])
// can also be peaks, but only if they have both neighbors (including one in an adjacent blocks).
// The goal is to find the maximum number of blocks into which the array A can be divided.
// Array A can be divided into blocks as follows:
// one block (1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2). This block contains three peaks.
// two blocks (1, 2, 3, 4, 3, 4) and (1, 2, 3, 4, 6, 2). Every block has a peak.
// three blocks (1, 2, 3, 4), (3, 4, 1, 2), (3, 4, 6, 2). Every block has a peak. Notice in particular that the first block
// (1, 2, 3, 4) has a peak at A[3], because A[2] < A[3] > A[4], even though A[4] is in the adjacent block.
// However, array A cannot be divided into four blocks, (1, 2, 3), (4, 3, 4), (1, 2, 3) and (4, 6, 2), because the (1, 2, 3)
// blocks do not contain a peak. Notice in particular that the (4, 3, 4) block contains two peaks: A[3] and A[5].
// The maximum number of blocks that array A can be divided into is three.
// Write a function:
// function solution(A);
// that, given a non-empty array A consisting of N integers, returns the maximum number of blocks into which A can be divided.
// If A cannot be divided into some number of blocks, the function should return 0.
// For example, given:
//     A[0] = 1
//     A[1] = 2
//     A[2] = 3
//     A[3] = 4
//     A[4] = 3
//     A[5] = 4
//     A[6] = 1
//     A[7] = 2
//     A[8] = 3
//     A[9] = 4
//     A[10] = 6
//     A[11] = 2
// the function should return 3, as explained above.
function solution(A){
    const peaks = [];

    for (let i = 1; i < A.length - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }

    let max = 0;

    for (let i = 1; i < A.length; i++) {
        if(A.length % i !== 0) continue;
        if (A.length % i === 0) {
            let bi = 0, block = A.length / i;
            for (let idx in peaks) {
                let p = peaks[idx];
                if (bi * block <= p && p < (bi + 1) * block) {
                    bi++;
                }
            }
            if (bi === i) {
                max = i;
            }
        }
    }

    return max;
}

// console.time("T")
// console.log(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
// console.timeEnd("T")




////////////////////////////////////CountNonDivisible////////////////////////////////////////////////////
// You are given an array A consisting of N integers.
// For each number A[i] such that 0 ≤ i < N, we want to count the number of elements of the array that are not the divisors of A[i]. We say that these elements are non-divisors.
// For example, consider integer N = 5 and array A such that:
//     A[0] = 3
//     A[1] = 1
//     A[2] = 2
//     A[3] = 3
//     A[4] = 6
// For the following elements:
// A[0] = 3, the non-divisors are: 2, 6,
// A[1] = 1, the non-divisors are: 3, 2, 3, 6,
// A[2] = 2, the non-divisors are: 3, 3, 6,
// A[3] = 3, the non-divisors are: 2, 6,
// A[4] = 6, there aren't any non-divisors.
// Write a function:
// function solution(A);
// that, given an array A consisting of N integers, returns a sequence of integers representing the amount of non-divisors.
// Result array should be returned as an array of integers.
// For example, given:
//     A[0] = 3
//     A[1] = 1
//     A[2] = 2
//     A[3] = 3
//     A[4] = 6
// the function should return [2, 4, 3, 2, 0], as explained above.
function solution(A){
    const counters = Array(A.length * 2 + 1).fill(0);
    for(let i = 0; i < A.length; i++) counters[A[i]]++;

    const nonDivisors = [];

    for(let i = 0; i < A.length; i++) {
        let aLength = A.length;
        for(let j = 1; j * j <= A[i]; j++) {
            if(A[i] % j !== 0) continue;
            aLength -= counters[j];
            if(j * j !== A[i]) aLength -= counters[A[i] / j];
        }
        nonDivisors.push(aLength);
    }

    return nonDivisors;
}

// console.time("T")
// console.log(solution([3, 1, 2, 3, 6]));
// console.timeEnd("T")




////////////////////////////////////CountSemiprimes////////////////////////////////////////////////////
// A prime is a positive integer X that has exactly two distinct divisors: 1 and X. The first few prime integers are 2, 3, 5, 7, 11 and 13.
// A semiprime is a natural number that is the product of two (not necessarily distinct) prime numbers. The first few semiprimes are 4, 6, 9, 10, 14, 15, 21, 22, 25, 26.
// You are given two non-empty arrays P and Q, each consisting of M integers. These arrays represent queries about the number of semiprimes within specified ranges.
// Query K requires you to find the number of semiprimes within the range (P[K], Q[K]), where 1 ≤ P[K] ≤ Q[K] ≤ N.
// For example, consider an integer N = 26 and arrays P, Q such that:
//     P[0] = 1    Q[0] = 26
//     P[1] = 4    Q[1] = 10
//     P[2] = 16   Q[2] = 20
// The number of semiprimes within each of these ranges is as follows:
// (1, 26) is 10,
// (4, 10) is 4,
// (16, 20) is 0.
// Write a function:
// function solution(N, P, Q);
// that, given an integer N and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M elements specifying the consecutive answers to all the queries.
// For example, given an integer N = 26 and arrays P, Q such that:
//     P[0] = 1    Q[0] = 26
//     P[1] = 4    Q[1] = 10
//     P[2] = 16   Q[2] = 20
// the function should return the values [10, 4, 0], as explained above.
function solution(N, P, Q){
    const factorization = []; //array for factorization
    for (let i = 0; i < N + 1; ++i){
        //we just make F.lentgth = N+1 for a better matching of indexes, for example, F[i] is the smallest prime factor of i and i should start then at 2 and finish at N.
        factorization.push(0);
    }
    let i = 2;
    while (i * i <= N){
        if (factorization[i] === 0){
            let k = i * i;
            while (k <= N){
                if (factorization[k] === 0){
                    factorization[k] = i;
                }
                k += i;
            }
        }
        ++i;
    }
    //until here we have already a complexity of O(N log log N)

    const semiPrimes = [];
    for (let i = 0; i < N + 1; ++i){
        //same reason as before for creating an array of N+1 elements, just for better matching of indexes
        semiPrimes.push(0);
    }

    for (let i = 4; i < N + 1; ++i){
        if (factorization[i] > 0 && factorization[i / factorization[i]] === 0){
            semiPrimes[i] = 1;
        }
    }

    let prefixSemiPrimes = [0];
    for (let i = 0; i < N + 1; ++i){
        if (semiPrimes[i]){
            prefixSemiPrimes.push(prefixSemiPrimes[i] + 1);
        }else{
            prefixSemiPrimes.push(prefixSemiPrimes[i]);
        }
    }
    const result = [];
    for (let i = 0; i < P.length; ++i){
        result.push(prefixSemiPrimes[Q[i] + 1] - prefixSemiPrimes[P[i]]);
    }
    return result;
}

// console.log(solution(26, [1, 4, 16], [26, 10, 20]));




////////////////////////////////////ChocolatesByNumbers////////////////////////////////////////////////////
// Two positive integers N and M are given. Integer N represents the number of chocolates arranged in a circle, numbered from 0 to N − 1.
// You start to eat the chocolates. After eating a chocolate you leave only a wrapper.
// You begin with eating chocolate number 0. Then you omit the next M − 1 chocolates or wrappers on the circle, and eat the following one.
// More precisely, if you ate chocolate number X, then you will next eat the chocolate with number (X + M) modulo N (remainder of division).
// You stop eating when you encounter an empty wrapper.
// For example, given integers N = 10 and M = 4. You will eat the following chocolates: 0, 4, 8, 2, 6.
// The goal is to count the number of chocolates that you will eat, following the above rules.
// Write a function:
// function solution(N, M);
// that, given two positive integers N and M, returns the number of chocolates that you will eat.
// For example, given integers N = 10 and M = 4. the function should return 5, as explained above.
function solution(N, M){
    const lcm = N * M / hlp(N, M);
    const res = lcm / M;
    return res;
}

function hlp(N, M){
    let a = N, b = M;
    while (a % b !== 0){
        let tempVal = a;
        a = b;
        b = tempVal % b;
    }
    return b;
}

// console.log(solution(10, 4));



////////////////////////////////////CommonPrimeDivisors////////////////////////////////////////////////////
// A prime is a positive integer X that has exactly two distinct divisors: 1 and X. The first few prime integers are 2, 3, 5, 7, 11 and 13.
// A prime D is called a prime divisor of a positive integer P if there exists a positive integer K such that D * K = P. For example, 2 and 5 are prime divisors of 20.
// You are given two positive integers N and M. The goal is to check whether the sets of prime divisors of integers N and M are exactly the same.
// For example, given:
// N = 15 and M = 75, the prime divisors are the same: {3, 5};
// N = 10 and M = 30, the prime divisors aren't the same: {2, 5} is not equal to {2, 3, 5};
// N = 9 and M = 5, the prime divisors aren't the same: {3} is not equal to {5}.
// Write a function:
// function solution(A, B);
// that, given two non-empty arrays A and B of Z integers, returns the number of positions K for which the prime divisors of A[K] and B[K] are exactly the same.
// For example, given:
//     A[0] = 15   B[0] = 75
//     A[1] = 10   B[1] = 30
//     A[2] = 3    B[2] = 5
// the function should return 1, because only one pair (15, 75) has the same set of prime divisors.
function solution(A, B){
    let res = 0;

    for (let i = 0; i < A.length; i++) {
        let a = A[i], b = B[i], d = gcd(a, b), c = 0;

        while (c !== 1) {
            c = gcd(a, d);
            a /= c;
        }

        c = 0;

        while (c !== 1) {
            c = gcd(b, d);
            b /= c;
        }

        if (a === 1 && b === 1) {
            res++;
        }

    }

    return res;
}

function gcd(a, b) {
    return a % b === 0 ? b : gcd(b, a % b);
}

// console.log(solution([15, 10, 3], [75, 30, 5]));




////////////////////////////////////FibFrog////////////////////////////////////////////////////
// The Fibonacci sequence is defined using the following recursive formula:
//     F(0) = 0
//     F(1) = 1
//     F(M) = F(M - 1) + F(M - 2) if M >= 2
// A small frog wants to get to the other side of a river. The frog is initially located at one bank of the river (position −1) and
// wants to get to the other bank (position N). The frog can jump over any distance F(K), where F(K) is the K-th Fibonacci number. Luckily,
// there are many leaves on the river, and the frog can jump between the leaves, but only in the direction of the bank at position N.
// The leaves on the river are represented in an array A consisting of N integers. Consecutive elements of array A represent
// consecutive positions from 0 to N − 1 on the river. Array A contains only 0s and/or 1s:
// 0 represents a position without a leaf;
// 1 represents a position containing a leaf.
// The goal is to count the minimum number of jumps in which the frog can get to the other side of the river (from position −1
// to position N). The frog can jump between positions −1 and N (the banks of the river) and every position containing a leaf.
// For example, consider array A such that:
//     A[0] = 0
//     A[1] = 0
//     A[2] = 0
//     A[3] = 1
//     A[4] = 1
//     A[5] = 0
//     A[6] = 1
//     A[7] = 0
//     A[8] = 0
//     A[9] = 0
//     A[10] = 0
// The frog can make three jumps of length F(5) = 5, F(3) = 2 and F(5) = 5.
// Write a function:
// function solution(A);
// that, given an array A consisting of N integers, returns the minimum number of jumps by which the frog can get to the other
// side of the river. If the frog cannot reach the other side of the river, the function should return −1.
// For example, given:
//     A[0] = 0
//     A[1] = 0
//     A[2] = 0
//     A[3] = 1
//     A[4] = 1
//     A[5] = 0
//     A[6] = 1
//     A[7] = 0
//     A[8] = 0
//     A[9] = 0
//     A[10] = 0
// the function should return 3, as explained above.
function solution(A){
    //other shore bank
    A.push(1);

    //array with shortest paths for each leaf/bank
    const reachable = [];
    for(let i = 0; i < A.length; i++){
        reachable.push(-1);
    }

    const possibleJumps = fibArray(A.length);

    //get leafs/bank that can be reached from the starting shore
    for(let i = 0; i < possibleJumps.length; i++){
        if(A[possibleJumps[i] - 1] === 1){
            reachable[possibleJumps[i] - 1] = 1;
        }
    }

    //for every position not reachable by the first bank find the shortest path
    for(let i = 0; i < A.length; i++){
        if(A[i] === 1){
            let minPrevPosition = -1;
            let minDist = A.length + 100;
            for(let j = 0; j < possibleJumps.length; j++){
                let prevPosition = i - possibleJumps[j];
                if(prevPosition < 0 || reachable[i] > -1){
                    break;
                }
                if(reachable[prevPosition] > 0 && minDist > reachable[prevPosition]){
                    minPrevPosition = prevPosition;
                    minDist = reachable[prevPosition];
                }
            }
            if(minPrevPosition > -1){
                reachable[i] = minDist + 1;
            }
        }
    }

    return reachable[reachable.length - 1];
}

function fibArray(num){
    let current = 2;

    let arr = [0, 1, 1];

    while(current <= num){
        current++;
        let next = arr[current - 1] + arr[current - 2];
        arr.push(next);
    }

    return arr;

}

// console.log(solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]));




////////////////////////////////////Ladder////////////////////////////////////////////////////
// You have to climb up a ladder. The ladder has exactly N rungs, numbered from 1 to N. With each step, you can ascend by one or two rungs. More precisely:
// with your first step you can stand on rung 1 or 2,
// if you are on rung K, you can move to rungs K + 1 or K + 2,
// finally you have to stand on rung N.
// Your task is to count the number of different ways of climbing to the top of the ladder.
// For example, given N = 4, you have five different ways of climbing, ascending by:
// 1, 1, 1 and 1 rung,
// 1, 1 and 2 rungs,
// 1, 2 and 1 rung,
// 2, 1 and 1 rungs, and
// 2 and 2 rungs.
// Given N = 5, you have eight different ways of climbing, ascending by:
//
// 1, 1, 1, 1 and 1 rung,
// 1, 1, 1 and 2 rungs,
// 1, 1, 2 and 1 rung,
// 1, 2, 1 and 1 rung,
// 1, 2 and 2 rungs,
// 2, 1, 1 and 1 rungs,
// 2, 1 and 2 rungs, and
// 2, 2 and 1 rung.
// The number of different ways can be very large, so it is sufficient to return the result modulo 2P, for a given integer P.
// Write a function:
// function solution(A, B);
// that, given two non-empty arrays A and B of L integers, returns an array consisting of L integers specifying the consecutive answers;
// position I should contain the number of different ways of climbing the ladder with A[I] rungs modulo 2B[I].
// For example, given L = 5 and:
//     A[0] = 4   B[0] = 3
//     A[1] = 4   B[1] = 2
//     A[2] = 5   B[2] = 4
//     A[3] = 5   B[3] = 3
//     A[4] = 1   B[4] = 1
// the function should return the sequence [5, 1, 8, 0, 1], as explained above.
function solution(A, B){
    const f = new Array(A.length + 1);
    f[0] = 1;
    f[1] = 1;
    let MAX = 1 << 30;

    for (let i = 2; i < f.length; ++i) {
        f[i] = f[i - 1] + f[i - 2];
        f[i] = f[i] % MAX;
    }

    let res = new Array(A.length);

    for (let i = 0; i < A.length; ++i) {
        res[i] = f[A[i]] % (1 << B[i]);
    }

    return res;
}

// console.log(solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1]));



////////////////////////////////////MinMaxDivision////////////////////////////////////////////////////
// You are given integers K, M and a non-empty array A consisting of N integers. Every element of the array is not greater than M.
// You should divide this array into K blocks of consecutive elements. The size of the block is any integer between 0 and N. Every element of the array should belong to some block.
// The sum of the block from X to Y equals A[X] + A[X + 1] + ... + A[Y]. The sum of empty block equals 0.
// The large sum is the maximal sum of any block.
// For example, you are given integers K = 3, M = 5 and array A such that:
//   A[0] = 2
//   A[1] = 1
//   A[2] = 5
//   A[3] = 1
//   A[4] = 2
//   A[5] = 2
//   A[6] = 2
// The array can be divided, for example, into the following blocks:
// [2, 1, 5, 1, 2, 2, 2], [], [] with a large sum of 15;
// [2], [1, 5, 1, 2], [2, 2] with a large sum of 9;
// [2, 1, 5], [], [1, 2, 2, 2] with a large sum of 8;
// [2, 1], [5, 1], [2, 2, 2] with a large sum of 6.
// The goal is to minimize the large sum. In the above example, 6 is the minimal large sum.
// Write a function:
// function solution(K, M, A);
// that, given integers K, M and a non-empty array A consisting of N integers, returns the minimal large sum.
// For example, given K = 3, M = 5 and array A such that:
//   A[0] = 2
//   A[1] = 1
//   A[2] = 5
//   A[3] = 1
//   A[4] = 2
//   A[5] = 2
//   A[6] = 2
// the function should return 6, as explained above.
function solution(K, M, A){
    return binarySearch(K, A)
}

function blockSizeIsValid(A, maxNumBlocks, largeSum) {
    let curBlockSum = 0, numBlocks = 1; // at least...

    for (let elem of A) {
        if (curBlockSum + elem <= largeSum) {
            // make curBlock bigger
            curBlockSum += elem;
        } else {
            // start a new block containing element
            numBlocks++;
            curBlockSum = elem;
        }
        if (numBlocks > maxNumBlocks) return false;
    }
    return true;
}

function binarySearch(maxBlockCnt, A) {
    let lowerBound = Math.max.apply(null, A),
        upperBound = A.reduce((a, c) => a + c,0),
        result = -1;

    while (lowerBound <= upperBound) {
        let largeSum = Math.floor((lowerBound + upperBound)/2);
        if (blockSizeIsValid(A, maxBlockCnt, largeSum)) {
            result = largeSum; // OK, but...
            // try a smaller one
            upperBound = largeSum - 1;
        } else {
            // try a larger one
            lowerBound = largeSum + 1;
        }
    }
    return result;
}

// console.log(solution(3, 5, [2, 1, 5, 1, 2, 2, 2]));




////////////////////////////////////NailingPlanks////////////////////////////////////////////////////
// You are given two non-empty arrays A and B consisting of N integers. These arrays represent N planks. More precisely, A[K] is the start and B[K] the end of the K−th plank.
// Next, you are given a non-empty array C consisting of M integers. This array represents M nails. More precisely, C[I] is the position where you can hammer in the I−th nail.
// We say that a plank (A[K], B[K]) is nailed if there exists a nail C[I] such that A[K] ≤ C[I] ≤ B[K].
// The goal is to find the minimum number of nails that must be used until all the planks are nailed. In other words,
// you should find a value J such that all planks will be nailed after using only the first J nails. More precisely,
// for every plank (A[K], B[K]) such that 0 ≤ K < N, there should exist a nail C[I] such that I < J and A[K] ≤ C[I] ≤ B[K].
// For example, given arrays A, B such that:
//     A[0] = 1    B[0] = 4
//     A[1] = 4    B[1] = 5
//     A[2] = 5    B[2] = 9
//     A[3] = 8    B[3] = 10
// four planks are represented: [1, 4], [4, 5], [5, 9] and [8, 10].
// Given array C such that:
//     C[0] = 4
//     C[1] = 6
//     C[2] = 7
//     C[3] = 10
//     C[4] = 2
// if we use the following nails:
// 0, then planks [1, 4] and [4, 5] will both be nailed.
// 0, 1, then planks [1, 4], [4, 5] and [5, 9] will be nailed.
// 0, 1, 2, then planks [1, 4], [4, 5] and [5, 9] will be nailed.
// 0, 1, 2, 3, then all the planks will be nailed.
// Thus, four is the minimum number of nails that, used sequentially, allow all the planks to be nailed.
// Write a function:
// function solution(A, B, C);
// that, given two non-empty arrays A and B consisting of N integers and a non-empty array C consisting of M integers,
// returns the minimum number of nails that, used sequentially, allow all the planks to be nailed.
// If it is not possible to nail all the planks, the function should return −1.
// For example, given arrays A, B, C such that:
//     A[0] = 1    B[0] = 4
//     A[1] = 4    B[1] = 5
//     A[2] = 5    B[2] = 9
//     A[3] = 8    B[3] = 10

//     C[0] = 4
//     C[1] = 6
//     C[2] = 7
//     C[3] = 10
//     C[4] = 2
// the function should return 4, as explained above.
function solution(A, B, C){
    let begin = 0, end = C.length - 1, res = -1;
    while (begin <= end) {
        let mid = parseInt((begin + end) / 2);
        if (check(A, B, C, mid+1)) {
            end = mid - 1;
            res = mid+1;
        } else {
            begin = mid + 1;
        }
    }
    return res;
}

function check(a, b, c, num) {
    let pNails = new Array(2 * c.length + 1).fill(0);
    for (let i = 0; i < num; ++i) {
        ++pNails[c[i]];
    }
    for (let i = 1; i < pNails.length; ++i) {
        pNails[i] += pNails[i-1];
    }
    for (let i = 0; i < a.length; ++i) {
        if (pNails[b[i]] <= pNails[a[i]-1]) return false;
    }
    return true;
}

// console.log(solution([1, 4, 5, 8], [4, 6, 9, 10], [4, 6, 7, 10, 2]));




////////////////////////////////////AbsDistinct////////////////////////////////////////////////////
// A non-empty array A consisting of N numbers is given. The array is sorted in non-decreasing order. The absolute distinct
// count of this array is the number of distinct absolute values among the elements of the array.
// For example, consider array A such that:
//   A[0] = -5
//   A[1] = -3
//   A[2] = -1
//   A[3] =  0
//   A[4] =  3
//   A[5] =  6
// The absolute distinct count of this array is 5, because there are 5 distinct absolute values among the elements of this array, namely 0, 1, 3, 5 and 6.
// Write a function:
// function solution(A);
// that, given a non-empty array A consisting of N numbers, returns absolute distinct count of array A.
// For example, given array A such that:
//   A[0] = -5
//   A[1] = -3
//   A[2] = -1
//   A[3] =  0
//   A[4] =  3
//   A[5] =  6
// the function should return 5, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647];
// array A is sorted in non-decreasing order.
function solution(A){
    let check = {}, count = 0;

    for (let i = 0, l = A.length; i < l; i++) {
        let abs = Math.abs(A[i]);

        if (check[abs] !== true) {
            count++;
            check[abs] = true;
        }
    }

    return count;
}

// console.log(solution([-5, -3, -1, 0, 3, 6]));




////////////////////////////////////CountDistinctSlices////////////////////////////////////////////////////
// An integer M and a non-empty array A consisting of N non-negative integers are given. All integers in array A are less than or equal to M.
// A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A. The slice consists of the elements
// A[P], A[P + 1], ..., A[Q]. A distinct slice is a slice consisting of only unique numbers. That is, no individual number occurs more than once in the slice.
// For example, consider integer M = 6 and array A such that:
//     A[0] = 3
//     A[1] = 4
//     A[2] = 5
//     A[3] = 5
//     A[4] = 2
// There are exactly nine distinct slices: (0, 0), (0, 1), (0, 2), (1, 1), (1, 2), (2, 2), (3, 3), (3, 4) and (4, 4).
// The goal is to calculate the number of distinct slices.
// Write a function:
// function solution(M, A);
// that, given an integer M and a non-empty array A consisting of N integers, returns the number of distinct slices.
// If the number of distinct slices is greater than 1,000,000,000, the function should return 1,000,000,000.
// For example, given integer M = 6 and array A such that:
//     A[0] = 3
//     A[1] = 4
//     A[2] = 5
//     A[3] = 5
//     A[4] = 2
// the function should return 9, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// M is an integer within the range [0..100,000];
// each element of array A is an integer within the range [0..M].
function solution(M, A){
    let sum = 0, start = 0, end = 0, set = new Set();
    while (start < A.length) {
        while (start < A.length && !set.has(A[start])){
            sum += (start - end + 1);
            set.add(A[start]);
            start += 1;
        }
        while (A[end] !== A[start]) {
            set.delete(A[end]);
            end += 1;
        }
        set.delete(A[end]);
        end += 1;
    }
    return Math.min(sum, 1000000000);
}

// console.log(solution(6, [3, 4, 5, 5, 2]));




////////////////////////////////////CountTriangles////////////////////////////////////////////////////
// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if it is possible to build a triangle with
// sides of lengths A[P], A[Q] and A[R]. In other words, triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:
// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
// For example, consider array A such that:
//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 12
// There are four triangular triplets that can be constructed from elements of this array, namely (0, 2, 4), (0, 2, 5), (0, 4, 5), and (2, 4, 5).
// Write a function:
// function solution(A);
// that, given an array A consisting of N integers, returns the number of triangular triplets in this array.
// For example, given array A such that:
//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 12
// the function should return 4, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..1,000];
// each element of array A is an integer within the range [1..1,000,000,000].
function solution(A){
    if(A.length<3) return 0;
    A = A.sort((a, b) => a - b);
    let count = 0, middle = 1, tail = 2;

    for(let i = 0; i < A.length-2; i++){
        middle = i + 1;
        tail = i + 2;

        while(tail<A.length){
            if(A[i] + A[middle] >  A[tail]){
                count += tail - middle;
                tail++;
            }else if(middle < tail - 1){
                middle++;
            }else{
                middle++;
                tail++;
            }
        }
    }
    return count;
}

// console.log(solution([10, 2, 5, 1, 8, 12]));




////////////////////////////////////MinAbsSumOfTwo////////////////////////////////////////////////////
// Let A be a non-empty array consisting of N integers.
// The abs sum of two for a pair of indices (P, Q) is the absolute value |A[P] + A[Q]|, for 0 ≤ P ≤ Q < N.
// For example, the following array A:
//   A[0] =  1
//   A[1] =  4
//   A[2] = -3
// has pairs of indices (0, 0), (0, 1), (0, 2), (1, 1), (1, 2), (2, 2).
// The abs sum of two for the pair (0, 0) is A[0] + A[0] = |1 + 1| = 2.
// The abs sum of two for the pair (0, 1) is A[0] + A[1] = |1 + 4| = 5.
// The abs sum of two for the pair (0, 2) is A[0] + A[2] = |1 + (−3)| = 2.
// The abs sum of two for the pair (1, 1) is A[1] + A[1] = |4 + 4| = 8.
// The abs sum of two for the pair (1, 2) is A[1] + A[2] = |4 + (−3)| = 1.
// The abs sum of two for the pair (2, 2) is A[2] + A[2] = |(−3) + (−3)| = 6.
// Write a function:
// function solution(A);
// that, given a non-empty array A consisting of N integers, returns the minimal abs sum of two for any pair of indices in this array.
// For example, given the following array A:
//   A[0] =  1
//   A[1] =  4
//   A[2] = -3
// the function should return 1, as explained above.
// Given array A:
//   A[0] = -8
//   A[1] =  4
//   A[2] =  5
//   A[3] =-10
//   A[4] =  3
// the function should return |(−8) + 5| = 3.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].
function solution(A){
    const positives = [], negatives = [];
    let start = 0, end = 0;

    if(A.length === 1) {
        return Math.abs(A[0] + A[0]);
    }

    A.sort((a, b) => a - b);

    for(let i = 0; i < A.length; i++) {
        A[i] < 0 ? negatives.push(A[i]) : positives.push(A[i]);
    }

    negatives.sort((a, b) => b - a);

    if(positives.length === 0) {
        return Math.abs(2 * negatives[0]);
    }

    if(negatives.length === 0) {
        return 2 * positives[0];
    }

    if(positives[0] === 0) {
        return 0;
    }

    let min = positives[0] * 2;

    for(let i = 0; i < negatives.length; i++) {
        start = 0;
        end = positives.length - 1;
        let neg = A[i];

        while(start <= end) {
            let mid = parseInt((start + end) / 2);
            let pos = positives[mid];
            let sum = Math.abs(neg + pos);

            if(min > sum) min = sum;

            if(pos > Math.abs(neg)) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return min;
}

// console.log(solution([1, 4, -3]));
// console.log(solution([-8, 4, 5, -10, 3]));




////////////////////////////////////MaxNonoverlappingSegments////////////////////////////////////////////////////
// Located on a line are N segments, numbered from 0 to N − 1, whose positions are given in arrays A and B. For each I (0 ≤ I < N)
// the position of segment I is from A[I] to B[I] (inclusive). The segments are sorted by their ends, which means that B[K] ≤ B[K + 1] for K such that 0 ≤ K < N − 1.
// Two segments I and J, such that I ≠ J, are overlapping if they share at least one common point. In other words, A[I] ≤ A[J] ≤ B[I] or A[J] ≤ A[I] ≤ B[J].
// We say that the set of segments is non-overlapping if it contains no two overlapping segments. The goal is to find the size
// of a non-overlapping set containing the maximal number of segments.
// For example, consider arrays A, B such that:
//     A[0] = 1    B[0] = 5
//     A[1] = 3    B[1] = 6
//     A[2] = 7    B[2] = 8
//     A[3] = 9    B[3] = 9
//     A[4] = 9    B[4] = 10
// The segments are shown in the figure below.
// The size of a non-overlapping set containing a maximal number of segments is 3. For example, possible sets are
// {0, 2, 3}, {0, 2, 4}, {1, 2, 3} or {1, 2, 4}. There is no non-overlapping set with four segments.
// Write a function:
// function solution(A, B);
// that, given two arrays A and B consisting of N integers, returns the size of a non-overlapping set containing a maximal number of segments.
// For example, given arrays A, B shown above, the function should return 3, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..30,000];
// each element of arrays A and B is an integer within the range [0..1,000,000,000];
// A[I] ≤ B[I], for each I (0 ≤ I < N);
// B[K] ≤ B[K + 1], for each K (0 ≤ K < N − 1).
function solution(A, B){
    if (A.length === 0) return A.length;

    let count = 1, end = B[0];

    for (let i = 1; i < B.length; i++) {
        if (A[i] > end) {
            end = B[i];
            count++;
        }
    }

    return count;
}

// console.log(solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]));




////////////////////////////////////TieRopes////////////////////////////////////////////////////
// There are N ropes numbered from 0 to N − 1, whose lengths are given in an array A, lying on the floor in a line.
// For each I (0 ≤ I < N), the length of rope I on the line is A[I].
// We say that two ropes I and I + 1 are adjacent. Two adjacent ropes can be tied together with a knot, and the length of the tied
// rope is the sum of lengths of both ropes. The resulting new rope can then be tied again.
// For a given integer K, the goal is to tie the ropes in such a way that the number of ropes whose length is greater than or equal to K is maximal.
// For example, consider K = 4 and array A such that:
//     A[0] = 1
//     A[1] = 2
//     A[2] = 3
//     A[3] = 4
//     A[4] = 1
//     A[5] = 1
//     A[6] = 3
// The ropes are shown in the figure below.
// We can tie:
// rope 1 with rope 2 to produce a rope of length A[1] + A[2] = 5;
// rope 4 with rope 5 with rope 6 to produce a rope of length A[4] + A[5] + A[6] = 5.
// After that, there will be three ropes whose lengths are greater than or equal to K = 4. It is not possible to produce four such ropes.
// Write a function:
// function solution(K, A);
// that, given an integer K and a non-empty array A of N integers, returns the maximum number of ropes of length greater than or equal to K that can be created.
// For example, given K = 4 and array A such that:
//     A[0] = 1
//     A[1] = 2
//     A[2] = 3
//     A[3] = 4
//     A[4] = 1
//     A[5] = 1
//     A[6] = 3
// the function should return 3, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// K is an integer within the range [1..1,000,000,000];
// each element of array A is an integer within the range [1..1,000,000,000].
function solution(K, A){
    if (K === 1) return A.length;

    let count = 0, sum = 0;

    for (let i = 0; i < A.length; i++) {
        sum += A[i];

        if (sum >= K) {
            sum = 0;
            count++;
        }
    }

    return count;
}

// console.log(solution(4, [1, 2, 3, 4, 1, 1, 3]));




////////////////////////////////////NumberSolitaire////////////////////////////////////////////////////
// A game for one player is played on a board consisting of N consecutive squares, numbered from 0 to N − 1. There is a number
// written on each square. A non-empty array A of N integers contains the numbers written on the squares. Moreover, some squares can be marked during the game.
// At the beginning of the game, there is a pebble on square number 0 and this is the only square on the board which is marked.
// The goal of the game is to move the pebble to square number N − 1.
// During each turn we throw a six-sided die, with numbers from 1 to 6 on its faces, and consider the number K, which shows
// on the upper face after the die comes to rest. Then we move the pebble standing on square number I to square number I + K,
// providing that square number I + K exists. If square number I + K does not exist, we throw the die again until we obtain a valid move. Finally, we mark square number I + K.
// After the game finishes (when the pebble is standing on square number N − 1), we calculate the result. The result of the game is the sum of the numbers written on all marked squares.
// For example, given the following array:
//     A[0] = 1
//     A[1] = -2
//     A[2] = 0
//     A[3] = 9
//     A[4] = -1
//     A[5] = -2
// one possible game could be as follows:
// the pebble is on square number 0, which is marked;
// we throw 3; the pebble moves from square number 0 to square number 3; we mark square number 3;
// we throw 5; the pebble does not move, since there is no square number 8 on the board;
// we throw 2; the pebble moves to square number 5; we mark this square and the game ends.
// The marked squares are 0, 3 and 5, so the result of the game is 1 + 9 + (−2) = 8. This is the maximal possible result that can be achieved on this board.
// Write a function:
// function solution(A);
// that, given a non-empty array A of N integers, returns the maximal result that can be achieved on the board represented by array A.
// For example, given the array
//     A[0] = 1
//     A[1] = -2
//     A[2] = 0
//     A[3] = 9
//     A[4] = -1
//     A[5] = -2
// the function should return 8, as explained above.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−10,000..10,000].
function solution(A){
    let dice = 6;
    const maxScore = [];

    for (let i = 0; i < dice; i++){
        maxScore.push(A[0]);
    }
    for (let i = 1; i < A.length; i++){
        maxScore[i % dice] = Math.max.apply(Math, maxScore) + A[i];
    }

    return maxScore[(A.length - 1) % dice];
}

// console.log(solution([1, -2, 0, 9, -1, -2]));




////////////////////////////////////MinAbsSum////////////////////////////////////////////////////
// For a given array A of N integers and a sequence S of N integers from the set {−1, 1}, we define val(A, S) as follows:
// val(A, S) = |sum{ A[i]*S[i] for i = 0..N−1 }|
// (Assume that the sum of zero elements equals zero.)
// For a given array A, we are looking for such a sequence S that minimizes val(A,S).
// Write a function:
// function solution(A);
// that, given an array A of N integers, computes the minimum value of val(A,S) from all possible values of val(A,S) for all possible sequences S of N integers from the set {−1, 1}.
// For example, given array:
//   A[0] =  1
//   A[1] =  5
//   A[2] =  2
//   A[3] = -2
// your function should return 0, since for S = [−1, 1, −1, 1], val(A, S) = 0, which is the minimum possible value.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..20,000];
// each element of array A is an integer within the range [−100..100].
function solution(A) {
    let total = 0, minDiff = Infinity;
    const dp = [], count = [];

    if(A.length === 0) return 0;

    A.sort((a, b) => Math.abs(a)-Math.abs(b));

    let max = Math.abs(A[A.length - 1]);

    for(let i = 0; i <= max; i++) {
        count[i] = 0;
    }

    for(let i=0; i<A.length; i++) {
        A[i] = Math.abs(A[i]);
        count[A[i]]++;
        total += A[i];
    }

    dp[0] = 0;
    for(let i=1; i<=total; i++) {
        dp[i] = -1;
    }

    let target = total / 2;

    for(let i = 0; i < count.length; i++) {
        if(count[i] > 0) {
            let step = i;
            for(let j = 0; j < dp.length; j++) {
                if(dp[j] >= 0) {
                    dp[j] = count[i];
                } else if(j >= step && dp[j - step] > 0) {
                    dp[j] = dp[j - step] - 1;
                }

                if(dp[j] >= 0) {
                    if(j === target) {
                        return 0;
                    } else {
                        minDiff = Math.min(minDiff, Math.abs(total - 2 * j));
                    }
                }
            }
        }
    }

    return minDiff;
}

//console.log(solution([1, 5, 2, -2]))






