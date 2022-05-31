// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan) => {
  
  const arrDaftarBelanja = [];
  
  for(let indexArray = 0; indexArray < dataBelanjaan.length; indexArray++)
  {
      const objekBarang = dataBelanjaan[indexArray];
      arrDaftarBelanja.push("- " + objekBarang.nama + " x " + objekBarang.kuantitas);
  }

  return arrDaftarBelanja;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataBelanjaan) => {
  let totalHarga = 0;
  let indexBarang = 0;
  
  while(indexBarang < dataBelanjaan.length) {
     let objekHarga = dataBelanjaan[indexBarang];
    
     totalHarga += (objekHarga.harga * objekHarga.kuantitas);
     indexBarang++;
  }
  
  return totalHarga;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
