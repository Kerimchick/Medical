import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faThLarge } from '@fortawesome/free-solid-svg-icons'
import Modal from "react-modal"
import {useForm} from "react-hook-form"
import axios from "axios";

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [image, setImage] = useState({})
    const [modalIsOpen, setIsOpen] = useState(false)
    const {handleSubmit, register, reset} = useForm()
    const [cName, setClassName] = useState('jsGridView')

    useEffect(() => {
        axios("https://611675aa1c592d0017bb7f09.mockapi.io/galllery")
            .then(({data}) => setProjects(data))
    }, [])

    const handleChange = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "gallery")
        axios.post("https://api.cloudinary.com/v1_1/assault/upload", formData)
            .then(({data}) => setImage(data))
    }

    const onSubmit = (data) => {
        data.foto = image.url
        axios.post("https://611675aa1c592d0017bb7f09.mockapi.io/galllery", data)
            .then(({data}) => {
                setProjects([...projects, data])
                setIsOpen(false)
                reset()
            })
    }

    const closeModal = () => {
        setIsOpen(false)
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <main>
            <div className="container">
                <h1>Projects</h1>
                <div className="row">
                    <h3>List pojects</h3>
                    <button className="button" onClick={() => setIsOpen(true)}>Add pojects</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style = {customStyles}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <div className="title">Welcome</div>
                            <div className="subtitle">Let's create your project</div>
                            <div className="input-container ic1">
                                <label htmlFor="foto" className="placeholder">Add image</label>
                                <input id="foto" className="input-file" type="file"
                                       {...register("foto", {required: true})} onChange={handleChange}/>
                            </div>
                            <div className="input-container ic2">
                                <label htmlFor="title" className="placeholder">Title</label>
                                <input id="title" className="input" type="text"
                                       {...register("title", {required: true})}/>
                            </div>
                            <div className="input-container ic2">
                                <label htmlFor="author" className="placeholder">Author</label>
                                <input id="author" className="input" type="text"
                                       {...register("author", {required: true})}/>
                            </div>
                            <div className="input-container ic2">
                                <label htmlFor="start" className="placeholder">Start project</label>
                                <input id="start" className="input" type="date"
                                       {...register("start", {required: true})}/>
                            </div>
                            <div className="input-container ic2">
                                <label htmlFor="end" className="placeholder">Start project</label>
                                <input id="end" className="input" type="date"
                                       {...register("end", {required: true})}/>
                            </div>
                            <button type="submit" className="submit btn-add">Add date project</button>
                            <button type="button" className="submit"  onClick={() => closeModal()}>Close</button>
                        </form>
                    </Modal>
                </div>
                <div className="row list-large">
                    <button className="btn" onClick={() => setClassName('jsListView')}><FontAwesomeIcon icon={faList} /></button>
                    <button onClick={() => setClassName('jsGridView')}><FontAwesomeIcon icon={faThLarge} /></button>
                </div>
                <div className="row">
                    <div className={cName}>
                        {
                            projects.map(item =>
                                <div className="col-4" key={item.id}>
                                    <div className="about">
                                        <img src={item.foto} alt="foto"/>
                                        <div className="desc">
                                            <h3>{item.title}</h3>
                                            <p>{item.start} - {item.end}</p>
                                            <p>{item.author}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Projects;