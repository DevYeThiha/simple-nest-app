import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { stringify } from 'querystring';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
    
    constructor(private readonly studentService:StudentService) {

    }

    @Get()
    getStudents(): FindStudentResponseDto[]{
        return this.studentService.getStudents();
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId', ParseUUIDPipe) studentId: string
    ):FindStudentResponseDto{
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDto
    ):StudentResponseDto{
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId', ParseUUIDPipe) studentId : string,
        @Body() body: UpdateStudentDto
    ):StudentResponseDto {
        return this.studentService.updateStudent(body, studentId);
    }
}