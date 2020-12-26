function hitungPajak(value) {
  let result = (3 / 100) * value;
  return result;
}
function hitungBpjs(value) {
  let result = (5 / 100) * value;
  return result;
}

function hitungGaji(nama, gaji, bulan, tunjangan) {
  let totalGaji = 0;
  if (tunjangan) {
    let Gaji = parseInt(gaji) + parseInt(tunjangan);
  }
  const resultGaji =
    parseInt(gaji) + parseInt(500000) - hitungBpjs(gaji) - hitungPajak(gaji);
  const totalGajiBersih = resultGaji * bulan;

  console.log(`
  Nama Karyawan : ${nama}
  Gaji Pokok : ${gaji}
  Tunjangan : 500000
  BPJS : ${hitungBpjs(gaji)}
  Pajak :${hitungPajak(gaji)}
  Gaji Bersih : ${resultGaji}
  Total Gaji Bersih : ${totalGajiBersih}
  
  `);
}

hitungGaji("Andi", 1500000, 2, true);
