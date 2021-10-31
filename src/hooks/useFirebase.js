import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import firebaseInit from '../Components/Firebase/firebase.init';

firebaseInit();

const useFirebase = () => {
	const [ users, setUsers ] = useState({});
	const [ isloading, setIsLoading ] = useState(true);
	const auth = getAuth();
	const signInUsingGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider)
			.then((result) => {
				setUsers(result.user);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	// observe user state changed
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUsers(user);
			} else {
				setUsers({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, []);

	const logOut = () => {
		setIsLoading(true);
		signOut(auth).then(() => {});
	};

	return {
		users,
		signInUsingGoogle,
		logOut,
		isloading
	};
};

export default useFirebase;
