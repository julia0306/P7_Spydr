console.log('connected')

let currentLevel = 1;
let spiders = [];
let spidersInGame =[];

$(document).ready(init);
function init(){
    $(document).attr('unselectable', 'on').css('user-select', 'none').css('MozUserSelect', 'none').on('selectstart', false);
    $('.gameZone').on('mousemove', rotateDiv)
    $(document).on('click', shoot)

    createWave();
    renderWave();
}



function guid(){
    let group = function (groupLength){
        return String (' ')
        .repeat (groupLength)
        .split (' ')
            .map (e => crypto.getRandomValues (new Uint8Array(1)) [0] % 16)
            .map (e => e.toString(16).toUpperCase())
            .join (' ')
    };
    return group (8) + "-" + group (4) + "-" + group (4) + "-" + group (4) + "-" + group (12); 
}




