import { TableItem } from './Table-item.component'
import { TableRoot } from './Table-root.component'
import { TableTitle } from './Table-title.component'

export const Table = Object.assign(TableRoot, {
  Item: TableItem,
  Title: TableTitle
})
