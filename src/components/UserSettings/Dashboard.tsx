import { useRouter } from 'next/router'

import Menu from './Menu'
import Pane from './Pane'

type menuItem = {
    title: string
    order: number
}

export type menuConfig = Array<menuItem>

const dashboardConfig: menuConfig = [
    {
        title: 'account',
        order: 1,
    },
    {
        title: 'settings',
        order: 2,
    },
]

const Dashboard = () => {
    const {
        query: { setting },
    } = useRouter()
    const titles = dashboardConfig.map(({ title }) => title)
    return (
        <>
            <Menu activeTitle={setting} items={titles} />
            <Pane item={setting} />
        </>
    )
}

export default Dashboard
