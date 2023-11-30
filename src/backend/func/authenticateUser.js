




function authenticateUser(email, password) {
    return new Promise((resolve, reject) => {
      client.connect((err) => {
        if (err) {
          console.error('Ошибка подключения к базе данных:', err);
          reject(err);
        } else {
          const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
          const values = [email, password];
          client.query(query, values, (err, result) => {
            if (err) {
              console.error('Ошибка выполнения запроса:', err);
              reject(err);
            } else {
              if (result.rows.length > 0) {
                resolve(true); 
              } else {
                resolve(false);
              }
            }
            client.end(); 
          });
        }
      });
    });
  }