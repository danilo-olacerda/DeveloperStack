import client from "../db/db";

export interface Answer {
    answer: string;
    answeredBy: string;
}

export async function createAnswer(answer: Answer, questionId: number) {

    try {
        const newAnswer = await client.answers.create({
            data: {
                ...answer,
                questionId
            }
        });
    
        return newAnswer;

    } catch (error: any) {

        if (error.code === 'P2003') {
            return 'Question does not exist';
        }
        else {
            return error.message;
        }
    }
    
}