Sum of angles

Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.


// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(angle(3), 180);
//       assert.strictEqual(angle(4), 360);
//     });
//   })

function angle(n) {
    return (n-2) * 180
   }

   const angle = angles => angles * 180 - 2 * 180 //this task is for 8kyu :(
