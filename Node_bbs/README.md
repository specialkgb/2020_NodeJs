# nodejs + mongoDB + mongoose 연동 BBS 프로젝트
* mongoDB를 사용하여 BBS 프로젝트 수행

## mongoDB는 NoSQL
* NoSQL : SQL이 아니다 라는 뜻이 아니라 Not Only SQL이라는 뜻으로
SQL뿐 아니라 SQL을 사용하지 않는 방법으로 대량의 데이터를 CRUD 수행하는데 사용하는 DBMS
Schema 라는 것 자체가 없어도 되는 환경, Document라는 개념으로 JSON형태의 데이터를 관리한다.
대량의 데이터를 INSERT할 때 데이터 구조가 정해지지 않았어도
데이터를 취급할 수 있는 DBMS

* RDBMS(관계형 데이터베이스) : 관계형 데이터베이스, 데이터를 INSERT하기 전에 반드시 DB,
TableSpace, Table 과 같은 Schema들이 먼저 생성되어 있어야 한다.
만약 원래 구성된 Schema와 다른 형식의 데이터를 저장하려고 하면
데이터 구조를 먼저 변경해야 하기 때문에 유연한 환경에 대처하기가 어렵다.
