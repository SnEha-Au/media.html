function addPost() {
    const postContent = document.getElementById('postContent').value;

    if (postContent.trim() === '') {
        alert('Please write something before posting!');
        return;
    }

    const post = document.createElement('div');
    post.className = 'post';

    const postContentDiv = document.createElement('div');
    postContentDiv.className = 'post-content';
    postContentDiv.textContent = postContent;

    const postFooter = document.createElement('div');
    postFooter.className = 'post-footer';

    const likeButton = document.createElement('button');
    likeButton.className = 'like-button';
    likeButton.textContent = 'Like';
    likeButton.onclick = function() {
        likeButton.textContent = 'Liked';
        likeButton.disabled = true;
    };

    const commentSection = document.createElement('div');
    commentSection.className = 'comment-section';

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Add a comment...';
    commentInput.className = 'comment-input';

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.className = 'comment-button';
    commentButton.onclick = function() {
        const commentText = commentInput.value;
        if (commentText.trim() === '') {
            alert('Please write something before commenting!');
            return;
        }

        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.textContent = commentText;
        commentSection.appendChild(comment);

        commentInput.value = '';
    };

    postFooter.appendChild(likeButton);

    commentSection.appendChild(commentInput);
    commentSection.appendChild(commentButton);

    post.appendChild(postContentDiv);
    post.appendChild(postFooter);
    post.appendChild(commentSection);

    const feed = document.getElementById('feed');
    feed.appendChild(post);

    // Clear the textarea
    document.getElementById('postContent').value = '';
}
