import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
				<div className="middle">
					<Button onClick={() => history.push('/book-detail/${book.pk}')} className="myBtn1">View</Button>
				</div>				
                <CardTitle>{item.name}</CardTitle>
                </CardBody>
            </Card>
       );

}

function Books(props) {
    return(
	<Row>
		<Col xs={12}>
			<Row start="xs">
				<Col xs={6}>
					<h5> Genre </h5>
					<div className='line'></div>
						<Card id="Genre">
							<CardBody>
								<CardTitle>{item.name}</CardTitle>	
							</CardBody>
						</Card>	
						<div className="search-container">
								<div className="input">
									<input type="text" id="myInput_author" onKeyUp={this.Search_author}  placeholder="Search..">
										<form><a className='color_search'>	
											<i className="fa fa-search"></a></i>
										</form>
									</input>
								</div>
						</div>
					<h5> Author </h5>
					<div className='line'></div>
						<Card id="Author">
							<CardBody>
								<CardTitle>{item.name}</CardTitle>	
							</CardBody>
						</Card>	
						<div className="search-container">
								<div className="input">
									<input type="text" id="myInput_genre" onKeyUp={this.Search_genre}  placeholder="Search..">
										<form><a className='color_search'>	
											<i className="fa fa-search"></a></i>
										</form>
									</input>
								</div>
						</div>						
				</Col>
			</Row>
		</Col>
	<Row>	
	<Row>
		<Col xs={12}>
			<Row end="xs">
			  <h5> Choose a book to read: </h5>
				<Col xs={6}>
					<div className="container">
						<div className="row align-items-start">
							<div className="col-12 col-md m-1">
								<RenderCard 
									item={props.book}  
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

export default Books;