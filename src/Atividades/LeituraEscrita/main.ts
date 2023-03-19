import {Alunos} from "./Alunos"

async function main(){
    let alunos = new Alunos()

    // alunos.whriteAlunos()
    
    /*Essa maneira funciona sem o parametro opcional na função readFile*/
    // const readed = JSON.parse((await alunos.readAlunosDataSource()).toString())

    /*Essa maneira funciona carregamdo o parametro opcional enconding com utf-8 na função readFile*/
    const readed = JSON.parse(await alunos.readAlunosDataSource())

    console.log('Listando alunos direto do arquivo', readed)
}

main()