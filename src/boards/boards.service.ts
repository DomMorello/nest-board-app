import { Injectable, NotFoundException } from '@nestjs/common';
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
    const found = this.boards.find((board) => board.id === id);

    if (!found) {
      throw new NotFoundException(`Can't find the board with ${id}`);
    }

    return found;
  }

  deleteBoard(id: string): void {
    const found = this.getBoardById(id);

    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  updateBoardStatus(id: string, status: BoradStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;

    return board;
  }
}
