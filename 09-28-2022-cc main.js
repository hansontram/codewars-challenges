// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


//P: three numbres, l w d
//R: Array, [area, volume]
//E: (getSize(4, 2, 6), [88, 48])
//P: 

//variable with formula for area, (2*w*h) + (aw*d*2) + (h*d*2)
//variable with formula for volume (w*h*d)
//return [area, volume]



//solution 1
const getSize = (w, h, d) => {
    const area = (w * h * 2) + (w * d * 2) + (h * d * 2)
    const volume = w * h * d
    return [area, volume]
  }



  //solution 2
  const getSize = (width, height, depth) => [2 * (width * height  + height * depth + width * depth), width * height * depth];