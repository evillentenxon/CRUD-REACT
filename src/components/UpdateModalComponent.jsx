import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import PostServices from '../services/postServices';

function UpdateModalComponent(props) {
  const [isShow, setIsShow] = useState(false);
  const toggleModal = () => {
    setIsShow(!isShow);
  }

  // form validation data
  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [id, setId] = useState(props.id);
  const [selectedFile, setSelectedFile] = useState('');

  const handleSubmit = async(event)=>{
    event.preventDefault();
    const formData= new FormData();
    formData.append('id', id);
    formData.append('title', title);
    formData.append('date', date);
    
    if(selectedFile!='' && selectedFile.length!= 0){
      formData.append('image', selectedFile);
    }

    const response= await PostServices.update(formData);

    if(response.data.success==true){
      alert(response.data.msg);
    }
    else{
      alert(response.data.msg);
    }

    toggleModal();
  }

  return (
    <>
      <Button variant="success" onClick={toggleModal}>
        Edit
      </Button>

      <Modal show={isShow} onHide={toggleModal}>
        <Modal.Header closeButton >
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input type="text"
            name="title"
            placeholder="title"
            value={title} 
            onChange={e=> setTitle(e.target.value)}
            required />
            <br/><br/>
            
            <input type="date"
            name="date"
            value={date} 
            onChange={e=> setDate(e.target.value)}
            required />
            <br/><br/>
            
            <input type="file"
            name="image"  
            onChange={e=> setSelectedFile(e.target.files[0])}
            />
            <br/><br/>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={toggleModal}>
              close
            </Button>
            <Button type="submit" variant="dark" >
              Update
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

    </>
  );
}

export default UpdateModalComponent;