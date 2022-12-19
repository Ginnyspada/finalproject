function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function fetchLists() {
  return _fetch("http://localhost:3000/list");
}

export function fetchList(listId) {
  return _fetch(`http://localhost:3000/lists/${listId}`);
}

export function fetchComments(listId) {
  return _fetch(`http://localhost:3002/lists/${listId}/comments`);
}

// DELETE /comments/:id
export function deleteComment(commentId) {
  return fetch(`http://localhost:3002/comments/${commentId}`, {
    method: "DELETE",
  });
}

///post comments
export function saveComment(body, listId) {
  return fetch("https://localhost:3002/list/:id/comments", {
    method: "POST",
    body: JSON.stringify({
      body: body, // text from textarea
      listId: listId,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}
