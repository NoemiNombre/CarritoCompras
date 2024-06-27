export interface CarritodeCompras {
    id_cliente: number|null;
    cliente?: string|null;
    subtotal: number;
    iva: number;
    total: number;

    items:CarritoItem[]

}

export interface CarritoItem {

    id_producto: number;
    cantidad: number;
    subtotal: number;
    iva: number;
    total: number;
    producto?: string;
}
