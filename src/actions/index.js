export function selectBook(book) {
    // selectBook is an action Creator that returns an object with the type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}