import { AgGridReact } from 'ag-grid-react'
import type { ColDef, ColGroupDef } from 'ag-grid-community'

const Grid = (props: {
  filterColumns: (ColDef<any, any> | ColGroupDef<any>)[] | null | undefined
  data: any[] | null | undefined
}) => {
  return (
    <div>
      <AgGridReact
        defaultColDef={{ floatingFilter: true }}
        columnDefs={props.filterColumns}
        rowData={props.data}
        suppressMenuHide={false}
      />
    </div>
  )
}

export default Grid
