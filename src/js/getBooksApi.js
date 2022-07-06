export const getBooksApi = async (booktitle) => {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${booktitle}&download=epub&maxResults=40&key=AIzaSyCwyDh_KXVa7KmDopoJzIOgOAk4tY8h0AY`);
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        
    } catch(error) {
        console.log(error);
    }
    
}