import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoradStatus } from './board.model';
import { CreateBoardDTO } from './dto/create-board';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBorads();
  }

  @Post('/')
  createBoard(@Body() crateBoardDTO: CreateBoardDTO): Board {
    return this.boardsService.createBoard(crateBoardDTO);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoradStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
