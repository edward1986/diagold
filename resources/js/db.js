const idb = require('idb');

module.exports = (function() {
    let DB = {};
    let database = null;

    DB.open = (callback) => {
        const version = 3;

        let request = idb.open("OffABC", version, upgradeDB => {
            if (upgradeDB.objectStoreNames.contains('attendances')) {
                upgradeDB.deleteObjectStore('attendances');
            }
            upgradeDB.createObjectStore('attendances', {
                keyPath: 'id'
            });

            if (upgradeDB.objectStoreNames.contains('actions')) {
                upgradeDB.deleteObjectStore('actions');
            }
            upgradeDB.createObjectStore('actions', {
                keyPath: 'id'
            });
        }).then(db => {
            database = db;

            callback();
        });
    };

    DB.getAll = store => {
        return database.transaction(store, 'readwrite').objectStore(store).getAll();
    };

    DB.updateAll = (store, data) => {
        return new Promise((resolve, reject) => {
            let objStore = database.transaction(store, 'readwrite').objectStore(store);
            objStore.clear();
            for (var i in data) {
                objStore.put(data[i]);
            }

            resolve();
        });
    };

    DB.insert = (store, data) => {
        return database.transaction(store, 'readwrite').objectStore(store).add(data);
    };

    DB.update = (store, data) => {
        return database.transaction(store, 'readwrite').objectStore(store).put(data);
    };

    DB.get = (store, key) => {
        return database.transaction(store, 'readwrite').objectStore(store).get(key).then(response => {
            var stringify = JSON.stringify(response)
            return stringify ? JSON.parse(stringify) : ''
        })
    };
    DB.replace = (store, key, data) => {
        let objStore = database.transaction(store, 'readwrite').objectStore(store);
        objStore.delete(key);
        return objStore.add(data);
    };

    DB.delete = (store, key) => {
        return database.transaction(store, 'readwrite').objectStore(store).delete(key);
    };

    return DB;
}());