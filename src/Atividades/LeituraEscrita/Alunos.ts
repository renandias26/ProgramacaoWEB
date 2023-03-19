import {alunos} from "./AlunosData";
import { writeFile, readFile } from "node:fs/promises";

export class Alunos {
    private dataSource = alunos

    getDataSource(){
        return this.dataSource
    }

    whriteAlunos(){
        writeFile("alunosDataSource.json", JSON.stringify(this.dataSource, null, 2))
    }

    async readAlunosDataSource(){
        const readAlunos = readFile("alunosDataSource.json", "utf-8")

        return readAlunos
    }
}