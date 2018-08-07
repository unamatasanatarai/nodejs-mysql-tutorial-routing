node.js playground with mysql
===
```docker run --name mysql -e MYSQL_ROOT_PASSWORD=pass -p 3306:3306 mysql:5```

.then
```
docker exec -it mysql mysql -uroot -ppass
create database tutorial;
```

.then
```node setup.js```

.then
```node index.js```

.then navigate to: http://localhost:8080


to connect to the mysql run:
```docker exec -it mysql mysql -uroot -ppass```

.then
```use tutorial;
select count(id) from hello;```
