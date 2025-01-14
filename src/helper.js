const helpers = (function() {
    function numToXY(num) {
      num = Number(num);
      let x = num % 10;
      let y = Math.floor(num / 10);
      return {x, y};
    }
  
    function xyToNum(x, y) {
      return (y * 10) + x
    }
  
    function getEnd(coordinates, orientation, length) {
      let end = {};
      length = Number(length);
      if (orientation == 'h') {
        end.x = coordinates.x + length - 1;
        end.y = coordinates.y;
        
        // while(end.x > 9) {
        //   coordinates.x = coordinates.x - 1;
        //   end.x = end.x - 1;
        // }
  
      } else {
        end.y = coordinates.y + length - 1;
        end.x = coordinates.x;
  
        // while(end.y > 9) {
        //   coordinates.y = coordinates.y - 1;
        //   end.y = end.y - 1;
        // }
      }
  
      return end;
    }
  
    function shadeArea(start, end) {
      if (start.x == end.x) {
        for (let i = 0; i < end.y - start.y + 1; i++) {
          let box = document.querySelector(`.grid1 [data-val='${xyToNum(start.x, start.y + i)}']`);
          box.style.cssText = `
          border-left: 2px solid yellowgreen;
          border-right: 2px solid yellowgreen;
          opacity: 1;
          `;
          if (i == 0) {
            box.style.cssText += `
            border-top: 2px solid yellowgreen;
            `;
          }
  
          if (i == end.x - start.x) {
            box.style.cssText += `
            border-bottom: 2px solid yellowgreen;
            `;
          }
        }
      } else {
        for (let i = 0; i < end.x - start.x + 1; i++) {
          let box = document.querySelector(`.grid1 [data-val='${xyToNum(start.x + i, start.y)}']`);
          box.style.cssText = `
          border-top: 2px solid yellowgreen;
          border-bottom: 2px solid yellowgreen;
          opacity: 1;
          `;
          if (i == 0) {
            box.style.cssText += `
            border-left: 2px solid yellowgreen;
            `;
          }
  
          if (i == end.x - start.x) {
            box.style.cssText += `
            border-right: 2px solid yellowgreen;
            `;
          }
        }
      }
    }
  
    function unshadeArea(start, end) {
      if (start.x == end.x) {
        for (let i = 0; i < end.y - start.y + 1; i++) {
          let box = document.querySelector(`.grid1 [data-val='${xyToNum(start.x, start.y + i)}']`);
          box.style.cssText = '';
        }
      } else {
        for (let i = 0; i < end.x - start.x + 1; i++) {
          let box = document.querySelector(`.grid1 [data-val='${xyToNum(start.x + i, start.y)}']`);
          box.style.cssText = '';
        }
      }
    }
  
    return {
      numToXY, unshadeArea,
      xyToNum, getEnd, shadeArea,
    };
  })();
  
  module.exports = helpers;