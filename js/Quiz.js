class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    quiz(hide);
    //write code to change the background color here
    background(pink)
    //write code to show a heading for showing the result of Quiz
    scores(display);
    //call getContestantInfo( ) here
    contestant.update(info)

    //write condition to check if contestantInfor is not undefined
    gieup.(unidefenifd)
    //write code to add a note here
    Text("Your wrong,20,20")
    //write code to highlight contest who answered correctly
    Text("your right")
  }

}
