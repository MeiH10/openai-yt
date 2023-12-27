const metaForm = document.querySelector('.meta-form');
const imageForm = document.querySelector('.image-form');

const description = document.querySelector('.description p');
const tags = document.querySelector('.tags p');
const thumnail = document.querySelector('.thumbnail img');

metaForm.addEventListener('submit', async(e) =>{
    e.preventDefault();
    const res = await fetch('/openai/meta', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: metaForm.title.value})

    })

    const data = await res.json();
    console.log(data);

    description.textContent=data.description.content;
    tags.textContent=data.tags.content;


});


imageForm.addEventListener('submit', async(e)=>{
    e.preventDefault();

    const res = await fetch('/openai/image', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({prompt: imageForm.prompt.value})

    })

    const data = await res.json();
    console.log(data);


    thumnail.setAttribute('src', data.url);

})

