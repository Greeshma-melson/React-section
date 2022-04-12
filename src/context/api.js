const baseUserUrl = "https://jsonplaceholder.typicode.com/todos";

export const getTodo = () => {
    return fetch(baseUserUrl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}