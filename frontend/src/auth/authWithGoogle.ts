import { auth, googleProvider } from '../firebase.config'
import { signInWithPopup, UserCredential } from 'firebase/auth';

/**
 * @returns Promise<UserCredential> - Les informations de l'utilisateur connecté.
 */
export const signInWithGoogle = async (): Promise<UserCredential> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log('Utilisateur connecté :', result.user);
    return result;
  } catch (error) {
    console.error('Erreur lors de la connexion avec Google :', error);
    throw error;
  }
};
