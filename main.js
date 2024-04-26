let title = document.querySelector('.title')
let ul = document.querySelector('ul')
let reload = document.querySelector('.reload')

window.onload = function() {
    if(window.navigator.onLine) {
        onLine();
    } else {
        offLine();
    }
}

window.addEventListener("online" , function() {
    onLine();
})

window.addEventListener("offline" , function() {
    offLine();
})

reload.onclick = function() {
    window.location.reload();
}

function onLine () {
  title.innerHTML = 'Online now';
  title.style.color = 'green';
  ul.classList.add('hidden');
  reload.classList.add('hidden');
}

function offLine () {
    title.innerHTML = 'Offline now';
    title.style.color = '#666';
    ul.classList.remove('hidden');
    reload.classList.remove('hidden');

}
