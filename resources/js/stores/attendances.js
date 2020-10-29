var self ={
    get: (key) => {
        return DB.get('attendances', key).then(response => {
            var stringify = JSON.stringify(response)
            return stringify ? JSON.parse(stringify) : ''
        })
    },
    create: (data, isRetry) => {
        return new Promise((resolve, reject) => {
            if (data._deleted) {
                resolve();
            } else {
                axios.post('/api/attendances', data).then(response => {
                    let attendance = response.data;
                    attendance.id = data.idno
                    if((attendance.message !== 'Cannot verify ID number.') || (attendance.type !== 'info')){
                        self.get( data.idno).then(response => {
                            if (!response) {
                                DB.insert('attendances', attendance);
                            } else{
                                DB.replace('attendances', data.idno, attendance);
                            }
                        })
                    }
                    resolve(response);
                }, error => {
                    if (!isRetry) {
                        let id = (new Date).getTime();
                        data.id = id;
                        data._draft = true;
                        DB.insert('attendances', data).then(() => {
                            Store.push({
                                store: 'attendances',
                                action: 'create',
                                data: data
                            });
                            resolve({data: data, info: 'info'});
                        }, error => {
                            reject(error);
                        });
                    } else {
                        reject(error);
                    }
                });

            }
        });
    },

};

module.exports = self