function insertionSort(arr) {
    // Loop through the array from the second element to the last
    for (let i = 1; i < arr.length; i++) {
        // Store the current element
        let current = arr[i];
        // Initialize the variable j to the index of the last sorted element
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than current
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift the element to the right
            j--; // Move to the next element
        }

        // Insert the current element into the correct position
        arr[j + 1] = current;
    }
    return arr; // Return the sorted array
}

// Example usage
const array = [5, 2, 9, 1, 5, 6];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
