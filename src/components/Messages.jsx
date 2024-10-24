import React, { useEffect, useState } from 'react';
import Message from './Message';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/appSlice';

const Messages = () => {
  const { searchText, emails } = useSelector(store => store.app);
  const [filterEmail, setFilterEmail] = useState(emails);
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(setEmails(allEmails));
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
  }, [dispatch]);

  useEffect(() => {
    const filteredEmail = emails?.filter((email) => {
      return email.subject.toLowerCase().includes(searchText.toLowerCase()) || 
             email.to.toLowerCase().includes(searchText.toLowerCase()) || 
             email.message.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilterEmail(filteredEmail);
  }, [searchText, emails]);

  return (
    <div className="messages-container">
      {
        filterEmail?.map((email) => <Message key={email.id} email={email} />)
      }

      <style jsx>{`
        .messages-container {
          padding: 16px; /* Add padding for better spacing */
          background-color: #f9fafb; /* Light background for contrast */
          border-radius: 0.375rem; /* Rounded corners */
          overflow-y: auto; /* Allow scrolling if needed */
          height: calc(90vh - 64px); /* Adjust height to fit in the layout */
        }
      `}</style>
    </div>
  );
}

export default Messages;
