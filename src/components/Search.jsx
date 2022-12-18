import React, { useContext, useState,useEffect } from "react";
import {
  collection,
  query,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Search = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useContext(AuthContext);


  useEffect(() => {
    
       const unsub = onSnapshot(
           query(
               collection(
                   db,
                   "users",
               ),
               
           ),
           (snapshot) => {
               let userData=(snapshot.docs.map((doc) => doc.data()))
               setUser(userData)
               console.log(userData)

           }
       );
       console.log(unsub)
      
   
}, []);


  const handleSelect = async (user) => {
    
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
  };
  return (
    <div className="search">
      {/* <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div> */}
     
      
 {user&&  (   user.map((user)=>
        
      ( <div className="userChat" onClick={handleSelect(user)} >
          <img src={user.photoURL}  alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>))
      )}
    </div>
  );
};

export default Search;
