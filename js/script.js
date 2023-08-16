// Function saat button submit pada luas ditekan
function submtiLuas(event) {
  // Mencegah halaman untuk reload
  event.preventDefault();

  // Define input alas dan tinggi
  const alas = document.getElementById('alas');
  const tinggi = document.getElementById('tinggi');

  // Define elemen pada hasil
  const containerResult = document.getElementById('result-luas');
  const row1 = document.getElementById('result-luas-row-1');
  const row2 = document.getElementById('result-luas-row-2');

  let result;

  // Kondisi apabila input kosong
  if (!alas.value || !tinggi.value) {
    if (!alas.value) {
      checkValidation(alas);
    }
    if (!tinggi.value) {
      checkValidation(tinggi);
    }
    // Kondisi apabila input valid
  } else {
    result = (1 / 2) * alas.value * tinggi.value;
    row1.innerHTML = `L = 1/2 x ${alas.value} x ${tinggi.value}`;
    row2.innerHTML = `L = ${Math.round(result * 100) / 100}`;

    // Animasi hasil
    const res = containerResult.children[1];
    res.style.top = '40%';
    res.style.opacity = '100%';
    containerResult.style.paddingBottom = '32%';
  }
}

// Function saat button submit pada luas ditekan
function submtiKeliling(event) {
  // Mencegah halaman untuk reload
  event.preventDefault();

  // Define input untuk sisi A, B dan C
  const A = document.getElementById('A');
  const B = document.getElementById('B');
  const C = document.getElementById('C');

  // Define elemen pada hasil
  const containerResult = document.getElementById('result-keliling');
  const row1 = document.getElementById('result-keliling-row-1');
  const row2 = document.getElementById('result-keliling-row-2');

  let result;

  // Kondisi apabila input kosong
  if (!A.value || !B.value || !C.value) {
    if (!A.value) {
      checkValidation(A);
    }
    if (!B.value) {
      checkValidation(B);
    }
    if (!C.value) {
      checkValidation(C);
    }
    // Kondisi apabila input valid
  } else {
    result = parseFloat(A.value) + parseFloat(B.value) + parseFloat(C.value);
    row1.innerHTML = `K = ${A.value} + ${B.value} + ${C.value}`;
    row2.innerHTML = `K = ${Math.round(result * 100) / 100}`;

    // Animasi hasil
    const res = containerResult.children[1];
    res.style.top = '40%';
    res.style.opacity = '100%';
    containerResult.style.paddingBottom = '32%';
  }
}

// Fungsi apabila input tidak valid atau kosong
function checkValidation(input) {
  input.parentElement.style.setProperty('--opacity', 100);
  input.parentElement.style.setProperty('--translate', 'translateY(0)');
}

//Fungsi validasi untuk menghilangkan peringatan pada saat input sudah benar
function removeValidation(event) {
  if (event.target.value) {
    event.target.parentElement.style.setProperty('--opacity', 0);
    event.target.parentElement.style.setProperty(
      '--translate',
      'translateY(100%)',
    );
  }
}

//Fungsi validasi pada input hanya bisa mengetikkan angka
function onlyNumberValidation(event) {
  // Kondisi pengecualian untuk titik yang digunakan sebagai koma pada input
  // Kondisi apabila key yang ditekan adalah angka bila bukan angka maka akan menghasilkan NaN dan kondisi true maka return false. Kondisi juga key yang ditekan bukan spasi
  if (window.outerWidth <= 375) {
    if (
      isNaN(String.fromCharCode(event.keyCode)) ||
      ['Space'].includes(arguments[0].code)
    )
      return false;
  }
}

// Kondisi untuk mengubah type input pada mobile
if (window.outerWidth >= 375) {
  const input = Array.from(document.getElementsByTagName('input'));
  input.forEach((item) => item.setAttribute('type', 'text'));
} else {
  const input = Array.from(document.getElementsByTagName('input'));
  input.forEach((item) => item.setAttribute('type', 'number'));
}

