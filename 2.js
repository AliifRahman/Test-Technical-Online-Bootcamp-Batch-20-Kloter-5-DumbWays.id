 const isiArray = (x, y) => {
   const result = []
   let n = y - x
   
   for(let i=0; i<x; i++) {
      const Array = []

      for(let j=0; j < y; j++) {
         Array.push(n)
         n += 2 * x
      }
      
      result.push(Array)
   }

   console.log(result)
}

isiArray(3, 5)
