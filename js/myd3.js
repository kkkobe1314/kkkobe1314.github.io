    
    var cx=100;
    var cy=30;
    var c1=d3.select('svg').append('circle');
    c1.attr('cx',cx-50).attr('cy',cy).attr('r',20).attr('stroke','black').attr('stroke-width',3).attr('fill','black');
    var c2=d3.select('svg').append('circle');
    c2.attr('cx',cx+50).attr('cy',cy).attr('r',20).attr('stroke','black').attr('stroke-width',3).attr('fill','black');
    var c4=d3.select('svg').append('circle');
    c4.attr('cx',cx).attr('cy',cy+140).attr('r',50).attr('stroke','black').attr('stroke-width',3).attr('fill','black');
    var c3=d3.select('svg').append('circle');
    c3.attr('cx',cx).attr('cy',cy+40).attr('r',60).attr('stroke','black').attr('stroke-width',3).attr('fill','white');
    var c5=d3.select('svg').append('circle');
    c5.attr('cx',cx).attr('cy',cy+134).attr('r',35).attr('stroke','black').attr('stroke-width',3).attr('fill','white');
    var c6=d3.select('svg').append('circle');
    c6.attr('cx',cx-60).attr('cy',cy+120).attr('r',20).attr('stroke','black').attr('stroke-width',3).attr('fill','black');
    var c7=d3.select('svg').append('circle');
    c7.attr('cx',cx+60).attr('cy',cy+120).attr('r',20).attr('stroke','black').attr('stroke-width',3).attr('fill','black');
    var c8=d3.select('svg').append('circle');
    c8.attr('cx',cx+50).attr('cy',cy+190).attr('r',24).attr('stroke','black').attr('stroke-width',3).attr('fill','black');
    var c9=d3.select('svg').append('circle');
    c9.attr('cx',cx-50).attr('cy',cy+190).attr('r',24).attr('stroke','black').attr('stroke-width',3).attr('fill','black');
    var c10=d3.select('svg').append('circle');
    c10.attr('cx',cx).attr('cy',cy+55).attr('r',10).attr('stroke','black').attr('stroke-width',3).attr('fill','black');
     //<ellipse cx="360" cy="400" rx="240" ry="40" style="fill:purple" />
    var c11=d3.select('svg').append('ellipse');
    c11.attr('cx',cx-35).attr('cy',cy+42).attr('rx',13).attr('ry',20).attr('stroke','black').attr('stroke-width',15).attr('fill','white');
    var c12=d3.select('svg').append('ellipse');
    c12.attr('cx',cx+35).attr('cy',cy+42).attr('rx',13).attr('ry',20).attr('stroke','black').attr('stroke-width',15).attr('fill','white');
    //var c13=d3.select('svg').append('ellipse');
    //c11.attr('cx',267).attr('cy',242).attr('rx',10).attr('ry',14).attr('stroke','black').attr('stroke-width',1).attr('fill','white');
    var drag = d3.behavior.drag()  
            .on('dragstart', function() { 
              
            })
            .on('drag', function() { 
              svg.style({
                'left':(d3.event.x-25)+'px',
                'top':(d3.event.y-25)+'px',
                'background':'yellow'
              }); 
            })
            .on('dragend', function() { 
              
            });

var svg = d3.select('#B')
            .call(drag);
    //function xiong(){
       // $(Document).ready(function(){
       /* $("button").click(function(){
              $("svg").animate({top:'+=300px'});
               $("svg").animate({top:'-=300px'});
                $("svg").animate({right:'+=200px'});
               $("svg").animate({right:'-=200px'});
               $("svg").animate({left:'+=200px'});
               
               $("svg").animate({left:'-=200px'});
               
        });*/
   // });
//}
    /*function shunyong(){
    $(Document).ready(function(){
        $("button").click(function(){
            $("svg").animate({left:'200px'});
        });
    });
    }*/
    

   





