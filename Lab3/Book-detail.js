import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

    function RenderBook({book}) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={book.image} alt={book.name} />
                        <CardBody>
                            <CardTitle><h1>{book.name}</h1></CardTitle>
                            <CardText>{book.description_of_book}</CardText>
			    <div className='line'></div>
			    <CardText><h4>Author: </h4>{book.author}</CardText>
                            <CardText><h4>Genre: </h4>{book.genre}</CardText>
                            <CardText><h4>Publishing house: </h4>{book.publishing_house}</CardText>							
                        </CardBody>
                    </Card>
                </div>
            )
        }

    function RenderComments({comments, addComment, bookId}){
        if (comments != null) {

            let list = comments.map((comments)=>{

                return(
                    <li key={comments.id} >
                        <div>
                            <p>{comments.comment}</p>
                            <p>--{comments.reader},
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                        </div>
                    </li>

                )
            })

            return(
                    <div className="col-12 col-md-5 m-1">
                        <ul className="list-unstyled">
                            {list}
                        </ul>
                        <CommentForm bookId={bookId} addComment={addComment}>

                        </CommentForm>
                    </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    const BookDetail = (props) => {
        
        if (props.book != null) {
            return(
                <div className="container">
                    <div className="row">
                            <RenderBook book={props.book} />
							<Button onClick={() => history.push('{book.file}')} className="myBtn1">READ</Button>
							if (this.props.logged_in) {
								<Button onClick={() => history.push('/mylibrary/${book.pk}')} className="myBtn">ADD TO LIBRARY</Button>
						        else {
								<Button onClick={() => history.push('/login')} className="myBtn">ADD TO LIBRARY</Button>
							 }
                            <RenderComments 
                                comments={props.comments}
                                addComment={props.addComment}
                                bookId={props.book.id}
                            />
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }

    }


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {

        this.toggleModal();

        console.log(JSON.stringify(values));
        this.props.addComment(this.props.bookId, values.reader=request.user, values.comment);

    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}>ADD A REVIEW</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>ADD A REVIEW</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="comment"  md={12}>Say something about the book</Label>
                                <Col  md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" resize="none" rows="6" className="form-control" validators={{ required }} />
                                    <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
                                </Col>
                            </Row>

                            <Button type="submit" value="submit" color="primary">ADD A REVIEW</</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}



export default BookDetail
