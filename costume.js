var styles = [
'styles/default.css',
   'styles/crate.css',
   'styles/cowboy.css',
   'styles/pirate.css',
   'styles/game.css',
    'styles/horror.css',
    'styles/future.css',
    'styles/jellyfish.css',
    'styles/denim.css',
    'styles/egypt.css',
    'styles/iceage.css',
    'styles/lostcity.css',
    'styles/medieval.css',
    'styles/bigwavebeach.css',
    'styles/cloudy.css',
    'styles/nightsky.css',
    
]

function chooseLook(){
    var costumeNum = Math.floor(Math.random() * (styles.length));
    var newCostume = styles[costumeNum];
    document.getElementsByTagName("link")[0].setAttribute("href", newCostume);
}