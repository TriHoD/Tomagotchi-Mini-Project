const pets = [
    'https://media.giphy.com/media/FasLs2XEO5G2A/giphy.gif',
    'https://data.whicdn.com/images/286687755/original.gif',
    'https://data.whicdn.com/images/169940006/original.gif',
    'https://66.media.tumblr.com/f39b52142b4a740527257ee21b094fbc/tumblr_papijx9XR91sznvawo2_250.gif',
    'https://media.giphy.com/media/xmTLS69PcP9fO/giphy.gif',
    'https://data.whicdn.com/images/261892449/original.gif',
    'https://media.giphy.com/media/SUC5tHFdu1TtC/200w.gif',
    'https://media1.giphy.com/media/fkOJ4fcBkvz1e/giphy.gif',
    'https://media.giphy.com/media/bJZZRVg6gAU6c/giphy.gif',
    'https://thumbs.gfycat.com/AccurateTidyIberianemeraldlizard-size_restricted.gif',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d02b215-7ba2-4a4c-a882-39f19faf9b8e/dai55ys-daf279f1-8bfd-4940-9559-eea18396742b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlkMDJiMjE1LTdiYTItNGE0Yy1hODgyLTM5ZjE5ZmFmOWI4ZVwvZGFpNTV5cy1kYWYyNzlmMS04YmZkLTQ5NDAtOTU1OS1lZWExODM5Njc0MmIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lqfJxZlM6h9BnyFRbK0f-mPmMId0_eXo6XX-tXvU2EA',
    'https://media.giphy.com/media/Vu6r16a3KxLKE/200.gif'

];
let imgPet;
const changePet = (arr) => {
    let num = Math.floor(Math.random() * (pets.length + 1));
    return imgPet = pets[num];
} 


// Tamagotchi Object

class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.foodLevel = 100;
        this.sleepLevel = 100;
        this.playLevel = 100;
        this.age = 0;
    }
    ageGrown() {
        setInterval(() => {
        this.age += 10;
        }, 1000)
    }
    hungerDrain() {
        setInterval(() => {
            this.foodLevel -= 2;
        }, 500)
    }
    sleepDrain() {
        setInterval(() => {
            this.sleepLevel -= 2;
        }, 500)
    }
    playDrain() {
        setInterval(() => {
            this.playLevel -= 2;
        }, 500)
    }
    evol() {
        // setInterval(() => {
            if (this.age >= 50) {
                this.age -= 50;
                // const oldImg ='https://media.giphy.com/media/SUC5tHFdu1TtC/200w.gif'
                // const newImg = 'https://media1.giphy.com/media/fkOJ4fcBkvz1e/giphy.gif'
                // $('img[src="' + oldImg + '"]').attr('src', newImg);
                changePet(pets);
                $('#petpet').attr('src', imgPet);
                
            }
        // }, 5000)
    }
    feedFood() {
        this.foodLevel += 10;
    }
    sleep() {
        this.sleepLevel += 10;
    }
    play() {
        this.playLevel += 10;
    }

    isDead() {
        if (this.foodLevel <= 0 || this.sleepLevel <= 0 || this.playLevel <= 0) {
            return true;
        }
        else {
            return false;
        }
    }
}


 
// DOM

$('#dead').hide();
$('#stats').hide();

$(document).ready(function(){
    $("#name").submit(function(event){
      event.preventDefault();
        $('#stats').show();
        $('#info').hide();
        $('.intro').hide();
        $('#increaseH').hide();
        $('#increaseP').hide();
        $('#increaseS').hide();
        $('#petpet').attr('src','https://i.imgur.com/ymP27Mr.gif');
      let name = $("#enterName").val();
      let newTamagotchi = new Tamagotchi(name);
      $(".nameDisplay").text(newTamagotchi.name);
      $('#age').text(newTamagotchi.age);
      $("#hungerLevel").text(newTamagotchi.foodLevel);
      $("#sleepLevel").text(newTamagotchi.sleepLevel);
      $("#playLevel").text(newTamagotchi.playLevel);

      newTamagotchi.ageGrown();
      newTamagotchi.hungerDrain();
      newTamagotchi.sleepDrain();
      newTamagotchi.playDrain();
      newTamagotchi.evol();
      
  
      let drain = setInterval(function() {
        $('#age').text(newTamagotchi.age);
        $("#hungerLevel").text(newTamagotchi.foodLevel);
        $("#playLevel").text(newTamagotchi.playLevel);
        $("#sleepLevel").text(newTamagotchi.sleepLevel);
        const deleteProgress = () => {
            $('#hungerBar').val(newTamagotchi.foodLevel)
            $('#playBar').val(newTamagotchi.playLevel)
            $('#sleepBar').val(newTamagotchi.sleepLevel)
        }

        deleteProgress()
        const increaseAge = () => {
            $('#increasingAge').val(newTamagotchi.age)
        }
        increaseAge();
        if(newTamagotchi.isDead()) {
          $("#dead").show();
          $("#stats").hide();
          clearInterval(drain);
        }
      }, 1000)

        // let age = $('#age').val();
        // $('#transfom').on($(age >= 50), function () {
        //     $('#transfom').css('visibility', 'visible');
        // });
        // $(selector).on(events, function () {
            
        // });

    //     const visibleButton = () => {
    //         let age = $('#age').val();
    //         if (age % 50 == 0) {
    //             $('#transfom').css('visibility', 'visible');
    //         }
    //     }
    //    let ran = setin visibleButton()


        $('#transfom').click(function() {
            newTamagotchi.evol();
        })
        $('#eat').click(function() {
            newTamagotchi.feedFood();
            $('#increaseH').show().delay(500).fadeOut()
        })
        $('#play').click(function() {
            newTamagotchi.play();
            $('#increaseP').show().delay(500).fadeOut()
        })
        $('#sleep').click(function() {
            newTamagotchi.sleep();
            $('#increaseS').show().delay(500).fadeOut()
        })

      $("#reset").click(function(){
        document.location.reload();
        // $("#dead").hide();
        // $("#info").show();
      })
  
    //   $("#food-bar").click
  
    });
  
  });
//   style="width: 60%; height: 20%"
