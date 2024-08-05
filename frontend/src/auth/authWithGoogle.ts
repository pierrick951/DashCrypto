import { auth, googleProvider } from '../firebase.config'
import { signInWithPopup, UserCredential } from 'firebase/auth';

/**
 * @returns Promise<UserCredential> - Les informations de l'utilisateur connecté.
 */
export const signInWithGoogle = async (): Promise<UserCredential> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    throw error;
  }
};
