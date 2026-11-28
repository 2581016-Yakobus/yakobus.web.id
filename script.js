/* ==========================================================
   DATA (diambil dari CV Yakobus Toda)
   ========================================================== */
const navData = [
  {
    label: 'Profil',
    items: [
      { text: 'Tentang saya', href: '#tentang' },
      { text: 'Ringkasan angka', href: '#ringkasan' },
      { text: 'Linimasa karier', href: '#linimasa' }
    ]
  },
  {
    label: 'Pengalaman',
    items: [
      { text: 'Perawat Lansia', href: '#pengalaman', tab: 'experience:0' },
      { text: 'Staf Fotokopi', href: '#pengalaman', tab: 'experience:1' },
      { text: 'Supervisor Departemen Industrial', href: '#pengalaman', tab: 'experience:2' },
      { text: 'Staf Layanan & Operasional', href: '#pengalaman', tab: 'experience:3' }
    ]
  },
  {
    label: 'Pendidikan',
    items: [
      { text: 'SMAS Advent Nusra', href: '#pendidikan' }
    ]
  },
  {
    label: 'Keterampilan',
    items: [
      { text: 'Perangkat lunak', href: '#keterampilan', tab: 'skills:0' },
      { text: 'Administrasi', href: '#keterampilan', tab: 'skills:1' },
      { text: 'Keuangan & data', href: '#keterampilan', tab: 'skills:2' },
      { text: 'Layanan & kerja tim', href: '#keterampilan', tab: 'skills:3' }
    ]
  },
  {
    label: 'Kontak',
    items: [
      { text: 'Hubungi saya', href: '#kontak' },
      { text: 'Kirim pesan', href: '#pesan' }
    ]
  }
];

const experienceData = [
  {
    tab: 'Perawat Lansia',
    period: 'Okt 2022 - Okt 2023',
    title: 'Perawat Lansia',
    place: 'Layanan perawatan lansia',
    description:
      'Merawat lansia sambil menjaga catatan kondisi dan jadwal perawatan tetap tertib ' +
      'agar tim medis selalu mendapat informasi yang akurat.',
    stats: [
      { value: '12', label: 'bulan masa kerja' },
      { value: '1x', label: 'laporan status pasien setiap bulan' }
    ],
    tasks: [
      'Mengkoordinasikan jadwal perawatan secara efisien dengan sistem penjadwalan digital.',
      'Mencatat dan melaporkan perubahan kondisi pasien secara akurat kepada tim medis.',
      'Menyusun laporan bulanan tentang status pasien dan penggunaan obat-obatan.'
    ]
  },
  {
    tab: 'Staf Fotokopi',
    period: 'Okt 2023 - Okt 2024',
    title: 'Staf Fotokopi',
    place: 'Universitas Advent Indonesia',
    description:
      'Menjadi garda depan layanan dokumen kampus: menggandakan, memindai, dan mengarsipkan ' +
      'dengan teliti sambil melayani banyak pelanggan setiap hari.',
    stats: [
      { value: '100%', label: 'akurasi penggandaan dan pengarsipan' },
      { value: '30+', label: 'pelanggan dilayani per hari' },
      { value: '5', label: 'jenis mesin kantor dioperasikan' }
    ],
    tasks: [
      'Mengelola dokumen penting dengan teliti pada setiap penggandaan dan pengarsipan.',
      'Melayani pelanggan dengan profesional dan ramah.',
      'Mengoperasikan dan memelihara mesin fotokopi, pemindai, dan printer.',
      'Mencatat pesanan dan menghitung biaya sebagai tugas administrasi sederhana.',
      'Mengkoordinasikan jadwal pengambilan dan pengiriman dokumen agar tepat waktu.'
    ]
  },
  {
    tab: 'Supervisor Departemen',
    period: 'Nov 2024 - Sept 2025',
    title: 'Supervisor Departemen Industrial',
    place: 'Universitas Advent Indonesia',
    description:
      'Menjalankan administrasi departemen: jadwal, dokumentasi, arsip, dan komunikasi ' +
      'antara dosen, staf, dan mahasiswa.',
    stats: [
      { value: '15+', label: 'dosen didukung' },
      { value: '200+', label: 'mahasiswa dilayani' },
      { value: '30%', label: 'efisiensi pelacakan aset meningkat' }
    ],
    tasks: [
      'Mengelola sistem administrasi: jadwal, dokumentasi, dan pengarsipan.',
      'Mengembangkan sistem pencatatan inventaris untuk melacak aset lebih efisien.',
      'Mengkoordinasikan komunikasi antara fakultas, staf, dan mahasiswa.',
      'Menyusun dan mendistribusikan laporan bulanan dan semester tepat waktu.',
      'Mengatur pertemuan departemen dan mencatat notulensi secara menyeluruh.'
    ]
  },
  {
    tab: 'Staf OMI Market',
    period: 'Sept 2025 - April 2026',
    title: 'Staf Layanan & Operasional',
    place: 'OMI Market, Universitas Advent Indonesia',
    description:
      'Mengoperasikan kasir, menata produk, dan menjaga stok serta kebersihan toko ' +
      'agar layanan berjalan lancar.',
    stats: [
      { value: '100+', label: 'transaksi rata-rata per hari' },
      { value: 'POS', label: 'sistem Point of Sale dikelola' }
    ],
    tasks: [
      'Mengelola sistem Point of Sale untuk transaksi tunai dan non-tunai.',
      'Melayani pelanggan, menjawab pertanyaan, dan menyelesaikan keluhan.',
      'Menata display produk dan memeriksa stok secara rutin agar barang selalu tersedia.',
      'Membantu penerimaan barang dari pemasok dan menjaga standar kebersihan toko.'
    ]
  }
];

