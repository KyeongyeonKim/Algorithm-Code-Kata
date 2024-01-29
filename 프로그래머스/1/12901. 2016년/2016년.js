function solution(a, b) {
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let date = new Date(`2016-${a}-${b}`);
    // getDay() : 날짜의 요일을 받아오는 함수로 일요일부터 토요일까지 0부터 6을 반환
    let day = date.getDay();
    return week[day];
}