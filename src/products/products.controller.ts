import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getAll() {
        return 'Este es el listado de productos';
    }

    @Get(':id')
    find(@Param() params) {
        return `El producto recibido tiene este id: ${params.id}`
    }

    @Post()
    create(
        @Body('name') name: string,
        @Body('description') description: string
    ){
        return `Estas creando un producto con nombre ${name} y descripcion ${description}`
    }

    @Put(':id')
    update(
        @Param('id') id:number
        @Body('name') name: string,
        @Body('description') description: string
    ){
        return `Estas actualizando el producto ${id} con nombre ${name} y descripcion ${description}`
    }


    @Delete(':id')
    delete(@Param('id') id: number) {
        return JSON.stringify(`El producto con el id  ${id} fue eliminado`)
    }


}
