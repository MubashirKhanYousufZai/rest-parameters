// Rest Parameter
function calculateArea(length: number = 24 , width: number = 4) {
    console.log(length)
    console.log(width)
}
calculateArea(24, 4);

function movieNight(movieName: any = 1 , popcornFlavour: any = 12) {
    console.log(movieName)
    console.log(popcornFlavour)
}
movieNight(1, 12);