const skillsData = [
  {
    tab: 'Perangkat Lunak',
    title: 'Perangkat lunak',
    description: 'Aplikasi yang saya pakai untuk dokumen, surel, dan transaksi.',
    items: ['Microsoft Office', 'Google Docs', 'Outlook', 'Point of Sale (POS)']
  },
  {
    tab: 'Administrasi',
    title: 'Administrasi',
    description: 'Kebiasaan kerja yang menjaga dokumen dan jadwal tetap rapi.',
    items: [
      'Pengarsipan dan manajemen dokumen',
      'Penjadwalan dan koordinasi',
      'Notulensi rapat',
      'Laporan bulanan dan semester',
      'Pencatatan inventaris'
    ]
  },
  {
    tab: 'Keuangan & Data',
    title: 'Keuangan & data',
    description: 'Kemampuan mengolah angka dan data agar mudah dipakai orang lain.',
    items: [
      'Analisis laporan keuangan',
      'Administrasi data',
      'Perhitungan biaya',
      'Pencatatan pesanan'
    ]
  },
  {
    tab: 'Layanan & Tim',
    title: 'Layanan & kerja tim',
    description: 'Cara saya bekerja bersama dan melayani orang lain.',
    items: [
      'Pelayanan pelanggan',
      'Komunikasi lintas pihak',
      'Disiplin dan kerja tim',
      'Bahasa Indonesia'
    ]
  }
];

const timelineData = [
  { date: '2019 - 2022', title: 'Siswa jurusan IPS', place: 'SMAS Advent Nusra' },
  { date: 'Okt 2022 - Okt 2023', title: 'Perawat Lansia', place: 'Layanan perawatan lansia' },
  { date: 'Okt 2023 - Okt 2024', title: 'Staf Fotokopi', place: 'Universitas Advent Indonesia' },
  { date: 'Nov 2024 - Sept 2025', title: 'Supervisor Departemen Industrial', place: 'Universitas Advent Indonesia' },
  { date: 'Sept 2025 - April 2026', title: 'Staf Layanan & Operasional', place: 'OMI Market, Universitas Advent Indonesia' }
];

const institutions = [
  'SMAS ADVENT NUSRA',
  'UNIVERSITAS ADVENT INDONESIA',
  'DEPARTEMEN INDUSTRIAL',
  'OMI MARKET',
  'LAYANAN FOTOKOPI'
];

