import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {

    constructor( private readonly teacherService: TeacherService ) {};

    @Get()
    getTeachers():FindTeacherResponseDto[]{
        return this.teacherService.getTeachers();
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId', ParseUUIDPipe) teacherId: string
    ):FindTeacherResponseDto{
        return this.teacherService.getTeacherById(teacherId);
    }

   
}
