import { Body, Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    @Get()
    getStudents(
        @Param('teacherId') teacherId: string  
    ){
        return `Get All Students That Belong To A Teacher Id Of ${teacherId}`
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string,
        @Body() body
    ){
        return `Update Student With Id of ${studentId} Which Belongs To The Teacher With Id of ${teacherId} With A Data ${JSON.stringify(body)}`;

    }
}
