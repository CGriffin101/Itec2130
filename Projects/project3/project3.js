$(document).ready(() => {
    document.getElementById("paraContainer")
        .innerHTML = getInnerHTML("intro-para")
    setTimeout(() => {
        alert('(Flashing Light Warning for bottom of page) Please visit Rome!');
    }, 50);

    myMove("firstAnimation");
    myMove2("secondAnimation");
    myMove3("thirdAnimation");

    rotateElem();
    growAndShrinkElem();
    invertColors();

    $("#flip-colosseum").click(function(){
        $("#panel-colosseum").slideToggle("slow");
    });

    $("#flip-pantheon").click(function(){
        $("#panel-pantheon").slideToggle("slow");
    });

    $("#flip-trevi").click(function(){
        $("#panel-trevi").slideToggle("slow");
    });

});

var id = null;
function myMove(containerId) {
    var elem = document.getElementById(containerId);
    var pos = 50;
    var marker = true;
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
        elem.style.top = 0 + 'px';
        if (pos === 75) {
            marker = true;
        } else if(pos === 25){
            marker = false;
        }
        if(marker){
            pos--;
        }else{
            pos++;
        }
        elem.style.left = pos + 'px';
    }
}

function invertColors() {
    var elem = document.getElementById("romanRave");
    id = setInterval(frame, 1000);
    var number = 0;
    function frame() {
        elem.style.filter = `invert(${number++ % 2}`
    }
}

function growAndShrinkElem(){
    var baseWidth= 10;
    var marker = true;
    var elem = document.getElementById("museumPic");
    id = setInterval(frame, 50);
    function frame(){
        if(baseWidth >= 12){
            marker = false;
        }else if(baseWidth <= 8){
            marker = true;
        }
        if(marker){
            baseWidth += 0.1;
        }else{
            baseWidth -= 0.1;
        }
        elem.style.width = baseWidth + 'em';

    }
}

function rotateElem() {
    var degrees = 0;
    id = setInterval(frame, 10);
    function frame() {
        degrees -= 5;
        document.querySelector('.box').style.transform
            = `rotate(${degrees}deg)`;
    }
}

var id2 = null;
function myMove2(containerId) {
    var elem = document.getElementById(containerId);
    var pos = 0;
    var marker = true;
    clearInterval(id2);
    id2 = setInterval(frame, 50);
    function frame() {
        elem.style.left = 50 + 'px';
        if (pos === 25) {
            marker = true;
        } else if(pos === -25){
            marker = false;
        }
        if(marker){
            pos--;
        }else{
            pos++;
        }
        elem.style.top = pos + 'px';
    }
}

var id3 = null;
function myMove3(containerId) {
    var elem = document.getElementById(containerId);
    var pos = 50;
    var marker = true;
    clearInterval(id3);
    id3 = setInterval(frame, 50);
    function frame() {
        elem.style.top = 0 + 'px';
        if (pos === 75) {
            marker = false;
        } else if(pos === 25){
            marker = true;
        }
        if(marker){
            pos++;
        }else{
            pos--;
        }
        elem.style.left = pos + 'px';
    }
}

function toggleCollapse(paraId) {
    $(`#${paraId}`).toggle(500);
}

function toggleContainerHtml(btnSelection){
    var paraContainer = document.getElementById("paraContainer");
    $('#paraContainer').toggle(500);
    setTimeout(() => {
        paraContainer.innerHTML = getInnerHTML(btnSelection);
        $('#paraContainer').toggle(500);
    },500);
}

