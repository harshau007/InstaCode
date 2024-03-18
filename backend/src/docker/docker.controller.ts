import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DockerService } from './docker.service';
import { CreateContainer } from './dto/CreateContainerDto';

@Controller('docker')
export class DockerController {
  constructor(
    private readonly dockerService: DockerService
  ) {}

  @Get()
  async findAll() {
    return await this.dockerService.getAllContainers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.dockerService.findContainerById(id);
  }

  @Get('stats/:id')
  async getStats(@Param('id') id: string) {
    var stats = await this.dockerService.getStats(id);
    return stats;
  }

  @Get('logs/:id')
  startSendingLogs(@Param('id') containerId: string) {
    return this.dockerService.getLogs(containerId);
  }

  @Get('info/:id')
  async getInfo(@Param('id') id: string) {
    return await this.dockerService.getInfo(id);
  }

  @Post('stop/:id')
  async stopContainer(@Param('id') id: string) {
    return await this.dockerService.stopContainer(id);
  }

  @Get('container/url')
  async getDockerURL() {
    return await this.dockerService.containerURL();
  }

  @Post('container/create')
  async createContainer(@Body() createContainerDto: CreateContainer) {
    return await this.dockerService.createCodeInstance(createContainerDto);
  }
}
