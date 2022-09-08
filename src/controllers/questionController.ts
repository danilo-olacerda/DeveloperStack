import { Request, Response } from 'express';
import * as questionService from '../services/questionService';

export async function createQuestion(req: Request, res: Response) {
  // TODO
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {

  const questions = await questionService.get();

  res.send(questions);

}

export async function getById(req: Request, res: Response) {
  // TODO
}
