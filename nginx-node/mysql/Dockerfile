FROM mysql:5.7

CMD [ "--innodb-use-native-aio=0" ]

COPY create_table_user.sql /docker-entrypoint-initdb.d/