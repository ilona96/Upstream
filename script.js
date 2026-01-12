const moodData = {
    tired: {
        title: "Відпочинок поруч",
        text: "Втома — це не поразка, це просто сигнал, що тобі потрібна пауза. Навіть Бог відпочивав на сьомий день.",
        quote: "\"Прийдіть до Мене, усі струджені та обтяжені, і Я вас заспокою.\" — Матвія 11:28"
    },
    lonely: {
        title: "Ти не один",
        text: "Почуття самотності може бути гострим, але воно не визначає твою реальність. Ти бачиш лише частину картину.",
        quote: "\"І ось Я з вами по всі дні, аж до кінця віку.\" — Матвія 28:20"
    },
    anxious: {
        title: "Дихай глибше",
        text: "Тривога бреше тобі про майбутнє. Цей момент — єдине, що ми маємо, і в ньому ти в безпеці.",
        quote: "\"Не журіться ні про що, але в усьому... відкривайте свої прохання перед Богом.\" — Филип’ян 4:6"
    },
    grateful: {
        title: "Це чудово!",
        text: "Вдячність — це магніт для див. Коли ми дякуємо, ми бачимо ще більше причин для радості.",
        quote: "\"За все дякуйте, бо така про вас воля Божа.\" — 1 Солунян 5:18"
    },
    searching: {
        title: "Хто шукає, той знайде",
        text: "Твої питання важливі. Не бійся питати і сумніватися. Це шлях до істини.",
        quote: "\"І будите шукати Мене, і знайдете...\" — Єремія 29:13"
    },
    empty: {
        title: "Наповнення прийде",
        text: "Пустота — це місце для чогось нового. Можливо, саме зараз готується простір для великої радості.",
        quote: "\"Бог надії нехай наповнить вас усякою радістю й миром...\" — Римлян 15:13"
    }
};

function selectMood(mood) {
    const selectionDiv = document.getElementById('mood-selection');
    const resultDiv = document.getElementById('mood-result');
    const title = document.getElementById('result-title');
    const text = document.getElementById('result-text');
    const quote = document.getElementById('result-quote');

    if (moodData[mood]) {
        title.innerText = moodData[mood].title;
        text.innerText = moodData[mood].text;
        quote.innerText = moodData[mood].quote;

        selectionDiv.classList.add('hidden');
        resultDiv.classList.remove('hidden');
    }
}

function resetMood() {
    const selectionDiv = document.getElementById('mood-selection');
    const resultDiv = document.getElementById('mood-result');
    
    resultDiv.classList.add('hidden');
    selectionDiv.classList.remove('hidden');
}

function openGift() {
    const intro = document.getElementById('gift-intro');
    const content = document.getElementById('gift-content');
    
    // Add simple animation logic here if needed, for now simple toggle
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.classList.add('hidden');
        content.classList.remove('hidden');
    }, 300);
}

function handleForm(e) {
    e.preventDefault();
    // Simulate API call
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "Відправляємо...";
    
    setTimeout(() => {
        btn.innerText = originalText;
        e.target.reset();
        
        let feedbackId = 'form-feedback';
        if (document.getElementById('form-feedback-gift')) {
            feedbackId = 'form-feedback-gift';
        }
        
        const feedback = document.getElementById(feedbackId);
        if(feedback) feedback.classList.remove('hidden');
    }, 1000);
}
