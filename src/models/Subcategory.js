module.exports = (sequelize, DataTypes) => {
    const Subcategory = sequelize.define('Subcategory', {
        subcategory_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subcategory_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'subcategories',
        timestamps: false
    });

    Subcategory.associate = (models) => {
        Subcategory.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
        Subcategory.hasMany(models.Product, { foreignKey: 'subcategory_id', as: 'products' });
    };

    return Subcategory;
};
