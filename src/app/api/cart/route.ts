import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import type { Product } from '@/interfaces/products.interface';
var cart:number[] = [];

const productAdded = (idProduct:number) => {
  return cart.find(id => id === idProduct);
}

export async function GET(request: Request) { 
  const filePath = path.join(process.cwd(), 'data.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const json:Product[] = JSON.parse(fileContent);
  
  let productsInCart:Product[] = [];
  cart.forEach(idProduct => {
    const result = json.find(product => {
      return idProduct === product.id;
    });
    if(result) {
      productsInCart.push(result);
    }
  });
  return NextResponse.json({
    message: 'Productos en el carrito', 
    data:productsInCart
  });
}

export async function POST(request: Request) {
  const {idProduct} = await request.json();
  
  if(!(!isNaN(Number(idProduct))) || idProduct < 1) {
    return NextResponse.json({message:'El id del producto, no es válido.'}, {status:500});
  }
  
  if(productAdded(idProduct)) {
    return NextResponse.json({message:`Producto: ${idProduct} agregado al carrito`}, {status:200});
  }

  cart.push(idProduct);
  return NextResponse.json({message:`Producto: ${idProduct} agregado al carrito`}, {status:200});
}

export async function DELETE(request: Request) {
  cart = [];
  return NextResponse.json({message:`Se limpió el carrito`}, {status:200});
}

