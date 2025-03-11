import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import  "./index.css" // Assuming you're using React Router for navigation

const NotesList = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:3000/get/notes',{
            method: 'GET',
            headers: {
          'Content-Type': 'application/json'
        },
        mode:"cors"
        });
        if (!response.ok) {
          throw new Error('Failed to fetch notes');
        }
        const data = await response.json();
        setNotes(data.notes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='notes-list'>
      <h1 className='notes-header'>Notes</h1>
      <ul className='list-of-notes'>
        {notes.map(note => (
          <li key={note._id} className='each-notes'>
            <Link to={`/notes/${note._id}`} className='notes-heading'>
              <h1 >{note.title} - uploaded by {note.userFirstName}</h1>
              <h3 className='date'> at {new Date(note.createdAt).toLocaleString()}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <button className='add-notes' onClick={() =>{navigate("/add-notes")}}>Add Notes</button>
    </div>
  );
};

export default NotesList;
