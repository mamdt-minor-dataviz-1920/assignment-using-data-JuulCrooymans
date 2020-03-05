// this is your custom javascript code
const map = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
map.setAttribute('viewbox', '0 0 720 360');
map.setAttribute('width', '720');
map.setAttribute('height', '360');

document.querySelector('body').appendChild(map);

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
