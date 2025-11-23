const calendarEl = document.getElementById('calendar');
const modalBg = document.getElementById('modalBg');
const modalContent = document.getElementById('modalContent');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');

// Contenido de las puertas (3 como ejemplo)
const doors = [
  {
    day: 1,
    title: 'Día 1: Una pista musical',
    content: `<p>🎵 Escucha esta canción especial para el comienzo: <br><br>
    <a href="https://www.youtube.com/watch?v=3JWTaaS7LdU" target="_blank">Nat King Cole - The Christmas Song</a></p>`
  },
  {
    day: 2,
    title: 'Día 2: Un enigma para ti',
    content: `<p>¿Qué ciudad española se conoce por sus calles vibrantes y su famoso Palacio Real?<br><br>Piensa un poco…</p>`
  },
  {
    day: 3,
    title: 'Día 3: Mensaje romántico',
    content: `<p>Cada día contigo es un recuerdo que atesoro. ¿Sabías que nuestras mejores aventuras apenas comienzan?</p>`
  },
];

// Función para comprobar si la puerta debe desbloquearse
function isUnlocked(day) {
  const now = new Date();
  const unlockDate = new Date(now.getFullYear(), 11, day, 11, 30, 0); // Diciembre (11), día, 11:30 AM
  return now >= unlockDate;
}

// Crear las puertas
doors.forEach(door => {
  const doorEl = document.createElement('div');
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

// Abrir modal
function openModal(title, content) {
  modalTitle.innerHTML = title;
  modalBody.innerHTML = content;
  modalBg.classList.add('active');
}

// Cerrar modal
closeModalBtn.addEventListener('click', () => {
  modalBg.classList.remove('active');
});

// Cerrar modal clic fuera contenido
modalBg.addEventListener('click', (e) => {
  if (e.target === modalBg) {
    modalBg.classList.remove('active');
  }
});
