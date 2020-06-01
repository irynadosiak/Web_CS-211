import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {
	if (this.props != Null) {
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
				<div className="middle">
					<Button onClick={() => history.push('/book-detail/${book.pk}')} className="myBtn1">View</Button>
				</div>				
				<span><p className='right '>
               			<CardTitle>{item.name}</CardTitle>
			        {{ item.upload_date }}  </p></span>
                </CardBody>
            </Card>}
	);
	else{
		<h4>Please select <a className="link"  to='/books'> books </a> to add to your library</h4>
	}		

}

function reader_book(props) {
    return(
	<Row>
		<Col xs={12}>
			<Row start="xs">
				<Col xs={6}>
					<h5> {props.reader} </h5>
					<div className='line'></div>
					<h5> {props.email} </h5>	
					<h5> {props.age} years old</h5>						
				</Col>
			</Row>
		</Col>
	</Row>	
	<Row>
		<Col xs={12}>
			<Row end="xs">
			  <h3>Your own library:</h3>
				<Col xs={6}>
					<div className="container">
						<div className="row align-items-start">
							<div className="col-12 col-md m-1">
								<RenderCard 
									item={props.reader_book}  
								/>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Col>
	</Row>		
    );
}

export default reader_book;
