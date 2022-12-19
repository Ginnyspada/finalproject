function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}
//Get
export function fetchLists() {
  return _fetch("http://localhost:3000/list");
}
//Get
export function fetchList(listId) {
  return _fetch(`http://localhost:3000/lists/${listId}`);
}
// have to create a comment page in src, then save the comment and figure out how to add the date and the user. Create a comment form to add to routes
export function fetchComments(listId) {
  return _fetch(`http://localhost:3002/lists/${listId}/comments`);
}

// DELETE portion
export function deleteComment(commentId) {
  return fetch(`http://localhost:3002/comments/${commentId}`, {
    method: "DELETE",
  });
}