const contactData = [
  {
    category: 'hubungi',
    cover: 'cover-a',
    icon: 'mail',
    title: 'Email',
    text: 'Cara tercepat untuk menawarkan peluang kerja atau mengajukan pertanyaan.',
    linkText: 'yakobustoda04@gmail.com',
    href: 'mailto:yakobustoda04@gmail.com',
    external: false
  },
  {
    category: 'hubungi',
    cover: 'cover-b',
    icon: 'chat',
    title: 'WhatsApp',
    text: 'Hubungi langsung untuk diskusi singkat atau janji temu.',
    linkText: '+62 853-3815-3194',
    href: 'https://wa.me/6285338153194',
    external: true
  },
  {
    category: 'lokasi',
    cover: 'cover-c',
    icon: 'pin',
    title: 'Alamat',
    text: 'Jl. Kolonel Masturi No. 288, Bandung Barat.',
    linkText: 'Lihat di peta',
    href: 'https://www.google.com/maps/search/?api=1&query=Jl.+Kolonel+Masturi+288+Bandung+Barat',
    external: true
  },
  {
    category: 'dokumen',
    cover: 'cover-a',
    icon: 'file',
    title: 'Curriculum Vitae',
    text: 'Unduh CV lengkap berisi profil, pendidikan, pengalaman, dan keterampilan.',
    linkText: 'Unduh CV',
    href: 'assets/CV_BOBBS.docx',
    external: false,
    download: true
  }
];

const highlightsData = [
  {
    tag: 'Administrasi',
    title: 'Sistem pencatatan inventaris',
    text: 'Mengembangkan pencatatan inventaris di Departemen Industrial yang membuat pelacakan aset lebih efisien sebesar 30%.'
  },
  {
    tag: 'Layanan',
    title: 'Kasir dengan volume tinggi',
    text: 'Memproses rata-rata lebih dari 100 transaksi tunai dan non-tunai setiap hari di OMI Market.'
  },
  {
    tag: 'Dokumen',
    title: 'Arsip yang akurat',
    text: 'Menjaga akurasi penggandaan dan pengarsipan dokumen penting di layanan fotokopi.'
  },
  {
    tag: 'Koordinasi',
    title: 'Penghubung antar pihak',
    text: 'Menghubungkan komunikasi fakultas, staf, dan mahasiswa agar operasional departemen berjalan lancar.'
  },
  {
    tag: 'Pelaporan',
    title: 'Laporan tepat waktu',
    text: 'Menyusun dan membagikan laporan bulanan serta semester, lengkap dengan notulensi rapat departemen.'
  }
];

const icons = {
  mail: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  chat: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 19l1.2-3.6A8 8 0 1 1 9 18.2L5 19z"/></svg>',
  pin: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  file: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M9 17h6"/></svg>'
};

const chevronSvg =
  '<svg class="nav-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">' +
  '<path d="M5 9l7 7 7-7"/></svg>';

const arrowSvg =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">' +
  '<path d="M5 12h14M13 6l6 6-6 6"/></svg>';


/* ==========================================================
   NAVIGASI DESKTOP & MOBILE
   ========================================================== */
function renderNavigation() {
  const desktopNav = document.getElementById('desktopNav');
  const mobileNav = document.getElementById('mobileNav');

  navData.forEach(function (group) {
    const links = group.items
      .map(function (item) {
        const tabAttr = item.tab ? ' data-tab="' + item.tab + '"' : '';
        return '<a href="' + item.href + '"' + tabAttr + '>' + item.text + '</a>';
      })
      .join('');

    desktopNav.insertAdjacentHTML(
      'beforeend',
      '<div class="nav-item">' +
      '<button class="nav-link" type="button">' + group.label + chevronSvg + '</button>' +
      '<div class="mega-panel">' + links + '</div>' +
      '</div>'
    );

    mobileNav.insertAdjacentHTML(
      'beforeend',
      '<div class="m-group">' +
      '<button class="m-group-btn" type="button">' + group.label + chevronSvg + '</button>' +
      '<div class="m-group-list">' + links + '</div>' +
      '</div>'
    );
  });

  // Mega menu desktop bisa dibuka lewat klik / keyboard
  desktopNav.querySelectorAll('.nav-link').forEach(function (button) {
    button.addEventListener('click', function () {
      const item = button.parentElement;
      const wasOpen = item.classList.contains('is-open');
      desktopNav.querySelectorAll('.nav-item').forEach(function (el) {
        el.classList.remove('is-open');
      });
      if (!wasOpen) {
        item.classList.add('is-open');
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('#desktopNav')) {
      desktopNav.querySelectorAll('.nav-item').forEach(function (el) {
        el.classList.remove('is-open');
      });
    }
  });

  // Accordion mobile
  mobileNav.querySelectorAll('.m-group-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      button.parentElement.classList.toggle('is-open');
    });
  });
}

