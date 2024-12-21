document.addEventListener('DOMContentLoaded', function () {
    const contents = document.querySelectorAll('.content');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5 // 50%가 보이면 콜백 실행
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    contents.forEach(content => observer.observe(content));
});
