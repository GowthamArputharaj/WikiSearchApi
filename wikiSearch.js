
var ob;
const Http = new XMLHttpRequest();
var n = 10;
var q = 'Gowtham'
main(n , q);

function main(nor, qry) {
    console.log(nor, qry)
    var nor;
    var qry;
    this.nor = nor
    this.qry = qry
    // const url='https://jsonplaceholder.typicode.com/posts';
    const url='https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit='+this.nor+'&srsearch='+this.qry+'&format=json';
    Http.open("GET", url);
    Http.send();
    console.log(url)

    Http.onload = (e) => {
    // console.log(Http.response)
    ar = Http.responseText
    var s = ar
    // console.log(Http.responseText, e)

    var source = JSON.parse(Http.responseText)

    var ele = document.getElementsByTagName('td')
    console.log(source,'sourCe')

    parseit(source)
    }
}


function parseit(resp) {
    console.log('inside parseit')
    resp.query.search.forEach(v => console.log(v))
    var len = resp.query.search.length
    for(let i = 0; i< len; i++) {
        var ch = resp.query.search[i]['title'];
        var c = ch.replace(/\s/g, '_')
        var ch = "<a href='https://en.wikipedia.org/wiki/"+c+"' target='_blank'>"
        var el = "<div class='jumbotron'><h2>"+ch+resp.query.search[i]['title']+"</a></h2><h6>"+resp.query.search[i]['timestamp']+"</h6> <br><p>"+resp.query.search[i]['snippet']+"</p></div>"
        $( el ).appendTo( ".jumbo" );
        
    }
}

$(document).on('click', '#toggle', function(){
    if($('header').hasClass('d-none')) {
        console.log('header toggle')
        $('header').removeClass('d-none')
        $('header').addClass('hea')

        console.log('hea toggle')
        $('footer').removeClass('foo')
        $('footer').addClass('d-none')
        
    } else if($('footer').hasClass('d-none')) {
        console.log('footer toggle')
        $('footer').addClass('foo')
        $('footer').removeClass('d-none')
        
        console.log('foo toggle')
        $('header').removeClass('hea')
        $('header').addClass('d-none')

    } 
});

function initiatorh() {
    $('.jumbotron').remove();
    $('.jumbotron').empty();
    var q = $("input[name=queryh]").val();
    var n = $("input[name=numberh]").val();
    if(n == '' && q == '') {
        console.log('both not')
        main(10, 'Bharat')
    } else if(q == '') {
        console.log('q not')
        main(n, 'Bharat')
    } else if(n == '') {
        console.log('n not')
        main(10, q)
    } else {
        console.log('both are present')
        main(n, q)
    }
    console.log('text okay', n, q)
}

function initiatorf() {
    $('.jumbotron').remove();
    $('.jumbotron').empty();
    var q = $("input[name=queryf]").val();
    var n = $("input[name=numberf]").val();
    if(n == '' && q == '') {
        console.log('both not')
        main(10, 'Bharat')
    } else if(q == '') {
        console.log('q not')
        main(n, 'Bharat')
    } else if(n == '') {
        console.log('n not')
        main(10, q)
    } else {
        console.log('both are present')
        main(n, q)
    }
    console.log('text okay', n, q)
}

$(document).on('click', '#searchh', function(){
    initiatorh();
});

$(document).on('click', '#searchf', function(){
    initiatorf();
});

$(document).on('keydown', '.qh', function(e){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
        $('#searchh').click();
    }
});

$(document).on('keydown', '.qf', function(e){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
        $('#searchf').click();
    }
});