function setupDrawer() {
  const open = function () {
    document.body.classList.add('drawer-open', 'no-scroll');
  };
  const close = function () {
    document.body.classList.remove('drawer-open', 'no-scroll');
  };

  document.getElementById('openMenu').addEventListener('click', open);
  document.getElementById('closeMenu').addEventListener('click', close);
  document.getElementById('drawerOverlay').addEventListener('click', close);

  document.querySelectorAll('#drawer a').forEach(function (link) {
    link.addEventListener('click', close);
  });
}


/* ==========================================================
   PENCARIAN
   ========================================================== */
function setupSearch() {
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const sections = Array.from(document.querySelectorAll('[data-search-title]'));

  const open = function () {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    input.focus();
  };

  const close = function () {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    input.value = '';
    results.innerHTML = '';
  };

  document.getElementById('openSearch').addEventListener('click', open);
  document.getElementById('closeSearch').addEventListener('click', close);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      close();
    }
  });

  input.addEventListener('input', function () {
    const query = input.value.trim().toLowerCase();
    results.innerHTML = '';

    if (query.length < 2) {
      return;
    }

    let found = 0;

    sections.forEach(function (section) {
      const text = section.textContent.replace(/\s+/g, ' ').trim();
      const index = text.toLowerCase().indexOf(query);

      if (index === -1) {
        return;
      }

      found += 1;
      const start = Math.max(0, index - 40);
      const snippet = '...' + text.slice(start, index + 100) + '...';
      const target = section.id ? '#' + section.id : '#top';

      results.insertAdjacentHTML(
        'beforeend',
        '<li class="search-result"><a href="' + target + '">' +
        '<strong>' + section.dataset.searchTitle + '</strong>' +
        '<span></span></a></li>'
      );
      results.lastElementChild.querySelector('span').textContent = snippet;
    });

    if (found === 0) {
      results.innerHTML = '<li class="py-4 text-gray-500">Tidak ada hasil untuk pencarian ini.</li>';
    }
  });

  results.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      close();
    }
  });
}


/* ==========================================================
   BANNER PENGUMUMAN
   ========================================================== */
function setupAnnouncement() {
  const banner = document.getElementById('announcement');
  document.getElementById('closeAnnouncement').addEventListener('click', function () {
    banner.style.display = 'none';
  });
}


/* ==========================================================
   TAB (dipakai Pengalaman & Keterampilan)
   ========================================================== */
const tabRegistry = {};

