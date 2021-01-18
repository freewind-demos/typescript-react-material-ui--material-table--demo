import React from 'react'
import MaterialTable from 'material-table'

export default function MyList() {
  return <div style={{maxWidth: '100%'}}>
    <MaterialTable
      columns={[
        {title: 'Name', field: 'name'},
        {title: 'Sur Name', field: 'surname'},
        {title: 'Birth Year', field: 'birthYear', type: 'numeric'},
        {title: 'Birth City', field: 'birthCity', lookup: {34: 'AAA', 63: 'BBB'}}
      ]}
      data={[{name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63}]}
      title="Demo Title"
    />
  </div>
}
