import { Request, Response } from 'express';
import Visitor from '../../service/visitor';
import VisitorRepository from '../../model/visitorRepository';
import { ServerError, BadRequestError } from '../../service/error';
import VisitorCmtDtoValidationCheck from './validationCheck';
import { validate, ValidationError } from 'class-validator';

const getVisitor = async (req: Request, res: Response) => {
  try {
    const header = new Visitor(new VisitorRepository(), req);

    const response = await header.getVisitorCnt();

    return res.status(200).json(response);
  } catch (error) {
    if (error instanceof ServerError) {
      console.log(error);
      return res.status(500).json(error.message);
    } else {
      console.log(error);
      return res.status(500).json('알 수 없는 에러입니다.');
    }
  }
};

const updateVisitor = async (req: Request, res: Response) => {
  try {
    const visitor = new Visitor(new VisitorRepository(), req.body);

    const response = await visitor.updateVisitorCnt();

    if (response) return res.status(200).json({ msg: 'success' });
  } catch (error) {
    if (error instanceof ServerError) {
      console.log(error);
      return res.status(500).json(error.message);
    } else {
      console.log(error);
      return res.status(500).json('알 수 없는 에러입니다.');
    }
  }
};

const createVisitComment = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const visitorCmt = new VisitorCmtDtoValidationCheck();
    visitorCmt.nickname = body.nickname;
    visitorCmt.password = body.password;
    visitorCmt.description = body.description;
    visitorCmt.date = body.date;

    const validationError: ValidationError[] = await validate(visitorCmt);

    if (validationError.length > 0) {
      console.log(validationError);
      throw new BadRequestError('요청 데이터의 형식이 잘못되었습니다.');
    }

    const visitor = new Visitor(new VisitorRepository(), body);

    const response = await visitor.createComment();

    if (response)
      return res
        .status(201)
        .json({ success: true, msg: '방명록이 작성되었습니다.' });
    return res
      .status(409)
      .json({ success: false, msg: '방명록 저장에 실패했습니다.' });
  } catch (error) {
    if (error instanceof ServerError) {
      console.log(error);
      return res.status(500).json(error.message);
    } else if (error instanceof BadRequestError) {
      console.log(error);
      return res.status(404).json(error.message);
    } else if (error instanceof Error) {
      console.log(error);
      return res.status(500).json('알 수 없는 에러입니다.');
    }
  }
};

const updateVisitCommentById = async (req: Request, res: Response) => {
  const { body } = req;
  const { id: commentId } = req.params;
  try {
    const visitorCmt = new VisitorCmtDtoValidationCheck();
    visitorCmt.nickname = body.nickname;
    visitorCmt.password = body.password;
    visitorCmt.description = body.description;
    visitorCmt.date = body.date;

    const validationError: ValidationError[] = await validate(visitorCmt);

    if (validationError.length > 0) {
      console.log(validationError);
      throw new BadRequestError('요청 데이터의 형식이 잘못되었습니다.');
    }

    const visitor = new Visitor(new VisitorRepository(), body);
    const response = visitor.updateCommentById(Number(commentId));
  } catch (error) {
    if (error instanceof ServerError) {
      console.log(error);
      return res.status(500).json(error.message);
    } else if (error instanceof BadRequestError) {
      console.log(error);
      return res.status(404).json(error.message);
    } else {
      console.log(error);
      return res.status(500).json('알 수 없는 에러입니다.');
    }
  }
};

export = {
  getVisitor,
  updateVisitor,
  createVisitComment,
  updateVisitCommentById,
};
