export function renderPortfolio() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  let element = document.createElement("div");
  element.id = 'portfolio'; 
  element.classList.add('portfolio');
  content.appendChild(element);
  const spanText = document.createElement('span');
  spanText.innerHTML = '<h1>О себе...</h1>';
  content.appendChild(spanText);
  spanText.classList.add('spanText');
  const text = document.createElement('p');
  text.classList.add('p');
  spanText.appendChild(text);
  text.innerHTML = '<h2>33 Года.</br> Работаю на жд. по професии "осмотрщик-ремонтник вагонов"</br> окончил Пту, ГГКЖТ, БелГУТ. (Магистр технических наук)</br> Решил сменить професиию на IT Front end</br> (так как нет дальнейшего роста и развития в нынешней професии)</br> </h2>'
};