
(
  function () {
    var Question = function (question , answers , correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function () {
      console.log(this.question);
    
      for ( var i = 0 ; i < this.answers.length ; i++) {
        console.log ( i + ':' + this.answers[i])
      }
    }
    
    Question.prototype.checkAnswer = function (ans , callback) {
      var sc;
      if ( ans === this.correct ) {
        console.log ( 'せいかいです' );
        sc = callback (true);
      } else {
        console.log ( 'まちがいです' );
        sc = callback (false);
      }
    }
    
    var q1 = new Question ('一番ビタミンの多い果物はレモンですか？' , ['Yes' , 'No'] , 1
    )
    
    var q2 = new Question ('面黒いという言葉は存在する？' , ['Yes' , 'No'] , 0
    )
    
    var q3 = new Question ('パンダの尻尾の色は？' , ['白' , '黒'] , 0
    )

    function score () {
      var sc = 0;
      return function (correct) {
        if (correct) {
          sc++;
        }
        return score;
      }
    }

    var keepScore = score();

    
    function nextQuestion () {
      var questions =[q1 , q2 , q3];
      var n = Math.floor (Math.random() * questions.length);
      
      questions[n].displayQuestion();
      
      var answer = prompt ( '答えを入力してください');
      
      if ( answer !== 'おわる' ) {
        questions[n].checkAnswer(parseInt ( answer ) , keepScore);
        nextQuestion();
      }
    }

  nextQuestion();


  }
) ();
