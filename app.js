const input = document.querySelector('#qrInput');
const genBtn = document.querySelector('#generateBtn');
const qrPopup = document.querySelector('#qrPopup');
const qrImg = document.querySelector('#qrImg');
const downloadBtn = document.querySelector('#downloadBtn');
const closeBtn = document.querySelector('#closeBtn');
const mainContainer = document.querySelector('#mainContainer');

const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

genBtn.addEventListener('click', () => {
    if(!input.value){
        alert('Please enter a valid input');
        return;
    }
    else {
    const imgUrl = url + input.value;
    qrImg.setAttribute('src', imgUrl);
    setTimeout(() => {
        qrPopup.classList.add('show');
        mainContainer.classList.add('opacity');
    },1000);
    }
});

downloadBtn.addEventListener('click', () => {
    const imgUrl = url + input.value;
    fetch(imgUrl)
    .then(res => res.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'qr_code.png';
        document.body.appendChild(a);
        a.click();
        a.remove();
    });
});

closeBtn.addEventListener('click', () => {
    qrPopup.classList.remove('show');
    mainContainer.classList.remove('opacity');
});