function createTabs(rootId, key, items, renderPanel) {
  const root = document.getElementById(rootId);
  const list = root.querySelector('.tab-list');
  const wrap = root.querySelector('.tab-panel-wrap');

  items.forEach(function (item, index) {
    list.insertAdjacentHTML(
      'beforeend',
      '<button class="tab-btn" type="button" role="tab" data-index="' + index + '">' + item.tab + '</button>'
    );
    wrap.insertAdjacentHTML(
      'beforeend',
      '<div class="tab-panel" role="tabpanel" data-index="' + index + '">' + renderPanel(item) + '</div>'
    );
  });

  const select = function (index) {
    root.querySelectorAll('.tab-btn').forEach(function (button) {
      const active = Number(button.dataset.index) === index;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    root.querySelectorAll('.tab-panel').forEach(function (panel) {
      panel.classList.toggle('is-active', Number(panel.dataset.index) === index);
    });
  };

  list.addEventListener('click', function (event) {
    const button = event.target.closest('.tab-btn');
    if (button) {
      select(Number(button.dataset.index));
    }
  });

  tabRegistry[key] = select;
  select(0);
}

function renderExperiencePanel(job) {
  const stats = job.stats
    .map(function (stat) {
      return (
        '<div class="job-stat">' +
        '<p class="job-stat-value">' + stat.value + '</p>' +
        '<p class="job-stat-label">' + stat.label + '</p>' +
        '</div>'
      );
    })
    .join('');

  const tasks = job.tasks
    .map(function (task) {
      return '<li>' + task + '</li>';
    })
    .join('');

  return (
    '<div class="grid lg:grid-cols-2 gap-12">' +
    '<div>' +
    '<p class="job-period">' + job.period + '</p>' +
    '<h3 class="font-heading font-bold text-3xl text-pan-black mt-3">' + job.title + '</h3>' +
    '<p class="font-semibold mt-2">' + job.place + '</p>' +
    '<p class="mt-5 text-lg leading-relaxed">' + job.description + '</p>' +
    '<div class="flex flex-wrap gap-y-6 mt-8">' + stats + '</div>' +
    '<a href="#kontak" class="btn-orange mt-10">Bicara dengan saya</a>' +
    '</div>' +
    '<div class="task-card">' +
    '<p class="eyebrow-dark mb-3">Tanggung jawab utama</p>' +
    '<ul class="task-list">' + tasks + '</ul>' +
    '</div>' +
    '</div>'
  );
}

function renderSkillPanel(skill) {
  const links = skill.items
    .map(function (item) {
      return '<li><a href="#kontak"><span>' + item + '</span>' + arrowSvg + '</a></li>';
    })
    .join('');

  return (
    '<div class="skill-panel">' +
    '<div>' +
    '<h3 class="font-heading font-bold text-3xl text-white">' + skill.title + '</h3>' +
    '<p class="text-white/80 mt-4 text-lg leading-relaxed">' + skill.description + '</p>' +
    '</div>' +
    '<ul class="skill-links">' + links + '</ul>' +
    '</div>'
  );
}

function setupTabLinks() {
  document.addEventListener('click', function (event) {
    const link = event.target.closest('[data-tab]');
    if (!link) {
      return;
    }

    const parts = link.dataset.tab.split(':');
    const select = tabRegistry[parts[0]];

    if (select) {
      select(Number(parts[1]));
    }
  });
}


/* ==========================================================
   LINIMASA & MARQUEE
   ========================================================== */
function renderTimeline() {
  const timeline = document.getElementById('timeline');

  timelineData.forEach(function (entry) {
    timeline.insertAdjacentHTML(
      'beforeend',
      '<li class="timeline-item reveal">' +
      '<p class="timeline-date">' + entry.date + '</p>' +
      '<h3 class="timeline-title">' + entry.title + '</h3>' +
      '<p class="timeline-place">' + entry.place + '</p>' +
      '</li>'
    );
  });
}

function renderMarquee() {
  const track = document.getElementById('marqueeTrack');
  const html = institutions
    .map(function (name) {
      return '<span class="marquee-item">' + name + '</span>';
    })
    .join('');

  // Diduplikasi agar animasi berulang mulus
  track.innerHTML = html + html;
}


/* ==========================================================
   KONTAK
   ========================================================== */
function renderContacts() {
  const grid = document.getElementById('contactGrid');

  contactData.forEach(function (contact) {
    const target = contact.external ? ' target="_blank" rel="noopener"' : '';
    const download = contact.download ? ' download' : '';

    grid.insertAdjacentHTML(
      'beforeend',
      '<article class="contact-card reveal" data-category="' + contact.category + '">' +
      '<div class="contact-cover ' + contact.cover + '">' + icons[contact.icon] + '</div>' +
      '<div class="contact-body">' +
      '<h3 class="contact-title">' + contact.title + '</h3>' +
      '<p class="contact-text">' + contact.text + '</p>' +
      '<a class="contact-link" href="' + contact.href + '"' + target + download + '>' +
      contact.linkText + ' &rarr;</a>' +
      '</div>' +
      '</article>'
    );
  });

  document.getElementById('contactFilters').addEventListener('click', function (event) {
    const button = event.target.closest('.filter-btn');
    if (!button) {
      return;
    }

    document.querySelectorAll('.filter-btn').forEach(function (el) {
      el.classList.toggle('is-active', el === button);
    });

    grid.querySelectorAll('.contact-card').forEach(function (card) {
      const show = button.dataset.filter === 'all' || card.dataset.category === button.dataset.filter;
      card.classList.toggle('is-hidden', !show);
    });
  });
}


/* ==========================================================
   CAROUSEL
   ========================================================== */
function setupCarousel() {
  const track = document.getElementById('carouselTrack');
  const prev = document.getElementById('carouselPrev');
  const next = document.getElementById('carouselNext');
  let index = 0;

  highlightsData.forEach(function (item) {
    track.insertAdjacentHTML(
      'beforeend',
      '<article class="carousel-card">' +
      '<p class="carousel-tag">' + item.tag + '</p>' +
      '<h3 class="carousel-title">' + item.title + '</h3>' +
      '<p class="carousel-text">' + item.text + '</p>' +
      '</article>'
    );
  });

  const cards = track.querySelectorAll('.carousel-card');

  const visibleCount = function () {
    if (window.innerWidth >= 1024) {
      return 3;
    }
    if (window.innerWidth >= 640) {
      return 2;
    }
    return 1;
  };

  const update = function () {
    const maxIndex = Math.max(0, cards.length - visibleCount());
    index = Math.min(index, maxIndex);

    const step = cards[0].offsetWidth + 24;
    track.style.transform = 'translateX(' + (-index * step) + 'px)';
    prev.disabled = index === 0;
    next.disabled = index >= maxIndex;
  };

  prev.addEventListener('click', function () {
    index -= 1;
    update();
  });

  next.addEventListener('click', function () {
    index += 1;
    update();
  });

  window.addEventListener('resize', update);
  update();
}


/* ==========================================================
   FORM PESAN (membuka aplikasi email)
   ========================================================== */
function setupForm() {
  const form = document.getElementById('messageForm');
  const nameInput = document.getElementById('formName');
  const emailInput = document.getElementById('formEmail');
  const messageInput = document.getElementById('formMessage');
  const status = document.getElementById('formStatus');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameValid = nameInput.value.trim() !== '';
    const emailValid = emailPattern.test(emailInput.value.trim());
    const messageValid = messageInput.value.trim() !== '';

    nameInput.classList.toggle('has-error', !nameValid);
    emailInput.classList.toggle('has-error', !emailValid);
    messageInput.classList.toggle('has-error', !messageValid);

    if (!nameValid || !emailValid || !messageValid) {
      status.textContent = 'Mohon lengkapi nama, email yang valid, dan pesan.';
      status.style.color = '#c62828';
      return;
    }

    const subject = 'Pesan dari ' + nameInput.value.trim();
    const body =
      messageInput.value.trim() +
      '\n\nNama: ' + nameInput.value.trim() +
      '\nEmail: ' + emailInput.value.trim();

    window.location.href =
      'mailto:yakobustoda04@gmail.com?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    status.textContent = 'Aplikasi email Anda akan terbuka untuk mengirim pesan.';
    status.style.color = '#0b5a2a';
    form.reset();
  });
}


