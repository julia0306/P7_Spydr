console.log('connected')

$(document).ready(init);
function init(){
    $('.gameZone').on('mousemove', rotateDiv)
}

function rotateDiv(e){
    let coords;
    let size;
    let polar; 
    coords= $ ('.fly').offset();
    size = {width: $('.fly').width(), height : $('.fly').height()};
    polar=cartesianToPolar(e.pageX, e.pageY, coords.left + (size.width / 2), coords.top + (size.height / 2));
    $('.fly')
        .css(
            'transform',
            'rotate(' + polar.angle +'deg)'
        )
        console.log('mouseOver')
}

function cartesianToPolar (x1, y1, x2, y2){
    let x = x2 - x1;
    let y = y2 - y1;
    return {
        distance : Math.sqrt ((x * x) + (y * y)),
        angle : -(Math.atan2 (x,y) * 180 / Math.PI)
    }
}