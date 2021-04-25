import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';



const TableComponent = () => {
  const [data,setData] = useState([])
  
  const onClickHandler =  () => {
    axios.get('https://sheet.best/api/sheets/0e559cc0-9dac-4f1c-a921-85789816f72e')
    .then(response => {
      setData(response.data)
    })
  }

  const onDeleteHandler = (id) => {
    fetch("https://sheet.best/api/sheets/0e559cc0-9dac-4f1c-a921-85789816f72e/"+id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((dataItem) => {
        const temp = [...data];
        temp.splice(id, 1);
        setData(temp);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(()=>{
  },[])

return(
  <div align="center">
  <Button color="green" type='submit' onClick={onClickHandler}>Get Values</Button>
    <Table basic='very' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Age</Table.HeaderCell>
          <Table.HeaderCell>Salary</Table.HeaderCell>
          <Table.HeaderCell>Hobby</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {data.map((item,index)=>{
        return(
        <Table.Row>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.age}</Table.Cell>
        <Table.Cell>{item.salary}</Table.Cell>
        <Table.Cell>{item.hobby}</Table.Cell>
        <Button color="red" type='submit' onClick={() => onDeleteHandler(index)}>Delete</Button>

      </Table.Row>)

      })

      }
      
        
      </Table.Body>
    </Table>
    </div>)
}
  
  export default TableComponent;