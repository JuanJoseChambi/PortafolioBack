const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Mensajes', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
  },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    asunto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    detalles: {
      type:DataTypes.TEXT,
      allowNull:false
    }
  }, { timestamps: false, freezeTableName: true });
};