// Fungsi untuk menampilkan nilai pada gambar segitiga
function onInput(event) {
  // Define elemen sisi pada segitiga
  const sisi = document.getElementById(`sisi-${event.target.id}`);

  let color;
  let symbol;

  // Array yang menampung data sisi segitiga
  const arr = [
    ['alas', 'a', 'red'],
    ['tinggi', 'T', 'blue'],
    ['A', 'A', 'red'],
    ['B', 'B', 'green'],
    ['C', 'C', 'blue'],
  ];

  // Mencegah input bernilai selain angka pada resolusi lebih dari 375
  if (window.outerWidth >= 375) {
    let clean = event.target.value
      .replace(/[^0-9\.]/g, '')
      .replace(/(\..*?)\.(.*\.)?/, '$1');
    if (clean !== event.target.value) event.target.value = clean;
  }

  // Mencari index pada arr yang sesuai dengan sisi yang sedang diinput
  index = arr.findIndex((item) => item[0] == event.target.id);

  // Mengambil nilai warna dan simbol yang sesuai dengan index
  color = arr[index][2];
  symbol = arr[index][1];

  // Kondisi untuk mengubah warna dan nilai pada segitiga
  if (event.target.value) {
    sisi.style.backgroundColor = color;
    sisi.setAttribute('data-text', `${symbol} = ${event.target.value}`);
  } else {
    sisi.style.backgroundColor = 'var(--text)';
    sisi.setAttribute('data-text', `${symbol}`);
  }

  onInputSisi(
    event.target,
    sisi,
    'tinggi',
    ['50%', '-50%'],
    ['0.5rem', '-6.5rem'],
  );

  onInputSisi(event.target, sisi, 'A', ['50%', '10%'], ['-2rem', '-6rem']);

  onInputSisi(event.target, sisi, 'C', ['50%', '-10%'], ['-1.6rem', '-5.9rem']);
}

// Fungsi untuk mereset hasil
function resetHasil(container) {
  const res = container.children[1];
  res.style.top = '0';
  res.style.opacity = '0';
  container.style.paddingBottom = '';
}

// Fungsi untuk mengganti kalkulator dari luas ke keliling atau sebaliknya
function slide(value) {
  // Define element section luas dan keliling
  const sectionLuas = document.getElementById('luas');
  const sectionKeliling = document.getElementById('keliling');
  const footer = document.getElementsByTagName('footer')[0];

  // Kondisi untuk footer agar tetap di bawah section luas pada saat di resolusi mobile
  if (window.outerWidth <= 375) footer.style.translate = value;

  sectionLuas.style.translate = value;
  sectionKeliling.style.translate = value;
}

// Fungis untuk mereset input, nilai pada symbol dan hasil sesuai dengan section luas atau keliling
function resetAll(event, container, array, symbolArr) {
  // Mencegah halaman reload
  event.preventDefault();
  const containerResult = document.getElementById(container);

  // Mereset hasil
  resetHasil(containerResult);

  array.forEach((item, index) => {
    // Mereset value input
    document.getElementById(item).value = '';

    // Mereset warna pada segitiga
    document.getElementById(`sisi-${item}`).style.backgroundColor =
      'var(--text)';
    // Mereset simbol pada segitiga
    document
      .getElementById(`sisi-${item}`)
      .setAttribute('data-text', symbolArr[index]);

    // Kondisi untuk mereset letak symbol saat tidak ada nilai pada input
    if (item == 'tinggi') resetInputSisi(item, '50%', '0.5rem');
    if (item == 'A') resetInputSisi(item, '50%', '-2rem');
    if (item == 'C') resetInputSisi(item, '50%', '-1.6rem');
  });
}

// Fungsi untuk mengubah letak dan value pada segitiga
function onInputSisi(target, sisiElement, sisiName, arrLeft, arrTop) {
  if (target.id == sisiName) {
    sisiElement.style.setProperty('--width', '100%');
    sisiElement.style.setProperty('--left', arrLeft[1]);
    sisiElement.style.setProperty('--top', arrTop[1]);
  }
  if (!target.value && target.id == sisiName) {
    sisiElement.style.setProperty('--width', '0');
    sisiElement.style.setProperty('--left', arrLeft[0]);
    sisiElement.style.setProperty('--top', arrTop[0]);
  }
}

// Fungsi untuk mereset letak simbol pada segitiga
function resetInputSisi(item, left, top) {
  document.getElementById(`sisi-${item}`).style.setProperty('--width', '0');
  document.getElementById(`sisi-${item}`).style.setProperty('--left', left);
  document.getElementById(`sisi-${item}`).style.setProperty('--top', top);
}
