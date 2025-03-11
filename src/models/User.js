module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user_id: {  
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {  
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        first_name: {  
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: { 
            type: DataTypes.STRING(100),
            allowNull: false
        },
        phone: {  
            type: DataTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        password: { 
            type: DataTypes.STRING(100),
            allowNull: false, 
        },
        cpf: { 
            type: DataTypes.STRING(14), 
            allowNull: false,
            unique: true
        },
        birth_date: { 
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'users', 
        timestamps: false
    });

  User.associate = (models) => {
    User.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
    User.hasMany(models.Order, { foreignKey: 'user_id', as: 'orders' });
    User.hasMany(models.Transactions, { foreignKey: 'user_id', as: 'transactions'})
  };

    return User;
};
