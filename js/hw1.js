
function hw1submit(name){
    let NameToEmail = checkNameToEmail();
    let MailingToGender = checkMailingToGender();
    let result = NameToEmail + MailingToGender;
    if (name == "table"){
        alert(result);
        setTimeout(function(){window.location.reload();},30000);
    } else {
        return result;
    }
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
    let word = '을';
    if (i < 2){
        word = '를';
    }
    return word;
}

function checkMailingToGender(){
    let mailValue = checkMailSmsGender('mail'); 
    let smsValue = checkMailSmsGender('sms'); 
    let phoneNum = getPhoneNum();
    let joinPath = getJoinPath();
    let hobby = getCheckboxValue();
    let gender = checkMailSmsGender('gender');

    let result = mailValue + smsValue +phoneNum + joinPath + hobby + gender;
    return result;
}

function checkMailSmsGender(name){
    let result = '';
    let message = '';
    let byname;
    
    if (name == 'mail'){
        byname = "email_send";
        message = "이메일 수신"        
    } else if (name=='sms'){
        byname = "sms_send";
        message = "SMS 수신";
    } else {
        byname = "gender";
        message ="성별"
    }

    let Nodelist = document.getElementsByName(byname);
    Nodelist.forEach((node) => {
        if(node.checked) {
            result += message + " : " + node.value +'\n';
        } else result += '';
    })
    if (result.length == 0)
        result += message +"에 체크해주세요. \n"
    
    return result;
}

function getPhoneNum(){
    let result = '';
    let start = document.getElementById('phone_front');
    let startNum = start.options[start.selectedIndex].value;
    let midNum = document.getElementById('phone_mid').value;
    let lastNum = document.getElementById('phone_end').value;
    
    if (!midNum | !lastNum | isNaN(midNum)| isNaN(lastNum)|(startNum == '010' && midNum.length < 4)| (midNum.length < 3) | (lastNum.length < 4)){
        result += "연락처를 입력해주세요. \n";   
    } else result += "연락처 : " + startNum + "-" + midNum + "-" + lastNum +'\n';
    
    
    return result;
}

function getJoinPath(){
    let path = document.getElementById('come_path');
    let pathValue = path.options[path.selectedIndex].value;
    
    if (pathValue == 'none'){
        return "가입경로를 선택해주세요. \n";
    }
    return "가입경로 : " + pathValue + "\n";
}

function getCheckboxValue() {
    // 선택된 목록 가져오기
    const query = 'input[name="hobby"]:checked';
    const selectedEls = 
        document.querySelectorAll(query);
    
    // 선택된 목록에서 value 찾기
    let result;
    let select = ''
    selectedEls.forEach((check) => {
        select += check.value + ' ';
    });
    
    if(select.length == 0){
        result = "취미를 선택해주세요.\n";
    } else { 
        result = "취미 : " + select + "\n";
    }

    return result;
}

function divsubmit(){
    let result = hw1submit();
    let result_box= document.getElementById('result_box');
    let content= document.getElementById('result');
    result_box.style="display:block";
    content.innerText = result;

    setTimeout(function(){window.location.reload();},3000);
}