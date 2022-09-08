import client from "../db/db";

interface Question {
    askedBy: string;
    question: string;
}

export async function getQuestions(){

    const answers = await client.questions.findMany();

    return answers;
}

export async function createQuestion(question: Question){
    
    const newQuestion = await client.questions.create({
        data: question
    });

    return newQuestion;
}

export async function getQuestionById(id: number){


    try {

        const question = await client.questions.findUnique({
            where: {
                id: id
            },
            include: {
                answers: {
                    select: {
                        answer: true,
                        answeredBy: true
                    }
                }
            }
        });
    
        return question;

    } catch (error: any) {
        if (error.code === 'P2003') {
            return 'Question does not exist';
        }
        else {
            return error.message;
        }
    }
    
}