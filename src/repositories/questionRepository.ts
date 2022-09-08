import client from "../db/db";

export async function getAnswers(){

    const answers = await client.answers.findMany();

    return answers;
}