/* ==========================================================
   EFEK SCROLL: reveal, counter, sub-menu aktif, kembali ke atas
   ========================================================== */
function setupReveal() {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
}

function animateCounter(element) {
  const target = Number(element.dataset.count);
  const suffix = element.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(target * eased) + suffix;

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

function setupCounters() {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-count]').forEach(function (el) {
    observer.observe(el);
  });
}

function setupScrollState() {
  const subnavLinks = document.querySelectorAll('#subnavList a');
  const backToTop = document.getElementById('backToTop');
  const sections = Array.from(subnavLinks).map(function (link) {
    return document.getElementById(link.dataset.target);
  });

  function onScroll() {
    const marker = window.scrollY + 180;
    let activeId = '';

    sections.forEach(function (section) {
      if (section && section.offsetTop <= marker) {
        activeId = section.id;
      }
    });

    subnavLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.dataset.target === activeId);
    });

    backToTop.classList.toggle('is-visible', window.scrollY > 600);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  onScroll();
}


/* ==========================================================
   INISIALISASI
   ========================================================== */
document.addEventListener('DOMContentLoaded', function () {
  renderNavigation();
  setupDrawer();
  setupSearch();
  setupAnnouncement();

  createTabs('experienceTabs', 'experience', experienceData, renderExperiencePanel);
  createTabs('skillTabs', 'skills', skillsData, renderSkillPanel);
  setupTabLinks();

  renderTimeline();
  renderMarquee();
  renderContacts();
  setupCarousel();
  setupForm();

  setupReveal();
  setupCounters();
  setupScrollState();

  document.getElementById('year').textContent = new Date().getFullYear();
});