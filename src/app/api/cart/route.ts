import { NextResponse } from 'next/server';
var cart:number[] = [];

const productAdded = (idProduct:number) => {
  return cart.find(id => id === idProduct);
}

export async function GET(request: Request) { 
  return NextResponse.json({
    message: 'Productos en el carrito', 
    data:cart
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

