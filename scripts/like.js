document.addEventListener('DOMContentLoaded', () => {
  // Находим все карточки
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const likeButton = card.querySelector('.card__like-button');
    const iconButton = card.querySelector('.card__icon-button');
    const likeIcon = card.querySelector('.like-icon');
    const buttonText = likeButton?.querySelector('.button__text');

    // Если чего-то нет – выходим
    if (!likeIcon || !buttonText) return;

    // Функция переключения
    const toggleLike = () => {
      // Проверяем, есть ли уже класс лайка
      const isLiked = likeIcon.classList.contains('is-liked');

      if (isLiked) {
        // Снимаем лайк
        likeIcon.classList.remove('is-liked');
        buttonText.textContent = 'Like';
      } else {
        // Ставим лайк – сначала удаляем класс, чтобы сбросить анимацию (для повторного клика)
        likeIcon.classList.remove('is-liked');
        // Небольшая задержка, чтобы браузер успел сбросить анимацию
        setTimeout(() => {
          likeIcon.classList.add('is-liked');
        }, 10);
        buttonText.textContent = 'Unlike';
      }
    };

    // Вешаем обработчики на обе кнопки
    if (likeButton) likeButton.addEventListener('click', toggleLike);
    if (iconButton) iconButton.addEventListener('click', toggleLike);
  });
});
