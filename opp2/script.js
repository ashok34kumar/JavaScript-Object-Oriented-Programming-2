class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height ;

    }
    calculateArea(){
        return this.width* this.width
    }
    calculatePerimeter(){
        return 2*(this.width+this.height)
    }
}

const form = document.getElementById('rectangle-form');
form.addEventListener('submit',function (e) {
    e.preventDefault();
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

if (isNaN(width) || isNaN(height)){
    alert('Please Enter valid numbers for width and height.');
    return;
}
const rectangle = new Rectangle(width, height);
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

const areaResultElement = document.getElementById('area-result');
const perimeterResultElement = document.getElementById('perimeter-result');

areaResultElement.innerHTML = `Rectangle Area :${area}`;
perimeterResultElement.innerHTML=`Rectangle perimeter :${perimeter}`

});