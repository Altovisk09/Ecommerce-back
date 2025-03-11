module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 'categories',
        timestamps: false
    });

    Category.associate = (models) => {
        Category.hasMany(models.Subcategory, { foreignKey: 'category_id', as: 'subcategories' });
    };

    return Category;
};
