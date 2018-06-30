// // 1. comp picks rpc , user picsk rps
// // 2. decides who wins
// //     random#gen for computer
// //     keydown event
// //     -more step
// // 3. record winner
// // 4. end game if player won 5


// var decision;
// var cwins = 0;
// var pwins = 0;
// var game = 0;
// var userPick;
// var compPick;
// var message;
// var player = prompt ("Player 1 - Name:")

// //computer logic
// function logic() {
//     if (compPick === 1) {
//         compPick = "ROCK"
//     }   
//     else if (compPick === 2) {
//         compPick = "PAPER"
//     }
//     else {
//         compPick = "SCISSOR"
//     }
// }

// // Start of the loop - play till someone has 5 wins

    

// while (pwins < 3 && cwins < 3) {
//     userPick = prompt("Choose Rock, Paper, Scissor");
//     compPick = Math.floor(Math.random() * 3) +1;
//     logic();
    
//     // 1st Scenario - tie, end loop else go foward
//     if(userPick.toUpperCase()===compPick){
//         decision = "<b>TIE</b>";
       
//     }
//     else { 
//         // 2nd Scenario - player picks paper only two possible comp pick - rock (W) or scissors (L)
//         if(userPick.toUpperCase()==="PAPER"){
//             if(compPick==="ROCK"){
//                 decision = "<b>WIN</b>";
//                 pwins += 1;
//             }
//             else{
//                 decision = "<b>LOSE</b>";
//                 cwins += 1; 
//             }
//         }
//         // player picks scissors - comp pick - paper (W) or rock (L)
//         if(userPick.toUpperCase()==="SCISSOR"){
//             if(compPick==="PAPER"){
//                 decision = "<b>WIN</b>";
//                 pwins += 1;
//             }
//             else{
//                 decision = "<b>LOSE</b>";
//                 cwins += 1; 
//             }
//         }
//          // player picks rock - comp pick - scissor (W) or paper (L)
//         if(userPick.toUpperCase()==="ROCK"){
//             if(compPick==="SCISSOR"){
//                 decision = "<b>WIN</b>";
//                 pwins += 1;  
//             }
//             else{
//                 decision = "<b>LOSE</b>";
//                 cwins += 1; 
//             }
//         }
//     }
//     // +1 to game counter, display missage of results 
//     game += 1;
//     message = (userPick.toUpperCase() + " vs " + compPick + "                " + decision + "<br>");
//     document.write(message);
// }


// document.write ("<br> <br>After " + game + " games, The score is <br>" + player + ": " + pwins + " <br>Computer: " + cwins + "<br>");

// if (pwins > cwins) {
//     document.write ("<b>YOU WON!<b>")
// } else {
//     document.write ("<b>YOU LOSE!</b>")
// }

