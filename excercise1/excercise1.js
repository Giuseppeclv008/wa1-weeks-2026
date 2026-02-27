import dayjs from 'dayjs';

console.log(dayjs())

function Answer(text, userId, date, score = 0){
    this.text = text ;
    this.userId = userId ;
    this.date = dayjs(date) ;
    this.score = score ;
}

function Question(text, userId, date){
    this.text = text ;
    this.userId = userId ;
    this.date = dayjs(date) ;
    this.answers = [] ;

    this.addAnswer = function(ans) {
        this.answers.push(ans) ;
    }

    this.getAnswers = function(userId) {
        const answers_by_user = [] ;

        for (const ans of this.answers) {
            if (ans.userId === userId) {
                answers_by_user.push(ans) ;
            }
        } ;

        return answers_by_user ;
    }   

    this.afterDate = function(date) {
        const answers_after_date = [] ;
        
        for (const ans of this.answers) {
            if (ans.date.isAfter(date)) {
                answers_after_date.push(ans) ;
            }
        } ;

        return answers_after_date ;
    }
}

const q1 = new Question("What is the best programming language?", 1, "2026-02-27") ;
const a1 = new Answer("JavaScript is the best programming language!", 2, "2026-02-27") ;
const a2 = new Answer("Python is the best programming language!", 3, "2026-02-27") ;
const a3 = new Answer("Java is the best programming language!", 2, "2026-02-26") ;

q1.addAnswer(a1) ;
q1.addAnswer(a2) ;
q1.addAnswer(a3) ;
const answers_by_user_2 = q1.getAnswers(2) ;
console.log(answers_by_user_2) ;


const yesterday = dayjs().subtract(1, "day") ;
const answers_after_yesterday = q1.afterDate(yesterday) ;

console.log(answers_after_yesterday) ;


