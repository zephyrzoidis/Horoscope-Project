

    var sign = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "DATE IS INVALID"];

    var horoscopeSentence = ["Embrace your inner Sea Goat, it will lead you to the promise land",
        "Your rebellious and unique nature will hurt and help you",
        "Kidness and compassion will result in your peers viewing you as likeable and easygoing",
        "Your year will be filled with highs and lows and your courage will yield success at times, but this bold nature will result in failure just as much",
        "Despite your recent struggles, you will lead a luxurious lifestyle due to the use of logic.",
        "Reassess your busy schedule, it will hold you back",
        "You will manifest your inner crustacean",
        "You will embrace your fiery spirit in the future and unleash it",
        "Practicality will eventually triumph even if things aren’t working out now. Maintain a similar approach",
        "Your balance and symmetry in your life will quickly shift out of balance due to over confidence",
        "Because this is the best sign, good fortune will come to you in the near future and never go away",
        "The constant quest for knowledge you embark on will get you something that is irreplaceable",", please Re-enter a valid date" ];


    var images = ["images/capricorn.jpeg","images/aquarius.jpeg","images/pisces.jpeg","images/aries.jpeg","images/taurus.jpeg","images/gemini.jpeg","images/cancer.jpeg","images/leo.jpeg","images/virgo.jpeg","images/libra.jpeg","images/scorpio.jpeg","images/sagittarius.jpeg"];


    function findSign(month, day) {
        var horoscope = 0;
        if(month == 1 && day >= 29){
            return 12;
        }
        if(month == 3 && day >= 30){
            return 12;
        }
        if(month == 5 && day >= 30){
            return 12;
        }
        if(month == 8 && day >= 30){
            return 12;
        }
        if(month == 10 && day >= 30){
            return 12;
        }
        if(month == 0){
            if(day <= 19 ){
                horoscope = 0;
            }

            if(day >= 20){
                horoscope = 1;
            }

        }
        if(month == 1){
            if(day <= 18){
                horoscope = 1;
            }

            if(day >= 19 && day <= 29){
                horoscope = 2;
            }
        }

        if(month == 2){
            if(day <= 20 ){
                horoscope = 2;
            }

            if(day >= 21){
                horoscope = 3;
            }

        }

        if(month == 3){
            if(day <= 19){
                horoscope = 3;
            }

            if(day >= 20 && day <= 30){
                horoscope = 4;
            }

        }
        if(month == 4){
            if(day <= 20){
                horoscope = 4;
            }

            if(day >=21){
                horoscope = 5;
            }


        }
        if(month == 5){
            if(day <= 20 ){
                horoscope = 5;
            }

            if(day >= 21 && day <= 30){
                horoscope = 6;
            }


        }
        if(month == 6){
            if(day <= 22 ){
                horoscope = 6;
            }

            if(day >= 23){
                horoscope = 7;
            }


        }
        if(month == 7){
            if(day <= 22){
                horoscope = 7;
            }

            if(day >= 23){
                horoscope = 8;
            }

        }
        if(month == 8){
            if(day <= 22){
                horoscope = 8;
            }

            if(day >= 23 && day <= 30){
                horoscope = 9;
            }
        }

        if(month == 9){
            if(day <= 22 ){
                horoscope = 9;
            }

            if(day >= 23){
                horoscope = 10;
            }
        }

        if(month == 10){
            if(day <= 21){
                horoscope = 10;
            }

            if(day >= 22 && day <= 30){
                horoscope = 11;
            }
        }

        if(month == 11){
            if(day <= 21 ){
                horoscope = 11;
            }

            if(day >= 22){
                horoscope = 0;
            }
        }
        return horoscope;
    }

    function isBirthday(month, day){
        var bday = "";
        var currentDate = new Date();
        var currentMonth = currentDate.getMonth();
        var currentDay = currentDate.getDate();
        if(day == currentDay && month == currentMonth){
            bday = "Happy Birthday! ";
        }
        return bday;
    }


    function start(){
        var month = document.getElementById("month").value;
        var day = document.getElementById("day").value;
        var username = document.getElementById("username").value;
        var getSign = findSign(month, day);
        var birthday = isBirthday(month, day)
        document.getElementById("sign").innerHTML = "Hello, " + username + ". Your sign is: " + sign[getSign] + ".";
        document.getElementById('image').src = images[getSign];
        if(username.length >= 1){
            document.getElementById('message').innerHTML = birthday + username + ", " + horoscopeSentence[getSign];
        }else{
            document.getElementById("message").innerHTML = horoscopeSentence[getSign];
        }
    }