
function submit(){
    let result = checkNameToEmail();
    alert(result);
}
function checkNameToEmail() {
    const inputValue = ['userid', 'password', 'checkPw', 'username', 'nickname', 'email', 'domain'];
    const valueName = ['아이디', '패스워드', '패스워드 확인', '이름', '닉네임', '이메일', '도메인'];
    let result = '';
    let check_mail = 0;
    let mail_id = '';
    for (i = 0; i < inputValue.length; i++) {
        let inputs = document.getElementById(inputValue[i]);
        inputs = inputs.value.replace(/(\s*)/g, "");

        if (i === 5) { //이메일, 도메인들어왔을때
            if (inputs.length === 0) {
                check_mail++;
                if (check_mail > 0) {
                    i = 7;
                    result += "이메일을 형식에 맞게 입력해주세요 \n";
                }
            } else {
                mail_id = inputs + "@";
            }
        } else if (i === 6) {
            if (inputs.length == 0) {
                mail_id = '';
                result += "이메일을 형식에 맞게 입력해주세요 \n";
            } else {
                const emailRegExp = /.com|.net|.co.kr|.kr|.or.kr/;
                let checkDomain = emailRegExp.test(inputs);
                if (checkDomain) {
                    result += "이메일주소 : " + mail_id + inputs + '\n';
                } else result += "이메일을 형식에 맞게 입력해주세요 \n";
            }
        } else {
            if (inputs.length == 0) {
                result += (valueName[i] + " : " + valueName[i] + word(i) + " 입력해주세요." + "\n");
            } else result += (valueName[i] + " : " + inputs + '\n');
        }
    }
    return result;
}

function word(i){
    const indexNum = [0, 1, 9, 10, 11];
    let word = '을';
    if (indexNum.includes(i)){
        word = '를';
    }
    return word;
}

function checkMailingToPic(){
    let result = checkMailing();
    alert(result);
}

function checkMailing(){
    const mailNodelist = document.getElementsByName("email_send");
    let result = '';

    mailNodelist.forEach((node) => {
        if(node.checked) {
            result += "이메일수신 : " + node.value;
        } else result += '';
    })
    if (result.length == 0)
        result += "이메일 수신에 체크해주세요."
    return result;
}
