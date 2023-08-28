const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Proyects', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
  },
    imagenes: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    informacion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    frontend: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    backend: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    db: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    github: {
      type:DataTypes.TEXT,
      allowNull: false
    },
    web:{
      type: DataTypes.TEXT,
      allowNull:true
    }
  }, { timestamps: false, freezeTableName: false });
};
