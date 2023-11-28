let formBtns = document.getElementById('form-btns');
let optionList = document.querySelectorAll('.service');
let formSelect = document.getElementById('form-select');
const minValue = 5;
function validateCategorySelection() {
    if (formSelect.value === '' || formSelect.value < minValue) {
        document.getElementById('message').textContent = 'Выберите категорию';
    } else {
        document.getElementById('message').textContent = '';
    }
}

function createButton(item) {
    let btn = document.createElement('button');
    btn.textContent = item.textContent;
    btn.setAttribute('data-value', item.value);
    btn.className = "form-btn";
    btn.onclick = () => {
        formSelect.value = item.value;
        btn.style.borderColor = 'red';
    };
    return btn;
}

function handleGetRequest() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

function handlePostRequest() {
    const postData = {
        title: 'Заголовок поста',
        body: 'Текст поста',
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Не удалось создать пост');
            }
        })
        .then(data => {
            console.log('Успешно отправлен POST запрос:', data);
        })
        .catch(error => {
            console.error('Ошибка при отправке POST запроса:', error.message);
        });
}


document.getElementById('btn1').onclick = validateCategorySelection;

optionList.forEach(item => {
    formBtns.appendChild(createButton(item));
});

handleGetRequest();
handlePostRequest();

console.log(console.error);
