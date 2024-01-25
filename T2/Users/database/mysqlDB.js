const db = required("mysql");
var connection = {
    createConnection: ()=>{
        return db.createConnection(
            {
                host:"127.0.1",
                user:"users-daw",
                pass:"445+Daw",
                database: "usuariosdaw",
                port: 3306,
            }
        );

    },
};
module.export = connection;