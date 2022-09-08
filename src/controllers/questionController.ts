import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  
  const question = await questionService.create(req.body);

  res.send(question);

}

export async function createAnswer(req: Request, res: Response) {

  const id : number  = Number(req.params.id);

  const answer = await answerService.createAnswer(req.body, id);

  if (answer === 'Question does not exist') {
    return res.status(404).send(answer);
  }

  res.send(answer);

}

export async function get(_: Request, res: Response) {

  const questions = await questionService.get();

  res.send(questions);

}

export async function getById(req: Request, res: Response) {

  const id : number  = Number(req.params.id);

  const question = await questionService.getById(id);

  if (question === 'Question does not exist') {
    return res.status(404).send(question);
  }

  res.send(question);


}
