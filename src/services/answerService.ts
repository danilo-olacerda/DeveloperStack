import * as answerRepository from '../repositories/answerRepository';
import { Answer } from '../repositories/answerRepository';

export async function createAnswer(answer: Answer, question: number) {

    const newAnswer = await answerRepository.createAnswer(answer, question);

    return newAnswer;

}