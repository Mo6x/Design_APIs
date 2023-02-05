import bcrypt from 'bcrypt';
import {Schema} from './m';


schema.pre('save', async function (next) {
    const user = this as any;
    if (!user.isModified('password')) {
      return next();
    }
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  });
  
  schema.methods.isValidPassword = async function (password: string) {
    const user = this as any;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
  };