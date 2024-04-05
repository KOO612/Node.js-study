const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  // static initiate 테이블에 대한 설정
  static initiate(sequelize) {
    // 모델.init 첫번째 인수 -> 테이블 컬럼에 대한 설정
    User.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        age: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        married: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      // 모델.init 두번째 인수 -> 테이블 자체에 대한 설정
      {
        // static initiate 메서드의 매개변수와 연결되는 옵션
        // db.sequelize 객체 넣어줌 model/index.js에서 연결
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  // static associations 다른 모델과의 관계
  static associations(db) {
    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
  }
}

module.exports = User;
