export const checkEmailValidation = (userInput) => {
    const emailCheckRegex = /\S+@uos+\.ac+\.kr/
    return (userInput && emailCheckRegex.test(userInput))
}
    
export const checkStudentIDValidation = (userInput) => {
    const StudentIDCheckRegex = /\d{4}\92\d{4}/
    return (userInput && StudentIDCheckRegex.test(userInput))
}

export const checkPasswordValidation = (passwordInput) => {
    const passwordCheckRegex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,}$/
    return (passwordInput && passwordCheckRegex.test(passwordInput))
}