function submtiLuas(event) {
  event.preventDefault();

  const alas = document.getElementById('alas');
  const tinggi = document.getElementById('tinggi');

  const containerResult = document.getElementById('result-luas');
  const row1 = document.getElementById('result-luas-row-1');
  const row2 = document.getElementById('result-luas-row-2');
  let result;
  if (!alas.value || !tinggi.value) {
    if (!alas.value) {
      checkValidation(alas);
    }
    if (!tinggi.value) {
      checkValidation(tinggi);
    }
  } else {
    result = (1 / 2) * alas.value * tinggi.value;
    row1.innerHTML = `L = 1/2 x ${alas.value} x ${tinggi.value}`;
    row2.innerHTML = `L = ${result}`;

    const res = containerResult.children[1];
    res.style.top = '40%';
    res.style.opacity = '100%';
    containerResult.style.paddingBottom = '32%';
  }
}

function submtiKeliling(event) {
  event.preventDefault();

  const A = document.getElementById('A');
  const B = document.getElementById('B');
  const C = document.getElementById('C');

  const containerResult = document.getElementById('result-keliling');
  const row1 = document.getElementById('result-keliling-row-1');
  const row2 = document.getElementById('result-keliling-row-2');

  let result;
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
  } else {
    result = parseFloat(A.value) + parseFloat(B.value) + parseFloat(C.value);
    row1.innerHTML = `K = ${A.value} + ${B.value} + ${C.value}`;
    row2.innerHTML = `K = ${result}`;

    const res = containerResult.children[1];
    res.style.top = '39%';
    res.style.opacity = '100%';
    containerResult.style.paddingBottom = '30%';
  }
}

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
  //Kondisi apabila key yang ditekan adalah angka bila bukan angka maka akan menghasilkan NaN dan kondisi true maka return false. Kondisi juga key yang ditekan bukan spasi
  if (event.keyCode == 46) {
    return true;
  }
  if (
    isNaN(String.fromCharCode(event.keyCode)) ||
    ['Space'].includes(arguments[0].code)
  )
    return false;
}

function slideToKeliling() {
  const sectionLuas = document.getElementById('luas');
  const sectionKeliling = document.getElementById('keliling');

  sectionLuas.style.translate = '-100%';
  sectionKeliling.style.translate = '-100%';
}

function slideToLuas() {
  const sectionLuas = document.getElementById('luas');
  const sectionKeliling = document.getElementById('keliling');

  sectionLuas.style.translate = '0';
  sectionKeliling.style.translate = '0';
}

function resetLuas(event) {
  event.preventDefault();

  const alas = document.getElementById('alas');
  const tinggi = document.getElementById('tinggi');
  const containerResult = document.getElementById('result-luas');

  const res = containerResult.children[1];
  res.style.top = '0';
  res.style.opacity = '0';
  containerResult.style.paddingBottom = '';

  alas.value = '';
  tinggi.value = '';
}

function resetKeliling(event) {
  event.preventDefault();

  const A = document.getElementById('A');
  const B = document.getElementById('B');
  const C = document.getElementById('C');
  const containerResult = document.getElementById('result-keliling');

  const res = containerResult.children[1];
  res.style.top = '0';
  res.style.opacity = '0';
  containerResult.style.paddingBottom = '';

  A.value = '';
  B.value = '';
  C.value = '';
}
