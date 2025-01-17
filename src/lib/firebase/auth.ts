import { auth } from "./firebaseConfig";
import { 
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    FacebookAuthProvider,
    sendEmailVerification,
    getAdditionalUserInfo
} from "firebase/auth";

// Initialize providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

// Configure Facebook provider
facebookProvider.setCustomParameters({
    'display': 'popup'
});

/**
 * Sign in with Google.
 * If the user is new and their email is not verified, a verification email will be sent.
 */
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const isNewUser = getAdditionalUserInfo(result)?.isNewUser;
        
        // If it's a new user, send verification email
        if (isNewUser && result.user.email && !result.user.emailVerified) {
            await sendEmailVerification(result.user);
        }
        
        return result;
    } catch (error: any) {
        console.error("Error with Google sign in:", error);
        throw error;
    }
};

/**
 * Sign in with Facebook.
 * If the user is new and their email is not verified, a verification email will be sent.
 */
export const signInWithFacebook = async () => {
    try {
        const result = await signInWithPopup(auth, facebookProvider);
        const isNewUser = getAdditionalUserInfo(result)?.isNewUser;
        
        // If it's a new user and email isn't verified, send verification email
        if (isNewUser && result.user.email && !result.user.emailVerified) {
            await sendEmailVerification(result.user);
        }
        
        return result;
    } catch (error: any) {
        console.error("Error with Facebook sign in:", error);
        throw error;
    }
};

/**
 * Logs out the currently authenticated user.
 */
export const logoutUser = async () => {
    try {
        await signOut(auth);
        console.log("User successfully logged out.");
    } catch (error: any) {
        console.error("Error logging out user:", error);
        throw error;
    }
};

// Export auth instance for use in other components
export { auth };
