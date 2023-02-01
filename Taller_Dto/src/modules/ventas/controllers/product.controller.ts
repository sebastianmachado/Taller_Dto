import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';
  //import { Auth } from '@auth/decorators';
  import { CreateProductDto, FilterProductDto, UpdateProductDto } from '@uic/dto';
  import { ProductEntity } from '@uic/entities';
  import { ResponseHttpModel } from '@shared/models';
  import { ProductsService } from '@uic/services';

  
  @ApiTags('Products')
  @Controller('products')
  export class ProductsController {
    constructor(private productsService: ProductsService) {}
  
    @ApiOperation({ summary: 'Create One' })
    @Auth()
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: CreateProductDto): Promise<ResponseHttpModel> {
      const serviceResponse = await this.productsService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Product created',
        title: 'Created',
      };
    }
  
    @ApiOperation({ summary: 'Catalogue' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.productsService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: catalogue,
        title: Catalogue,
      };
    }
  
 
  
    @ApiOperation({ summary: 'Find All' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: FilterProductDto): Promise<ResponseHttpModel> {
      const serviceResponse = await this.productsService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: index,
        title: 'Success',
      };
    }
  
    @ApiOperation({ summary: 'Find One' })
    @Auth()
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.productsService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: show ${id},
        title: Success,
      };
    }
  
    @ApiOperation({ summary: 'Update One' })
    @Auth()
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() payload: UpdateProductDto,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.productsService.update(id, payload);
  
      return {
        data: serviceResponse.data,
        message: Product updated ${id},
        title: Updated,
      };
    }
  
    @ApiOperation({ summary: 'Remove One' })
    @Auth()
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.productsService.remove(id);
  
      return {
        data: serviceResponse.data,
        message: Product deleted ${id},
        title: Deleted,
      };
    }
  
    @ApiOperation({ summary: 'Remove All' })
    @Auth()
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: ProductEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.productsService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
        message: Products deleted,
        title: Deleted,
      };
    }
  }