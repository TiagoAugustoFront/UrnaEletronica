import { Injectable } from '@angular/core';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  databaseName: any = 'contatos.db';

  constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter) { }

  async openDatabase(){
    try {
      this.db = await this.sqlite.create({name: this.databaseName, location:'default'});
      await this.createDatabase();
    } catch (error) {
      console.error('Ocorreu um erro ao criar o banco de dados',error);
    }
  }

  async createDatabase(){
    const sqlCreateDatabase = this.getCreateTable();
    const result = await this.sqlitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return result ? true:false;
  }

  getCreateTable(){
    const sqls = [];
    const candidatos = "CREATE TABLE IF NOT EXISTS candidatos (idCandidato integer primary key AUTOINCREMENT,nomeCandidato varchar(40), nomePartido varchar(40), siglaPartido varchar(8), numeroPartido varchar(2),votos integer);"
    const eleitor = "CREATE TABLE IF NOT EXISTS eleitores (id_eleitor integer primary key AUTOINCREMENT, nome varchar(40), titulo varchar(12));";
    sqls.push(candidatos);
    sqls.push(eleitor);
    return sqls.join('\n');
  }

  executeSQL(sql: string, params?: any[]){
    return this.db.executeSql(sql,params);
  }
}
