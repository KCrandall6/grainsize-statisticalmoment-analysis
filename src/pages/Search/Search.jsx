import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

const Search = () => {

  const [results, setResults] = useState([])

  // To complete a search query, create a Solr instance and adjust query and query endpoint to your needs
  const queryResearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    fetch(`${process.env.SOLR_URL}select?q=${query}&wt=json`)
  .then((res) => res.json())
  .then((res) => setResults(res.response.docs))
  }
  
  return (
    <div className='d-flex mx-auto flex-column justify-content-center text-center p-5' style={{ maxWidth: '600px' }}>
      <div>
        <h1>Search area</h1>
        <Form onSubmit={queryResearch}>
        <Form.Group className="mb-3 mx-auto text-center" controlId="formBasicEmail">
          <p className="m-4">Search within a collection of curated papers about the topic of sand grain analysis. The curated list is by no means the only list, but is at least a good starting point</p>
          <br/>
          <p className="m-4"><em>To enable search, download the repo and create a local Solr instance following the instructions. Update the queryResearch variable with the correct query and endpoint as needed</em></p>
          <Form.Control className="mx-auto" name="query" placeholder="Search Papers" style={{ maxWidth: '300px' }}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Search me
        </Button>
        </Form>
      </div>
      <div>
        {results.length > 1 ? <h1>results</h1> : null}
      </div>
    </div>
  )
};

export default Search;