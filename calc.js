        function off()
        {

            //number button//


            document.getElementById('n1').disabled=true;
            document.getElementById('n2').disabled=true;
            document.getElementById('ans').disabled=true;


            // number button //


            document.getElementById('1').disabled=true;
            document.getElementById('2').disabled=true;
            document.getElementById('3').disabled=true;
            document.getElementById('4').disabled=true;
            document.getElementById('5').disabled=true;
            document.getElementById('6').disabled=true;
            document.getElementById('7').disabled=true;
            document.getElementById('8').disabled=true;
            document.getElementById('9').disabled=true;

            //operator button//

            document.getElementById('+').disabled=true;
            document.getElementById('-').disabled=true;
            document.getElementById('*').disabled=true;
            document.getElementById('/').disabled=true;
            document.getElementById('%').disabled=true;

            // off button //

            document.getElementById('off').disabled=true;
        }
        function on()
        {
             //number button//


             document.getElementById('n1').disabled=false;
            document.getElementById('n2').disabled=false;
            document.getElementById('ans').disabled=false;


            // number button //


            document.getElementById('1').disabled=false;
            document.getElementById('2').disabled=false;
            document.getElementById('3').disabled=false;
            document.getElementById('4').disabled=false;
            document.getElementById('5').disabled=false;
            document.getElementById('6').disabled=false;
            document.getElementById('7').disabled=false;
            document.getElementById('8').disabled=false;
            document.getElementById('9').disabled=false;

            //operator button//

            document.getElementById('+').disabled=false;
            document.getElementById('-').disabled=false;
            document.getElementById('*').disabled=false;
            document.getElementById('/').disabled=false;
            document.getElementById('%').disabled=false;

            // off button //

            document.getElementById('off').disabled=false;
        }
        function onee()
        {
            document.getElementById('n1').value=1;
        }