function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('imageModal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}
function submitVote() {
    let votes = document.getElementById('voteCount').value;
    alert("You voted " + votes + " likes for this image!");
    closeModal();
}