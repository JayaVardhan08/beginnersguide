import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook from React Router
import "./index.css"

const NoteDetails = () => {
  const { id } = useParams(); // Get the ID parameter from the URL
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetch(`http://localhost:3000/notes/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch note');
        }
        const data = await response.json();
        setNote(data.note);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    fetchNote();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <div className='notes-detailer-container'>
      <h1>Notes Details </h1>
      <div className='container-notes-details'>
      <h1 className='main-heading'>{note.title} -uploaded by {note.userFirstName}</h1>
      <p className='details'>{note.description}</p>
    
      <p style={{alignSelf:"flex-start",fontSize:"28px",fontWeight:"700"}}>Uploaded at: {new Date(note.createdAt).toLocaleString()}</p>
      <button className='download'>Download</button>
      </div>
    </div>
  );
};

export default NoteDetails;
