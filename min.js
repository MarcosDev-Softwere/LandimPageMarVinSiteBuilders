document.addEventListener('DOMContentLoaded', () => {

    // Lógica para o Navburger e Sidebar
    const navburger = document.getElementById('navburger');
    const sidebar = document.getElementById('sidebar');

    navburger.addEventListener('click', () => {
        // Alterna a classe 'open' na sidebar para mostrá-la/escondê-la
        sidebar.classList.toggle('open');
    });

    // Fechar a sidebar ao clicar em um link
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    });

    // Lógica para o Carrossel Infinito
    const carouselTrack = document.getElementById('carousel-track');
    const images = Array.from(carouselTrack.querySelectorAll('img'));
    let currentIndex = 0;
    const slideInterval = 3000; // Tempo em milissegundos para a troca de slides

    // Para o loop infinito, clonamos o primeiro slide e o adicionamos ao final
    const firstClone = images[0].cloneNode(true);
    carouselTrack.appendChild(firstClone);

    function nextSlide() {
        const trackWidth = carouselTrack.offsetWidth;
        const slideWidth = images[0].offsetWidth;

        currentIndex++;

        carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Quando o carrossel atinge o clone (o último slide), ele reseta para o primeiro
        // com uma transição instantânea, criando a ilusão de loop infinito.
        if (currentIndex === images.length) {
            setTimeout(() => {
                carouselTrack.style.transition = 'none';
                currentIndex = 0;
                carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            }, 500); // O tempo do setTimeout deve ser o mesmo da transição CSS
            setTimeout(() => {
                carouselTrack.style.transition = 'transform 0.5s ease-in-out';
            }, 520);
        }
    }

    setInterval(nextSlide, slideInterval);

    // Lógica para o Formulário
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simula o envio de dados para o console
        console.log('Formulário enviado!');
        console.log(`Nome: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Mensagem: ${message}`);

        // Você pode adicionar aqui uma requisição AJAX (fetch) para um backend real
        alert('Mensagem enviada com sucesso!');

        // Limpa o formulário
        contactForm.reset();
    });
});