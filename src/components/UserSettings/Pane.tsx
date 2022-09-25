const Pane = ({ item }: { item?: string }) => {
    switch (item) {
        case 'account':
            return <>Account view</>
        case 'settings':
            return <>Settings view</>

        default:
            return <></>
    }
}

export default Pane
