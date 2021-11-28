let output = document.querySelector('.output') ;
output.innerHTML = '';

for (i = 10; i >= 0; i--) {
    const para = document.createElement('p');
    para.textContent = i;
    if (i === 10) {
        para.textContent = "Countdown 10";
    }
    if (i === 0) {
        para.textContent = "Blast off!";
    }
    output.appendChild(para);
}