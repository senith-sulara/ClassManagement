import React, { useState, useRef} from 'react';
import axios from 'axios';
import './olUpload.css';
// import ErrorNotice from '../misc/ErrorNotice';
import Dropzone from 'react-dropzone';
import { API_URL } from '../utils/constants';

const Researches = (props) => {
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [state, setState] = useState({
    olSubject: '',
    grade: '',
    date:'',
    classTime:'',
    ZoomLink: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  // const[successMsg, setSuccessMsg] = useState('');
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);
  
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = '2px dashed #e9ebeb';
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };


  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const { olSubject, grade, date, classTime, ZoomLink } = state;
      if (olSubject.trim() !== '' && grade.trim() !== '' && date.trim() !== ''  && classTime.trim() !== '' && ZoomLink.trim() !== '') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('olSubject', olSubject);
          formData.append('grade', grade);
          formData.append('date', date);
          formData.append('classTime', classTime);
          formData.append('ZoomLink', ZoomLink);


          setErrorMsg('');
          await axios.post(`${API_URL}/olSub/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          // setSuccessMsg('upload Success')
          props.history.push('/home');
        } else {
          setErrorMsg('Please select a file to add.');
        }
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };
    return (
      <div className="con5">
        <div className="cn21">
            <h15>Insert Subject Details</h15>
        </div>
        <form onSubmit={handleOnSubmit} id="frm-subj">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        {/* {successMsg && <p className="successMsg">{successMsg}</p>} */}

          <div className="mb-3">
            <label htmlFor="olSubject" className="form-label">Subject</label>
            <input 
              type="text" 
              className="form-control" 
              id="olSubject" 
              name="olSubject" 
              value={state.olSubject || ''} 
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="grade" className="form-label">Grade</label>
            <input 
              type="text" 
              className="form-control" 
              id="grade" 
              name="grade" 
              value={state.grade || ''} 
              onChange={handleInputChange}
            />
          </div>

          {/* <div className="mb-3">
            <label htmlFor="grade" className="form-label">Grade</label>
            <select class="form-select" aria-label="Default select example" onChange={handleInputChange}>
                <option selected value={state.grade || '6'}>Grade 6</option>
                <option value={state.grade || '7'}>Grade 7</option>
                <option value={state.grade || '8'}>Grade 8</option>
                <option value={state.grade || '9'}>Grade 9</option>
                <option value={state.grade || '10'}>Grade 10</option>
                <option value={state.grade || '11'}>Grade 11</option>
            </select>
          </div> */}

          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input 
              type="date" 
              className="form-control" 
              id="date" 
              name="date" 
              value={state.date || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">Time</label>
            <input 
              type="time" 
              className="form-control" 
              id="time" 
              name="time" 
              value={state.time || ''}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="ZoomLink" className="form-label">Zoom Link</label>
            <input 
              type="text" 
              className="form-control" 
              id="ZoomLink" 
              name="ZoomLink" 
              value={state.ZoomLink || ''} 
              onChange={handleInputChange}
            />
          </div>

          <div className="upload-section">
          <Dropzone 
            onDrop={onDrop}
            onDragEnter={() => updateBorder('over')}
            onDragLeave={() => updateBorder('leave')}
          >
             {({ getRootProps, getInputProps }) => (
               <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                  <input {...getInputProps()} />
                     <p>Drag and drop a file OR click here to select a file</p>
                        {file && (
                     <div>
                       <strong>Selected file:</strong> {file.name}
                     </div>
                    )}
                </div>
              )}
          </Dropzone>
          {previewSrc ? (
            isPreviewAvailable ? (
              <div className="image-preview">
               <img className="preview-image" src={previewSrc} alt="Preview" width="300"/>
              </div>
            ) : (
               <div className="preview-message">
                 <p>No preview available for this file</p>
                </div>
               )
            ) : (
                <div className="preview-message">
                  <p>Image preview will be shown here after selection</p>
                </div>
              )}
          </div>
          <button id="sbtbtn" type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  };


export default Researches;