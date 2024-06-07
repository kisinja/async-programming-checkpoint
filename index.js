// TASK 1
const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
};

fetchTodos();


// TASK 2
// Function to fetch todos
async function fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
}

// Function to fetch posts
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

// Function to make concurrent requests
async function concurrentRequests() {
    try {
        const [todos, posts] = await Promise.all([fetchTodos(), fetchPosts()]);
        console.log('Todos:', todos);
        console.log('Posts:', posts);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function
concurrentRequests();

// TASK 3
// Helper function to create a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to iterate over an array with a delay
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await delay(1000); // Wait for 1 second
    }
}

// Example usage
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);
