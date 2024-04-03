class Pessoa {
  nome: string
  cpf: string

  constructor(nome: string, cpf: string) {
    this.nome = nome
    this.cpf = cpf
  }
  public getCpf() {
    return this.cpf
  }
}

export const PrimeiraPessoa = new Pessoa('alvaro', '33123123123')
console.log(PrimeiraPessoa.getCpf())
export const SegundaPessoa = new Pessoa('Leo', '3231231231')
