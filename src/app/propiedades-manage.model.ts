export class PropiedadesManage{
    /*title: string;
    description: string;
    address: string;
    price: number;
*/

    constructor( 
        public id: number,
        public titulo: string,
        public descripcion: string,
        public direccion: string,
        public precio: number,
        public foto?: string){
    }

}