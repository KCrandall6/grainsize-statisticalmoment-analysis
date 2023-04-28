import React from 'react';
import { Form, Button } from 'react-bootstrap'

const Search = () => {

  const queryResearch = (event) => {
    event.preventDefault();
    fetch('grainsizeResearch.json')
    .then((res) => res.json())
    .then((res) => console.log('res', res))
    console.log('test')
  }
  

  return (
    <div className='d-flex mx-auto flex-column justify-content-center text-center p-5' style={{ maxWidth: '600px' }}>
      <h1>Search area</h1>
      <Form onSubmit={queryResearch}>
      <Form.Group className="mb-3 mx-auto text-center" controlId="formBasicEmail">
        <p className="m-4">Search within a collection of curated papers about the topic of sand grain analysis. The curated list is by no means the only list, but is at least a good starting point</p>
        <Form.Control className="mx-auto" type="email" placeholder="Search Papers" style={{ maxWidth: '300px' }}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    </div>
  )
};

export default Search;