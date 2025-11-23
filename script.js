const calendarEl = document.getElementById('calendar');
const modalBg = document.getElementById('modalBg');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');

// Contenido de las puertas (ejemplo romántico y creativo)
const doors = [
  {
    day: 1,
    title: 'Día 1: Una pista musical',
    content: `<p style="font-size:1.2em;">🎵 Escucha <b>el inicio de nuestra aventura</b> con esta canción especial:<br><br>
      <a href="https://www.youtube.com/watch?v=3JWTaaS7LdU" target="_blank">Nat King Cole - The Christmas Song</a></p>`
  },
  {
    day: 2,
    title: 'Día 2: Un enigma para ti',
    content: `<p>¿Qué ciudad española se conoce por sus calles vibrantes y su famoso Palacio Real?</p>
      <p style="font-size:1.1em;color:#b03a2e;">Pista: Allí la vida es un “bocadillo de calamares”.</p>`
  },
  {
    day: 3,
    title: 'Día 3: Mensaje romántico',
    content: `<p style="font-size:1.15em;">Cada día contigo es un nuevo recuerdo. <br>¿Sabías que nuestras <b>mejores aventuras</b> apenas comienzan?<br><br>
      (¿Te imaginas el próximo destino?)</p>`
  },
];

// Función para comprobar si la puerta debe desbloquearse
function isUnlocked(day) {
  const now = new Date();
  const year = now.getFullYear();
  // Fecha: diciembre (mes 11 en JS) del año actual, "día", 11:30
  const unlockDate = new Date(year, 11, day, 11, 30, 0);
  return now >= unlockDate;
}

// Crear las puertas
doors.forEach(door => {
  const doorEl = document.createElement('button');
  doorEl.classList.add('door');
  doorEl.textContent = door.day;
  if (!isUnlocked(door.day)) {
    doorEl.classList.add('locked');
  }
  doorEl.addEventListener('click', () => {
    if (isUnlocked(door.day)) {
      openModal(door.title, door.content);
    }
  });
  calendarEl.appendChild(doorEl);
});

// Modal
function openModal(title, content) {
  modalTitle.innerHTML = title;
  modalBody.innerHTML = content;
  modalBg.classList.add('active');
}

// Cerrar modal
closeModalBtn.addEventListener('click', () => {
  modalBg.classList.remove('active');
});
modalBg.addEventListener('click', (e) => {
  if (e.target === modalBg) {
    modalBg.classList.remove('active');
  }
});

