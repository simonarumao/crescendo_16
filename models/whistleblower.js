// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const whistleblowerSchema = new mongoose.Schema({
//   encryptedName: String,
//   encryptedReport: String,
// });

// // Pre-save hook to encrypt the whistleblower's name before saving to the database
// whistleblowerSchema.pre('save', async function (next) {
//   if (this.isModified('encryptedName')) {
//     const saltRounds = 10;
//     this.encryptedName = await bcrypt.hash(this.encryptedName, saltRounds);
//   }
//   next();
// });

// whistleblowerSchema.methods.decryptName = async function () {
//     try {
//       // Use bcrypt compare to decrypt the name
//       const decryptedName = await bcrypt.compare(this.encryptedName, this.encryptedName);
  
//       return decryptedName ? this.encryptedName : null;
//     } catch (error) {
//       throw error;
//     }
//   };

// const Whistleblower = mongoose.model('Whistleblower', whistleblowerSchema);

// module.exports = Whistleblower;
