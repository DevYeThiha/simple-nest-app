import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentResponseDto, StudentResponseDto } from 'src/student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    @Get()
    getStudents(
        @Param('teacherId') teacherId: string  
    ):FindStudentResponseDto[]{
        return [
            {
                id: "abcd",
                name:"John Doe",
                teacher: "Luthor Doe"
            }
        ]
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string,
        @Body() body
    ):StudentResponseDto{
        return {
            id: "abcd",
            name:"John Doe",
            teacher: "Luthor Doe"
        }
    }
}
