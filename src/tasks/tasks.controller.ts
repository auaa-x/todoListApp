import { Controller, Get, Req } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    findAll(@Req() req: Request): string {
        return 'This action return all tasks';
    }
}