function getInnerHTML(btnSelection){
    switch (btnSelection) {
        case 'howdy':
            return '<p>Howdy!</p>';
        case 'intro-para':
            return `<p>Rome was called the “Eternal City” by the 
                        ancient Romans because they believed that no 
                        matter what happened in the rest of the world, 
                        the city of Rome would always remain standing. 
                        Exploring the city centre by foot surrounded by
                        glorious monuments and colossal remains takes you back 
                        in time to the glory that was Rome.
                        <br>
                        <br>
                        Rome is a tourist destination of archaeological and 
                        artistic significance. Among the most significant 
                        resources are museums – (Capitoline Museums, the Vatican 
                        Museums, Galleria Borghese)—aqueducts, fountains, churches, 
                        palaces, historical buildings, the monuments and ruins of 
                        the Roman Forum, and the Catacombs. Rome is the 2nd most 
                        visited city in the EU, after Paris, and receives an average
                         of 7–10 million tourists a year, which sometimes doubles on 
                         holy years
                    </p>`;

        case 'para-2':
            return `<p>Rome has been one of the world's most 
            visited cities for the past two millennia. In Roman times, 
            Rome was the centre and the most powerful city of Western 
            Civilization, ruling all the Mediterranean, Northern Africa, 
            England, and parts of the Middle East. Afterwards, it became 
            one of the most important cities in Christianity, since the 
            pope, the head of the Roman Catholic Church, resided and still 
            lives in Rome. It became a worldwide centre of pilgrimage, and 
            later in the Renaissance, as the city became a major European 
            capital of the arts, education, philosophy, and trade, it 
            became an important crossroads for bankers, artists, and other 
            people in general.</p>
            
            <p>Later, in the 17th, 18th, and 19th centuries, the city was 
            one of the centres of the Grand Tour, when wealthy, young 
            English aristocrats visited the city to learn about ancient 
            Roman culture, art, philosophy, and architecture. Towards the 
            1840s, the first sort of mass tourism began, and Rome became 
            an extremely popular attraction for not only British people, 
            but for people from all around the world. The number of 
            tourists, however, fell dramatically towards the 1870s, when 
            Rome became a battleground for revolutionaries and one of the 
            homes of the Risorgimento, and remained like that except for a 
            brief period in the 1920s.</p>
            
            <p>However, since Rome escaped World War II relatively 
            unscathed, unlike Milan or Naples, it became an extremely 
            popular and fashionable city in the 1950s and 60s, when 
            numerous films such as Roman Holiday, Ben Hur, and more 
            famously La Dolce Vita were filmed in the city. Numerous stars, 
            actors, actresses, and celebrities, such as Federico Fellini, 
            Audrey Hepburn, Gregory Peck, and Anita Ekberg, lived or stayed 
            in Rome, especially along its Via Veneto, where most major 
            Roman hotels were and still are found.</p>
            
            <p>After a brief fall in the number of tourists in the 1980s 
            (due to some terrorist activity led by the Red Brigades and 
            political scandals), the city has now become one of the world's 
            most popular tourist attractions.</p>
            `;

        case 'para-3': return `<h3>Plane</h3>
                <ul>
                  <li>Leonardo da Vinci/Fiumicino International
                    Airport – Rome's main airport is modern and connected
                    to the center of the city by public transportation.</li>
                  <li>Ciampino International Airport – Located to the
                    southeast of the capital, this is the city's low-cost
                    airline airport, serving Easyjet, Ryanair and Wizzair
                    flights, among others. This small airport is closer to
                    the city center than Fiumicino but has no direct train
                    connection.</li>
                </ul>
                <h3>Train</h3>
                <p>Rome's main railway station is Termini Station.</p>
                <h3>Taxi</h3>
                <p>Taxis are the most expensive forms of travel in 
                Rome. Roman taxis within the city walls run on
                meters. <br><br>Rome has several taxi cooperatives:</p>
                <ul>
                <li>La Capitale</li>
                <li>Roma Sud</li>
                <li>Cosmos</li>
            </ul>`

        case 'para-4': return `
        <p>The Colosseum Archaeological Park and St. Peter's Basilica are the most popular destinations in Rome, 
        they are included in the list of most visited palaces and monuments.
        </p>
        <p>
        Other sites include the Vatican Museums, Pantheon, Victor Emmanuel II Monument, the Trevi Fountain, 
        the Spanish Steps, Via Condotti, Via Veneto, the Capitoline Museums, the Villa Borghese gardens, the Villa Giulia, 
        Piazza Navona, the Basilica di Santa Maria Maggiore, the Archbasilica of Saint John Lateran, the Piazza del Popolo, 
        the Castel Sant'Angelo, the Campo de' Fiori, the Quirinal Palace, the Lateran Palace and the Palazzo 
        Barberini, among others.</p>
        `
    }

}
