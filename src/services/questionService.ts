import * as questionRepository from '../repositories/questionRepository';

export async function get() {
    
    const questions = await questionRepository.getQuestions();
    
    return {questions};
    
}

export async function create(question: any) {

    const newQuestion = await questionRepository.createQuestion(question);

    return newQuestion;

}

export async function getById(id: number) {

    const question = await questionRepository.getQuestionById(id);

    return question;

}