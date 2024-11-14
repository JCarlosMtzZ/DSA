// #1 - Sort 10 schools around your house by distance:
// Due to the small amount of data, it won't matter that much
// if a basic sorting is utilized. We could take either insertion or
// bubble, which can achieve a linear time complexity.

// #2 - eBay sorts listings by the current Bid amount:
// We could use radix or counting sort since those amounts are
// always integer numbers within a fixed range.

// #3 - Sort scores on ESPN:
// Quick sort should not be affected by the variety of formats and values
// of the data. We are also caring about memory.

// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data:
// Due to the amount of data, we need to guarantee that the performace will be the same
// in the worst case as in an average case, for example.

// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews:
// Insertion sort, due to the fact that the data is almost sorted.

// #6 - Temperature Records for the past 50 years in Canada:
// The fixed range of temperature values is benefical to radix or counting sort.
// Also, a "unique" format for the data with few decimals is guaranteed.

// #7 - Large user name database needs to be sorted. Data is very random:
// Due to the randomness of the data, we could pick a good pivot and use a
// Quick sort.

// #8 - You want to teach sorting for the first time:
// Bubble is easy to understand and code.