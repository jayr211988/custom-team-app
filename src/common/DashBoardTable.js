"use client"
// LIBRARY
import { useEffect, useState } from 'react';
// COMPONENTS
import {Heading, Text, Table,TextFieldInput, Separator} from '@radix-ui/themes';
import numberWithCommas from '@/utils/numberWithComma';
import LoadingTable from './LoadingTable';
// API
import { getContracts } from '@/api/GetContract';


export default function DashBoardTable({isPagination}) {
  
  const [contracts, setContracts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
 
  useEffect(() => {
    getContracts({isPagination,setContracts,setLoading,setHasError});
  }, [])

  return (
    <LoadingTable
      isLoading={isLoading}
      hasError={hasError}
      isEmpty={contracts.length < 0}
      DataComponent={()=>
        <> 
          <div className="flex justify-between">
            <Heading>Demo Sample List</Heading>
            <TextFieldInput 
              placeholder="Search by contract number" 
              style={{width: '200px'}}
            />
          </div>
          <Separator color='transparent' size={2} style={{height: '20px', background: 'transparent'}}/>
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Contract Number</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Tenant Type</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Branch Code</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Tenant</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Contract Date</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>SAP Contract Number</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
              {contracts.map((contract, i) => (
                  <Table.Row key={i}>
                  <Table.RowHeaderCell>{contract['contract_no']}</Table.RowHeaderCell>
                  <Table.Cell>{contract['tenant_type']}</Table.Cell>
                  <Table.Cell>{contract['branch_code']}</Table.Cell>
                  <Table.Cell>{contract['tenant_type_ri']}</Table.Cell>
                  <Table.Cell>{contract['contract_active_on_date']} </Table.Cell>
                  <Table.Cell>{contract['sap_contract_no']}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
          <div className='pagination-container flex justify-between'>
            <Text as='div' >Total Contracts: {numberWithCommas(contracts.length)}</Text>
            {
              isPagination && <div>
                <span className='pagination-btn' onClick={()=>{console.log('prevs page');}}>Prevs</span> | 
                <span className='pagination-btn' onClick={()=>{console.log('next page');}}> Next</span>
              </div>
            }
          </div>
        </>
        }
    />
  )
}
