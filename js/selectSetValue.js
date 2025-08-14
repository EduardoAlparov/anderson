export default () => {
    const selects = document.querySelectorAll('.select');

    selects.forEach((select) => {
        const inputs = select.querySelectorAll('input[type="radio"]');
        const current = select.querySelector('.select__current');

        select.firstElementChild.addEventListener('click', () => {
            select.classList.toggle('select--opened');
        })

        document.addEventListener('click', (e) => {
            if(!(e.target.closest(".select") === select)) {
                select.classList.remove('select--opened');
            }
        })

        inputs.forEach((input) => {
            input.addEventListener('input', (e) => {
                const text = e.target.nextElementSibling.textContent;
                current.textContent = text;
                select.classList.remove('select--opened');
            })
        })
    })
}
