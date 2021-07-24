import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { stringify } from 'querystring';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';

@Controller('students')
export class StudentController {
    @Get()
    getStudents(): FindStudentResponseDto[]{
        return [
            {
                id: "abcd",
                name:"John Doe",
                teacher: "Luthor Doe"
            }
        ]
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ):FindStudentResponseDto{
        return {
            id: "abcd",
            name:"John Doe",
            teacher: "Luthor Doe"
        }
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDto
    ):StudentResponseDto{
        return {
            id: "abcd",
            name:"John Doe",
            teacher: "Luthor Doe"
        }
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId : string,
        @Body() body: UpdateStudentDto
    ):StudentResponseDto {
        return {
            id: "abcd",
            name:"John Doe",
            teacher: "Luthor Doe"
        };
    }
}