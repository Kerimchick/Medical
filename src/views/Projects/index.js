import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faThLarge } from '@fortawesome/free-solid-svg-icons'
import Modal from "react-modal"
import {useForm} from "react-hook-form"

const Projects = () => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const { register, handleSubmit, reset, formState:{errors} } = useForm()
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
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="form">
                                    <label htmlFor="image"className="label-position">Add image</label>
                                    <input type="file" id="image" autoComplete="off" name="image"
                                           {...register("image", {required: true})}/>
                                    {errors.name && <div>Please enter information using</div>}
                                </div>
                                <div className="form">
                                    <label htmlFor="title"className="label-position">Title</label>
                                    <input type="text" id="title" autoComplete="off" name="title"
                                           {...register("title", {required: true})}/>
                                    {errors.phone && <div>Please enter information using</div>}
                                </div>
                                <div className="form">
                                    <label htmlFor="author"className="label-position">Author</label>
                                    <input type="text" id="author" autoComplete="off" name="author"
                                           {...register("author", {required: true})}/>
                                    {errors.contract && <div>Please enter information using</div>}
                                </div>
                                <div className="form">
                                    <label htmlFor="start"className="label-position">Start project</label>
                                    <input type="date" id="start"autoComplete="off" name="start"
                                           {...register("start", {required: true})}/>
                                    {errors.paid && <div>Please enter information using</div>}
                                </div>
                                <div className="form">
                                    <label htmlFor="end"className="label-position">End project</label>
                                    <input type="date" id="end" name="end"
                                           {...register("end", {required: true})}/>
                                    {errors.paid && <div>Please enter information using</div>}
                                </div>
                            </div>
                            <div>
                                <button type="button" className="button-close-form" onClick={() => closeModal()}>Close</button>
                                <button type="submit">Add date project</button>
                            </div>
                        </form>
                    </Modal>
                </div>
                <div className="row list-large">
                    <button className="btn"><FontAwesomeIcon icon={faList} /></button>
                    <button className="btn"><FontAwesomeIcon icon={faThLarge} /></button>
                </div>
                <div className="row">
                    <div className="col-4">

                    </div>
                </div>

            </div>
        </main>
    );
};

export default Projects;