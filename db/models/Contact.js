import sequelize from "../sequelize.js";
import { DataTypes } from "sequelize";
import User from "./User.js";

const Contact = sequelize.define("contacts", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 100], 
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, 
      len: [3, 100], 
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [7, 20], 
    },
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, 
  },
  owner: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

User.hasMany(Contact, { foreignKey: 'owner' });
Contact.belongsTo(User, { foreignKey: 'owner' });

export default Contact;


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzI0MTU1OTg3LCJleHAiOjE3MjQ1ODc5ODd9.g2W9k1NG0ryj1iqPqMEAIHPnZqMIDw8cfuUnGw6zVy4
// Authorization
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzI0MTU1OTg3LCJleHAiOjE3MjQ1ODc5ODd9.g2W9k1NG0ryj1iqPqMEAIHPnZqMIDw8cfuUnGw6zVy4