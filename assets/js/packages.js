function showPackages(fetchHolType) {
   var dest = document.getElementById("dest").value;
   var holType = document.getElementById("holType").value;
   
   if (holType == "famGet") {
       $(document).ready(function() {
    $.get('fampack.html', function(data) {
        $('#packages').html(data);
    });
});
   }else if (holType == "romRet"){
       $(document).ready(function() {
    $.get('rompack.html', function(data) {
        $('#packages').html(data);
    });
});
   }
   else if (holType == "friEsc"){
       $(document).ready(function() {
    $.get('escapePack.html', function(data) {
        $('#packages').html(data);
    });
});
   }
   
}

/*function fetchorigin() {
     var origin = document.getElementById("origin").value;
     console.log(origin);
     }

function fetchdest() {
     var dest = document.getElementById("dest").value;
     console.log(dest);
     }

function fetchtype() {
     var type = document.getElementById("type").value;
     console.log(type);
     }

/*$(document).ready(function() {
    $.get('rompack.html', function(data) {
        $('#romantic-packages').html(data);
    });
});


if(dest ="paris"){
   $(document).ready(function() {
    $.get('rompack.html', function(data) {
        $('#romantic-packages').html(data);
    });
});
} else if (dest ="berlin"){
    $(document).ready(function() {
    $.get('fampack.html', function(data) {
        $('#family-packages').html(data);
    });
});
}
$('#romantic-packages').html('Value = ' + selectedHolType.val() + ", Text = " + selectedHolType.text());


    $(document).ready(function() {
        $('#holType').change(function() {
            var selectedHolType = $('#holType option:selected');
            $('#romantic-packages').html('Value = ' + selectedHolType.val() + ", Text = " + selectedHolType.text());;

        });
    });

function fethdest() {
     var dest = document.getElementById("dest").value;
     return dest;
     }

function fetchHolType() {
     var holType = document.getElementById("holType").value;
     return holType;
     }
*/