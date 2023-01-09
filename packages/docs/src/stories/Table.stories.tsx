import { Box, Table, TableProps, Text } from '@ewmapp/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Table',
  component: Table,

  decorators: [
    Story => {
      return <Box>{Story()}</Box>
    }
  ]
} as Meta<TableProps>

export const Primary: StoryObj<TableProps> = {}

export const Secondary: StoryObj<TableProps> = {
  args: {
    children: (
      <>
        <tr>
          <th>
            <Text size="sm">First Name</Text>
          </th>
          <th>
            <Text size="sm">Last Name</Text>
          </th>
          <th>
            <Text size="sm">Age</Text>
          </th>
        </tr>
        <tr>
          <td>
            <Text size="sm">Edmar</Text>
          </td>
          <td>
            <Text size="sm">Cruz</Text>
          </td>
          <td>
            <Text size="sm">45</Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text size="sm">Lucas</Text>
          </td>
          <td>
            <Text size="sm">Alves da Cruz</Text>
          </td>
          <td>
            <Text size="sm">19</Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text size="sm">Adriane</Text>
          </td>
          <td>
            <Text size="sm">Alves</Text>
          </td>
          <td>
            <Text size="sm">43</Text>
          </td>
        </tr>
      </>
    )
  }
}
