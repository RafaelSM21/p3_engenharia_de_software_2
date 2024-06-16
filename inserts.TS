// interface UserDAO {
//     insert_ticket(natureza: string, descricao: string, provedor: string): any;
//     list_tickets(): Promise<any[]>;
// }


// //POSTGRES
// async list_tickets(): Promise<any[]> {
//         const client = new Client(this.dbConfig);

//         try {
//             await client.connect();
//             console.log('Conexão com o banco realizada com sucesso');

//             const selectQuery = 'SELECT * FROM ticket';
//             const res = await client.query(selectQuery);

//             console.log('Tickets recuperados com sucesso:', res.rows);

//             return res.rows;
//         } catch (error) {
//             console.error('Erro na execução da query', error);
//             return [];
//         } finally {
//             await client.end();
//             console.log("Conexão com o banco finalizada");
//         }
//     }


// //MARIADB
//     async list_tickets(): Promise<any[]> {
//         const connection = await mysql.createConnection(this.dbConfig);

//         try {
//             console.log('Conexão com o banco realizada com sucesso');

//             const selectQuery = 'SELECT * FROM ticket';
//             const [rows] = await connection.execute(selectQuery);

//             console.log('Tickets recuperados com sucesso:', rows);

//             return rows as any[];
//         } catch (error) {
//             console.error('Erro na execução da query', error);
//             return [];
//         } finally {
//             await connection.end();
//             console.log("Conexão com o banco finalizada");
//         }
//     }


// //MONGODB
//     async list_tickets(): Promise<any[]> {
//         let client: MongoClient | null = null;

//         try {
//             client = await MongoClient.connect(this.url);
//             console.log('Conexão com o banco de dados estabelecida com sucesso');

//             const db: Db = client.db(this.dbName);
//             const collection = db.collection('ticket');

//             const tickets = await collection.find().toArray();
//             console.log('Tickets recuperados com sucesso:', tickets);

//             return tickets;
//         } catch (error) {
//             console.error('Erro ao listar tickets:', error);
//             return [];
//         } finally {
//             if (client) {
//                 await client.close();
//                 console.log('Conexão com o banco de dados fechada');
//             }
//         }
//     }
