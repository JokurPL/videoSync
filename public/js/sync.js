const socket = io();
let video = document.getElementById('video');

let code = Cookies.get("code")
let perm = false;

if (code == 'bcc0823c08f2dc276bb8c7095bac20f7') {
    perm = true;
}

socket.on('state-set', data => {
    if (data == 1) {
        video.play();
    }
    else {
        video.pause();
    }
});

socket.on('change-current-time', data => {
    if (Math.abs(video.currentTime - data) > 1) {
        video.currentTime = data;
    }
});

video.addEventListener("play", () => {
    if (perm) {
        socket.emit('state', "1");
    }
});

video.addEventListener("pause", () => {
    if (perm) {
        socket.emit('state', "0");
        socket.emit('current-time', video.currentTime);
    }
});

video.addEventListener("seeking", () => {
    if (perm) {
        socket.emit('current-time', video.currentTime);
    }
});


const loginCheck = () => {
    const name = Cookies.get("name");
    if (!name) {
        window.location.href = "/";
    }
};