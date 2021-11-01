import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getAll(){
        return 'Este es el listado de productos';
    }

    @Get(':id')
    find(@Param() params){
        return `El producto recibido tiene este id: ${params.id}`
    }


}
