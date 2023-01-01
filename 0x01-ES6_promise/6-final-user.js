import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const resolveFunc = await signUpUser(firstName, lastName);
  const rejectFunc = await uploadPhoto(fileName);
  return [resolveFunc, rejectFunc];
}
