const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.Comment = Comment;

// 각각 모델의 static initiate 메서드 호출
User.initiate(sequelize);
Comment.initiate(sequelize);

// 다른 테이블과의 관계를 연결하는 static associate 메서드 실행
User.associate(db);
Comment.associate(db);

module.exports = db;
