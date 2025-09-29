export default () => {
	const selects = document.querySelectorAll('.js-select');
    const IS_TABLET = window.matchMedia('(max-width: 1023px)').matches;

	selects.forEach((select) => {
		select.addEventListener('click', () => {

            selects.forEach((s) => {
                s.classList.remove('select--open');
            })

			select.classList.add('select--open');

			window.addEventListener('click', (e) => {
                if( IS_TABLET && (e.target.closest('.select__header-close') ||
                e.target.closest('.select__accept')) ){
                    select.classList.remove('select--open');
                } else if(  (!e.target.closest('.select__current') ||
                !e.target.closest('.select'))) {
					selects.forEach((select) => {
						select.classList.remove('select--open');
					})
				}
			})
		})
	})

	selects.forEach((select) => {
		const inputs = select.querySelectorAll('input[type="radio"]');
		const current = select.querySelector('.select__current');

		inputs.forEach((input) => {
			input.addEventListener('input', (e) => {
				const text = e.target.nextElementSibling.textContent;
				current.textContent = text;

				select.classList.remove('select--open');
			})
		})
	})
}
