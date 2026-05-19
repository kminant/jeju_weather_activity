function answer(button, correct, nextPage){

    const parent = button.parentElement;

    const result = parent.querySelector('.result');

    const buttons = parent.querySelectorAll('button');

    buttons.forEach(btn=>{
        btn.disabled = true;
    });

    if(correct){

        result.innerHTML = '✅ 정답입니다!';
        result.className = 'result correct';

    }else{

        result.innerHTML = '❌ 아쉬워요!';
        result.className = 'result wrong';
    }

    const nextBtn = document.createElement('button');

    nextBtn.className = 'next-btn';

    nextBtn.innerHTML = '다음 ▶';

    nextBtn.onclick = ()=>{
        location.href = nextPage;
    }

    parent.appendChild(nextBtn);
}
