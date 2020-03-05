// this is your custom javascript code
const map = document.querySelector('#map');

function createShape(x, y) {
    let shape =  document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    let posX = (~~x + 180)*2;
    let posY = (90-~~y)*2;
    shape.setAttribute('fill', '#000');
    shape.setAttribute('width', 4);
    shape.setAttribute('height', 4);
    shape.setAttribute('x', posX);
    shape.setAttribute('y', posY);
    return shape
}

for (let i = 0; i < cities.length; i++) {
    map.appendChild(createShape(cities[i].longitude, cities[i].latitude));
}