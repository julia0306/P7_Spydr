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

function shoot(e){
    let gameZone;
    let shooter;
    let offsets;
    let center;
    let vector;
    let target;
    let orientation;
    gameZone = $('.gameZone');
    shooter = $('.fly');
    offsets = {left: gameZone.offset().left, top: gameZone.offset().top};
    center = {
        left: shooter.offset().left - offsets.left + (shooter.width() / 2),
        top: shooter.offset().top - offsets.top + (shooter.height() / 2)
    };
    vector = cartesianToPolar(center.left, center.top, e.pageX - offsets.left, e.pageY - offsets.top);
    target = polarToCartesian (250, (vector.angle + 90) + Math.PI / 180);
    orientation = {horizontal : (center.left + target.left) > center.left ? 1 : -1};
    $('<div class="bullet"></div>')
        .css(
                {
                    left: center.left + "px",
                    top: center.top + "px"
                }
        )
            .appendTo('.gameZone')
            .animate (
                {
                    left: (center.left + target.left) + "px",
                    top: (center.top + target.top) + "px"
                },
                {
                    duration: 1500,
                    easing: 'linear',
                    // deletes bullets once shot 
                    complete: function(){
                        $('.gameZone').find(this).remove();
                    }
                }
            )
}

function polarToCartesian (distance, angle){
    return {
        left: distance * Math.cos (angle),
        top: distance * Math.sin (angle)
    }
}