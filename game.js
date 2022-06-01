player_1_name=localStorage.getItem("player1");
player_2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player_1_name").innerHTML=player_1_name+" : ";
document.getElementById("player_2_name").innerHTML=player_2_name+" : ";

document.getElementById("player_1_score").innerHTML=player1_score;
document.getElementById("player_2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn : "+ player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn : "+ player_2_name;

function send() {
    number1=document.getElementById("input1").value;
    number2=document.getElementById("input2").value;
    answer=parseInt(number1)*parseInt(number2);
}
question = "<h4 id='h4'>Q."+answer+"</h4>";
input="<br>Answer:<input type='text' id='input_checks'>";
button="<button class='btn btn-success' onclick='check()'>Check</button>";
row=question+ input+ button;
document.getElementById("kg").innerHTML=row;




question_turn="player1";
answer_turn="player2";
function check() {
    get_answer=document.getElementById("input_checks").value;
    console.log("Answer="+get_answer);
    if(get_answer ==answer) {
        if(answer_turn=="player2") {
            player2_score=player2_score+1;
            document.getElementById("player_2_score").innerHTML=player2_score;
        }
    
        else{
            player1_score=player1_score+1;
            document.getElementById("player_1_score").innerHTML=player1_score;

        }
    }
        if(question_turn== "player1") {
            question_turn="player2";
            document.getElementById("player_question").innerHTML="Question Turn:"+player_2_name;
        }
        else{
            question_turn="player1"
            document.getElementById("player_question").innerHTML="Question Turn:"+player_1_name;
        

        }
        if(answer_turn=="player1") {
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML="Answer Turn:"+player_2_name;
        }
        else{
            answer_turn="player1";
            document.getElementById("player_answer").innerHTML="Answer Turn:"+player_1_name;
        }
        }
        
    
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";