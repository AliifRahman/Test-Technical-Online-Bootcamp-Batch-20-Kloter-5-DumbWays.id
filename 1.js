const printLines = (line = 40) => {
   let lines = ''
   for (let i = 0; i < line; i++) {
      lines += '='
   }
   return lines
}

const toCurrency = (num) => num.toLocaleString('id-ID')

const makeNewLine = (inputs) => {
   let result = ''

   for(let i=0; i < inputs.length; i++) {
      result += inputs[i]

      if(i !== inputs.length - 1) {
         result += '\n'
      }
   }

   return result
}

const printResult = (nama, gajiPokok, tunjangan, bpjs, pajak, gajiBersih, totalGaji) => {
   const lines = printLines()
   const name = `Nama Karyawan: ${nama}`
   const salary = `Gaji Pokok: ${toCurrency(gajiPokok)}`
   const subsidi = `Tunjangan: ${toCurrency(tunjangan)}`
   const assurance = `BPJS: ${toCurrency(bpjs)}`
   const tax = `Pajak: ${toCurrency(pajak)}`
   const fixedSalary = `Gaji Bersih: ${toCurrency(gajiBersih)} / Bulan`
   const totalSalary = `Total Gaji: ${toCurrency(totalGaji)}`
   const results =  makeNewLine([lines, name, salary, subsidi, assurance, tax, lines, fixedSalary, lines, totalSalary])
   console.log(results)
}

const hitungGaji = (nama, gajiPokok, banyakBulan, isTunjangan)=> {
   let tunjangan = 500000
   const bpjs = gajiPokok * 3 / 100
   const pajak = gajiPokok * 5 / 100

   if(!isTunjangan) {
      tunjangan = 0
   }

   const gajiBersih = gajiPokok + tunjangan - bpjs - pajak
   const totalGaji = gajiBersih * banyakBulan

   printResult(nama, gajiPokok, tunjangan, bpjs, pajak, gajiBersih, totalGaji)
}

hitungGaji('Andi', 1500000, 2, true)
