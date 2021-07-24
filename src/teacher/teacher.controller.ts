import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers():FindTeacherResponseDto[]{
        return [{
            id: "456",
            name: "Luthor Doe"
        }]
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId') teacherId: string
    ):FindTeacherResponseDto{
        return {
            id: "456",
            name: "Luthor Doe"
        }
    }

   
}
