// JavaScript source code
function Unhide(message,Button) {
    document.getElementById(message).style.display = 'block';
    document.getElementById(Button).style.display = 'none';
}
function Hide(message, Button) {
    document.getElementById(message).style.display = 'none';
    document.getElementById(Button).style.display = 'flex';

}
