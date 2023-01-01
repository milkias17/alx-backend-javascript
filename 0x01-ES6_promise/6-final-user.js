import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const resolve = signUpUser(firstName, lastName);
  const reject = uploadPhoto(fileName);
  return [resolve, reject];
}
