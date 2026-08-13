import { Controller, Get, Post, Body, NotFoundException } from '@nestjs/common';
import { PagesService } from './pages.service';
import { IsString, IsNotEmpty, IsEmail, IsOptional, MinLength } from 'class-validator';

export class SubmitContactDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  subject?: string;

  @IsString()
  @IsNotEmpty({ message: 'Message is required' })
  @MinLength(10, { message: 'Message must be at least 10 characters' })
  message: string;
}

@Controller('contact')
export class ContactController {
  constructor(private readonly pagesService: PagesService) {}

  @Get()
  async getContact() {
    const data = await this.pagesService.getContact();
    if (!data) {
      throw new NotFoundException('Contact data not found.');
    }
    return data;
  }

  @Post()
  async submitContact(@Body() submitContactDto: SubmitContactDto) {
    return this.pagesService.submitContact(submitContactDto);
  }
}
