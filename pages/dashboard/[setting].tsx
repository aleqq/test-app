import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import Dashboard from '../../src/components/UserSettings/Dashboard'

const allowedRoutes = ['account', 'settings']

export const getServerSideProps: GetServerSideProps<{
    active?: string
}> = async ({ params }) => {
    if (typeof params?.setting !== 'string')
        return {
            notFound: true,
        }

    if (allowedRoutes.includes(params.setting))
        return {
            props: { active: params.setting },
        }

    return {
        notFound: true,
    }
}

const Setting = ({
    active,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <p>Post: {active}</p>
            <Dashboard />
        </>
    )
}

export default Setting
