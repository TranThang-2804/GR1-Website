FROM mysql:8

COPY ./Database/database.sql /tmp

CMD [ "mysqld", "--init-file=/tmp/database.sql" ]