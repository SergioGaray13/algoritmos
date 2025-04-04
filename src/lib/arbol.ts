export type Nodo = {
    valor: string;
    izquierda: Nodo | null;
    derecha: Nodo | null;
  };
  
  export class ArbolSugerencias {
    raiz: Nodo | null = null;
  
    insertar(valor: string) {
      const nuevoNodo: Nodo = { valor, izquierda: null, derecha: null };
  
      if (!this.raiz) {
        this.raiz = nuevoNodo;
        return;
      }
  
      let actual = this.raiz;
      while (true) {
        if (valor.localeCompare(actual.valor) < 0) {
          if (!actual.izquierda) {
            actual.izquierda = nuevoNodo;
            break;
          }
          actual = actual.izquierda;
        } else {
          if (!actual.derecha) {
            actual.derecha = nuevoNodo;
            break;
          }
          actual = actual.derecha;
        }
      }
    }
  
    inOrden(nodo: Nodo | null = this.raiz, resultado: string[] = []): string[] {
      if (!nodo) return resultado;
      this.inOrden(nodo.izquierda, resultado);
      resultado.push(nodo.valor);
      this.inOrden(nodo.derecha, resultado);
      return resultado;
    }
  }