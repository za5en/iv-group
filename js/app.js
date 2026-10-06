const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const modal = document.querySelector('#serviceModal');
const modalTitle = document.querySelector('#modalTitle');
const modalText = document.querySelector('#modalText');

const modalContent = {
  mobile: {
    title: 'Мобильная разработка',
    text: 'Проектируем, разрабатываем, тестируем и сопровождаем мобильные приложения. Стоимость и сроки рассчитываются индивидуально после анализа требований.'
  },
  web: {
    title: 'Веб-разработка',
    text: 'Создаем сайты, личные кабинеты, веб-сервисы, API и пользовательские интерфейсы. Оставьте заявку, чтобы обсудить задачу и получить коммерческое предложение.'
  },
  tech: {
    title: 'Инновационные технологии',
    text: 'Разрабатываем информационные системы, интеграции, базы данных и цифровые решения. Технологический стек подбирается под требования конкретного проекта.'
  }
};

var currentModal = "mobile";

burger?.addEventListener('click', () => {
  const opened = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', opened ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    burger?.setAttribute('aria-expanded', 'false');
  });
});

function openModal(type) {
  const data = modalContent[type] || modalContent.web;
  currentModal = type;
  modalTitle.textContent = data.title;
  modalText.textContent = data.text;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-modal]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.modal));
});
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const email = "info@iv-group.pro";
    const subject = modalContent[currentModal].title;
    const body = encodeURIComponent(`Добрый день! Письмо от ${document.getElementById("modalName").value}. Наши контактные данные: ${document.getElementById("modalTel").value}, ${document.getElementById("modalMail").value}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    form.reset();
    closeModal();
  });
});
