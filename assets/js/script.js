const items = document.querySelectorAll('.item');
const controls = document.querySelectorAll('.control');
let current = 0;

const slider = {
    init: () => {
        controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
        controls[current].classList.add('active');
        items[current].classList.add('active');
        document.addEventListener('wheel', slider.handleScroll);
    },
    clickedControl: (e) => {
        slider.reset();

        const control = e.target;
        const dataIndex = Number(control.dataset.index);

        control.classList.add('active');
        items.forEach((item, index) => {
        if (index === dataIndex) {
            item.classList.add('active');
        }
        })
        current = dataIndex;
    },
    reset: () => {
        items.forEach(item => item.classList.remove('active'));
        controls.forEach(control => control.classList.remove('active'));
    },
    handleScroll: (e) => {
        const delta = e.deltaY;
        if (delta > 0) {
            slider.nextSlide();
        } else {
            slider.prevSlide();
        }
    },
    nextSlide: () => {
        slider.reset();
        current = (current + 1) % items.length;
        controls[current].classList.add('active');
        items[current].classList.add('active');
    },
    prevSlide: () => {
        slider.reset();
        current = (current - 1 + items.length) % items.length;
        controls[current].classList.add('active');
        items[current].classList.add('active');
    },
}

slider.init();
