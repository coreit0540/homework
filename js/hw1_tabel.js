
function submit(){
    const inputValue = ['userid', 'password', 'checkPw', 'username', 'nickname', 'email','domain'];
    const valueName = ['아이디', '패스워드', '패스워드 확인', '이름', '닉네임', '이메일', '도메인'];
    let result = '';
    for (i=0; i<inputValue.length; i++){
        let inputs = document.getElementById(inputValue[i]);
        inputs = inputs.value.replace(/(\s*)/g, "");

        if (i == 5 || i == 6){ //이메일, 도메인들어왔을때
            if(inputs.length == 0 )
                result += input
            continue;
        }


        if (inputs.length == 0) {
            result += (valueName[i] + " : " + valueName[i] + word(i) +" 입력해주세요." +"\n");
        }
        else result += (valueName[i] + " : " + inputs + '\n');   
        
        //도메인... 이거 이메일이랑 어떻게 합쳐서 결과를 내보자! 
        // const emailRegExp = /.com|.net/;
        // let checkDomain = emailRegExp.test(inputValue[i]);
        // if (checkDomain){
        //     result += (valueName[i] + " : " + inputs + '\n'); 
        // } else result += (valueName[i] + " : " + valueName[i] + word(i) +" 바르게 입력해주세요." +"\n");
    }
   
   
    // alert(emailRegExp.test(domain));
    alert(result);
}

function word(i){
    const indexNum = [0, 1, 9, 10, 11];
    let word = '을';
    if (indexNum.includes(i)){
        word = '를';
    }
    return word;
}