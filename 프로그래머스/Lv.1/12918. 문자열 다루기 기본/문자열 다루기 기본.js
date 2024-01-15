function solution(s) {
    // 문자열의 길이가 4 || 6
    // 문자열이 숫자로만 구성되어 있는지
    return s.replace(/\d/g,'').length === 0 && (s.length === 4 || s.length === 6)
    
}