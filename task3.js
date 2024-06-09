
    
    function font_Family() {
        var x = document.getElementById("mySelect").value;
        if (x === "Arial") {
            document.getElementById("demo").style.fontFamily="Arial";
        }
        else if (x === "Verdana") {
            document.getElementById("demo").style.fontFamily= "Verdana";
        }
        else if (x === "fantasy") {
            document.getElementById("demo").style.fontFamily= "fantasy";
        }
        else if (x === "Times New Roman") {
            document.getElementById("demo").style.fontFamily = "Times New Roman";
        }
    }
    
    
    function font_Size()
    {
        var x = document.getElementById("mySelect2").value;
        if (x === "5px") {
            document.getElementById("demo").style.fontSize="5px";
        }
        else if (x === "10px") {
            document.getElementById("demo").style.fontSize="10px";
        }
        else if (x === "15px") {
            document.getElementById("demo").style.fontSize="15px";
        }
        else if (x === "20px") {
            document.getElementById("demo").style.fontSize="20px";
        }
        else if (x === "25px") {
            document.getElementById("demo").style.fontSize="25px";
        }
    }
    
    
    function Italic() {
            var isChecked = document.getElementById("Italic").checked;
            if (isChecked) {
                document.getElementById("demo").style.fontStyle = "italic";
            } else {
                document.getElementById("demo").style.fontStyle = "normal";
            }
        }
    
    
        function Bold() {
            var isChecked = document.getElementById("Bold").checked;
            if (isChecked) {
                document.getElementById("demo").style.fontWeight = "Bold";
            } else {
                document.getElementById("demo").style.fontWeight = "normal";
            }
        }
    
        function Underline() {
            var isChecked = document.getElementById("Underline").checked;
            if (isChecked) {
                document.getElementById("demo").style.textDecoration = "Underline";
            } 
            else {
                document.getElementById("demo").style.textDecoration = "none";
            }
        }
    