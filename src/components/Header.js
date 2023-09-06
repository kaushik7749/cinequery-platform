import React from "react";
import { signOut, photoURL } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    //get this api from firebase doc goto-> Manage Users you will find there
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see firebase docs
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribes when my component unmounts
    return () => unSubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle my GPT Search
    dispatch(toggleGptSearchView());
  };

  //dispatching an onChange event
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex items-center p-2">
          {/*Show select option only when showGptSearch is true*/}.
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {/*The below line says that if we are on home page button text will be GPT Search and if we are on GPT Search page then button text will be Home Page */}
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-10 h-10 object-cover mr-2 mt-1"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
