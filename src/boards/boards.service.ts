import { Injectable } from '@nestjs/common';
import { Board, BoradStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDTO } from './dto/create-board';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBorads(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDTO: CreateBoardDTO) {
    const { title, description } = createBoardDTO;

    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoradStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string) {
    return this.boards.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoradStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;

    return board;
  }
}
