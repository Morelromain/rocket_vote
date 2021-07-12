var btncopy = document.querySelector('.js-copy');
if(btncopy) {
    btncopy.addEventListener('click', docopy);
}

function docopy() {

    var target = this.dataset.target;
    var fromElement = document.querySelector(target);
    if(!fromElement) return;

    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNode(fromElement);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        var result = document.execCommand('copy');
    }
    catch(err) {
        alert(err);
    }

    selection = window.getSelection();
    if (typeof selection.removeRange === 'function') {
        selection.removeRange(range);
    } else if (typeof selection.removeAllRanges === 'function') {
        selection.removeAllRanges();
    }
}
